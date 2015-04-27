export default {
    home: {
        path: "/",
        method: "get",
        handler: require('../app/scripts/pages/Home'),
        label: 'Home',
        action(context, payload, done) {
            done();
        }
    }
};