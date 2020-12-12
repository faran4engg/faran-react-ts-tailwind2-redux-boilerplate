import { Suspense, lazy, useState, FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '@router/routes';
import { SuspenseLoader } from '@components/loader';
import { NavSidebar, Content, Header } from '@components/layout';

const Page404 = lazy(() => import('../../pages/404'));

const Layout: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 
      }`}
    >
      <NavSidebar
        isSidebarOpen={isSidebarOpen}
        handleIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex flex-col flex-1 w-full">
        <Header handleIsSidebarOpen={setIsSidebarOpen} />
        <Content>
          <Suspense fallback={<SuspenseLoader />}>
            <Switch>
              {routes.map((route) =>
                route.component ? (
                  <Route
                    key={route.path}
                    exact={true}
                    path={`/app${route.path}`}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    render={(props: any) => <route.component {...props} />}
                  />
                ) : null
              )}
              <Redirect exact from="/app" to="/app/home" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Content>
      </div>
    </div>
  );
};

export default Layout;
