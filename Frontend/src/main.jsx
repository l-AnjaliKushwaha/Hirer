import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Student from "./Components/Student.jsx";
import Employee from "./Components/Employee.jsx";
import StudentHome from "./Pages/Student/StudentHome.jsx";
import EmployeeHome from "./Pages/Employee/EmployeeHome.jsx";
import EmployeeApplication from "./Pages/Employee/EmployeeApplication.jsx";
import ApplicantsDetails from "./Pages/Employee/ApplicantsDetails.jsx";
import AllInternship from "./Pages/Internship/AllInternship.jsx";
import AllJob from "./Pages/Job/AllJob.jsx";
import Application from "./Pages/Student/Application.jsx";
import Bookmark from "./Pages/Student/Bookmark.jsx";
import Singlejob from "./Pages/Student/Singlejob.jsx";
import AuthLayout from "./Components/AuthLayout.jsx";
import Singleinternship from "./Pages/Student/Singleinternship.jsx";
import Forget from "./Pages/Forget.jsx";
import ForgetLink from "./Pages/ForgetLink.jsx";
import Reset from "./Pages/Reset.jsx";
import CreateInternship from "./Pages/Internship/CreateInternship.jsx";
import CreateJob from "./Pages/Job/CreateJob.jsx";
import Resume from "./Pages/Student/Resume/Resume.jsx";
import PersonalDetails from "./Pages/Student/Resume/PersonalDetails.jsx";
import AddEducation from "./Pages/Student/Resume/AddEducation.jsx";
import AddJob from "./Pages/Student/Resume/AddJob.jsx";
import AddInternship from "./Pages/Student/Resume/AddInternship.jsx";
import AddResponsibility from "./Pages/Student/Resume/AddResponsibility.jsx";
import AddTrainingAndCourses from "./Pages/Student/Resume/AddTrainingAndCourses.jsx";
import AddProject from "./Pages/Student/Resume/AddProject.jsx";
import AddSkill from "./Pages/Student/Resume/AddSkill.jsx";
import AddProtfolioOrWork from "./Pages/Student/Resume/AddProtfolioOrWork.jsx";
import AddAccomplishment from "./Pages/Student/Resume/AddAccomplishment.jsx";
import { Flip, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/About.jsx";
import Notfound from "./Pages/Notfound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <ToastContainer hideProgressBar={true} transition={Slide} />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/student",
        element: <Student />,
        children: [
          {
            path: "",
            element: (
              <AuthLayout authentication={true}>
                <StudentHome />
              </AuthLayout>
            ),
          },
          {
            path: "login",
            element: (
              <AuthLayout authentication={false}>
                <Login userType="student" />
              </AuthLayout>
            ),
          },
          {
            path: "signup",
            element: (
              <AuthLayout authentication={false}>
                <Signup userType="student" />
              </AuthLayout>
            ),
          },
          {
            path: "internships",
            element: (
              <AuthLayout authentication={true}>
                <AllInternship />
              </AuthLayout>
            ),
            children: [
              {
                path: "readinterbship/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <Singleinternship />
                  </AuthLayout>
                ),
              },
            ],
          },
          {
            path: "internships/read/:id",
            element: (
              <AuthLayout authentication={true}>
                <Singleinternship />
              </AuthLayout>
            ),
          },

          {
            path: "jobs",
            element: (
              <AuthLayout authentication={true}>
                <AllJob />
              </AuthLayout>
            ),
            children: [
              {
                path: "readjob/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <Singlejob />
                  </AuthLayout>
                ),
              },
            ],
          },
          {
            path: "job/read/:id",
            element: (
              <AuthLayout authentication={true}>
                <Singlejob />
              </AuthLayout>
            ),
          },
          // {
          //   path: "job/read/:id",
          //   element: (
          //     <AuthLayout authentication={true}>
          //       <Singlejob />
          //     </AuthLayout>
          //   ),

          // },
          // {
          //   path: "internship/read/:id",
          //   element: (
          //     <AuthLayout authentication={true}>
          //       <Singleinternship />
          //     </AuthLayout>
          //   ),

          // },
          {
            path: "application",
            element: (
              <AuthLayout authentication={true}>
                <Application />
              </AuthLayout>
            ),
          },
          {
            path: "bookmark",
            element: (
              <AuthLayout authentication={true}>
                <Bookmark />
              </AuthLayout>
            ),
          },
          {
            path: "resume",
            element: (
              <AuthLayout authentication={true}>
                <Resume />
              </AuthLayout>
            ),
            children: [
              {
                path: "edit/personal_details",
                element: (
                  <AuthLayout authentication={true}>
                    <PersonalDetails />
                  </AuthLayout>
                ),
              },
              {
                path: "add/education",
                element: (
                  <AuthLayout authentication={true}>
                    <AddEducation />
                  </AuthLayout>
                ),
              },
              {
                path: "edit/education/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <AddEducation edit={true} />
                  </AuthLayout>
                ),
              },
              {
                path: "add/job",
                element: (
                  <AuthLayout authentication={true}>
                    <AddJob />
                  </AuthLayout>
                ),
              },
              {
                path: "edit/job/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <AddJob edit={true} />
                  </AuthLayout>
                ),
              },
              {
                path: "add/internship",
                element: (
                  <AuthLayout authentication={true}>
                    <AddInternship />
                  </AuthLayout>
                ),
              },
              {
                path: "edit/internship/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <AddInternship edit={true} />
                  </AuthLayout>
                ),
              },
              {
                path: "add/responsibility",
                element: (
                  <AuthLayout authentication={true}>
                    <AddResponsibility />
                  </AuthLayout>
                ),
              },
              {
                path: "edit/responsibility/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <AddResponsibility edit={true} />
                  </AuthLayout>
                ),
              },
              {
                path: "add/training_courses",
                element: (
                  <AuthLayout authentication={true}>
                    <AddTrainingAndCourses />
                  </AuthLayout>
                ),
              },
              {
                path: "edit/training_courses/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <AddTrainingAndCourses edit={true} />
                  </AuthLayout>
                ),
              },
              {
                path: "add/project",
                element: (
                  <AuthLayout authentication={true}>
                    <AddProject />
                  </AuthLayout>
                ),
              },
              {
                path: "edit/project/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <AddProject edit={true} />
                  </AuthLayout>
                ),
              },
              {
                path: "add/skill",
                element: (
                  <AuthLayout authentication={true}>
                    <AddSkill />
                  </AuthLayout>
                ),
              },
              {
                path: "edit/skill/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <AddSkill edit={true} />
                  </AuthLayout>
                ),
              },
              {
                path: "add/portfolio_work",
                element: (
                  <AuthLayout authentication={true}>
                    <AddProtfolioOrWork />
                  </AuthLayout>
                ),
              },
              {
                path: "edit/portfolio_work/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <AddProtfolioOrWork edit={true} />
                  </AuthLayout>
                ),
              },
              {
                path: "add/accomplishment",
                element: (
                  <AuthLayout authentication={true}>
                    <AddAccomplishment />
                  </AuthLayout>
                ),
              },
              {
                path: "edit/accomplishment/:id",
                element: (
                  <AuthLayout authentication={true}>
                    <AddAccomplishment edit={true} />
                  </AuthLayout>
                ),
              },
            ],
          },
          {
            path: "forget-password",
            element: <Forget userType="student" />,
          },
          {
            path: "forget-link/:id",
            element: <ForgetLink />,
          },
          {
            path: "reset-password",
            element: (
              <AuthLayout authentication={true}>
                <Reset userType="student" />
              </AuthLayout>
            ),
          },
          {
            path: "about",
            element: <About />,
          },
        ],
      },
      {
        path: "/employee",
        element: <Employee />,
        children: [
          {
            path: "",
            element: (
              <AuthLayout authentication={true}>
                <EmployeeHome />
              </AuthLayout>
            ),
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "login",
            element: (
              <AuthLayout authentication={false}>
                <Login userType="employee" />
              </AuthLayout>
            ),
          },
          {
            path: "application",
            element: (
              <AuthLayout authentication={true}>
                <EmployeeApplication />
              </AuthLayout>
            ),
          },
          {
            path: "application/applicants/:id",
            element: (
              <AuthLayout authentication={true}>
                <ApplicantsDetails />
              </AuthLayout>
            ),
          },
          {
            path: "signup",
            element: (
              <AuthLayout authentication={false}>
                <Signup userType="employee" />
              </AuthLayout>
            ),
          },
          {
            path: "internships",
            element: (
              <AuthLayout authentication={true}>
                <CreateInternship />
              </AuthLayout>
            ),
          },
          {
            path: "jobs",
            element: (
              <AuthLayout authentication={true}>
                <CreateJob />
              </AuthLayout>
            ),
          },
          {
            path: "forget-password",
            element: <Forget userType="employee" />,
          },
          {
            path: "forget-link/:id",
            element: <ForgetLink />,
          },
          {
            path: "reset-password",
            element: (
              <AuthLayout authentication={true}>
                <Reset userType="employee" />
              </AuthLayout>
            ),
          },
        ],
      },
      {
        path: "/internships",
        element: (
          <AuthLayout authentication={false}>
            <AllInternship />
          </AuthLayout>
        ),
      },
      {
        path: "/jobs",
        element: (
          <AuthLayout authentication={false}>
            <AllJob />
          </AuthLayout>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
