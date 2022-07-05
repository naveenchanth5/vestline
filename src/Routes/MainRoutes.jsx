import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
import Contact from "../Pages/Contact"
import News from "../Pages/News"
import Header from "../Common/Header"
import Footer from "../Common/Footer"
import Vets from "../Pages/Vets"
import Adoption from "../Pages/Adoption"
import BuySale from "../Pages/BuySale"
import MatchFind from "../Pages/MatchFind"



const MainRoutes = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path={"/"} element={<Home />} />
                    <Route path={"/vets"} element={<Vets />} />
                    <Route path={"/news"} element={<News />} />
                    <Route path={"/Shop"} element={<Shop />} />
                    <Route path={"/adoption"} element={<Adoption />} />
                    <Route path={"/Matchfind"} element={<MatchFind />} />
                    <Route path={"/buysale"} element={<BuySale />} />
                    

                    <Route path={"/contact"} element={<Contact />} />
                </Routes>
                <Footer />
            </Router>


        </div >
    )
}

export default MainRoutes