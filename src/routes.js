import Home from "./pages/Home";
import Quests from "./pages/Quests";
import CreateQuest from "./pages/CreateQuest";

import receiveQuests from "./actions/receiveQuests";

export default {
    home: {
        path: "/",
        method: "get",
        handler: Home,
        label: "Home",
        action(context, payload, done) {
            done();
        }
    },
    quests: {
        path: "/quests",
        method: "get",
        handler: Quests,
        label: "Quests",
        action: receiveQuests
    },
    createQuest: {
        path: "/createQuest",
        method: "get",
        handler: CreateQuest,
        label: "CreateQuest",
        action(context, payload, done) {
            done();
        }
    }
};
