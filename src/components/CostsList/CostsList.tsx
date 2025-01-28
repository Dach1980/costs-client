import React from 'react'
import { ICost } from '../../types/index.ts'
import { CostsItem } from '../CostsItem/CostsItem.tsx';

export const CostsList = ({ costs }: { costs: ICost[] }) => {
    return (
        <ul className='list-group'>
            {costs.map((cost, index) => (
                <CostsItem cost={cost} index={index + 1} key={cost._id}/>
            ))}
        </ul>
    );
}
