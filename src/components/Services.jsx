import React from 'react'
import ServiceCard from './FeaturedCard'
import BrandLogo from './BrandLogo'
import FeaturedCard from './FeaturedCard'
import FeatureTab from './FeatureTab'


const Services = () => {
    return (
        <div className="max-w-align-element m-auto">
            <BrandLogo/>
            <FeaturedCard/>
            <FeatureTab/>
        </div>
    )
}

export default Services