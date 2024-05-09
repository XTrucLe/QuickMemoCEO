import axios from "axios";

export const PutData = async (url, data) => {
    try {
        const response = await axios.put(url, data);

       return response.status >= 200 && response.status < 300
    } catch (error) {
        console.error('Put data eror:', error);
        return false;
    }
}