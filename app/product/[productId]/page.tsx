import DetailClient from '@/app/components/details/DetailClient';
import React from 'react'
import { products } from '@/utils/Products';

type DetailProps = {
    productId?: string
}


const Detail = ({ params }: { params: DetailProps }) => {


    const { productId } = params;


    const product = products.find(product => product.id == productId)

    return (
        <div>
            <DetailClient />
        </div>
    )
}

export default Detail