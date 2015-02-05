var Reflux = require('reflux');

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
    QuestActions.createQuest.failed({
        message: 'Nope.js'
    });
});

QuestActions.getQuests.listen((amount) => {
    QuestActions.getQuests.completed();
});

module.exports = QuestActions;