import React from "react";
import {handleHistory} from "fluxible-router";
import {provideContext} from "fluxible/addons";

var Application = React.createClass({
    contextTypes: {
        getStore: React.PropTypes.func,
        executeAction: React.PropTypes.func
    },
    render() {
        var Handler = this.props.currentRoute.get("handler");
        //render content
        return <Handler />;
    }
});

Application = handleHistory(Application, { enableScroll: false });

Application = provideContext(Application);

export default Application;
