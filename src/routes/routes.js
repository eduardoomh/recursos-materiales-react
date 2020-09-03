import Inicio from "../pages/Inicio/Inicio.js";
import LayoutBasic from "../layout/LayoutBasic/LayoutBasic";

const routes = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Inicio,
        exact: true
    }
];

export default routes;