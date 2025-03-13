import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main/Main";
import axios from "axios";
import SingleUser from "./pages/SingleUser/SingleUser";

async function restaurant() {
  const response = await axios.get("/users.json");
  return response.data;
}

async function single({ params }) {
  const response = await axios.get("/users.json");
  const data = response.data;
  return data.find((restaurant) => restaurant.id == params.restaurantId);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: restaurant,
  },
  {
    path: "/user/:restaurantId",
    element: <SingleUser />,
    loader: single,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
