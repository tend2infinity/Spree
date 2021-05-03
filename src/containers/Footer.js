import React,{useEffect} from 'react'
import {Footer} from '../components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { grey } from '@material-ui/core/colors';
import AOS from 'aos';
import 'aos/dist/aos.css';



export function FooterContainer() {
        useEffect(() => {
            AOS.init({duration: 1500, delay: 500});
        }, [])
    return (
        <Footer data-aos="fade-left">
            <Footer.Title>Developer Contact</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Text >Soumya Singh</Footer.Text>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link >
                        <a href="https://github.com/tend2infinity" >
                            <GitHubIcon fontSize="large" style={{ color: grey[600]}}/>
                        </a>
                    </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link >
                        <a href="https://www.linkedin.com/in/soumya-singh12/ "><LinkedInIcon fontSize="large" style={{ color: grey[600]}}/>
                        </a>
                    </Footer.Link>
                </Footer.Column>
                
              
            </Footer.Row>
        </Footer>
    )
}