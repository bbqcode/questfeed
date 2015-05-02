import uuid from "node-uuid";

export default function (context, payload, done) {
    var newQuest = {
        id: uuid.v4(),
        name: payload.name,
        description: payload.description,
        experience: payload.experience,

        latitude: payload.latitude,
        longitude: payload.longitude,

        isPublic: payload.isPublic
    };

    context.dispatch("CREATE_QUEST_START", newQuest);

    context.service.create("quests", newQuest, {}, function (err, quest) {
        if (err) {
            context.dispatch("CREATE_QUEST_FAILURE", newQuest);
            done();
            return;
        }

        context.dispatch("CREATE_QUEST_SUCCESS", quest);
        done();
    });
}
