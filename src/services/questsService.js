
var _quests = [];

export default {
    name: 'quests',

    read: function (callback) {
        setTimeout(function () {
            callback(null, _quests.concat());
        }, 1000);
    },
    create: function (quest, callback) {
        _quests.push(quest);

        setTimeout(function () {
            callback(null, quest);
        }, 1000);
    }
};