var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var FleetMonitor = require('./components/FleetMonitor.jsx')
var Notifications = require('./components/Notifications.jsx')
var AllClaims = require('./components/AllClaims.jsx')
var Reports = require('./components/Reports.jsx')

var Routes = (
<Route handler={Root} path='/'>
  <DefaultRoute handler={Index} />
  <Route path='/fleetmonitor' handler={FleetMonitor} />
  <Route path='/notifications' handler={Notifications} />
  <Route path='/allclaims' handler={AllClaims} />
  <Route path='/reports' handler={Reports} />
</Route>
)

module.exports = Routes
