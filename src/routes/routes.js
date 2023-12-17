import config from '~/config'

// Layouts
import { HeaderOnly } from '~/layouts';
// Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Live from '~/pages/Live';
//Ko cần đăng nhập vẫn xem đc 
const publishRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
];
//Cần đăng nhập mới xem đc 
const privateRoutes = [

];

export { publishRoutes, privateRoutes }