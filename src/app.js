import Fluxible from "fluxible";

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

export default app;
