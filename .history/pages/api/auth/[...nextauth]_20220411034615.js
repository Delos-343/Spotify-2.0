import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { LOGIN_URL, spotifyApi } from "../../../lib/spotify"

async function refreshAccessToken(token) {

    try {

        spotifyApi.setAccessToken(token.accessToken)
        spotifyApi.setRefreshToken(token.refreshToken)

        const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

        console.log("REFRESHED TOKEN IS ", refreshedToken)

        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
                // 1 hour as 3600 ms => returns from the Spotify API
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
        }

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
                accessTokenExpires: account.expires_at * 1000,
                    // handle expiry times at in milliseconds (ms) : 1 second
            }
        }

        // Return access token if the previous token hasn't expired [yet]
        if(Date.now() < token.accessTokenExpires) {
            console.log("EXISTING ACCESS TOKEN IS VALID")
            return token
        }

        // Refresh the access token if it has expired
        console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...")
        return await refres,
        
        async this.session({ session, token }) {
            
            this.session.user.accessToken = token.accessToken
            this.session.user.refreshToken = token.refreshToken
            this.session.user.username = token.username

            return session
        }
    }
  }
})