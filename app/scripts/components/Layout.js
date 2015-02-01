var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Layout = React.createClass({
    render: () => {
        return <RouteHandler/>;
    }
});

module.exports = Layout;
