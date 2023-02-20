import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom';
import store from './store/store';
import App from './components/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </HashRouter>
);