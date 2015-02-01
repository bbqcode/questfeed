var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Layout = React.createClass({
    render: () => {
        return (
            <div>
                <Link to="CreateQuest">Quests</Link>| <Link to='Home'>Home</Link>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = Layout;
