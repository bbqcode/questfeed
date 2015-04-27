import Fluxible from "fluxible";

import Application from "./components/Application";
import RouteStore from "./stores/RouteStore";


const app = new Fluxible({
    component: Application,
    stores: [
        RouteStore
    ]
});

export default app;