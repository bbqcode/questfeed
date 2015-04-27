import React from "react";
import { handleHistory } from "fluxible-router";
import { provideContext } from "fluxible/addons";

import HeaderMenu from "./HeaderMenu";

if (process.env.BROWSER) {
    require("../../app/styles/main.scss");
}

var Application = React.createClass({
    contextTypes: {
        getStore: React.PropTypes.func,
        executeAction: React.PropTypes.func
    },
    render() {
        var Handler = this.props.currentRoute.get("handler");

        //render content
        return (
            <div>
                <HeaderMenu />
                <div className='main container'>
                    <Handler/>
                </div>
            </div>
        );
    }
});

Application = handleHistory(Application, { enableScroll: false });

Application = provideContext(Application);

export default Application;
