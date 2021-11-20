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
import Home from './pages/home-page/Home';
import Search from './pages/search-page/Search';
import Terms from './pages/terms-page/Terms';
import GlobalStyle from './utils/GlobalStyle';
import * as S from './App.style';
import theme from './utils/theme';

function App() {
  return (
    <S.Container>
      <ThemeProvider theme={theme}>
        <Router>
          <Normalize />
          <GlobalStyle />
          <S.Wrapper>
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
          </S.Wrapper>
          <Footer />
        </Router>
      </ThemeProvider>
    </S.Container>
  );
}
export default App;
