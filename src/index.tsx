import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SuspenseLoader } from '@domains/Common/components/loader';
import { appStore } from '@store/appStore';
import '@assets/css/tailwind.css';
import App from './App';
import './index.css';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <Suspense fallback={<SuspenseLoader />}>
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.register();
