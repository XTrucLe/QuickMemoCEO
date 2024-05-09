import axios from 'axios';

  export const postData = async ({url, data}) => {
    try {
      const response = await axios.post(url, data);

      return response.status >= 200 && response.status < 300;
    } catch (error) {
      console.error(error);
      return false;
    }
  };