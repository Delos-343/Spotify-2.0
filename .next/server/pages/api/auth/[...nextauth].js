"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 20:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

// NAMESPACE OBJECT: ./lib/spotify.js
var lib_spotify_namespaceObject = {};
__webpack_require__.r(lib_spotify_namespaceObject);
__webpack_require__.d(lib_spotify_namespaceObject, {
  "Z": () => (LOGIN_URL)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/spotify"
const spotify_namespaceObject = require("next-auth/providers/spotify");
var spotify_default = /*#__PURE__*/__webpack_require__.n(spotify_namespaceObject);
;// CONCATENATED MODULE: external "spotify-web-api-node"
const external_spotify_web_api_node_namespaceObject = require("spotify-web-api-node");
var external_spotify_web_api_node_default = /*#__PURE__*/__webpack_require__.n(external_spotify_web_api_node_namespaceObject);
;// CONCATENATED MODULE: ./lib/spotify.js

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    // "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read", 
].join(",");
const params = {
    scope: scopes
};
const queryParamString = new URLSearchParams(params).toString();
const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;
const spotifyApi = new (external_spotify_web_api_node_default())({
    clientId: "3d04d69651e64f23a801a677623e0ea6",
    clientSecret: "306e3021dc1048f085367eb27bc176c8"
});
/* harmony default export */ const spotify = ((/* unused pure expression or super */ null && (spotifyApi)));


;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



async function refreshAccessToken(token) {
    try {
        lib_spotify_namespaceObject.spotifyApi.setAccessToken(token.accessToken);
        lib_spotify_namespaceObject.spotifyApi.setRefreshToken(token.refreshToken);
        const { body: refreshedToken  } = await lib_spotify_namespaceObject.spotifyApi.refreshAccessToken();
        console.log("REFRESHED TOKEN IS ", refreshedToken);
        var _refresh_token;
        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
            // 1 hour as 3600 ms => returns from the Spotify API
            refreshToken: (_refresh_token = refreshedToken.refresh_token) !== null && _refresh_token !== void 0 ? _refresh_token : token.refreshToken
        };
    } catch (error) {
        console.error(error);
        return {
            ...token,
            error: "RefreshAccessTokenError"
        };
    }
}
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    // Configure one or more authentication providers
    providers: [
        spotify_default()({
            clientId: "3d04d69651e64f23a801a677623e0ea6",
            clientSecret: "306e3021dc1048f085367eb27bc176c8",
            authorization: LOGIN_URL
        })
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt ({ token , account , user  }) {
            // Initial sign in
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000
                };
            }
            // Return access token if the previous token hasn't expired [yet]
            if (Date.now() < token.accessTokenExpires) {
                console.log("EXISTING ACCESS TOKEN IS VALID");
                return token;
            }
            // Refresh the access token if it has expired
            console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...");
            return await refreshAccessToken;
        },
        async session ({ session , token  }) {
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.username = token.username;
            return session;
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(20));
module.exports = __webpack_exports__;

})();