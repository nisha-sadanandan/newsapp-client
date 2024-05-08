import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './Root.jsx';
import SignupForm from './SignupForm.jsx';
import NewBlog from './NewBlog.jsx';
import Blogs from './Blogs.jsx';
import Loginform from './Loginform.jsx';
import Trending from './Trending.jsx';
import PrivateRoute from './PrivateRoute.jsx';


const router = createBrowserRouter([
  { path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<App/>
      },

      {
        path:'/signup',
        element:<SignupForm/>
      },

      {
        path:'/new',
        element:
        (
          <PrivateRoute>
            <NewBlog/>
          </PrivateRoute>
        )
      },

      {
        path:'/blogs',
        element:<Blogs/>
      },

      
      {
        path:'/login',
        element:<Loginform/>
      },

      {
        path:'/trending',
        element:<Trending/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
