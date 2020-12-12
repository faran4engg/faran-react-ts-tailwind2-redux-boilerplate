import { FC } from 'react';
import { NavLink, Route } from 'react-router-dom';
import routes from '../../routes/sidebar';

const SidebarContent: FC = () => (
  <div className="py-4 text-gray-500 dark:text-gray-400">
    <a
      className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
      href="/"
    >
      Windmill
    </a>
    <ul className="mt-6">
      {routes.map((route) => (
        <li className="relative px-6 py-3" key={route.name}>
          <NavLink
            exact
            to={route.path}
            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            activeClassName="text-gray-800 dark:text-gray-100"
          >
            <Route path={route.path} exact={route.exact}>
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              />
            </Route>
            <span>Icon</span>
            <span className="ml-4">{route.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarContent;
