export const handleActionClick = (record, action, setSelectedEmployee, setModalType) => {
    setSelectedEmployee(record);
    const actionLowerCase = action.toLowerCase();
  
    switch (actionLowerCase) {
      case 'edit':
        setModalType('edit');
        console.log('Edit button clicked:', record);
        break;
      case 'delete':
        setModalType('delete');
        console.log('Delete button clicked:', record);
        break;
      case 'row':
        setSelectedEmployee(record);
        setModalType('employee');
        console.log('Row clicked:', record);
        break;
      default:
        // Do nothing
        break;
    }
  };