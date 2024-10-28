import React from "react";
import { product } from "@/utils/Products";
import DetailClient from "@/app/components/details/DetailClient";

type DetailProps = {
    productId?: string;
};

const Detail = async ({ params }: { params: Promise<DetailProps> }) => {
    const resolvedParams = await params;
    const { productId } = resolvedParams;

    return (
        <div>
            <DetailClient product={product} />
        </div>
    );
};

export default Detail;