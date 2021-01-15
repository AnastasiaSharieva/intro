import React from 'react';
import { Footer_, DataBlock, LogoBlock, LH2_, ImgInscription, Par_, Par_2, Spans, LiBlock, LiS, Par_2Op } from './FooterStyle';
import inscription from '../../assets/schroders.svg';


const Footer = () => {
    return (
        <Footer_>
            <DataBlock>
                <LogoBlock>
                    <ImgInscription><img src={inscription} /></ImgInscription>
                    <LH2_>Shroders Blended Portfolio - Fall 2019</LH2_>
                </LogoBlock>
                <Par_>Direct Investment in Alternative Assets Blockchain-based platform</Par_>

                <Par_2>© 2019 Shroders Blended Portfolio<Spans>71-75 Shelton Street WC2H 9JQ London</Spans></Par_2>
            </DataBlock>
            <LiBlock>
                <ul>
                    <Par_2Op>PRODUCT</Par_2Op>
                    <LiS>Platform</LiS>
                    <LiS>Use Cases</LiS>
                    <LiS>Invest in Assets</LiS>
                    <LiS>Raise capital</LiS>
                    <LiS>Request a demo</LiS>
                </ul>
                <ul>
                    <Par_2Op>ABOUT</Par_2Op>
                    <LiS>Company</LiS>
                    <LiS>Events</LiS>
                    <LiS>Blog</LiS>
                    <LiS>Contact Us</LiS>
                </ul>
            </LiBlock>



        </Footer_>
    )
}

export default Footer;