import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

//懒加载路由
const Home = () => import("../pages/Home") //首页

export default new Router({
    routes: [
        {
            path:"/",
            redirect:"/home"
        },
        {
            name:"home",
            path:"/home",
            component:Home,
        }
    ]
})
