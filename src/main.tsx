import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/Layout/Header/Header.tsx';

const Layout = () => {
  return <>
    <Header />
    <Outlet />
  </>
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <></>
      },
      {
        path: "/search",
        element: <></>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </RecoilRoot>,
);
