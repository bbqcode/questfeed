import React from "react";
import { connectToStores } from "fluxible/addons";

import QuestStore from "../stores/QuestStore";
import receiveQuest from "../actions/receiveQuests";

var QuestList = React.createClass({
    contextTypes: {
        executeAction: React.PropTypes.func.isRequired
    },

    propTypes: {
        quests: React.propTypes.array
    },

    getInitialState() {
        return { quests: QuestStore.quests };
    },

    componentDidMount() {
        this.context.executeAction(receiveQuest, {});
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
