

export const HandleSearch = ({ searchText, data }) => {
    if (searchText.length === 0)
        return data
    const result = data.filter((employee) => {
        // Check employee and filter
        if (employee) {
            // Check if 'First Name' and 'Last Name' or 'Employee Number' exist and contain searchText
            var firstNameMatch = employee['First Name'] && employee['First Name'].toLowerCase().includes(searchText.toLowerCase());
            var lastNameMatch = employee['Last Name'] && employee['Last Name'].toLowerCase().includes(searchText.toLowerCase());
            var NoEmployeeMatch = employee['Employee Number'] && employee['Employee Number'].toString().includes(searchText);
            return firstNameMatch || lastNameMatch || NoEmployeeMatch
        }
        return false;

    });
    return result
}