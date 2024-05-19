export const VacaitionExceeded = ({ employee }) => {
    const result = employee.map(employee => {
        const { CURRENT_FIRST_NAME, CURRENT_LAST_NAME, TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH } = employee;
        const AccumulatedVacationDays = TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH,
            FullName = `${CURRENT_FIRST_NAME} ${CURRENT_LAST_NAME}`,
            today = new Date(), notiDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        return {
            title: "Exceeded Vacation Threshold",
            message: `Employee ${FullName} has accumulated ${AccumulatedVacationDays} vacation days, exceeding the threshold of 7 days.`,
            FullName,
            notiDate
        };
    }); // Lọc ra các thông báo không rỗng

    return result;

}