import React from 'react';
import Nav from './Navigation/Nav';
import { Wrapper, Head_, H1_, Button_ } from './HeadStyle';
import { ReactComponent as Logo } from '../../assets/icon.svg';
import { ReactComponent as Icon } from '../../assets/user-icon.svg';


const Head = () => {
    return (
        <Wrapper>
            <Head_>
                <Logo />
                <Nav />
                <Icon />
                <H1_>JOIN</H1_>
                <Button_>LOG IN</Button_>
            </Head_>
        </Wrapper>
    )
}

export default Head;