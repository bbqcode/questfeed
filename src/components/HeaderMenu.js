import React from "react";

export default React.createClass({
    render() {
        return (
            <nav className="top-bar" data-topbar role="navigation">
                <ul className="title-area">
                    <li className="name">
                        <h1>
                            <a href="/">questfeed</a>
                        </h1>
                    </li>
                </ul>
                <section className="top-bar-section">
                    <ul className="right">
                        <a className="button" href="/Quests">Quests</a>
                        <a className="button" href="/CreateQuest">Create Quest</a>
                        <a className="button" href="#" data-reveal-id="helloworld">
                            Hello World
                        </a>
                    </ul>
                </section>
                <div id="helloworld" className="reveal-modal" data-reveal>
                    <h2>
                        Hello World
                    </h2>
                    <p>Hello Hello</p>
                    <a className="close-reveal-modal">Close</a>
                </div>
            </nav>
        );
    },
    componentDidMount() {
        if (process.env.BROWSER) {
            var foundation = require("../foundation");
            foundation.initialize();
        }
    }
});
