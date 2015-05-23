import uuid from "node-uuid";
import { navigateAction } from "fluxible-router";

export default function (context, payload, done) {
    var data = payload.data;
    var newQuest = {
        id: uuid.v4(),
        name: data.name,
        description: data.description,
        experience: data.experience,

        latitude: data.latitude,
        longitude: data.longitude,

        isPublic: data.isPublic
    };

    context.dispatch("CREATE_QUEST_START", newQuest);

    context.service.create("quests", newQuest, {}, function (err, quest) {
        if (err) {
            context.dispatch("CREATE_QUEST_FAILURE", newQuest);
            done();
            return;
        }

        context.dispatch("CREATE_QUEST_SUCCESS", quest);

        context.executeAction(navigateAction, {
            url: payload.destination.to
        });

        done();
    });
}
