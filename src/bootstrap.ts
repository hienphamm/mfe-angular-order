import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

export const mountOrderApp = (container?: HTMLElement) => {
    const root = container || document.getElementById('root') || document.body;
    const appRoot = document.createElement('app-root');
    root.appendChild(appRoot);

    return bootstrapApplication(App, appConfig)
        .then(() => console.log('Order app bootstrapped'))
        .catch(err => console.error(err));
};
