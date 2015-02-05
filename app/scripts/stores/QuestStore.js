var Reflux = require('reflux');
var QuestActions = require('../actions/QuestActions');

var QuestStore = Reflux.createStore({
    listenables: QuestActions,

    init() {
        this.quests = { };
    },

    onGetQuestCompleted(quest) {
        this.quests[quest.id] = quest;
        this.trigger();
    },
    onGetQuestFailed(error) {
        console.error(error.message);
        this.trigger();
    },

    onGetQuestsCompleted(quests) {
        this.quests = quests;
        this.trigger();
    },
    onGetQuestsFailed(error) {
        console.error(error.message);
        this.trigger();
    },

    onCreateQuestCompleted(quest) {
        this.quests[quest.id] = quest;
        this.trigger();
    },
    onCreateQuestFailed(error) {
        console.error(error.message);
        this.trigger();
    }
});

module.exports = QuestStore;