"use client"
import PageContainer from "../containers/PageContainer"

const DetailClient = ({ product }: { product: any }) => {
    return (
        <div>
            <PageContainer>
                {product?.title}
            </PageContainer>
        </div>
    )
}

export default DetailClient