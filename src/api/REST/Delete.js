import axios from "axios";

export const DeleteData= async(url, id)=>{
    try {
        const response = await axios.delete(`${url}/${id}`);
        
        return response.status >= 200 && response.status < 300
    } catch (error) {
        return false;
    }
    
}