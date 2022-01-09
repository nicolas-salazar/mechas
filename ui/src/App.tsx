import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import mainTheme from './theme';

import { Aphorism, Home } from './ui/pages';
import { APHORISM_ROUTE, HOME_ROUTE } from './ui/pages/routes';

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={HOME_ROUTE.path} component={Home} />
          <Route path={APHORISM_ROUTE.path} component={Aphorism} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>
);

export default App;
