import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import HomePage from './pages/HomePage'
import CategoriesPage from "./pages/CategoriesPage.jsx";
import CategoryAdsPage from './pages/CategoryAdsPage'
import CreateAdPage from "./pages/CreateAdPage.jsx";
import AdDetailsPage from "./pages/AdDetailPage.jsx";
import MyAdsPage from './pages/MyAdsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'categories',
                element: <CategoriesPage />,
            },
            {
                path: 'category/:slug',
                element: <CategoryAdsPage />,
            },
            {
                path: 'create/:slug',
                element: <CreateAdPage />,
            },
            {
                path: 'ad/:id',
                element: <AdDetailsPage />,
            },
            {
                path: 'my-ads',
                element: <MyAdsPage />,
            }

        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App

