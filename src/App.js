import React, {useState, useEffect, useRef} from "react";
import Dashboard from "./components/Dashboard";
import {formatData} from "./utils";
import "./styles.css";

export default function App() {
    const currencies = ['BTC-USD', 'ETH-USD', 'XRP-USD', 'LTC-USD'];
    const [pair, setpair] = useState("");
    const [price, setprice] = useState("0.00");
    const [pastData, setpastData] = useState({});
    const ws = useRef(new WebSocket("wss://ws-feed.pro.coinbase.com"));
    const url = "https://api.pro.coinbase.com";

    const sendData = (data) => {
        if (ws.current.readyState) {
            ws.current.send(JSON.stringify(data));
        } else {
            setTimeout(sendData, 1000);
        }
    }
    useEffect(() => {
        let msg = {
            type: "subscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        sendData(msg);

        let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
        const fetchHistoricalData = async () => {
            let dataArr = [];
            await fetch(historicalDataURL)
                .then((res) => res.json())
                .then((data) => (dataArr = data));
            if (Array.isArray(dataArr)) {
                let formattedData = formatData(dataArr);
                setpastData(formattedData);
            }
        };

        fetchHistoricalData();

        ws.current.onmessage = (e) => {
            let data = JSON.parse(e.data);
            if (data.type !== "ticker") {
                return;
            }

            if (data.product_id === pair) {
                setprice(data.price);
            }
        };
    }, [pair]);

    const handleClick = (currency) => {
        let unsubMsg = {
            type: "unsubscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        sendData(unsubMsg);
        setpair(currency);
    };
    return (
        <div className="container">
            {currencies.map((cur, idx) => {
                return (
                    <button key={idx} value={cur} onClick={() => handleClick(cur)}>
                        {cur}
                    </button>
                );
            })}
            {!!price && !!pastData && <Dashboard price={price} data={pastData}/>}
        </div>
    );
}
