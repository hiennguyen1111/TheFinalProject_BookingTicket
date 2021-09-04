import "./App.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const history = createBrowserHistory();

// import DemoGrid from './TailWindComponent/DemoGrid';
// import PaddingMarginDemo from './TailWindComponent/PaddingMarginDemo';
// import WidthHeightDemo from './TailWindComponent/WidthHeightDemo';
// import FlexDemo from './TailWindComponent/FlexDemo';
// import TextBackgroundDemo from './TailWindComponent/TextBackgroundDemo';
// import BorderRadiusDemo from './TailWindComponent/BorderRadiusDemo';
// import ShadowResponsiveDemo from './TailWindComponent/ShadowResponsiveDemo';
// import CustomCss from './TailWindComponent/CustomCss';
// import BaiTapLayoutTailwindCss from './TailWindComponent/BaiTapLayoutTailwindCss/BaiTapLayoutTailwindCss';
// import UseGrid from './TailWindComponent/BaiTapLayoutResponsiveTailwind/BaiTapLayoutResponsiveTailwind';
// import UseFlex from './TailWindComponent/BaiTapLayoutResponsiveTailwind/UseFlex';
// import JoinDemo from './Lodash/JoinDemo';
// import FirstLastLodash from './Lodash/FirstLastLodash';
// import ChunkLodash from './Lodash/ChunkLodash';
// import FillLodash from './Lodash/FillLodash';
// import SortByLodash from './Lodash/SortByLodash';
// import Include from './Lodash/Include';
// import UniqLodash from './Lodash/UniqLodash';
// import FlattenLodash from './Lodash/FlattenLodash';
// import CompareObjectArray from './Lodash/CompareObjectArray';
// import LayoutMenu from './BaiTapTongHopLayoutMenu/LayoutMenu';

function App() {
  return (
    // <div className="App">
    //   {/* <DemoGrid /> */}
    //   {/* <PaddingMarginDemo /> */}
    //   {/* <WidthHeightDemo /> */}
    //   {/* <FlexDemo /> */}
    //   {/* <TextBackgroundDemo /> */}
    //   {/* <BorderRadiusDemo /> */}
    //   {/* <ShadowResponsiveDemo /> */}
    //   {/* <CustomCss /> */}
    //   {/* <BaiTapLayoutTailwindCss /> */}
    //   {/* <UseGrid /> */}
    //   {/* <UseFlex /> */}
    //   {/* <JoinDemo /> */}
    //   {/* <FirstLastLodash /> */}
    //   {/* <ChunkLodash /> */}
    //   {/* <FillLodash /> */}
    //   {/* <SortByLodash /> */}
    //   {/* <Include /> */}
    //   {/* <UniqLodash /> */}
    //   {/* <FlattenLodash /> */}
    //   {/* <CompareObjectArray /> */}
    //   {/* <LayoutMenu /> */}
    //  </div>

    <Router history={history}>
      <switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/login" exact Component={Login} />
        <HomeTemplate path="/register" exact Component={Register} />
        <HomeTemplate path="/" exact Component={Home} />
      </switch>
    </Router>
  );
}

export default App;
