import "./App.css";
import { Suspense, lazy } from 'react';
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import {UserTemplate} from "./templates/UserTemplate/UserTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import Checkout from "./pages/Checkout/Checkout";
import Loading from "./components/Loading/Loading";


const CheckoutTemplateLazy = lazy(()=> import ('./templates/CheckoutTemplate/CheckoutTemplate'))

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
      <Loading />
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        {/* <Route path="/login" exact Component={Login} /> */}
        <Route path="/register" exact Component={Register} />
        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
        {/* <Suspense fallback={<h1>LOADING...</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}
        <UserTemplate path="/login" exact Component={Login} />


        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
