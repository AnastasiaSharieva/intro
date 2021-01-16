import React from 'react';
import Inform from './Inform/Inform';
import More from './More/More.jsx';
import { Content_, Div_ } from './ContentStyle';


const Content = ({ items }) => {

    return (
        <div>
            <Content_>
                <Div_>
                    {
                        items.map((obj) => (
                            <Inform key={obj.number < 6} {...obj} />
                        ))
                    }
                </Div_>
                <More />
            </Content_>
        </div>
    )
}


export default Content;