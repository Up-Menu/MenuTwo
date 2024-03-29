import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/shared/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

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
  lazy(() => import('src/components/pages/admin/CreateRestaurant'))
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

const SystemTest = Loader(
  lazy(() => import('src/components/pages/admin/SystemTest'))
);

const NewLogin = Loader(lazy(() => import('src/auth/NewLogin')));
const NewRegister = Loader(lazy(() => import('src/auth/NewRegister')));

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
      path: 'register',
      element: <NewRegister />
    },
    {
      path: 'login',
      element: <NewLogin />
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
        <NewLogin /> || <NewRegister />
      ),
      children: [
        {
          path: '',
          element: isLogged ? (
            <Navigate to="tasks" replace />
          ) : (
            <NewLogin /> || <NewRegister />
          )
        },

        {
          path: 'mobileApp',
          element: isLogged ? <MobileApp /> : <NewLogin /> || <NewRegister />
        },
        {
          path: 'systemTest',
          element: isLogged ? <SystemTest /> : <NewLogin /> || <NewRegister />
        },
        {
          path: 'tables',
          element: isLogged ? <Tables /> : <NewLogin /> || <NewRegister />
        },
        {
          path: 'tasks',
          element: isLogged ? <Tasks /> : <NewLogin /> || <NewRegister />
        },
        {
          path: 'createRestaurant',
          element: isLogged ? (
            <CreateRestaurant />
          ) : (
            <NewLogin /> || <NewRegister />
          )
        },
        {
          path: 'createCategory',
          element: isLogged ? (
            <CreateCategory />
          ) : (
            <NewLogin /> || <NewRegister />
          )
        },
        {
          path: 'createMenu',
          element: isLogged ? <CreateMenu /> : <NewLogin /> || <NewRegister />
        },
        {
          path: 'orders',
          element: isLogged ? <Order /> : <NewLogin /> || <NewRegister />
        },
        {
          path: 'delivery',
          element: isLogged ? <Delivery /> : <NewLogin /> || <NewRegister />
        },
        {
          path: 'themes',
          element: isLogged ? (
            <ThemeSelection />
          ) : (
            <NewLogin /> || <NewRegister />
          )
        }
      ]
    }
  ];
}

export default routes;
