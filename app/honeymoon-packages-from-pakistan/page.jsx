"use client"

import PCards from '@/components/PCards'
import { honeymoonSLgData, honeymoonSmData } from '@/app/data'
import Link from 'next/link'
import React from 'react'

const page = () => {

    const trips =[
        "London, UK",
        "Spain",
        "Italy",
        "Netherland",
        "France",
        "Switzerland",
        "Denmark",
        "Belgium etc."
    ]
    const countries =[
        "Dubai, United Arab Emirates",
        "Thailand",
        "Baku, Azerbaijan",
        "Malaysia",
        "Sri Lanka",
        "Maldives",
        "Singapore",
        "Turkey",
        "Cambodia"
    ]
  return (
    <>
    <section>
        <div className="container mx-auto px-6 py-8">
            <div className="bg-no-repeat bg-center bg-cover w-full h-96" style={{backgroundImage:"url(/honeymoon/Honeymoon-Packages-From-Lahore-Pakistan-2021.jpg)"}}></div>
            <div className="py-8 px-4">
                <h1 className="text-center fs-40">Best Honeymoon Packages From Lahore, Pakistan 2023</h1>
            </div>
            <div className="px-6 py-6">
                <h2 className="font-semibold">Cheap Honeymoon Packages for Couples and Newlywed People in Pakistan</h2>
                <p className="space-x-1 tracking-wider">Ample of honeymoon destinations on the earth arrest attention of lovers, couples and newlywed people. Most newly married couples always write the phrase <strong>"best honeymoon packages from Pakistan"</strong> in Google to find results. Pakistani newlywed couples do the same thing to discover some places to have amazing romantic experience in the lap of nature. It is high time to decor your <Link href={""} className="text-red-500">romantic trips</Link> with excellent travelling, accommodation, transportation, cuisine and touring facilities. <Link href={""} className="text-red-500">Many popular travel agencies in Pakistan</Link> offer a wide range of cheap honeymoon packages from Pakistan to newly wedded people. Honeymooners need to explore a variety of top destinations and landscapes in the world to stay with their life partners and paint their new lives with colours of romance, trust, the beauty of nature and their deep love. We are providing all inclusive honeymoon packages with prices for couples.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <PCards tourPackages={honeymoonSmData} index={1}basePath={"/honeymoon-packages-from-pakistan"}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 py-8">
                <PCards tourPackages={honeymoonSLgData} index={1} basePath={"/honeymoon-packages-from-pakistan"} />
            </div>

            <div className="py-6">
                <h2 className="text-2xl">Who Should You Choose Best Honeymoon Packages?</h2>

                <p className="tracking-wider py-3">Next, it is the right time to choose some travel agencies that offer more inspiring, affordable and comfortable honeymoon tour packages. It is true you will come to know hundreds of top-rated and well-experienced travel and tour companies in Pakistan that deal in a wide range of international tour packages 2023. It is fine to enlist top ten travel agencies and compare their rates, package worth, facilities from Pakistan to targeted destination and all other services. Obviously, it is the best way to make sure you get the best travel agency with stunning and best <Link href={""} className="text-red-500">honeymoon packages from Pakistan </Link> you can easily afford and manage.</p>

                <h3 className="text-2xl">Who Is the Best Travel Agent in Pakistan?</h3>
                <p className="tracking-wider py-3">Most honeymooners give preference to cheap travel agencies that bring the lowest rates for best honeymoon packages from Lahore. All travel and tour companies claim to be the best, but Bliss Travel and Tours give you surprising packages, services and facilities to make your honeymoon more memorable for you and your bride. Bliss brings its honeymoon packages for following international destinations, cities and countries as well.</p>

                <ol className="space-y-2">
                    {countries.map((item,index) => (
                        <li key={index | item}>{item}</li>
                    ))}
                </ol>

                <h3 className="text-2xl">Trips to Europe;</h3>
                <ol className="space-y-2">
                   {trips.map((item,index) => (
                    <li key={index | item}>{item}</li>
                   ))}
                </ol>

                <h3 className="text-3xl mt-5 font-bold">Why Are Choosing Bliss Travel & Tours?</h3>
                <p className="py-4 tracking-wider">Though Bliss Travel & Tours is a newly founded company, it consists of widely experienced, educated, qualified, hardworking and professional management. It is building trust among the people and makes everyone able for flying to any destination on this earth for a specific tour. Honeymooners find us affordable, truly committed and professional in our services. we deliver you what we promise and we have a lot of services on the same floor with massive trust and guaranteed satisfaction. You can visit us online and explore the best honeymoon packages offered and provided by Bliss Travel and Tours Pvt. Ltd.</p>

                <h3 className="text-3xl font-bold">What Do We Bring for Honeymooners?</h3>
                <p className="tracking-wider py-4">We offer newlywed people special and exciting international honeymoon packages of Asia, the Middle East and Europe. Even many newly-wed couples want to perform Umrah as they start a new life. So, we do offer cheap Umrah packages 2020. This is our first motive to make your dream of having a honeymoon somewhere you always love. Simply, you can visit us and check the link below to preview the packages we bring for your honeymoon trips abroad.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default page