var Reflux = require('reflux');

var QuestActions = Reflux.createActions({
    'getQuest': { asyncResult: true },
    'createQuest:': { asyncResult: true },
    'getQuests': { asyncResult: true }
});

QuestActions.getQuest.listen((id) => {
    this.completed(
        { 
            id: id,
            name: 'The quest of Tests'
        }
    );
});

QuestActions.createQuest.listen((quest) => {
    this.failed(
        { message: 'Nope.js' }
    );
});

QuestActions.getQuests.listen((amount) => {
    this.completed();
});