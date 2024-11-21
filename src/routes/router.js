import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/layout/main/Main';
import TodoContainer from '../todo/TodoContainer';
import ShowUVod from '../pages/showUproject/ShowUVod';
import VodContainer from '../pages/showUproject/VOD/VodContainer';
import MainPage from '../pages/showUproject/main/MainPage'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        index : true,
        element : <Main />
      },
      {
        path : '/todo',
        element : <TodoContainer />
      }
    ]
  }
])

export default router;