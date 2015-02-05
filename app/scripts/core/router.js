var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;

var Layout = require('../components/Layout');

var Home = require('../pages/Home');
var CreateQuest = require('../pages/CreateQuest');
var Quests = require('../pages/Quests');

var routes = (
    <Route handler={Layout}>
        <DefaultRoute handler={Home}/>
        <Route name="Home" path="/" handler={Home}/>
        <Route name="Quests" path="/quests" handler={Quests}/>
        <Route name="CreateQuest" path="/quests/create" handler={CreateQuest}/>
    </Route>
);

var router = Router.create({
    routes: routes
});

module.exports = router;
