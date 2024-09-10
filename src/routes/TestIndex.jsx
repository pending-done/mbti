import SignUp from "@/pages/sign/SignUp";
import { LoginProtectedRoute } from "./LoginProtectedRoute";
import { NotLoginProtectedRoute } from "./NotLoginProtectedRoute";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignIn from "@/pages/sign/SignIn";
import Index from "@/pages"; // index 지워보기
import MyTestResult from "@/pages/testResults/MyTestResult";
import AllTestResult from "@/pages/testResults/AllTestResult";
import Test from "@/pages/test/Test";
import Profile from "@/pages/profile/Profile";

// import Index from "/src/pages";
// import MyTestResult from "/src/pages/testResults/MyTestResult";
// import AllTestResult from "/src/pages/testResults/AllTestResult";
// import { LoginProtectedRoute } from "./LoginProtectedRoute";
// import { NotLoginProtectedRoute } from "./NotLoginProtectedRoute";
// import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
// import Test from "/src/pages/test/Test";
// import Profile from "/src/pages/profile/Profile";
// import SignUp from "@/pages/sign/SignUp";

const Routes = () => {
  const notAuthenticatedOnly = [
    {
      path: "/auth",
      element: <NotLoginProtectedRoute />,
      children: [
        {
          path: "sign-in",
          element: <SignIn />
        },
        {
          path: "sign-up",
          element: <SignUp />
        }
      ]
    }
  ];

  const authenticatedOnly = [
    {
      path: "",
      element: <LoginProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Index />
        },
        {
          path: "test",
          element: <Test />
        },
        {
          path: "my-test-result",
          element: <MyTestResult />
        },
        {
          path: "all-test-result",
          element: <AllTestResult />
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "*",
          element: <Navigate to="/" /> // 404
        }
      ]
    }
  ];

  // const router = createBrowserRouter([...notAuthenticatedOnly, ...authenticatedOnly]);
  const router = createBrowserRouter([...notAuthenticatedOnly, ...authenticatedOnly]);

  return <RouterProvider router={router} />;
};

export default Routes;
