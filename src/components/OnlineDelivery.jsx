import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'

const OnlineDelivery = () => {
    const [data, setData] = useState([])
    const componentRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const rect = componentRef.current.getBoundingClientRect();
                setIsAtTop(rect.top <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const fetchTopRestaurant = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains')
        const apiData = await response.json()
        setData(apiData)
    }

    useEffect(
        () => {
            fetchTopRestaurant()
        }, []
    )
    return (
        <div className='max-w-[1200px] mx-auto '>
            <div className='flex items-center my-5 justify-between' ref={componentRef}>
                <div className='text-[25px] font-bold' >Restaurants with online food delivery in Vadodara</div>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-[99999999] bg-white w-full left-0' : ''}>
                <div className='max-w-[1200px] mx-auto flex my-4 gap-3 '>
                    <div className='p-3 rounded-md shadow'>Filter</div>
                    <div className='p-3 rounded-md shadow'>Sort By</div>
                    <div className='p-3 rounded-md shadow'>Fast Delivery</div>
                    <div className='p-3 rounded-md shadow'>New on Swiggy</div>
                    <div className='p-3 rounded-md shadow'>Ratings 4.0+</div>
                    <div className='p-3 rounded-md shadow'>Pure Veg</div>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    data.map(
                        (d, i) => {
                            return <Card {...d} />
                        }
                    )
                }
            </div>
        </div >
    )
}

export default OnlineDelivery