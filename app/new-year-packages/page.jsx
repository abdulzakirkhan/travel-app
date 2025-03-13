"use client"
import PCards from '@/components/PCards'
import Link from 'next/link'
import React from 'react'
import { newYearData } from '../data'

const page = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-6 py-5 mt-5">
            <h5 className="text-3xl pt-12 text-primary text-center font-semibold">New Year Travel & Tour Packages To Your Dream Destinations From Lahore</h5>
            <p className="py-4 tracking-widest text-sm">We offer the <Link href={""} className="text-red-500">best new year packages</Link> if you want to spend your new year's eve in a foreign land. We have budget-friendly new year's eve vacation packages 2021. We want to provide everyone with equal opportunities to explore nature's beauty, enjoying the fantastic evenings and nights of the new year at your favorite destinations. Where you can enjoy the desert safaris, nights in between the sea on a cruise with your favorite person beside you, enjoying the delicious dinners in <Link href={""} className="text-red-500">international waters</Link> with the best hospitality in the world. Please check our below unique new year travel packages.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                <PCards tourPackages={newYearData} index={1} basePath={"/new-year-packages"} />
            </div>


            <div className="py-6">
                <h3 className="text-4xl font-semibold text-center text-primary">Book Your New Year’s Eve Family Packages With Bliss Travels</h3>
                <p className="tracking-widest py-5">If you don't see your favorite or desired destination in the above packages, wait a second. Let us tell you that we are a travel agency that offers customized tailor-made new year tour packages according to your needs and budget. People who wish to spend a night in the tallest building of the world, Burj Khalifa have good news that we can offer them new years of eve hotel packages in their dream bedroom, which is waiting for them.</p>
                <p className="py-4 tracking-wider">Often people search for top-rated tourism companies so that they can book last-minute new year deals at discounted prices. We can help you in finding the best new year's vacation deals at very economical prices either you are traveling alone, with family, or with your friends.</p>
                <p className="tracking-wider py-3">Sometimes it becomes hard to find the deals and packages near the end of the year because many brokers and people have already booked the best deals so that they can make a profit by selling them to you again but we don't opt for that practice. We have years of experience and many satisfied clients domestic and corporate. They are happy because of our top-notch services and affordable packages. We will make sure that if you book your new year's eve packages with us that would be a remarkable experience.</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default page
