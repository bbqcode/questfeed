import Home from "../app/scripts/pages/Home";

export default {
    home: {
        path: "/",
        method: "get",
        handler: Home,
        label: "Home",
        action(context, payload, done) {
            done();
        }
    }
};
