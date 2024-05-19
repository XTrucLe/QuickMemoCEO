import axios from 'axios';

export const postData = async ({ url, data }) => {
  try {
    const response = await axios.post(url, data);
    console.log(response);
    if (response.status >= 200 && response.status < 300)
      return true
    else
      return false
  } catch (error) {
    console.error(error);
    return false
  }
};