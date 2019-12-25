if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import { registerRootComponent } from 'expo';
import App from './src/App';

registerRootComponent(App);
