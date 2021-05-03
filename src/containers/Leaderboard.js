import React , {useEffect, useState} from 'react';
// import './App.css';
import LeaderboardText from '../homeSnippets/LeaderboardText'
import {Leaderboard} from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

 

export function LeaderboardContainer({movieID, vote, title, subtitle, image}) {
    
    const [loading,setLoading] = useState(true)
    
    
    useEffect(() => {
        AOS.init({duration: 1500, delay: 500});
    }, [])
  return (
      <div>
      <Leaderboard.Container>
        <Leaderboard key={movieID} direction="row-reverse" >
          <Leaderboard.Pane>
            <Leaderboard.Title data-aos="fade-up">{title}</Leaderboard.Title>
            <Leaderboard.SubTitle data-aos="fade-up">Votes: {vote} </Leaderboard.SubTitle>
            <Leaderboard.SubTitle data-aos="fade-up">{subtitle}</Leaderboard.SubTitle>
          </Leaderboard.Pane> 
          <Leaderboard.Pane>
           <Leaderboard.Image data-aos="flip-up" src={image} alt={"Image is not available"} />
          </Leaderboard.Pane>
        </Leaderboard>
      </Leaderboard.Container>
      </div>
     

  );
}


