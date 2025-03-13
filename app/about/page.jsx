"use client"


import React, { useState } from 'react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <section>
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl py-8 mt-12 text-center">About - Pakistan's Fastest Growing Travel Agency</h1>
          
          {/* Tabs Navigation */}
          <div className="flex border-l-2 border-r-2 border-t-2 border-[#d9d9d9] bg-[#F4F4F4]">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 text-lg text-gray-700 py-2 transition-colors duration-300 ${
                activeTab === 'profile' 
                ? 'bg-[#FFFFFF] border-b text-black' 
                : 'bg-[#F4F4F4] border-r-2 border-b-2 border-[#d9d9d9]'
              }`}
            >
              Company's Profile
            </button>
            
            <button
              onClick={() => setActiveTab('ceo')}
              className={`px-6 py-2 text-lg text-gray-700 transition-colors duration-300 ${
                activeTab === 'ceo' 
                ? 'bg-[#FFFFFF] border-b text-black' 
                : 'bg-[#F4F4F4] border-r-2 border-l-2 border-b-2 border-[#d9d9d9]'
              }`}
            >
              CEO Message
            </button>
            
            <button
              onClick={() => setActiveTab('goals')}
              className={`px-6 py-2 text-lg text-gray-700 transition-colors duration-300 ${activeTab === "ceo" ? "border-l-2" : ""} ${
                activeTab === 'goals' 
                ? 'bg-[#FFFFFF] border-r-2 border-b text-black' 
                : 'bg-[#F4F4F4] border-r-2  border-b-2 border-[#d9d9d9]'
              }`}
            >
              Our Goals
            </button>
          </div>

          {/* Tabs Content */}
          <div className="border-l-2 border-r-2 border-b-2">
            {activeTab === 'profile' && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">
                Bliss Travels & Tours is one of the most trusted travel agencies in the premises of Lahore and Karachi. We are making everyday efforts to serve you with affordable and finest services, and we are handcrafting customized packages that can not only meet your needs but exceed your expectations. Even if you are planning a business trip or planning a holiday abroad with your friends or family, we are ready to kickoff the most ideal tour packages for you. We are also providing services for holy pilgrimages (HAJJ & UMRAH) at very reasonable prices.
                </p>
                <p className="text-gray-600 py-5">Bliss team always bring the perfect solutions for your needs and we care about your safety and comfort. Ranging from visa consultation in least possible time to air ticket, car rentals, hotel accommodations, cuisines and catering and all other hassles till your safe return, our services make sure that you don’t have to worry about anything during your tours with Bliss Travels & Tours</p>
              </div>
            )}

            {activeTab === 'ceo' && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="py-4">First of all, a warm welcome to all of you and thank you for visiting Bliss Travels & Tours</p>
                <p className="">
                We have come a long way in our journey to provide quality services in minimal charges for those who are interested in sightseeing, vacations and holy pilgrimages. We had planned out our vision and my team is striving day and night to get you the best experiences. Back in the time when we started our services, I can see a lot of happy, satisfied and loyal customers who are continuously booking their tours with us. We have come a long way from being a small startup to an agency providing its services to clients throughout the country. The competition had been quite tough and challenging however our rates and services spoke on our behalf.
                </p>
                <p className="py-4">Our services ranging from Visa consultancy to air ticket booking and further increasing to quality accommodations, catering and ground services made s unique in this industry.</p>
                <p>As per today, Bliss Travels & Tours is the primary choice of people for quick planning and booking of quality tours in minimum rates. Your comfort and safety is our foremost priority. Our dedicated staff is available round the clock so you can consult anytime for any solutions regarding your tours’ planning and execution phase.</p>
                <p className="py-4">I believe that our customers are responsible for our success and we will strive to bring you amazing tour opportunities from all around the globe. Moreover, we can also provide you with customized tours as per your requirements so you can always count on us for your tours’ services. I wish you all a confident booking and happy travelling from all of us at Bliss Travels & Tours</p>
              </div>
            )}

            {activeTab === 'goals' && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl mb-4">Our Goals</h2>
                <ul className="list-decimal list-inside text-gray-600 space-y-3">
                  <li>To give our customers an opportunity to delight the best of their tours with our top-notch service quality.</li>
                  <li>To provide with the best and competitive prices that be customized according to the customer desires.</li>
                  <li>The quality of services should be compromised in case of discounts or limited time offers.</li>
                  <li>To make sure that we stay connected with our valued clients before and after they consume your services and keep them aware of upcoming adventurous and amazing travel opportunities</li>
                  <li>To promote and work for the betterment of tourism in the country and all over the world as someone said “Travelling is a part of a happy life”</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;