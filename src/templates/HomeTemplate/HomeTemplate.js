import { Fragment, useEffect, useState } from "react";
import { Route } from "react-router";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import {HeaderMobile} from "./Layout/Header/HeaderMobile";

export const HomeTemplate = (props) => { // path, exact, Component
    const [state,setState] = useState({
        width:window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(()=>{
        window.onload = ()=>{
            setState({
               width:window.innerWidth,
               height: window.innerHeight,
            })
        };
        window.onresize = ()=>{
            setState({
               width:window.innerWidth,
               height: window.innerHeight,
            })
        };
    },[]);

    useEffect(() => {
        window.scrollTo(0,0);
    });


    const {Component,...restProps} = props;
    
    const renderHeader = (propsRoute) =>{
        if(state.width <= 768){
       return <HeaderMobile />
    } else{
        return <Header />
    }
    }
    
    
    

    return <Route {...restProps} render={(propsRoute)=>{ // tra lai props.location, props.history, props.match
        return <Fragment>
            {renderHeader(propsRoute)}

            <Component {...propsRoute} />
            <hr className="mt-5" />
            <Footer />
        </Fragment>
    }} />
}