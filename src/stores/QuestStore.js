import { createStore } from "fluxible/addons";

export default createStore({
    storeName: "QuestStore",

    handlers: {
        "RECEIVE_QUEST_SUCCESS": "onGetQuestCompleted",
        "RECEIVE_QUEST_FAILURE": "onGetQuestFailed",

        "RECEIVE_QUESTS_SUCCESS": "onGetQuestsCompleted",
        "RECEIVE_QUESTS_FAILURE": "onGetQuestsFailed",

        "CREATE_QUEST_SUCCESS": "onCreateQuestCompleted",
        "CREATE_QUEST_FAILURE": "onCreateQuestFailed"
    },

    initialize() {
        this.quests = { };
    },

    getQuests: function () {
        return this.quests;
    },

    onGetQuestCompleted(quest) {
        this.quests[quest.id] = quest;
        this.emitChange();
    },
    onGetQuestFailed(error) {
        console.error(error.message);
        this.emitChange();
    },

    onGetQuestsCompleted(quests) {
        this.quests = quests;
        this.emitChange();
    },
    onGetQuestsFailed(error) {
        console.error(error.message);
        this.emitChange();
    },

    onCreateQuestCompleted(quest) {
        this.quests[quest.id] = quest;
        this.emitChange();
    },
    onCreateQuestFailed(error) {
        console.error(error.message);
        this.emitChange();
    },

    dehydrate: function () {
        return {
            quests: this.quests
        };
    },
    rehydrate: function (state) {
        this.quests = state.quests;
    }
});
