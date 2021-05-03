import React from 'react';
import MyNominations from '../components/My-Nominations/MyNominations'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainerBrowse } from '../containers/Header-browse';
import wishlistText from '../homeSnippets/wishlistText.json';




export default function Nomination() {
  console.log(wishlistText)
    
 return(
      <>
      <HeaderContainerBrowse />
      <MyNominations movie={wishlistText} />
      <FooterContainer />

      </>
      )
}
