import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeScreen from "../components/HomeScreen";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/browse",
    element: <HomeScreen />,
  },
]);
