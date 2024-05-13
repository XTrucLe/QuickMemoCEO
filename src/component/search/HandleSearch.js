

export const HandleSearch = ({ searchText, data }) => {
    if (searchText.length === 0)
        return data
    const result = data.filter((employee) => {
        // Check employee and filter
        if (employee) {
            console.log(employee)
            // Check if 'First Name' and 'Last Name' or 'Employee Number' exist and contain searchText
            var firstNameMatch = employee['CURRENT_FIRST_NAME'] && employee['CURRENT_FIRST_NAME'].toLowerCase().includes(searchText.toLowerCase());
            var lastNameMatch = employee['CURRENT_LAST_NAME'] && employee['CURRENT_LAST_NAME'].toLowerCase().includes(searchText.toLowerCase());
            var NoEmployeeMatch = employee['EMPLOYMENT_ID'] && employee['EMPLOYMENT_ID'].toString().includes(searchText);
            return firstNameMatch || lastNameMatch || NoEmployeeMatch
        }
        return false;
    });
    return result
}