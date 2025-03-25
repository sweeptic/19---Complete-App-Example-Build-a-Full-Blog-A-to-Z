// /api/content

function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message, name } = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422), json({ message: 'Invalid input.' });
      return;
    }

    //   Store it in a database
    const newMessage = {
      email,
      message,
      name,
    };

    console.log('newMessage', newMessage);
    res.status(201).json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
