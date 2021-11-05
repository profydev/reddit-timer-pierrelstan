import axios from 'axios';

async function makeRequest(url, after) {
  try {
    const { data } = !after ? await axios.get(url) : await axios.get(`${url}&after=${after}`);
    return data;
  } catch (err) {
    return err;
  }
}

export default makeRequest;
