import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';


function News() {

    const [news, setNews] = useState();

    const options = {
       method: 'GET',
       url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
       headers: {
         'X-RapidAPI-Key': '48bea04ea7msh5534de7c9727360p1394b8jsnb4f553af3bda',
         'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
       }
};

    const fetchNews = async () => {
        let { data }  = await axios.request(options);
        setNews(data.data);
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
                    {news.slice(0, 20).map((card) => {
                        return (
                            <Grid item lg={6} md={6} sm={12}>
                                <Link to={card.url} target='_blank'>
                                    <Paper elevation={10} className='newsCard'>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", height: "40%", paddingLeft: 15, paddingRight: 15 }}>
                                            <div style={{ width: "75%", textAlign: "justify"}}>{card.title}</div>
                                            <img src={card?.thumbnail || demoimage} alt='img' style={{ maxWidth: "25%", maxHeight: "85%",margin: "10px" }} />
                                        </div>
                                        <div className="newsDescription">{card.description > 100 ? `${card.description.substring(0, 100)}...` : card.description}</div>
                                        {/* <div style={{height:"15%", display:"flex", justifyContent:"flex-start", alignItems:"center",paddingLeft:15,paddingRight:15 }}>
                                            <Avatar src={card.provider[0]?.image?.thumbnail?.contentUrl || demoimage} sx={{width:30, height:30}} />
                                            <div style={{width:"100%",display:"flex", justifyContent:"flex-start",marginLeft:"15px"}}>{card.provider[0].name}</div>
                                            <div style={{width:"100%",display:"flex", justifyContent:"flex-end"}}>{moment(card.datePublished).startOf("ss").fromNow()}</div>
                                        </div> */}
                                        <div style={{height: "15%", paddingLeft: 15, paddingRight: 15 }}>
                                            {/* <div>
                                                <div style={{ float: 'left' }}><Avatar src={card.provider[0]?.image?.thumbnail?.contentUrl || demoimage} sx={{ width: 30, height: 30 }} /></div>
                                                <div style={{ float: "left", marginTop:"6px", marginLeft: "15px" }}>{card.provider[0].name}</div>
                                            </div>*/
                                            <div style={{ float: "right", marginTop:"6px" }}>{moment(card.createdAt).startOf("ss").fromNow()}</div> }
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
