import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

//all pages that are part of our app

/** writing bunch of components that are going to be dsiplayed
 * as we navigate around the site
 */

/**
 * giving users link to navigate around the site, shown in home component
 */
export function Home() {
    return (
        <div>
            <h1>THIS IS THE HOME</h1>
            <nav>
                <Link to = 'about'>About</Link>
                <Link to = 'product'>Product</Link>
            </nav>
        </div>
    )
}
//outlet is responsible for displaying nested components , which are services and location for about!!
export function About() {
    return (
        <div>
            <h1>THIS IS THE ABOUT US PAGE</h1>
            <Outlet/>
        </div>
    )
}

export function Product() {
    return (
        <div>
            <h1>THIS IS THE PRODUCT PAGE</h1>
        </div>
    )
}

//this is for nested routing for example /about/services
export function Services() {
    return (
        <div>
            <h1>THIS IS our about services page</h1>
        </div>
    )
}
//this is for nested routing2 for example /about/location
export function Location() {
    return (
        <div>
            <h1>THIS IS OUR ABOUT LOCATION PAGE</h1>
        </div>
    )
}

export function Whops404(){
    let location = useLocation();
    //use location hook returns our current location
    console.log('location----', location);
    return (
        <div>
            <h1>
                {location.pathname} PAGE NOT FOUND 
            </h1>
        </div>
    )
}