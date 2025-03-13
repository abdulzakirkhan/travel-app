import Link from 'next/link';
import React from 'react'

const page = () => {


  const hajjPackage = {
    NameofHotels:{
      MAKKAH:"ANJUM HOTEL – JABL-E-KAABA (250 Meters)",
      MADINAH:"RAWDA AL-AQIQ – MARKAZIA GHARBIA BAB-E-SALAM (300 Meters)"
    },
    PackageFeatures:{
      airlineTicket: "Airline ticket included (Departure & Arrival Karachi to Karachi)",
      complimentaryItems: "Complimentary gift items and traveling kit for each pilgrim.",
      orientationClasses: "Hajj orientation classes in Karachi conducted by religious scholars.",
      religiousGuidance: "Pilgrim has the guidance of religious scholars throughout the pilgrimage.",
      accommodation: "Separate sharing accommodation for ladies and gents at Aziziah Building & Mashair.",
      transportation: "Private buses (seat by seat) JED-MAK-MED airports including Mashair days.",
      minaTents: "Gypsum boards Mina Tents with Air Coolers & Sofa Combed Nearest to Jamarat.",
    },



    hotelExpenses: {
      quadSharing: {
        price: "PKR 000,000/-",
        basis: "Azizia on Sharing Basis"
      },
      tripleSharing: {
        additional: "PKR 00,000/-",
        total: "PKR 000,000/-"
      },
      doubleSharing: {
        additional: "PKR 00,000/-",
        total: "PKR 000,000/-"
      }
    },

    travelDates: [
      "19 / 20 Zilqad",
      "29 / 01 Zilhajj",
      "08 – 12 Zilhajj",
      "14/15 – 21 Zilhajj"
    ],

    meals: {
      frequency: "3 Times Daily",
      options: [
        "Full Board (Buffet) Economy",
        "Full Board (Buffet) Economy",
        "Meals provided by Mualim",
        "Full Board (Buffet) Economy"
      ]
    }
  };
  

  
  return (
    <>
    <section className="bg-no-repeat bg-center bg-cover w-full h-96" style={{backgroundImage:"url(/hajj/Hajj-Packages-From-Lahore-Pakistan-2020.jpg)"}} />
      <section>
        <div className="container mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-3xl text-primary font-bold text-center">Hajj Packages 2023 From Lahore</h1>
            <div className="w-full bg-primary mt-5 rounded-lg" style={{height:"2px"}}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-12">
            <div className="w-full">
              <div className="">
                <h3 className="text-xl py-3">Name of Hotels:</h3>
                <ol className="space-y-2">
                  {Object.entries(hajjPackage.NameofHotels).map(([city, hotel], index) => (
                    <li key={index} className="text-sm">
                      <strong>{city}: </strong> {hotel}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="py-8">
                <h3 className="text-xl py-2">Hotels Expenses</h3>
                <ol className="space-y-2">
                  {Object.entries(hajjPackage.hotelExpenses).map(([roomType, details], index) => (
                    <li key={index} c>
                      <strong className="text-md">{roomType.charAt(0).toUpperCase() + roomType.slice(1)}: </strong>
                      {Object.entries(details).map(([key, value]) => (
                        <span lassName="text-sm" key={key}> {key}: {value} </span>
                      ))}
                    </li>
                  ))}
                </ol>
              </div>


              <div className="py-8">
                <h3 className="text-xl py-2">Dates:</h3>
                <ol className="space-y-2">
                  {hajjPackage.travelDates.map((it, index) => (
                    <li key={index} c>
                      {it}
                    </li>
                  ))}
                </ol>
              </div>



              <div className="py-8">
                <h3 className="text-xl py-2">3 Times Daily Meals:</h3>
                <ol className="space-y-2">
                  {hajjPackage.meals.options.map((meal, index) => (
                    <li key={index}>{meal}</li>
                  ))}
                </ol>
              </div>

            </div>
            <div className="w-full">
            <div className="">
                <h3 className="text-xl py-3">Package Features:</h3>
                <ol className="space-y-5 list-decimal list-inside text-lg text-gray-700">
                  {Object.entries(hajjPackage.PackageFeatures).map(([city, hotel], index) => (
                    <li key={index} className="">
                      {hotel}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1">

            <h3 className="text-3xl">Fully Facilitated, Trusted, and in Budget Hajj Packages for All Muslims in Pakistan
            Endless Passion of Muslims for Hajj:</h3>
            <p className="tracking-widest">Hajj is a mega religious gathering or scared ritual in Islam which millions of Muslims across the world want to have. This sacred obligation is needed to perform once every year in the last month according to the Islamic Calendar. Major religious obligations and practices are performed from 8th to 12th Zill-Hajj, while the total period for this holy practice will be from 20 to 45 days according to the situations and special benefits from the Saudi Arabian Government. Muslims across Pakistan try their best to get the Hajj chance every year to please Allah Almighty and perform this religious duty successfully once in their whole life.</p>

            <p className="mt-5 tracking-widest">The Government Hajj quota is limited and millions of Pakistanis need some private Hajj packages with complete affordability and best traveling services. Bliss Travel and Tours bring Umrah Packages and Hajj packages without focusing any of its financial interest. We actually provide you with all facilities and support to make your journey to Hajj easy just to get some rewards and happiness of ALLAH. We have the best and most dedicated Umrah and Hajj management to assist Muslims in Pakistan for making the ability to perform these religious obligations easily.</p>

            <h3 className="mt-4 text-2xl">Explore the Best Hajj Packages 2023:</h3>
            <p className="py-3">You have the right to explore all of the best Hajj packages for 2023 around Pakistan. Of course, we claim to be the best because we don't have any personal interest behind your Hajj performing. We aim to make our Muslim brothers and sisters successful in performing and completing this sacred practice. Bliss Travel and Tours offers you the very best facilities, services, fastest visa processing, affordable rates, and many other supports from the initial to the final segment of Hajj.</p>
            <h3 className="text-2xl">Pick up Bliss Travel and Tours with Pride:</h3>
            <p className="py-3 tracking-widest">Bliss Travel and Tours ask you to pick it if you want to have the best and most comfortable Hajj deal in 2023. We assure you for the fastest visa approval, best and nearest hotels in Mecca, comfortable transportation, and all other basic and mandatory services the Hajjis need during their Hajj rituals. We have several Hajj packages for the upcoming year 2023 with different rates and hotel names. If you take hotels nearest to Haram in Mecca, it will cost you a bit high. Further, the hotels bit away from Haram, Mecca will charge you low rates, but all other facilities in all declared packages will be the same in quality and comforts.</p>

            <h3 className="mt-3 text-2xl">Why Choosing Bliss Travel and Tours?</h3>
            <p className="py-3 tracking-wider">We bring the cheapest Hajj packages 2023 to facilitate every Pakistani Muslim to get the chance of performing this highly sacred obligation. Further, we provide you with the best and most comfortable facilities and services from Pakistan airports to Mecca, Medina, and back to the national airports of Pakistan. You will have every required facility or service on time and with topnotch quality. We will stand with you from the start of your Hajj journey to back your home. It is our motive to make our ALLAH please by helping His followers in performing Hajj every year.</p>

            <h3 className="mt-4 text-2xl">What Do We Bring for All Hajjis?</h3>
            <p className="py-3 tracking-widest">liss Travel and Tours always brings the best Hajj package services with amazing facilities and comforts at competitive rates. We will offer and provide you the following services during your Hajj obligation.</p>

            <ol className="space-y-3 list-disc list-inside mt-3">
              <li>Visa</li>
              <li>Return air ticket (Two-ways)</li>
              <li>Accommodation in nearest or demanded hotels in Mecca and Medina</li>
              <li>Transportation during the whole of the Hajj tenure</li>
              <li>Cow or goat for religious sacrifice on 11th Zill-Hajj etc.</li>
            </ol>




            <h3 className="mt-4 text-2xl">Estimate Total Cost of Your Hajj 2023:</h3>
            <p>Are you willing to choose our Hajj packages 2023? You must visit our official website at <Link href={""} className="text-red-500 tracking-widest">Your Website link here</Link> and go through the detail of all the available packages. The cost of each package may be a bit or more different depends upon the selection of hotels near or far away from Haram, Mecca, and the accommodation or room types. Further, if you want to get the Hajj package for 40 days, it will cost you a bit high and the total price for short tenure will be quite low. If you decide to perform Hajj 2023 with family or group, you will get a huge concession on accommodation and other services as well.</p>

            <p className="mt-4">What Do We Need to Ease Your Hajj?</p>
            <p className="py-3 tracking-widest">You will need to submit our important documents and passports for visa processing and approval procedure. You must provide us following documents a few weeks before starting the Hajj flight operations.</p>


            <ol className="space-y-2 list-inside list-disc">
              <li>Original green passport with enough validity</li>
              <li>Photographs with a blue background</li>
              <li>Medical documents, polio cards, or vaccination record for the kids</li>
              <li>National Identity Card</li>
              <li>50% advance payment at the time of submitting these documents</li>
              <li>Cancellation of the package will cost you some fixed fees etc.</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
