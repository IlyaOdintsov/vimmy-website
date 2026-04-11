import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Portfolio } from '@/pages/PortfolioPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to={'/portfolio'} />,
	},
	{
		path: '/portfolio',
		element: <Portfolio />,
	},
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
