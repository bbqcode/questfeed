import React from "react";
import { connectToStores } from "fluxible/addons";

import QuestStore from "../stores/QuestStore";

var QuestList = React.createClass({
    propTypes: {
        quests: React.PropTypes.object
    },

    getInitialState() {
        return { quests: QuestStore.quests };
    },

    render() {
        var quests = [];
        for (var i in this.props.quests) {
            if (this.props.quests.hasOwnProperty(i)) {
                var quest = this.props.quests[i];
                quests.push(<li key={quest.id}>{quest.name}</li>);
            }
        }
        return (<ul>{quests}</ul>);
    }
});


QuestList = connectToStores(QuestList, [QuestStore], function (stores) {
    return {
        quests: stores.QuestStore.getQuests()
    };
});

export default QuestList;
