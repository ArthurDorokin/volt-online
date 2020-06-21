import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export const Banner = () => {

    return (
        <div className="banner">
            <NavLink to="/">
                <div className="banner-image">
                    <img className="banner-img" src="../img/content/83061282526452.jpg" alt="" title=""></img>
                </div>
            </NavLink>
        </div>
    )
};