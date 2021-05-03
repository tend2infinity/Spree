import React , {useEffect, useState} from 'react';
import {LeaderboardContainer} from './Leaderboard.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

 

export function LeaderboardOuterContainer({movie}) {
    
 
    useEffect(() => {
        AOS.init({duration: 1500, delay: 500});
    }, [])
  return (
    <>
    <h1 style={{textAlign: "center" }}>The Top Movies nominated by our community!</h1>
    <div style={{display:"flex", flexDirection:"row" , justifyContent:"center" , flexBasis: "40%" , flexWrap: "wrap"}}>
       { movie.map((item) => {
        //  console.log(item.votes);
        return (<LeaderboardContainer movieID={item.movieID} vote={item.votes} title={item.title} subtitle={item.subTitle} image={item.image}/>)
    })}
    </div>
    </>
  );
}


