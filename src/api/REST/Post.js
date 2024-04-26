import axios from 'axios';
import ShowNotification from '../../component/notifications/ShowNotifocation';

export const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    console.log('Response from server:', response.data);
    ShowNotification({
        message: 'Successfull',
        description: 'Add new information is valid',
        type: 'success',
        duration:1,
      })
  } catch (error) {
    ShowNotification({
        message: 'Error',
        describe: "Add new information is invalid",
        type: 'error',        
    })
  }
};