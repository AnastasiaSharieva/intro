import React from 'react';
import { ReactComponent as Logo } from '../../../assets/arrows.svg';
import { BlockButt_, MoreBut } from './MoreStyle';


const More = () => {
    return (
        <BlockButt_>
            <Logo />
            <MoreBut>
                Show More
            </MoreBut>
        </BlockButt_>

    )
}

export default More;