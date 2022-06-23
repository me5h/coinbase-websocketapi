# ReactJS currency dashboard 
This code is based on a fork of: https://github.com/renaissancetroll/reactjs-crypto-api-dashboard 

# If I was going to do this I would use the binance API
After having a look into this I looked at what is avaiable from tradingview and then realised the binance API is real time or atleast more realtime then the others.

## Limit currencies array to
'BTC-USD', 'ETH-USD', 'XRP-USD', 'LTC-USD',

## Coinbase websocket API
https://docs.cloud.coinbase.com/prime/docs/websocket-feed

## Testing
Unit Testing added for
Mount, List of currencies, Choose a currency,
with "Choose a curency" using enzyme to render components and test with snapshots. 

To test the websockets would require functional testing for example:
https://thomason-isaiah.medium.com/writing-integration-tests-for-websocket-servers-using-jest-and-ws-8e5c61726b2a

### For Jest coverage run:
npm test


