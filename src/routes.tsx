import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom'
import { ArtsPage } from './pages/art'
import { DaoPage } from './pages/dao'
import { DomainPage } from './pages/item'
import { MainPage } from './pages/main'

const ScrollToTop = withRouter(({ history }: any) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      unlisten()
    }
  }, [history])

  return (null)
})
export const Routes = () => (
  <Router basename={process.env.REACT_APP_PUBLIC_URL_PATHNAME}>
    <ScrollToTop />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/art" exact component={ArtsPage} />
      <Route path="/dao" exact component={DaoPage} />
      <Route path="/:domain" exact component={DomainPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
)
