var QUESTS = [];

export default {
    name: "quests",

    read: function (req, resource, params, config, callback) {
        setTimeout(function () {
            callback(null, QUESTS.concat());
        }, 1000);
    },
    create: function (req, resource, params, body, config, callback) {
        QUESTS.push(params);

        setTimeout(function () {
            callback(null, params);
        }, 1000);
    }
};
