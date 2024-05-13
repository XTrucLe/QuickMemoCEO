import axios from "axios";

export const PutData = async ({url, data}) => {
    try {
        const response = await axios.put(url, data);

        // Kiểm tra nếu mã trạng thái nằm trong khoảng 200 - 299 (thành công)
        if (response.status >= 200 && response.status < 300) {
            return true; // Trả về true nếu thành công
        } else {
            return false; // Trả về false nếu không thành công
        }
    } catch (error) {
        console.error('Put data error:', error);
        return false; // Trả về false nếu có lỗi xảy ra
    }
}