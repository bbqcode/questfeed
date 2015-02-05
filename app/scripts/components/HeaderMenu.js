var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var foundation = require('../foundation');
var HeaderMenu = React.createClass({
    render() {
        return (
            <nav className='top-bar' data-topbar role='navigation'>
                <ul className='title-area'>
                    <li className='name'>
                        <h1>
                            <Link to='Home'>questfeed</Link>
                        </h1>
                    </li>
                </ul>
                <section className='top-bar-section'>
                    <ul className='right'>
                        <Link className='button' to='Quests'>Quests</Link>
                        <Link className='button' to='CreateQuest'>Create Quest</Link>
                        <a className='button' href='#' data-reveal-id='helloworld'>
                            Hello World
                        </a>
                    </ul>
                </section>
                <div id='helloworld' className='reveal-modal' data-reveal>
                    <h2>
                        Hello World
                    </h2>
                    <p>Hello Hello</p>
                    <a className='close-reveal-modal'>Close</a>
                </div>
            </nav>
        );
    },
    componentDidMount() {
        foundation.initialize();
    }
});

module.exports = HeaderMenu;