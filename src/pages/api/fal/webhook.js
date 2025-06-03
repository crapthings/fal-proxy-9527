export default async function handler (req, res) {
  console.log('=== Webhook called ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Body:', req.body);
  console.log('========================');

  res.status(200).json({ message: 'Webhook received', timestamp: new Date().toISOString() });
}
