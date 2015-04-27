import React from "react";
import { NavLink } from "fluxible-router";

export default React.createClass({
    render() {
        return (
            <nav className="top-bar" data-topbar role="navigation">
                <ul className="title-area">
                    <li className="name">
                        <h1>
                            <NavLink routeName="quests">questfeed</NavLink>
                        </h1>
                    </li>
                </ul>
                <section className="top-bar-section">
                    <ul className="right">
                        <li>
                            <NavLink routeName="quests">Quests</NavLink></li>
                        <li>
                            <NavLink routeName="createQuest">Create Quest</NavLink></li>
                        <li>
                            <a data-reveal-id="helloworld">Hello World</a>
                        </li>
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
