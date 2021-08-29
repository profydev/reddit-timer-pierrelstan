import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';
import Home from './pages/Home';
import Search from './pages/Search';
import GlobalStyle from './utils/GlobalStyle';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/search/javascript">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
