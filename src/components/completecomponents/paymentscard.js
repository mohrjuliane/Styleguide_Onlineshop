import React, { useState } from 'react';
import SwitchButton from '../buttons/switchbutton';
import ArrowRightIcon from '../../assets/icons/icon-arrow-right.svg';

function PaymentsCard({ orderid, name, amount, dueto, active }) {
    const [clicked, setClicked] = useState(active);

    return (
        <div className={`${!clicked ? `border-left-green` : `border-left-red`} light-bg round-border-small padding-8`}>
            <div className='flex-container row space-between'>
                <div className='flex-container column '>
                    <p className='marke font-dark'>Bestellnr. {orderid}</p>
                    <p className='artikelname-review bold'>{name}</p>
                    <p className='preis font-dark'>{amount}</p>
                </div>
                <div className='flex-container column align-end'>
                    <p className='artikelnummer font-dark'>fällig: {dueto}</p>
                    <div className='flex-container row align-vertically'>
                        <SwitchButton paid={active} clickedCard={clicked} setClickedCard={setClicked}/>
                        <img src={ArrowRightIcon} alt="Icon arrow right" className="gap-left-small size-icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentsCard;
