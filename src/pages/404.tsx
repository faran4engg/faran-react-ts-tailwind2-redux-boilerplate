import { ForbiddenIcon } from '@assets/icons';
import { Link } from 'react-router-dom';

const Page404 = () => (
  <div className="flex flex-col items-center">
    <ForbiddenIcon
      className="w-12 h-12 mt-8 text-purple-600"
      aria-hidden="true"
    />
    <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
      404
    </h1>
    <p className="text-gray-700 dark:text-gray-300 my-4">
      Page not found. Check the address or
    </p>

    <Link
      className="animate-bounce text-purple-600 hover:underline dark:text-purple-300"
      to="/"
    >
      Go to Home page
    </Link>
  </div>
);

export default Page404;
