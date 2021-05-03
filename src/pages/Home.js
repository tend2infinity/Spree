import React from 'react';
import {CutletContainer} from '../containers/Cutlet'
import {Intro} from '../components'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Header';


export default function Home(){
    return (
        <>
        <HeaderContainer>
        <Intro>
            <Intro.Title>All your favourite movies, web series, podcast at one place! </Intro.Title>
            <Intro.SubTitle> Start with getting yourself registered!! </Intro.SubTitle>
            <Intro.Signup to="/signup">Signup and register yourself!</Intro.Signup>
        </Intro>

        </HeaderContainer>
        <CutletContainer />
        <FooterContainer />            
        </>
    )
}
