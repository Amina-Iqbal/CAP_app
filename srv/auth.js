const axios = require('axios');
const qs = require('querystring');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const TOKEN_URL = process.env.TOKEN_URL;

async function getOAuthToken() {
  try {
    const response = await axios({
      method: 'post',
      url: TOKEN_URL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      })
    });

    return response.data.access_token;

  } catch (error) {
    console.error('[OAuth] Token Error:', error.response?.data || error.message);
    throw new Error('Failed to get OAuth token');
  }
}

module.exports = { getOAuthToken };
