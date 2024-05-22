import axios from "axios";

export const DeleteData = async ({ url, id }) => {
    try {
        const response = await axios.delete(`${url}/${id}`);
        if (response.status >= 200 && response.status < 300)
            return true
        else
            return false;
    } catch (error) {
        console.error(error)
        return false;
    }

}