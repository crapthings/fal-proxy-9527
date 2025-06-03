export default async function handler (req, res) {
  const { body } = req

  console.log('fal proxy webhook', body)

  res.status(200).json({ message: 'Webhook received' })
}
