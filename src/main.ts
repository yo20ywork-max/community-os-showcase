import { createDiscordApp } from './staticApp.js';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found.');
}

createDiscordApp(root);

