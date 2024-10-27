import React from 'react'
import Image from "next/image";
import { Rating } from "@mui/material"
import textClip from '@/utils/TextClip';



const ProductCard = ({ product }: { product: any }) => {

    return (
        <div className='w-[240px] flex flex-col flex-1 cursor-pointer shadow-lg p-2'>
            <div className="relative h-[200px] rounded-md">
                <Image
                    src={product.image}
                    fill
                    alt={product.title}
                    className="object-contain"
                />
            </div>

            <div >
                <div className='test-center mt-2'>{textClip(product.title)}</div>
                <Rating name="read-only" value={product.rating?.rate} />
                <div className='text-orange-600 font-bold text-lg md:text-xl'>{product.price}₺</div>
            </div>
        </div>
    )
}

export default ProductCard