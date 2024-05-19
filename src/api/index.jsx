const domain ='http://localhost'
const port ='8081'
const path=`${domain}:${port}`

export const EmployeeAPI={
    getEmployee:`${path}/HRM`,
}
export const payroll={
    allEmployee:`${path}/mydb`,
}
export const Manage={
    employeeInfo:`${path}/All`,
    delete:`${path}/deleteEmployee`,
}
export const notification={
    aniversary:`${path}/hiringday`,
    birthDay: `${path}/birthday`,
    benefit_plan: `${path}/effectplan`,
    exceeded_vacation:`${path}/more_vacation`,
}

export const create={
    personal:`${path}/creates_personal`,
    employment:`${path}/employmentCre`,
    working:`${path}/employent_working_time`,
    payroll:`${path}/creates_payrate`,
    benefit:`${path}/benefit`,
}
export const update={
    all:`${path}/updateAll`,
}
export const CRUD={
    delete:`${path}/delete`
}
export const chart={
    barchart: `${path}/dashboard_department`,
    piechart: `${path}/dashboard_department`,
}
export const statistical={
    benefit:`${path}/shareholder`,
    income:`${path}/income`,
    vacation:`${path}/vacation_days`,
}