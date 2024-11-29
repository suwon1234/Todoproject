import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/layout/main/Main';
import TodoContainer from '../todo/TodoContainer';
import ShowUVod from '../pages/showUproject/ShowUVod';
import VodContainer from '../pages/showUproject/VOD/VodContainer';
import MainPage from '../pages/showUproject/main/MainPage'
import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        index : true,
        element : <Main/>
      },
      {
        path : '/todo',
        element : <TodoContainer />
      },
      {
        path : '/signUp',
        element : <SignUp/>
      },
      {
        path : '/signIn',
        element : <SignIn />
      },
    ]
  }
],
{
  future: {
      v7_startTransition: true,
      v7_fetcherPersist : true,
      v7_normalizeFormMethod : true,
      v7_partialHydration : true,
      v7_relativeSplatPath : true,
      v7_skipActionErrorRevalidation : true,
      v7_startTransition : true
  },
})


export default router;