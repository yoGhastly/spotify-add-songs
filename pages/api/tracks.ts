
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPlaylistTracks } from '../../lib/spotify'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const responseTracks = await getPlaylistTracks()

  if (responseTracks.status === 204 || responseTracks.status > 400) {
    return res.status(200).json({ message: 'Playlist not found' })
  }

  const data = await responseTracks.json()
  return res.status(200).json(data)
}
