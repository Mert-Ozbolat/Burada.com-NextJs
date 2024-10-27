"use client"
import React from 'react'

const Category = () => {

    const categoryList = [
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
    ]



    return (
        <div className='flex items-center py-5 px-3 md:px-10 gap-3 md:gap-10 my-5 md:my-8 md:py-10 overflow-auto'>
            {
                categoryList.map((category, index) => (
                    <div className='border test-slade-500 rounded-full min-w-[120px] flex items-center justify-center flex-1 px-4 py-2 text-center cursor-pointer' key={index}>{category.name}</div>
                ))
            }
        </div>
    )
}

export default Category