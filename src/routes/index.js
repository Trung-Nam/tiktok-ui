// Layouts
import { HeaderOnly } from "~/components/Layout";
// Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
//Ko cần đăng nhập vẫn xem đc 
const publishRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: '/:nickname', component: Profile },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/search", component: Search, layout: null }
];
//Cần đăng nhập mới xem đc 
const privateRoutes = [

];

export { publishRoutes, privateRoutes }