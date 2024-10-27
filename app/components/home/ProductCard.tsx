import React from 'react'
import Image from "next/image";
import { Rating } from "@mui/material"



const ProductCard = ({ product }: { product: any }) => {
    return (
        <div className='w-[240px] shadow-lg p-2'>
            <div className="relative h-[150px] rounded-md">
                <Image
                    src={product.image}
                    fill
                    alt={product.title}
                    className="object-contain"
                />
            </div>

            <div >
                <div className='test-center mt-2'>
                    {product.title}
                </div>
                <Rating name="read-only" value={product.rating.rate} />
            </div>
        </div>
    )
}

export default ProductCard