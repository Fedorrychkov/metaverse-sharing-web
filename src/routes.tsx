import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom'
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
  <Router>
    <ScrollToTop />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
)
