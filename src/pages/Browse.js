import React, {useContext, useEffect , useState} from 'react';

import MovieList from '../components/Movie-list/MovieList'

import { FooterContainer } from '../containers/Footer';
import { HeaderContainerBrowse } from '../containers/Header-browse';




export default function Browse() {

 return(
      <>

      <HeaderContainerBrowse />
     
      <MovieList url = "https://api.themoviedb.org/3/discover/movie?api_key=cd74296e33afa394a19ac0d3043856f2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1" />
      <FooterContainer /> 
      
      </>
      )
}
