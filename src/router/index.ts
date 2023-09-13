import { createWebHistory, createRouter } from "vue-router";
import ExcelDemo from "../views/excelDemo.vue"
import Home from '../views/index.vue'

const routes = [
    {
        path: "/excelDemo",
        name: "excelDemo",
        component: ExcelDemo,
    },
    {
        path: "/",
        name: "home",
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;