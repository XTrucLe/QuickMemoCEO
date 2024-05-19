import axios from "axios";

export const PutData = async ({url, data, id}) => {
    try {
        const response = await axios.put(`${url}`, data);
        console.log(response)
        // Kiểm tra nếu mã trạng thái nằm trong khoảng 200 - 299 (thành công)
        if (response.status >= 200 && response.status < 300) {
            return true; // Trả về true nếu thành công
        } else {
            // Trả về false nếu không thành công và thông báo lỗi cụ thể
            console.error('Put data error:', response.statusText);
            return false;
        }
    } catch (error) {
        // Xử lý lỗi trong trường hợp có lỗi xảy ra khi gửi request
        console.error('Put data error:', error);
        return false;
    }
}