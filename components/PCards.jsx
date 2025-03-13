"use client"
import Link from 'next/link';
import React from 'react'

const PCards = ({ tourPackages,index, basePath }) => {
  const filteredData = index === 0 ? tourPackages.slice(1) : tourPackages;

  return (
    <>
      {filteredData.map((card, idx) => (
        <div 
          className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          key={card.id || idx}
        >
          {/* Image Section */}
          <div className="relative h-48 md:h-96 overflow-hidden">
            {/* <div 
              className="w-full h-full bg-center bg-cover transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${card.image})` }}
            /> */}
            <div className="bg-no-repeat bg-center w-full h-full" style={{backgroundImage:`url(${card.image})`,backgroundSize:"100% 100%"}} />
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold md:h-14 text-gray-800 text-center">
              {card.title}
            </h3>

            <div className="space-y-2 text-gray-600">
              {card?.price && (
                <p className="text-sm">
                  <span className="font-semibold">PRICE:</span> {card.price}
                </p>
              )}
              
              <div className="space-y-1">
                {card?.visa && (
                  <p className="text-sm">
                    <span className="font-semibold">Visa:</span> {card.visa}
                  </p>
                )}
                {card?.airTicket && (
                  <p className="text-sm">
                    <span className="font-semibold">Air Ticket:</span> {card.airTicket}
                  </p>
                )}
                {card?.insurance && (
                  <p className="text-sm">
                    <span className="font-semibold">Insurance:</span> {card.insurance}
                  </p>
                )}
                {card?.note && (
                  <p className="text-sm text-red-500">
                    <span className="font-semibold">Note:</span> {card.note}
                  </p>
                )}
              </div>
            </div>

            {/* Button Section */}
            <div className="mt-4 text-center">
              <Link 
                href={`${basePath}/${card.id}`}
                className="px-6 py-2 text-red-600 border-2 border-red-600 rounded-full 
                           hover:bg-red-600 hover:text-white transition-colors duration-300"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PCards