import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';


function News() {

    const [news, setNews] = useState();

    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency',
        params: {
            safeSearch: 'Off',
            textFormat: 'Raw',
            count: 10,
            freshness: 'Day'
        },
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    const fetchNews = async () => {
        let { data } = await axios.request(options);
        setNews(data.value);
    }
    useEffect(() => {
        fetchNews();
    }, [])

    const demoimage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

    return (
        <Container style={{ textAlign: "center", fontFamily: "Montserrat" }}>
            <Typography
                variant="h4"
                style={{ margin: 20 }}
            >
                Crypto News
            </Typography>
            {!news ? (<LinearProgress style={{ backgroundColor: "gold" }} />) :
                <Grid container spacing={6}>
                    {news.map((card) => {
                        return (

                            <Grid item lg={6} md={6} sm={12}>
                                <Link to={card.url} target='_blank'>
                                    <Paper elevation={10} className='newsCard'>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", height: "35%", paddingLeft: 15, paddingRight: 15 }}>
                                            <div style={{ width: "75%", textAlign: "justify" }}>{card.name}</div>
                                            <img src={card?.image?.thumbnail?.contentUrl || demoimage} alt='img' style={{ maxWidth: "25%", margin: "10px" }} />
                                        </div>
                                        <div className="newsDescription">{card.description > 100 ? `${card.description.substring(0, 100)}...` : card.description}</div>
                                        {/* <div style={{height:"15%", display:"flex", justifyContent:"flex-start", alignItems:"center",paddingLeft:15,paddingRight:15 }}>
                                            <Avatar src={card.provider[0]?.image?.thumbnail?.contentUrl || demoimage} sx={{width:30, height:30}} />
                                            <div style={{width:"100%",display:"flex", justifyContent:"flex-start",marginLeft:"15px"}}>{card.provider[0].name}</div>
                                            <div style={{width:"100%",display:"flex", justifyContent:"flex-end"}}>{moment(card.datePublished).startOf("ss").fromNow()}</div>
                                        </div> */}
                                        <div style={{height: "15%", paddingLeft: 15, paddingRight: 15 }}>
                                            <div>
                                                <div style={{ float: 'left' }}><Avatar src={card.provider[0]?.image?.thumbnail?.contentUrl || demoimage} sx={{ width: 30, height: 30 }} /></div>
                                                <div style={{ float: "left", marginTop:"6px", marginLeft: "15px" }}>{card.provider[0].name}</div>
                                            </div>
                                            <div style={{ float: "right", marginTop:"6px" }}>{moment(card.datePublished).startOf("ss").fromNow()}</div>
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>

                        )
                    })}

                </Grid>}
        </Container>
    )
}

export default News
