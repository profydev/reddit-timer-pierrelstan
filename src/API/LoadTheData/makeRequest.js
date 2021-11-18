import axios from 'axios';

async function makeRequest(url, source, after) {
  try {
    const { data } = !after ? await axios.get(url, {
      cancelToken: source.token,
    }) : await axios.get(`${url}&after=${after}`, {
      cancelToken: source.token,
    });
    return data;
  } catch (err) {
    return err;
  }
}

export default makeRequest;
