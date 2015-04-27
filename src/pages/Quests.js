var React = require("react");

//var Reflux = require("reflux");
//var { Navigation } = require("react-router");

var QuestActions = require("../../app/scripts/actions/QuestActions");
var QuestStore = require("../../app/scripts/stores/QuestStore");

module.exports = React.createClass({
    //mixins: [ Reflux.listenTo(QuestStore, "onChange"), Navigation ],

    getInitialState() {
        return { quests: QuestStore.quests };
    },

    componentDidMount() {
        QuestActions.getQuests();
    },

    onChange: function () {
        this.setState({ quests: QuestStore.quests });
    },

    render() {
        var quests = [];
        for (var i in this.state.quests) {
            if (this.state.quests.hasOwnProperty(i)) {
                var quest = this.state.quests[i];
                quests.push(<li key={quest.id}>{quest.name}</li>);
            }
        }
        return (<ul>{quests}</ul>);
    }
});
