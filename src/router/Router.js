import React from 'react'
import Home from '../pages/home/Home'
import Notification from '../pages/notification/Notification'
import Employee from '../pages/Employee/Employee'
import { Payroll } from '../pages/payroll/Payroll'
import Statistical from '../pages/statistical/Statistical'
import { DefaultLayout, EmployeeLayout, MangerLayout, NotificationLayout } from '../layout'
import Manager from '../pages/manager/Manager'

//List of routers to use for page navigation
 const defaultRouter = [
    { path:'/', element: <Home/>},
    { path:'/notification', element: <Notification/>, layout: NotificationLayout},
    { path:'/notification', element: <Notification/>, layout: NotificationLayout},
    { path:'/notification', element: <Notification/>, layout: NotificationLayout},
    { path:'/employee', element: <Employee/>, layout: EmployeeLayout},
    { path:'/employee/dayoffdetail', element: <Employee/>, layout: EmployeeLayout},
    { path:'/employee', element: <Employee/>, layout: EmployeeLayout},
    { path:'/payroll', element: <Payroll/>, layout: DefaultLayout},
    { path:'/statistical', element: <Statistical/>},
    { path:'/management', element: <Manager/>, layout: MangerLayout},
]
export {defaultRouter}