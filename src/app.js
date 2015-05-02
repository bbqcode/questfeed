import Fluxible from "fluxible";
import fetchrPlugin from "fluxible-plugin-fetchr";

import Application from "./components/Application";
import RouteStore from "./stores/RouteStore";
import QuestStore from "./stores/QuestStore";

const app = new Fluxible({
    component: Application,
    stores: [
        RouteStore,
        QuestStore
    ]
});

app.plug(fetchrPlugin({
    xhrPath: "/api"
}));

export default app;
