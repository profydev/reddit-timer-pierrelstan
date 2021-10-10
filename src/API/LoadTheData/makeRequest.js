import axios from 'axios';

async function makeRequest(url, after) {
  try {
    const results = !after ? axios.get(url) : axios.get(`${url}&after=${after}`);
    return results;
  } catch (err) {
    return err;
  }
}

export default makeRequest;
