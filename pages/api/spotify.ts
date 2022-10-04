import type { NextApiRequest, NextApiResponse } from 'next'
import { getPlaylist } from '../../lib/spotify'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getPlaylist()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ message: 'Playlist not found' })
  }
  const data = await response.json()
  return res.status(200).json(data)
}
