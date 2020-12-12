// @ts-nocheck

import React, { Suspense, lazy, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Main from './Main';
import ThemedSuspense from '../components/ThemedSuspense';

const Page404 = lazy(() => import('../pages/404'));

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 
      }`}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex flex-col flex-1 w-full">
        <Header handleIsSidebarOpen={setIsSidebarOpen} />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) =>
                route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null
              )}
              <Redirect exact from="/app" to="/app/dashboard" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
