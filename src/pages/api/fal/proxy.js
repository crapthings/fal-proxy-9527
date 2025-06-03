import { fal } from '@fal-ai/client'

export default async function handler (req, res) {
  try {
    const { model } = req.query
    const { body } = req

    console.log('model', model)
    console.log('body', body)

    const resp = await fal.queue.submit(model, body)

    res.status(200).json(resp)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
