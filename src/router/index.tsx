import path from 'path';
import {lazy} from 'react';
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const Resume = lazy(() => import('../pages/resume'));
const MessageBoard = lazy(() => import('../pages/messageBoard'));

const routes = [
  {
    path:'/',
    element:<Home />,
    meta:{
      title:'马天赐的博客'
    }
  },
  {
    path:'/Resume',
    element:<Resume />,
    meta:{
      title:'马天赐的简历'
    }
  },
  {
    path:'/MessageBoard',
    element:<MessageBoard />,
    meta:{
      title:'留言板'
    }
  },
  {
    path:'/404',
    Element:<div>404 Not Found</div>,
    meta:{
      title:'404 Not Found'
    }
  },
  {
    path:'*',
    element:<Navigate to="/404" />

  }
]

export default routes;