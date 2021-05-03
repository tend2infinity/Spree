import React from 'react';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainerBrowse } from '../containers/Header-browse';
import { LeaderboardOuterContainer } from '../containers/LeaderboardOuter'
import leaderboardText from '../homeSnippets/LeaderboardText.json';



export default function LeaderBoard() {

 return(
      <>

      <HeaderContainerBrowse />
      <LeaderboardOuterContainer movie={leaderboardText}/>
      <FooterContainer />
      </>
      )
}
