import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/home';
import UserLayout from '../layouts/user-layout';
import Jsx1 from '../components/02-jsx/01-jsx';
import Jsx2 from '../components/02-jsx/02-jsx';
import Jsx3 from '../components/02-jsx/03-jsx';
import Jsx4 from '../components/02-jsx/04-jsx';
import InlineStyling from '../components/03-styles/01-inline-styling';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'jsx',
                children: [
                    {
                        index: true,
                        element: <Jsx1 />
                    },
                    {
                        path: '1',
                        element: <Jsx1 />
                    },
                    {
                        path: '2',
                        element: <Jsx2 />
                    },
                    {
                        path: '3',
                        element: <Jsx3 />
                    },
                    {
                        path: '4',
                        element: <Jsx4 />
                    }
                ]
            },
            {
                path: 'styles',
                children: [
                    {
                        index: true,
                        element: <InlineStyling />
                    }
                ]
            }
        ]
    },
]);