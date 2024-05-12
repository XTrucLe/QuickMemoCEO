
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
    employeeInfo:`${path}/home`,
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
    information:`${path}/`
}