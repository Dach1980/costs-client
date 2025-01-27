import React, { useEffect, useState, useRef } from 'react'
import { CostHeader } from './CostHeader/CostHeader.tsx'
import { Spinner } from '../Spinner/Spinner.tsx';
import { getAuthDataFromLS } from '../../utils/auth.ts';
import {getCostsFx} from '../../api/costsClient.ts'
import { $costs, setCosts } from '../../context/index.ts';
import { useUnit } from 'effector-react';

export const CostPage = () => {
    const [spinner, setSpinner] = useState(false);
    const store = useUnit($costs);
    const shouldLoadCosts = useRef(true);

    useEffect(() => {
        if (shouldLoadCosts.current) {
            shouldLoadCosts.current = false;
            handleGetCosts();
            console.log(store);
        }
    }, [])

    const handleGetCosts = async () => {
        setSpinner(true);
        const authData = getAuthDataFromLS();

        const costs = await getCostsFx({
            url: '/cost',
            token: authData.access_token
        });

        setSpinner(false);
        setCosts(costs);
    }

    return (
        <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Учет моих расходов</h2>
            <CostHeader costs={[]} />
            <div style={{position: 'relative'}}>
                {spinner && <Spinner top={0} left={0} />}
            </div>
        </div>
    )
}
