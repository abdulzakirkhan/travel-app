"use client"
import { cardsData } from '@/app/data'
import React from 'react'
const Cards = () => {
  return (
    <>
    {cardsData.map((card,index) => (
        <div className="w-full" key={index}>
            <div className="bg-no-repeat bg-center bg-cover w-full h-96" style={{backgroundImage:`url(${card.image})`}}></div>
            <div className="text-center">
                <h3 className="fs-30"> <strong>{card.title}</strong> </h3>
                <p>{card.visatype}</p>
                <p>{card.price}</p>
            </div>
        </div>
    ))}
      
    </>
  )
}

export default Cards
