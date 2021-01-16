import styled from 'styled-components';

export const Content_ = styled.div`
width: 100%;
min-height: 1165px;
background-color:#E5E5E5;
padding: 60px 462px;
& section:nth-child(3n+1){
    margin: 0 35px 35px 0;
    }
& section:nth-child(3n+3){
    margin: 0 0 35px 35px;
    }
`;
export const Div_ = styled.div`
display:flex;
flex-wrap: wrap;

`;

export const Block = styled.section`
width: 285px;
height: 464px;
background: #FFFFFF;
box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
border-radius: 10px;
margin: 0 35px 35px 35px;
`;

export const Top = styled.div`
height:70px;
background: #0C174B;
border-radius: 10px 10px 0px 0px;
padding: 15px 20px 8px;
`;
 
export const Block_house = styled.div`
display:flex;
`;

export const H2_ = styled.h2`
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: #FFF;
margin: 0 45px 10.5px 5px;
`;
export const H3_first = styled.h3`
font-weight:400;
font-size: 15px;
line-height: 18px;
color: #FFF;
margin: 0 102px 0 0;
`;

export const Middle = styled.div`
height: 175px;
display:flex;
position: relative;
z-index:100;
`;

export const BlockH3 = styled.div`
height:40px;
width:100%;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 99.99%, rgba(0, 0, 0, 0.75) 100%);
position:absolute;
top: 130px;
`;
export const H3_ = styled.h3`
font-weight:500;
font-size: 16px;
line-height: 19px;
color: #FFF;
padding: 11px 141px 10px 20px;
`;

export const Bottom = styled.div`
height:219px;
padding: 25px 20px;
`;

export const Card = styled.div`
display:flex;
flex-direction:column;
`;

export const Parag = styled.p`
font-weight: 300;
font-size: 12px;
line-height: 14px;
margin-bottom:11px;
color: #747474;
text-align: left;
`;

export const Span_ = styled.span`
font-weight: 500;
font-size: 12px;
line-height: 14px;
float: right;
`;

export const Button_ = styled.button`
background: #188AAE;
border-radius: 3px;
width:160px;
height:30px;
margin: 14px 42px 0;
`;

