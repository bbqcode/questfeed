var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;

var Layout = require('../components/Layout');

var HelloWorld = require('../components/HelloWorld');
var CreateQuest = require('../pages/CreateQuest');

var routes = (
    <Route handler={Layout}>
        <DefaultRoute handler={HelloWorld}/>
        <Route name="helloWorld" path="/" handler={HelloWorld}/>
        <Route name="createQuest" path="/quests/create" handler={CreateQuest}/>
    </Route>
);

var router = Router.create({
    routes: routes
});

module.exports = router;
