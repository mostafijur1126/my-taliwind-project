
import { Suspense } from 'react';
import './App.css'
import Nav from './Componnents/dasynav/Nav';
import NavBar from './Componnents/NavBar/NavBar';
import PricingOptions from './Componnents/Pricing/PricingOptions';


const pricingPromise = fetch('PricingData.json').then(res => res.json());

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <Nav></Nav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
          <PricingOptions pricingPromise={pricingPromise}>

          </PricingOptions>
        </Suspense>

      </main>
    </>
  )
}

export default App
