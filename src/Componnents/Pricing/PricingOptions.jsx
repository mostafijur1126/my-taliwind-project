import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
// import PricingCard from './../PricingCard/PricingCard';
import DasyPriceingCard from '../DasyPricingCard/DasyPriceingCard';

const PricingOptions = ({pricingPromise}) => {
    const pData = use(pricingPromise);
    const pricingData = pData.pricingPlans;
    // console.log(pricingData)
    return (
        <div>
            <h2 className='text-4xl'>Get our membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* {
                    pricingData.map(pricing => 
                    <PricingCard 
                    key={pricing.id}
                    pricing={pricing}
                    >
                    </PricingCard>)
                } */}

                {
                    pricingData.map((priceing,index) => <DasyPriceingCard key={index} priceing={priceing}></DasyPriceingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;