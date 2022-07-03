import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Login from '../components/modules/auth/Login';
import OpenIconSpeedDial from 'src/components/modules/OpenIconSpeedDial';

const Loader = (Component) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards

const Tasks = Loader(lazy(() => import('src/content/dashboards/Tasks')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

const CreateAccount = Loader(
  lazy(() => import('src/components/modules/CreateAccount'))
);
const CreateMenu = Loader(
  lazy(() => import('src/components/modules/CreateMenu'))
);
const ThemeSelection = Loader(
  lazy(() => import('src/components/modules/ThemeSelection'))
);

const ThemeStore = Loader(
  lazy(() => import('src/theme/Layout/pages/store/Store'))
);

const ThemeCart = Loader(lazy(() => import('src/theme/Layout/pages/cart')));

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));
const SignIn = Loader(lazy(() => import('../components/modules/auth/SignIn')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

function routes(props: boolean | { user: any }): RouteObject[] {
  // const isLogged = props ? true : false;

  const isLogged = true;

  return [
    {
      path: '',
      element: <BaseLayout />,
      children: [
        {
          path: '/',
          element: (
            <>
              <Overview />
              <OpenIconSpeedDial />
            </>
          )
        },
        {
          path: 'overview',
          element: <Navigate to="/" replace />
        },
        {
          path: 'status',
          children: [
            {
              path: '',
              element: <Navigate to="404" replace />
            },
            {
              path: '404',
              element: <Status404 />
            },
            {
              path: '500',
              element: <Status500 />
            },
            {
              path: 'maintenance',
              element: <StatusMaintenance />
            },
            {
              path: 'coming-soon',
              element: <StatusComingSoon />
            }
          ]
        },
        {
          path: '*',
          element: <Status404 />
        }
      ]
    },
    {
      path: 'signin',
      element: <SignIn />
    },
    {
      path: 'theme',
      children: [
        {
          path: '',
          element: <Navigate to="tasks" replace />
        },
        {
          path: 'store',
          element: <ThemeStore />
        },
        {
          path: 'cart',
          element: <ThemeCart />
        }
      ]
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'dashboards',
      element: isLogged ? (
        <>
          <SidebarLayout />
        </>
      ) : (
        <Login /> || <SignIn />
      ),
      children: [
        {
          path: '',
          element: <Navigate to="tasks" replace />
        },
        {
          path: 'tasks',
          element: <Tasks />
        },
        {
          path: 'createAccount',
          element: <CreateAccount />
        },
        {
          path: 'createMenu',
          element: <CreateMenu />
        },
        {
          path: 'themes',
          element: <ThemeSelection />
        },
        {
          path: 'messenger',
          element: <Messenger />
        }
      ]
    },
    {
      path: 'management',
      element: <SidebarLayout />,
      children: [
        {
          path: '',
          element: <Navigate to="transactions" replace />
        },
        {
          path: 'transactions',
          element: <Transactions />
        },
        {
          path: 'profile',
          children: [
            {
              path: '',
              element: <Navigate to="details" replace />
            },
            {
              path: 'details',
              element: <UserProfile />
            },
            {
              path: 'settings',
              element: <UserSettings />
            }
          ]
        }
      ]
    },
    {
      path: '/components',
      element: <SidebarLayout />,
      children: [
        {
          path: '',
          element: <Navigate to="buttons" replace />
        },
        {
          path: 'buttons',
          element: <Buttons />
        },
        {
          path: 'modals',
          element: <Modals />
        },
        {
          path: 'accordions',
          element: <Accordions />
        },
        {
          path: 'tabs',
          element: <Tabs />
        },
        {
          path: 'badges',
          element: <Badges />
        },
        {
          path: 'tooltips',
          element: <Tooltips />
        },
        {
          path: 'avatars',
          element: <Avatars />
        },
        {
          path: 'cards',
          element: <Cards />
        },
        {
          path: 'forms',
          element: <Forms />
        }
      ]
    }
  ];
}

export default routes;
