import React, { useState, useEffect } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);

    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>

                <div className='coin-container'>
                    <p className='rank-para'>Rank #rank</p>
                    <h3 className='coin-symbol'>name (symbol)</h3>
                    <p className='price-para'>Price: price_usd</p>
                </div>

            </div>
        </div>
    )
}

export default Top