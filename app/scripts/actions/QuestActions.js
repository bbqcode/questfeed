var Reflux = require('reflux');
var uuid = require('node-uuid');

var DUMMY_DATA = { };

(() => {
    for (var i = 0; i < 10; i++) {
        var id = uuid.v4();
        DUMMY_DATA[id] = {
            id: id,
            name: 'Quest name ' + i + '!!!'
        };
    }
})();

var QuestActions = Reflux.createActions({
    'getQuest': { asyncResult: true },
    'createQuest': { asyncResult: true },
    'getQuests': { asyncResult: true }
});

QuestActions.getQuest.listen((id) => {
    QuestActions.getQuest.completed(
        { 
            id: id,
            name: 'The quest of Tests'
        }
    );
});

QuestActions.createQuest.listen((quest) => {
    if (!quest || !quest.name) {
        QuestActions.createQuest.failed({
            message: 'Nope.js'
        });
    } else {
        quest.id = uuid.v4();
        // Add quest inside the fake map object
        DUMMY_DATA[quest.id] = quest;

        QuestActions.createQuest.completed(quest);
    }
});

QuestActions.getQuests.listen(() => {
    QuestActions.getQuests.completed(DUMMY_DATA);
});

module.exports = QuestActions;