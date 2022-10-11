
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './ErrorPage/ErrorPage';
import Users from './Components/Users/Users';
import UserInfo from './UserInfo/UserInfo';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    loader:()=>fetch('https://randomuser.me/api/?results=5000'),
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/users',
        element:<Users></Users>,
      },
      {
        path:'/users*',
        element:<UserInfo></UserInfo>,
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
