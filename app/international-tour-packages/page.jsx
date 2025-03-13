"use client"
import PCards from '@/components/PCards'
import { tourPackages } from '@/app/data'
import React from 'react'
const internationalTourPackages = () => {
      const firstInedx=tourPackages[0]
      
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="">
        <h1 className="text-center font-bold fs-40">International Travel & Tour Packages From Lahore</h1>
        <p className='px-4 py-8'>We are providing international travel and tours packages at a very reasonable price along with proper guidance. Even if you want an adventurous tour or you are looking to sail on the sea or you want to spend that amazing night in a desert with your friends, family or loved ones. The moments you have desired for all your life can be accomplished with so easy that you won’t have to worry about anything our travel experts can steer you for the trip so you will have the most fabulous and memoizable experience. We are offering tour packages from Lahore to everywhere you want, we can make you fly even if it’s Europe, Middle East, Asia, United Arab Emirates or any other piece of the planet earth.</p>
      </div>
      <div className="flex justify-end">

        <div className="w-full md:w-1/3 py-6">
            <div className="w-full">
              <div className="bg-no-repeat bg-center bg-cover w-full h-96" style={{backgroundImage:`url(${firstInedx.image})`}}></div>
              <div className="">
                  <h3 className="text-2xl text-center px-4 py-3"> <strong>{firstInedx.title}</strong> </h3>
                  <div className="px-14">
                      <div className="space-y-3">
                          {firstInedx?.price && (
                              <p className="text-sm"> <strong>PRICE:&nbsp;</strong> {firstInedx.price}</p>
                          )}
                          <div className="space-y-1">
                              {firstInedx?.visa && (
                                  <p className="text-sm"> <strong>Visa:&nbsp;</strong> {firstInedx.visa}</p>
                              )}
                              {firstInedx?.airTicket && (
                                  <p className="text-sm"> <strong>Air Ticket:&nbsp;</strong> {firstInedx.airTicket}</p>
                              )}
                              {firstInedx?.insurance && (
                                  <p className="text-sm"> <strong>Insurance:&nbsp;</strong> {firstInedx.insurance}</p>
                              )}
                              {firstInedx?.note && (
                                  <p className="text-sm"> <strong>Note::&nbsp;</strong> {firstInedx.note}</p>
                              )}

                          </div>
                      </div>
                  </div>
                  <div className="text-center py-3">
                      <button className="px-6 py-2 border-2 text-red-600 text-lg border-red-600 rounded-md">More Details</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        <PCards tourPackages={tourPackages} index={0} basePath={"/international-tour-packages"} />
      </div>
    </div>
  )
}

export default internationalTourPackages;