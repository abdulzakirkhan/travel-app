"use client";
import Link from "next/link";
import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: "We are a full-service best travel agency in Lahore and Karachi with a dedicated team of highly skilled and experienced people to assist our valuable clients according to their goals and desired journeys all over the world. We at Bliss travels and tours strive our best to deliver the outstanding service to all our customers. We are always ready to accommodate you whether you are looking for visa consultancy, air tickets, travel insurance, adventure packages, even if you are looking for a cruise ride or you need reservations in any hotel around the globe we are ready to serve you with market competitive rates. Our goal is to make the customer feel the bliss as they travel with us and so “You Can Buy Yourself The Freedom” that would make us feel honored."},
  ];

  return (
    <div className="w-full mx-auto border border-gray-200 rounded-xl overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-none">
          <button
            className={`w-full flex justify-between items-center p-5 text-left text-gray-700 hover:bg-blue-50 transition-all duration-200 ${
              openIndex === index ? "bg-blue-50" : ""
            } focus:outline-none focus:ring-2 focus:ring-blue-200`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-base">{item.title}</span>
            <span
              className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                openIndex === index
                  ? "bg-primary text-white rotate-180"
                  : "bg-blue-100 text-primary"
              }`}
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 3L10 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={openIndex === index ? "hidden" : "block"}
                />
                <path
                  d="M10 3L10 17M17 10L3 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={openIndex === index ? "block" : "hidden"}
                />
              </svg>
            </span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-5 pt-2 bg-blue-50">
              <h1 className="font-semibold">Book Your Trip With The Best Lahore Travel Agency & Fly Anywhere in The World:</h1>
              <p className="text-gray-700 mt-5">This has been a typical task for Pakistanis to get the <Link href={""} className="text-red-600">best international travel packages</Link> and special offers to visit the world. Today, most people search for the Best Travel Agency in Pakistan and they give importance to economical travelling services. Most of our customers fly from Pakistan, however, we have introduced electronic and digital flight reservation system to book your air tickets from anywhere across the country. You can contact our indoor staff for any travel query, help to find <Link href={""} className="text-red-500">available flights</Link> in the next 24 hours or anything else you want to ask and confirm.</p>

              <p className="mt-5 text-gray-700">Bliss Travels & Tours have lots of travel agents throughout the country to help travellers all around Pakistan. You can also make us a direct visit to our office in Lahore and get the best guidelines about your travelling needs. Further, you can visit our site to plan any trip of the world with us online and also explore special travel deals we have introduced for Pakistanis. Dedicated customer support is available to reply to your queries 27/7, while you can check the airlines we are associated with at our official website.</p>

              <h1 className="font-bold text-fs25 mt-4">We are Leading the Way To Become #1 Travel Agency in Lahore!</h1>
              <p className="mt-5">With a constant and huge increase in demands of customers, Bliss Travels & Tours has been working hard by leading the entire Pakistan Travel Industry for the last few years. There are some inspiring and logical facts about why our clients bounce back and they get completely satisfied with our travelling services. They also call us as the Best Travel Agency in Lahore because we let them go fully satisfied and happy. We guarantee you for the cheapest and best flights of top globally famous airlines and you can make sure the rates by conducting a comparison with other airlines operating for your destinations.</p>

              <h1 className="mt-4 font-bold text-fs25">Your Ultimate Dream Honeymoon Package:</h1>
              <p className="mt-5">Newlywed people always have their dream to fly to some most beautiful pieces of land right after their wedding ceremony. Bliss Travels & Tours says newly wedded couples a warm welcome and offers its certified, dedicated and completely professional services to plan a recreational, budget-friendly and unforgettable honeymoon package to make your dreams true. Our special honeymoon packages and deals are available in the whole year and you can view whatsoever we provide you in a single plan.</p>

              <p className="mt-4">
              You will get visa processing within a couple of weeks or less time, cheap air tickets of top airlines, complete transportation services after landing to your destination and back to the airport, fully furnished, luxurious and comfortable accommodation in "Honeymoon Special Resorts and Hotels" everywhere around the world. Be quick to give an amazing surprise to your life partner with the ultimate dream of a honeymoon plan that will carve pleasant memories of your married life.
              </p>

              <h1 className="mt-4 font-bold text-fs25">
              Cheapest Flights in the Town: Lahore
              </h1>
              <p className="mt-5">Bliss Travels & Tours draws the attention of the customers for cheap flights of their destinations. You can use a custom search on our official website to discover the cheapest flights of best and leading airlines for the whole world from Lahore, Pakistan. In fact, we believe in quality travelling and it is our motive to offer and provide our customers with the best flights, accommodation, and transportation services in every travelling plan we have for the people.</p>

              <h1 className="mt-4 font-bold  text-fs25">Hajj & Umrah is Essentials – Give Us a Chance to Serve You in This Holy Pilgrimage</h1>
              <p className="mt-5">Umrah is the second largest and most famous Islamic pilgrimage after the Hajj. You can perform Umrah anytime throughout the year. Makkah and Medina are the actual Center of Islam for all Muslims all over the world. Bliss Travels & Tours aims to make your journey to Makkah & Medina for Umrah and Hajj to fulfil your dreams true and lets you bow nearest to Creator in Makkah and Medina. We are offering very affordable Umrah packages for our customers.</p>

              <h1 className="mt-4 font-bold text-fs25">From Makkah to Madina:</h1>
              <p className="mt-4">Pakistani Muslims will never focus on anything like transportation, hotel for accommodation, foods and other similar services right after reach to the Center of Islam for the Umrah. So, we are here in Pakistan to provide you all the required services with the best comforts and peak quality from Makkah to Medina and later on; from Medina to Makkah and finally to the airport for departure. We are willing to make your Umrah 100% up to your expectations, fully successful and comfortable.</p>

              <h1 className="mt-4 font-bold text-fs25">Get Budget-Friendly Travel Packages:</h1>
              <p className="mt-4">
              Do you want to fly any country or destination around the world with a tight budget? You will need to find and approach the best travel agency in Pakistan. Bliss Travels & Tours offers you completely the budget-friendly travel plans that will fit your affordability and let you enjoy your tours more than your imaginations and expectations. We have travel packages for dozens of countries and hundreds of destinations on the earth. Further, we have direct trading relationships with a large number of airlines, hotel dealers and transportation companies across the world. We have all these services and facilities to make you comfortable throughout your trip.
              </p>
              <h1 className="mt-4 font-bold text-fs25">Perfect Special-Planned Travel Deals:</h1>
              <p className="mt-4">Bliss Travels & Tours has become a strongly and truly committed travel agency in Lahore, Pakistan. We are famous in travel planning and management for the people that have a dream to fly to their favorite destinations once or frequently in their lives. Do you want to get some specially planned travel deals that look just for you? Sure, you can come to us for a tea and get a recreational, but fully affordable travel deal that will make your all traveling dreams true. Get this chance and come to fly to the world with us with pride.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export const AccordionMini = () => {
  const items = [
    { title: "We are a full-service best travel agency in Lahore and Karachi with a dedicated team of highly skilled and experienced people to assist our valuable clients according to their goals and desired journeys all over the world. We at Bliss travels and tours strive our best to deliver the outstanding service to all our customers. We are always ready to accommodate you whether you are looking for visa consultancy, air tickets, travel insurance, adventure packages, even if you are looking for a cruise ride or you need reservations in any hotel around the globe we are ready to serve you with market competitive rates. Our goal is to make the customer feel the bliss as they travel with us and so “You Can Buy Yourself The Freedom” that would make us feel honored."},
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return(
    <div className="w-full mx-auto border border-gray-200 rounded-xl overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-none">
          <button
            className={`w-full flex justify-between items-center p-5 text-left text-gray-700 hover:bg-blue-50 transition-all duration-200 ${
              openIndex === index ? "bg-blue-50" : ""
            } focus:outline-none focus:ring-2 focus:ring-blue-200`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-base">{item.title}</span>
            <span
              className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                openIndex === index
                  ? "bg-primary text-white rotate-180"
                  : "bg-blue-100 text-primary"
              }`}
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 3L10 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={openIndex === index ? "hidden" : "block"}
                />
                <path
                  d="M10 3L10 17M17 10L3 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={openIndex === index ? "block" : "hidden"}
                />
              </svg>
            </span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-5 pt-2 bg-blue-50">
             
              <p className="text-gray-700 mt-5">You can get the best traveling solutions from us with a single knock. Being a big name in the global tourism market, we provide a wide range of travel services with ideal comforts and competitive rates. Our traveling services include economical flights to the world's best airlines, transportation in your destination country/place, accommodation in luxurious hotels, special holidays,<Link href={""} className="text-red-600">honeymoon packages</Link>, and other travel services. Don't wait longer; come to us to plan and enjoy your next trip. Established in 2019, Bliss Travels & Tours (Pvt.) Ltd is one of Pakistan’s leading independent travel agencies. Our regular and honorable customers believe us to be the best travel agency in Lahore, Pakistan.</p>
              <p className="text-gray-700 mt-5">We developed good trade relationships with accommodation and hotel wholesalers, specialist airfare consolidators, leading airlines, and major tour operators worldwide as a highly respected, professional, and well-established, Bliss Travels & Tours offers the cheapest air tickets in the whole world, including Australia, Europe, Africa, the whole of Asia, and the Middle East countries. Like our cheap flight offers, our vast accommodation network also supports us to provide record lower hotel and resort rates to our customers worldwide.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Accordion;