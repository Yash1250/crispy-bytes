import React from "react";
import ReactDOM  from "react-dom/client";

import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import Contact from "./components/contact";
import About from "./components/about";
import Error from "./components/error";
import RestroMenu from "./components/restroMenu";
import {Provider} from "react-redux";

import {createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import ourStore from "./utils/ourStore";
import Cart from "./components/Cart";

import { Auth0Provider } from '@auth0/auth0-react';


let Layout = ()=>(
    <Auth0Provider
    domain="dev-lbn3ir7eezrpoz3m.us.auth0.com"
    clientId="ocbI2t3bYlIACIQf7dloWjP9vTgQkLNf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={ourStore}>
      <Header/>
      <Outlet/>
      <Footer/>
     </Provider>
     </Auth0Provider>
    )

const configRouter = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>,
            },
            {
                path : "/about",
                element : <About/>,
            },
            {
                path : "/contact",
                element : <Contact/>,
            },
            {
                path : "/restro/:resId",
                element : <RestroMenu/>,
            },
            {
                path : "/cart",
                element : <Cart/>,
            },
        ]
    },   
   
]);   

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={configRouter}/>);