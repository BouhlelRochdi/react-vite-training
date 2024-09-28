import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound.tsx'
import Layout from './layout/Layout.tsx';
import UserComponenet from './components/nestedComponents/UserComponenet.tsx';
import ProductsComponents from './components/nestedComponents/ProductsComponents.tsx';
import ProductDetails from './components/nestedComponents/ProductDetails.tsx';
import { ProductContext, ProductProvider } from './contexts/ProductContext.tsx';

const App = lazy(() => import('./App.tsx'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" /> 
  },
  {
    path: "/home",
    element: <Layout><App /></Layout>
  },
  {
    path: '/user',
    element: <Layout><UserComponenet /></Layout>
  },
  {
    path: '/products',
    element: <Layout>
      <ProductsComponents />
    </Layout>,
    children: [
      {
        path: 'details',
        element: <ProductDetails />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ChakraProvider>
    <ProductProvider>
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
    </ProductProvider>
  </ChakraProvider>
  // </StrictMode>,
)
