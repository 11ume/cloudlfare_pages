import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const Router = () => (
  <BrowserRouter basename="/app">
    <Switch>
      <Route path="/login" component={() => <div>asd</div>} />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
)

export default Router
