import React from 'react'
import Home from '../pages/home/Home'
import Employee from '../pages/Employee/Employee'
import { Payroll } from '../pages/payroll/Payroll'
import Statistical from '../pages/statistical/Statistical'
import Manager from '../pages/manager/Manager'
import NewEmployee from '../pages/newemployee/NewEmployee'
import AniversaryReminders from '../pages/notification/Anniversary'
import BenefitPlan from '../pages/notification/BenefitPlan'
import ExceededVacation from '../pages/notification/ExceededVacation'
import BirthDays from '../pages/notification/BirthDays'
import { DefaultLayout, EmployeeLayout, MangerLayout, Notification } from '../layout'
import AddEmployment from '../pages/newemployee/create/Employment'
import AddWorking from '../pages/newemployee/create/Working'
import AddPayRoll from '../pages/newemployee/create/Payroll'
import AddPersonal from './../pages/newemployee/create/Personal'
import DayOff from '../pages/Employee/DayOff'

//List of routers to use for page navigation
const defaultRouter = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/notification',
        element: <AniversaryReminders />,
        layout: Notification
    },
    {
        path: '/notification/anniversary_reminders',
        element: <AniversaryReminders />,
        layout: Notification
    },
    {
        path: '/notification/benefits_plan_changes',
        element: <BenefitPlan />,
        layout: Notification
    },
    {
        path: '/notification/vacation_exceeded',
        element: <ExceededVacation />,
        layout: Notification
    },
    {
        path: '/notification/birthday_notifications',
        element: <BirthDays />,
        layout: Notification
    },
    {
        path: '/employee',
        element: <Employee />,
        layout: EmployeeLayout
    },
    {
        path: '/employee/dayoffdetail',
        element: <DayOff />,
        layout: EmployeeLayout
    },
    {
        path: '/payroll',
        element: <Payroll />,
        layout: DefaultLayout
    },
    {
        path: '/statistical',
        element: <Statistical />
    },
    {
        path: '/manage',
        element: <Manager />,
        layout: MangerLayout
    },
    {
        path: '/manage/newEmployee',
        element: <NewEmployee />
    },
    {
        path: '/manage/newEmployee/Personal',
        element: <AddPersonal />
    },
    {
        path: '/manage/newEmployee/Employment',
        element: <AddEmployment />
    },
    {
        path: '/manage/newEmployee/Working',
        element: <AddWorking />
    },
    {
        path: '/manage/newEmployee/Payroll',
        element: <AddPayRoll />
    },
]
export { defaultRouter }