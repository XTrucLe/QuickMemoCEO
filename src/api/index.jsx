
const domain ='http://localhost'
const port ='8081'
const path=`${domain}:${port}`
export const ListAPI={
    PR_employeeAPI:`${path}/home`,
    HR_employeeAPI:`${path}/home`,
    DashboardAPI:`${path}`,//? Waiting Conection
    MGR_Update:`${path}/updateinfo`,
    DeleteAPI:`${path}/deleteEmployee`,

    MGR_GetAll:`${path}`,//? Waiting Conection
    CreateEmployee:`${path}/createEmployee`,
}
export const EmployeeAPI={
    getEmployee:`${path}/employee`,
}
export const Payroll={
    allEmployee:`${path}/home`,
}
export const Manage={
    employeeInfo:`${path}/employeeInfo`,
    delete:`${path}/deleteEmployee`,
}
export const notification={
    aniversary:`${path}/aniversary`,
    birthDay: `${path}/birthday`,
    benefit_plant: `${path}/effectplant`,
    exceeded_vacation:`${path}/more_vacation`,
}

export const create={
    personal:`${path}/`,
    employment:`${path}/employment`,
    working:`${path}/working`,
    payroll:`${path}/`,
}