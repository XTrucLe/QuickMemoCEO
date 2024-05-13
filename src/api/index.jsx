
const domain ='http://localhost'
const port ='8081'
const path=`${domain}:${port}`
export const ListAPI={
    PR_employeeAPI:`${path}/home`,
    DashboardAPI:`${path}`,//? Waiting Conection
    DeleteAPI:`${path}/deleteinfo`,

    MGR_GetAll:`${path}`,//? Waiting Conection
}
export const EmployeeAPI={
    getEmployee:`${path}/allEmployment`,
}
export const payroll={
    allEmployee:`${path}/allPayroll`,
}
export const Manage={
    employeeInfo:`${path}/allInformation`,
    delete:`${path}/deleteEmployee`,
}
export const notification={
    aniversary:`${path}/aniversary`,
    birthDay: `${path}/birthday`,
    benefit_plant: `${path}/effectplant`,
    exceeded_vacation:`${path}/more_vacation`,
}

export const create={
    personal:`${path}/creates_personal`,
    employment:`${path}/employment`,
    working:`${path}/employent_working_time`,
    payroll:`${path}/creates_payrate`,
}
export const update={
    personal:`${path}/update_personal`,
    employment:`${path}/update_employment`,
    JobHistory:`${path}/update_JobHistory`,
    working:`${path}/update_employment_working_time`,
    benefit:`${path}/update_benefit`,
    payrate:`${path}/update_payrate`,
}