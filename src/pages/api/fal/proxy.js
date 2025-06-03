import { fal } from '@fal-ai/client'

export default async function handler (req, res) {
  const { model } = req.query
  const { body } = req

  console.log('model', model)
  console.log('body', body)

  const resp = await fal.queue.submit(model, body)

  res.status(200).json(resp)
}
