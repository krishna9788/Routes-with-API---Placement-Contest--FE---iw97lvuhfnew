import React, { useState, useEffect } from "react";

function Top() {
  const [cryptoArr, setCryptoArr] = useState([]);

  const url = "https://api.coinlore.net/api/tickers/";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCryptoArr(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="top-container">
      <h1>Top 10 Global Crypto Coins</h1>
      <div className="display-container">
        {cryptoArr &&
          cryptoArr
            .filter((item) => {
              return item.rank <= 10;
            })
            .map((item, idx) => (
              <div key={idx} className="coin-container">
                <p className="rank-para">Rank # {item.rank}</p>
                <h3 className="coin-symbol">
                  {item.name} ({item.symbol})
                </h3>
                <p className="price-para">Price: {item.price_usd}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Top;
