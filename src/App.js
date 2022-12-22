import { gql, useSubscription } from '@apollo/client';


const COINS_SUBSCRIPTION = gql`
  subscription CoinCreated {
    coinCreated {
      description
      coinType
  }
  }
`


function App() {

  const { data } = useSubscription(
    COINS_SUBSCRIPTION, 
    {
      onData: (obj) => {
        const result = obj.data.data.coinCreated
        console.log(result);
      }, 
      variables: 'mi nueva data'
    }
  ) 


  return (
    <div className="App">
      hola
    </div>
  );
}

export default App;
