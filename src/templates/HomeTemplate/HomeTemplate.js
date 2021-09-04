import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => { // path, exact, Component

    const {Component,...restProps} = props;


    return <Route {...restProps} render={(propsRoute)=>{ // tra lai props.location, props.history, props.match
        return <Fragment>
            <Header {...propsRoute} />
            <HomeCarousel />

            <Component {...propsRoute} />


            <footer className="bg-black h-10 text-white">
                This is footer
            </footer>
        </Fragment>
    }} />
}