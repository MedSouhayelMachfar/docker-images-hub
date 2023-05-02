import './App.css'
import Feed from './pages/Feed'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  }
  ,
  {
    path: "/feed",
    element: <Feed />,
    errorElement: <NotFound />
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
