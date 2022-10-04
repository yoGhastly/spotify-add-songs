import { profile } from 'console'
import querystring from 'query-string'

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const GET_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${process.env.SPOTIFY_PLAYLIST_ID}`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })
  return response.json()
}

export const getPlaylist = async () => {
  const { access_token } = await getAccessToken()
  console.log(access_token)
  return fetch(GET_PLAYLIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getPlaylistTracks = async () => {
  const { access_token } = await getAccessToken()
  return fetch(`${GET_PLAYLIST_ENDPOINT}/tracks`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
