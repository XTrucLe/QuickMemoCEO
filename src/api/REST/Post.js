import axios from 'axios';

export const postData = async ({ url, data }) => {
  try {
    const { status } = await axios.post(url, data);
    return status >= 200 && status < 300;
  } catch (error) {
    console.error(error);
    return false;
  }
};