import { createBrowserRouter } from 'react-router-dom';

import AppInit from '../init/AppInit';

import AuthLayout from '../layouts/AuthLayout';

import MainLayout from '@/app/layouts/MainLayout';

import ProtectedRoute from './ProtectedRoute';

import LoginPage from '@/features/auth/pages/LoginPage';
import RegisterPage from '@/features/auth/pages/RegisterPage';
import Student from '@/features/student_tailwindcss/student_antd/StudentAntd';
import DashboardPage from '@/features/dashboardpage/DashboardPage';
// import UserProfilePage from '@/features/users/pages/UserProfilePage';
// import TeacherPage from '@/features/teachers/pages/TeacherPage';
// import CoursePage from '@/features/courses/pages/CoursePage';
// import EnrollmentPage from '@/features/enrollments/pages/EnrollmentPage';

export const router = createBrowserRouter([
  /******************** AUTH *********************/
  {
    element: <ProtectedRoute requireAuth={false} />,
    children: [
      {
        path: '/auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },

  /******************** MAIN *********************/
  {
    element: <ProtectedRoute  />,
    children: [
      {
        path: '/',
        element: (
          <AppInit>
            <MainLayout />
          </AppInit>
        ),
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          // {
          //   path: 'profile',
          //   element: <UserProfilePage />,
          // },
          {
            path: 'students',
            element: <Student />,
          },
        //   {
        //     path: 'teachers',
        //     element: <TeacherPage />,
        //   },
        //   {
        //     path: 'courses',
        //     element: <CoursePage />,
        //   },
        //   {
        //     path: 'enrollments',
        //     element: <EnrollmentPage />,
        //   },
        ],
      },
    ],
  },
]);
