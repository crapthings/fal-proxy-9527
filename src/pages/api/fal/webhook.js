export default async function handler (req, res) {
  const { body } = req
  const { event, data } = body

  console.log(body)

  res.status(200).json({ message: 'Webhook received' })
}
