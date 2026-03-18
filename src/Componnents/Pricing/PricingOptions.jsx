import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pData = use(pricingPromise);
    const pricingData = pData.pricingPlans;
    return (
        <div>
            <h2 className='text-4xl'>Get our membership</h2>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    pricingData.map(pricing => 
                    <PricingCard 
                    key={pricing.id}
                    pricing={pricing}
                    >
                    </PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;