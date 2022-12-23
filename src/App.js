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

  const { data, loading, error } = useSubscription(
    COINS_SUBSCRIPTION,
    // {
    //   onData: (data) => {
    //     const coin = data.data.data.coinCreated
    //     console.log(coin);
    //   }
    // }
    );
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message} </p>

    const { description, coinType } = data.coinCreated;

    return (
    <div className="App">
      <p>{ description }</p>
      <p>{ coinType }</p>
    </div>
  );
}

export default App;
