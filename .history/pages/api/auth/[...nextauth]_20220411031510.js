import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { LOGIN_URL, spotifyApi } from "../../../lib/spotify"

async function refreshAccessToken(token) {

    try {

        spotifyApi.setAccessToken(token.accessToken)
        spotifyApi.setRefreshToken(token.refreshToken)

        const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    } catch (error) {

        console.error(error)

        return {
            ...token,
            error: "RefreshAccessTokenError",
        }
    }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, account, user }){
        
        // Initial sign in
        if(account && user) {

            return {
                ...token,
                accessToken: account.access_token,
                refreshToken: account.refresh_token,
                username: account.providerAccountId,
                accessTokenExpires: account.expires_at * 1000,  // handle expiry times at in milliseconds (ms) : 1 second
            }
        }

        // Return access token if the previous token hasn't expired [yet]
        if(Date.now() < token.accessTokenExpires) {

            return token
        }

        // Refresh the access token if it has expired
        console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...")

        return await refreshAccessToken(token)
    }
  }
})