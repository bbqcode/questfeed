var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HeaderMenu = React.createClass({
    render: () => {
        return (
            <div className='ui menu fixed'>
                <div className='container'>
                    <Link className='item' to='CreateQuest'>Quests</Link>
                    <Link className='item' to='Home'>Home</Link>
                </div>
            </div>
        );
    }
});

module.exports = HeaderMenu;
