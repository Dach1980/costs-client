import React, { useState, useEffect } from 'react'
import { Spinner } from '../../Spinner/Spinner.tsx';
import { ICostsHeaderProps } from '../../../types/index.ts';
import { countTotalPrice } from '../../../utils/arrayUtils.ts';
import { useUnit } from 'effector-react';
import { $totalPrice } from '../../../context/index.ts';
import './styles.css'

export const CostHeader = ({costs}: ICostsHeaderProps) => {
    const [spinner, setSpinner] = useState(false);
    const totalPrice = useUnit($totalPrice);

    useEffect(() => {
        countTotalPrice(costs);
    }, [costs]) 


    return (
        <div className="cost-header">
            <form className="d-flex mb-3">
                <div className="form-item">
                    <span className="mb-3">Куда было потрачено:</span>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                    <span className="mb-3">Сколько было потрачено:</span>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                    <span className="mb-3">Когда было потрачено:</span>
                    <input type="text" className="form-control" />
                </div>
                <button className='btn btn-primary add-btn'>
                    {spinner ? <Spinner top={5} left={20} /> : 'Добавить'}
                </button>
            </form>
            <div style={{textAlign: 'end', marginBottom: 10, }}>
                Итого: 
                <span> {isNaN(parseInt(String(totalPrice))) ? 0 : parseInt(String(totalPrice))} </span>
                рублей
            </div>
        </div>
    )
}