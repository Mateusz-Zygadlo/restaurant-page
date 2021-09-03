import navbar from "./components/navbar";
import mediaHelpers from "./components/mediaHelpers";
import handleNavLinks from "./components/handleNavLinks";
import homePage from "./components/homePage";

const mainPage = () => {
    navbar();
    mediaHelpers();
    homePage();
    handleNavLinks();
}

export default mainPage;