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

QuestActions.getQuests.listen(() => {
    var FAKEDATA = {
        'ID1': {
            id: "ID1",
            name: 'ID1 The quest of Tests'
        },
        'ID2': {
            id: "ID2",
            name: 'ID2 The quest of Tests'
        },
        'ID3': {
            id: "ID3",
            name: 'ID3 The quest of Tests'
        },
        'ID4': {
            id: "ID4",
            name: 'ID4 The quest of Tests'
        },
        'ID5': {
            id: "ID5",
            name: 'ID5 The quest of Tests'
        },
        'ID6': {
            id: "ID6",
            name: 'ID6 The quest of Tests'
        }
    };
    QuestActions.getQuests.completed(FAKEDATA);
});

module.exports = QuestActions;