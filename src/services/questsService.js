import db from "../database/db";

export default {
    name: "quests",

    read: function (req, resource, params, config, callback) {
        db.Quest.findAll().then(function(quests) {
            callback(null, quests);
        });
    },
    create: function (req, resource, params, body, config, callback) {
        db.Quest.create(params).then(function () {
            callback(null, params);
        });
    }
};
