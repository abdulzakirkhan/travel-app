"use client"


import PCards from '@/components/PCards'
import React from 'react'
import { umrahData, umrahLgData } from '../data'

const page = () => {
  return (
    <>
    <section>
        <div className="container mx-auto px-6">
            <div className="py-6">
                <h1 className="text-4xl font-bold text-center text-primary py-8">Cheap Umrah packages from Lahore for Family 2023</h1>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PCards tourPackages={umrahData} index={1} basePath={"/umrah"} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-6">
                    <PCards tourPackages={umrahLgData} index={1} basePath={"/umrah"} />
                </div>


                <div className="py-6">
                    <h1 className="text-3xl text-gray-700">Completely Affordable and Dedicated Umrah Packages for All Pakistani Muslims</h1>

                    <p className="py-4 tracking-wider">Umrah is basically a holy ritual of Muslims performed in Mecca, Saudi Arabia. Muslims all over Pakistan keep performing this religious obligation throughout the year. It is allowed to perform all 11 months a year except in the month of Zill-Hajj when only Hajj is allowed to perform by Muslims. Evert Muslim Pakistan makes his/her countless efforts to get a chance of having and performing Umrah ritual in Mecca and visit all of the holy places during this religious trip. We also offer you enough chances to visit all of the sacred places where Prophet Muhammad (P.B.U.H) lived, visited and stayed for any purpose.</p>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default page
