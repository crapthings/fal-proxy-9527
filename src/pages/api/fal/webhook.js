import { nanoid } from 'nanoid'
import axios from 'axios'
import client from '@/lab/oss'

export default async function handler (req, res) {
  console.log('=== Webhook called ===')
  console.log('Method:', req.method)
  console.log('URL:', req.url)
  console.log('Headers:', JSON.stringify(req.headers, null, 2))
  console.log('Body:', req.body)
  console.log('Params:', req.query)
  console.log('========================')

  if (req.body.status === 'OK') {
    try {
      const imageUrl = req.body.payload.video.url
      const response = await fetch(imageUrl)
      const buffer = await response.arrayBuffer()

      const filename = `video/${nanoid(24)}.mp4`
      await client.put(filename, Buffer.from(buffer))

      await axios.post(process.env.WEBHOOK_CALLBACK_URL, {
        id: req.query.id,
        userId: req.query.userId,
        video_filename: filename
      })

      console.log('Successfully uploaded to OSS:', filename)
    } catch (error) {
      console.error('Error uploading to OSS:', error)
    }
  }

  res.status(200).json({ message: 'Webhook received', timestamp: new Date().toISOString() })
}
