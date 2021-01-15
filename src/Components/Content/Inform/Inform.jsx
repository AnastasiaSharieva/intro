import React from 'react';
import { Block, Top, Middle, H3_, Bottom, Button_, Card, Parag, Span_, H2_, Block_house, H3_first, BlockH3 } from '../ContentStyle';
import { ReactComponent as Logo } from '../../../assets/house-icon.svg';
import image from '../../../assets/photo.svg';

const Inform = ({ name, number, promotions, irr, equity, income, start, distributionPeriod }) => {
    return (
        <Block >
            <Top>
                <Block_house>
                    <Logo />
                    <H2_ >{name}</H2_>
                </Block_house>
                <H3_first >Available Shares: {number}</H3_first>
            </Top>
            <Middle>
                <img src={image} />
                <BlockH3><H3_ >{promotions}</H3_></BlockH3>
            </Middle>
            <Bottom>
                <Card>
                    <Parag>Targeted Investor IRR <Span_>{irr}%</Span_> </Parag>
                    <Parag>Targeted Equity Multiple <Span_>{equity}%</Span_></Parag>
                    <Parag>Targeted Avarage Cash Yield <Span_>{income}%</Span_></Parag>
                    <Parag>Distribution Commencement <Span_>{start}%</Span_></Parag>
                    <Parag>Distribution Period <Span_>{distributionPeriod}fffff</Span_></Parag>
                </Card>
                <Button_>TRADE NOW</Button_>
            </Bottom>
        </Block>
    )
}

export default Inform;