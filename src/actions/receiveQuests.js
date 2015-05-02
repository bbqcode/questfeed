export default function (context, payload, done) {

    context.dispatch('RECEIVE_QUESTS_START', payload);

    context.service.read(function (err, quests) {
        if (err) {
            context.dispatch('RECEIVE_QUESTS_FAILURE', payload);
            done();
        } else {
            context.dispatch('RECEIVE_QUESTS_SUCCESS', quests);
            done();
        }
    });
};