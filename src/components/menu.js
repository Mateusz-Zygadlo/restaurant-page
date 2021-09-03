import menuPage from "./components/menuPage";
import navbar from "./components/navbar";
import mediaHelpers from "./components/mediaHelpers";
import handleNavLinks from "./components/handleNavLinks";

const menu = () => {
    navbar();
    mediaHelpers();
    handleNavLinks();
    menuPage();
}

export default menu;