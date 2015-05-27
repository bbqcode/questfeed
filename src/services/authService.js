import db from "../database/db";
import uuid from "node-uuid";

export default {
    name: "auth",

    authenticate: function (req, resource, params, config, callback) {
        console.log(JSON.stringify(params));
        let data = {
            id: uuid.v4(),
            googleId: params.id
        };

        db.User
            .findOrCreate({ where: { googleId: params.id }, defaults: data })
            .spread(function(user) {
                callback(null, user);
            });
    }
};
