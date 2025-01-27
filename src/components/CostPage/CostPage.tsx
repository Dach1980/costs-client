import React from 'react'
import { CostHeader } from './CostHeader/CostHeader.tsx'

export const CostPage = () => {
    return (
        <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Учет моих расходов</h2>
            <CostHeader costs={[]}/>
        </div>
    )
}
