import React from 'react'
import { useState, useEffect } from 'react'
import Card from "./card"

const LmData = () => {

    const [loading, setLoading] = useState(true);
    const [Products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts() {
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await res.json();

            if (data && data.products && data.products.length) {
                setProducts(prevdata => [...prevdata, ...data.products]);
                setLoading(false)
                console.log(data);

            }

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
        console.log(count);

    }, [count])

    if (loading) {
        return <div>
            Please wait the Data is Loading
        </div>;
    }

    return (
        <div className="container mx-auto p-4 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {Products && Products.length ? (
                    Products.map((item, index) => (
                        <Card key={index} imj={item.images} price={item.price} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
            <button className='justify-center p-2 bg-white rounded-sm'
                onClick={() => setCount(count + 1)}
            >Load More</button>
        </div>

    )
}

export default LmData