// pages/api/subscribe.js

import axios from 'axios';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = API_KEY.split('-')[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const response = await axios.post(
      url,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        message: `There was an error subscribing to the newsletter. Try again later.`,
      });
    }

    return res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
