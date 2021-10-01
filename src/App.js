import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';
import Home from './pages/Home';
import Search from './pages/Search';
import Terms from './pages/Terms';
import GlobalStyle from './utils/GlobalStyle';
import theme from './utils/theme';

function App() {
  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <Router>
          <Normalize />
          <GlobalStyle />
          <div className="wrapper">
            <Header />
            <Switch>
              <Route path="/search/:subreddit">
                <Search />
              </Route>
              <Route path="/terms">
                <Terms />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
