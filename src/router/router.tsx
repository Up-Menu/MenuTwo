import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/shared/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Login from '../auth/Login';
import OpenIconSpeedDial from 'src/widgets/OpenIconSpeedDial';

const Loader = (Component) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(
  lazy(() => import('src/components/pages/client/overview'))
);

// Dashboards

const Tasks = Loader(lazy(() => import('src/content/dashboards/Tasks')));

const CreateRestaurant = Loader(
  lazy(() => import('src/components/pages/admin/RestaurantAccounting'))
);
const CreateMenu = Loader(
  lazy(() => import('src/components/pages/admin/CreateMenu'))
);
const ThemeSelection = Loader(
  lazy(() => import('src/components/pages/admin/ThemeSelection'))
);

const ThemeStore = Loader(lazy(() => import('src/theme/classic/Store')));

const ThemeCart = Loader(lazy(() => import('src/theme/classic')));

const Order = Loader(
  lazy(() => import('src/components/pages/admin/OrdersManagement'))
);

const CreateCategory = Loader(
  lazy(() => import('src/components/pages/admin/CreateCategory'))
);

const Delivery = Loader(
  lazy(() => import('src/components/pages/admin/Delivery'))
);

const MobileApp = Loader(
  lazy(() => import('src/components/pages/admin/MobileApp'))
);
const Tables = Loader(
  lazy(() => import('src/components/pages/admin/TableManagement'))
);

const SmsPanel = Loader(
  lazy(() => import('src/components/pages/admin/SmsPanel'))
);
const SignIn = Loader(lazy(() => import('../auth/SignIn')));
const SystemTest = Loader(
  lazy(() => import('src/components/pages/admin/SystemTest'))
);

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

function routes(props: string[]): RouteObject[] {
  const isLogged = !!(props[0] || props[1]);

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
      path: 'signin',
      element: <SignIn />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'smsPanel',
      element: <SmsPanel />
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
          element: isLogged ? (
            <Navigate to="tasks" replace />
          ) : (
            <Login /> || <SignIn />
          )
        },

        {
          path: 'mobileApp',
          element: isLogged ? <MobileApp /> : <Login /> || <SignIn />
        },
        {
          path: 'systemTest',
          element: isLogged ? <SystemTest /> : <Login /> || <SignIn />
        },
        {
          path: 'tables',
          element: isLogged ? <Tables /> : <Login /> || <SignIn />
        },
        {
          path: 'tasks',
          element: isLogged ? <Tasks /> : <Login /> || <SignIn />
        },
        {
          path: 'createRestaurant',
          element: isLogged ? <CreateRestaurant /> : <Login /> || <SignIn />
        },
        {
          path: 'createCategory',
          element: isLogged ? <CreateCategory /> : <Login /> || <SignIn />
        },
        {
          path: 'createMenu',
          element: isLogged ? <CreateMenu /> : <Login /> || <SignIn />
        },
        {
          path: 'orders',
          element: isLogged ? <Order /> : <Login /> || <SignIn />
        },
        {
          path: 'delivery',
          element: isLogged ? <Delivery /> : <Login /> || <SignIn />
        },
        {
          path: 'themes',
          element: isLogged ? <ThemeSelection /> : <Login /> || <SignIn />
        }
      ]
    }
  ];
}

export default routes;
