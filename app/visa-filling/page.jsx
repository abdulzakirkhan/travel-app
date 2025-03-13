"use client"
import Cards from '@/components/Cards';
import ContactForm from '@/components/ContactForm';
import { cardsData } from '@/app/data';
import React, { useEffect } from 'react'
const VisaFillingPage = () => {
    useEffect(() => {
        document.title = "Complete Visa File, Visa Processing Service | Bliss Travels";
      }, []);
  return (
    <>
    <section className="bg-[#FFFFFF]">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="w-full">
                    <img src="/visa/best-visa-filling-travel-service.png" className="sm:w-full" alt="" />
                </div>
                <div className="w-full">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container mx-auto px-6 py-10">
            <h1 className="text-center fs-40 font-bold">Best Visa Filling Travel Agency in Lahore, Pakistan</h1>
            <div className="grid md:grid-cols-12 py-6">
                <div className="w-full md:col-span-12">
                    <p>Are you looking for help with your Visa form filling for U.K, USA, Canada, Australia, France, Germany, Italy & or any other countries? At Bliss Travels we provide Visa form filling services for all categories VISA. Even if you are looking for a visit visa, study visa, work visa, spouse visa, family visa or Immigration. Our form filling service charges vary from case to case. You can check the below visa file offers with service charges mentioned. If your desired country is not mentioned in the list you may contact us for any question or doubt.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <Cards />
            </div>
        </div>
    </section>
    </>
  )
}

export default VisaFillingPage
