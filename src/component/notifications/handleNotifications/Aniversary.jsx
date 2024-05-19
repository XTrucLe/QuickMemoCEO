
// Component để hiển xử lý dữ liệu và xuất ra đối tượng thông báo
const EmployeeAnniversary = ({ employee }) => {

    const result = employee.map(employee => {
        const { FullName, Department, AnniversaryDate } = employee;
        //fortmat date
        const anniversary = new Date(AnniversaryDate);
        const anniversaryDate = `${anniversary.getDate()}/${anniversary.getMonth()+1}/${anniversary.getFullYear()}`;

        // Xử lý ngày hiện tại
        const today = new Date();
        const todayString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        console.log(anniversary.getMonth(), anniversary.getDate())
        const daysDifference = Math.floor(anniversary.getDate() - today.getDate());


        const upcomingMessage = daysDifference === 0 ? "today" :
            daysDifference === 1 ? "tomorrow" :
                `in the next ${daysDifference} days`;
        return {
            title: "Upcoming Work Anniversaries",
            message: `Employee ${FullName} from department ${Department} has an upcoming work anniversary ${upcomingMessage}. Today's date is ${todayString}.`,
            anniversaryDate,
            FullName,
            Department
        };
    });

    return result;
};

export default EmployeeAnniversary;
