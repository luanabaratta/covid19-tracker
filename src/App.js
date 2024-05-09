import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Main  from "./pages/Main/index";
import UF  from "./pages/UF";
import Countries from "./pages/Countries/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return(
      <>
        <Header />
        <Outlet />
        <Footer />
      </>

  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/brazil/uf/:uf",
        element: <UF />
      },
      {
        path: "/countries",
        element: <Countries />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;