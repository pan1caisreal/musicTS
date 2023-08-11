import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {I18nextProvider} from 'react-i18next'
import i18n from "./i18n";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <I18nextProvider i18n={i18n}>
              <App />
          </I18nextProvider>
      </Provider>
  </React.StrictMode>
);

