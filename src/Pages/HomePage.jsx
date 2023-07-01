import React from "react";
import Banner from "../Components/Banner/Banner.jsx"
import CoinsTable from "../Components/CoinsTable.jsx";
import News from "../Components/News.jsx";
import Footer from "../Components/Footer.jsx";
function HomePage(){
    return(<div>
        <Banner />
        <CoinsTable />
        <News />
        <Footer />
    </div>);
}
export default HomePage;