import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/",
    exact: true,
    children: <Login />,
  },
];
