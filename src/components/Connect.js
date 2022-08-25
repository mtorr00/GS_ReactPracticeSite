import React from "react"
import { NavBar } from "./Navbar";
import { useNavigate } from "react-router-dom"
import { Banner } from "./BannerConnect";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

export const Connect = (props) => {
    const navigate = useNavigate();
    return (
        <main>
            <NavBar></NavBar>
            <Banner />
        </main>
    );
}
