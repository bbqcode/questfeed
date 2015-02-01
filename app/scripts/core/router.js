var React = require('react');
var Router = require('react-router');

var { Route, RouteHandler, DefaultRoute } = Router;

var HelloWorld = require('../components/HelloWorld');
var CreateQuest = require('../pages/CreateQuest');

var App = React.createClass({
    render: () => {
        return <RouteHandler/>;
    }
});

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={HelloWorld}/>
        <Route name="helloWorld" path="/" handler={HelloWorld}/>
        <Route name="createQuest" path="/quests/create" handler={CreateQuest}/>
    </Route>
);

var router = Router.create({
    routes: routes
});

module.exports = router;
