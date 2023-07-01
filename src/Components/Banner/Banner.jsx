import React from "react";
import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel";
function Banner() {
    return (<div className="banner">
        <Container className="bannerContent">
            <div className="tagline">
                <Typography variant="h2" style={{ fontWeight: "bold", marginBottom: 15, fontFamily: "Montserrat" }}>
                    Crypto Hub
                </Typography>
                <Typography variant="subtitle2" style={{ color: "darkgrey", textTransform: "capitalize", fontFamily: "Montserrat" }}>
                    Get All The Info Regarding Your Favourite Crypto Currency
                </Typography>
            </div>
            <Carousel />
        </Container>
    </div>)
}
export default Banner;