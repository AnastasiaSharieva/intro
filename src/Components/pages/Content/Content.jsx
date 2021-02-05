import React, { useState } from 'react';
import Inform from './Inform/Inform';
import More from './More/More';
import { Content_, Div_ } from './ContentStyle';
import { createDeals } from '../../../helpers/createPagesDeals'

// const base = [
//     { name: 'Current Deals', number: '1', promotions: 'Feldman Equities', irr: '55', equity: '780', income: '30', start: '21', distributionPeriod: '7' },
//     { name: 'Current ', number: '2', promotions: 'Feldman ', irr: '9', equity: '5', income: '50', start: '30', distributionPeriod: '6' },
//     { name: 'Deals', number: '3', promotions: ' Equities', irr: '1', equity: '43', income: '40', start: '20', distributionPeriod: '1' },
//     { name: 'Cur', number: '4', promotions: 'Feldman ', irr: '4', equity: '18', income: '330', start: '10', distributionPeriod: '2' },
//     { name: 'Dea', number: '5', promotions: 'Feldman Equities', irr: '40', equity: '230', income: '10', start: '12', distributionPeriod: '3' },
//     { name: 'Current Deals', number: '6', promotions: 'Feldman Equities', irr: '55', equity: '780', income: '30', start: '21', distributionPeriod: '7' },
//     { name: 'Current ', number: '7', promotions: 'Feldman ', irr: '9', equity: '5', income: '50', start: '30', distributionPeriod: '6' },
//     { name: 'Deals', number: '8', promotions: ' Equities', irr: '1', equity: '43', income: '40', start: '20', distributionPeriod: '1' },
//     { name: 'Cur', number: '9', promotions: 'Feldman ', irr: '4', equity: '18', income: '330', start: '10', distributionPeriod: '2' }, { name: 'Current Deals', number: '1', promotions: 'Feldman Equities', irr: '55', equity: '780', income: '30', start: '21', distributionPeriod: '7' },
//     { name: 'Current ', number: '10', promotions: 'Feldman ', irr: '9', equity: '5', income: '50', start: '30', distributionPeriod: '6' },
//     { name: 'Deals', number: '11', promotions: ' Equities', irr: '1', equity: '43', income: '40', start: '20', distributionPeriod: '1' },
//     { name: 'Cur', number: '12', promotions: 'Feldman ', irr: '4', equity: '18', income: '330', start: '10', distributionPeriod: '2' },
// ];

const maxCount = 100;

const items = createDeals(maxCount);

const Content = () => {
    const [count, setCount] = useState(6);

    const renderDeals = () => {
        const _items = [...items];
        return (_items.slice(0, count).map((obj, i) => <Inform key={`${obj.name}-${i}`} {...obj} />
        ))
    };

    const onShowMore = () => {
        setCount(count + 6);
    }

    return (
        <div>
            <Content_>
                <Div_>
                    {renderDeals()}
                </Div_>
                {count < maxCount ?
                    <More onClick={onShowMore} /> : null}
            </Content_>
        </div>
    )
}


export default Content;