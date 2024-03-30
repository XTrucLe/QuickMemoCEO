import React from 'react'
import Home from '../pages/home/Home'
import Notification from '../pages/notification/Notification'
import Employee from '../pages/Employee/Employees'
import { Payroll } from '../pages/payroll/Payroll'

 const defaultRouter = [
    { path:'/', element: <Home/>},
    { path:'/notification', element: <Notification/>},
    { path:'/employee', element: <Employee/>},
    { path:'/payroll', element: <Payroll/>},

]
export {defaultRouter}