import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
import Footer from "./Layout/Footer/Footer";

export const HomeTemplate = (props) => { // path, exact, Component

    const {Component,...restProps} = props;


    return <Route {...restProps} render={(propsRoute)=>{ // tra lai props.location, props.history, props.match
        return <Fragment>
            <Header {...propsRoute} />
            <HomeCarousel />

            <Component {...propsRoute} />
            <hr className="mt-5" />
            <Footer />
        </Fragment>
    }} />
}