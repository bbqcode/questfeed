var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var HeaderMenu = require('./HeaderMenu')

var Layout = React.createClass({
    render: () => {
        return (
            <div>
                <HeaderMenu />
                <div className='main container'>
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = Layout;
