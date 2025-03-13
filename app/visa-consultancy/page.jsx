"use client"
import ContactForm from '@/components/ContactForm'
import React from 'react'
import ReactCountryFlag from "react-country-flag";
const visaConsultancyPage = () => {
    const countries = [
        { title: "Anguilla", code: "AI" },
        { title: "Argentina", code: "AR" },
        { title: "Aruba", code: "AW" },
        { title: "Australia", code: "AU" },
        { title: "Austria", code: "AT" },
        { title: "Azerbaijan", code: "AZ" },
        { title: "Bahamas", code: "BS" },
        { title: "Bahrain", code: "BH" },
        { title: "Bangladesh", code: "BD" },
        { title: "Belarus", code: "BY" },
        { title: "Belgium", code: "BE" },
        { title: "Bonaire", code: "BQ" },
        { title: "Brazil", code: "BR" },
        { title: "British Virgin Islands", code: "VG" },
        { title: "Bulgaria", code: "BG" },
        { title: "Cambodia", code: "KH" },
        { title: "Canada", code: "CA" },
        { title: "Cayman Islands", code: "KY" },
        { title: "China", code: "CN" },
        { title: "Cuba", code: "CU" },
        { title: "Curacao", code: "CW" },
        { title: "Cyprus", code: "CY" },
        { title: "Czech Republic", code: "CZ" },
        { title: "Denmark", code: "DK" },
        { title: "Djibouti", code: "DJ" },
        { title: "Dubai (UAE)", code: "AE" }, // UAE includes Dubai
        { title: "Egypt", code: "EG" },
        { title: "Estonia", code: "EE" },
        { title: "Ethiopia", code: "ET" },
        { title: "Falkland Islands", code: "FK" },
        { title: "Faroe Islands", code: "FO" },
        { title: "Finland", code: "FI" },
        { title: "France", code: "FR" },
        { title: "Germany", code: "DE" },
        { title: "Ghana", code: "GH" },
        { title: "Gibraltar", code: "GI" },
        { title: "Greece", code: "GR" },
        { title: "Greenland", code: "GL" },
        { title: "Hong Kong", code: "HK" },
        { title: "Hungary", code: "HU" }
      ];

      
      
      
    
  return (
    <>
    <section className="bg-[#FFFFFF]">
        <div className="container mx-auto px-6">
            <h1 className="text-primary fs-40 text-center">Best Visa Consultant in Lahore, Pakistan</h1>
            <p className="py-5">We provide proper visa services and consultancy for the below-mentioned countries. We have updated information about the documentation, processes, requirements and the rules of visa embassies. We are the one-stop visa agent company that will help you to get fly to your desired destination.</p>
            <div className="grid md:grid-cols-12">
                <div className="w-full md:col-span-8">
                    <img src="/visa/Best-Visa-Consultant.jpg" className='' alt="" />
                </div>
                <div className="w-full md:col-span-4">
                    <ContactForm />
                </div>
            </div>
            <div className="py-6">
                <h1 className="fs-30 text-center text-primary font-semibold py-5">Providing Visa Consultancy Services For Below Countries From Pakistan</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {countries.map((country) => (
                        <div 
                            key={country.code}
                            className="group relative flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-blue-200"
                        >
                            <div className="flex-shrink-0">
                            <ReactCountryFlag
                                countryCode={country.code}
                                svg
                                style={{
                                width: '2em',
                                height: '2em',
                                }}
                                className="rounded-sm shadow-sm"
                            />
                            </div>
                            <span className="ml-4 text-gray-700 font-medium text-lg">
                            {country.title}
                            </span>
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-100 transition-colors duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-12">
                <p>Bliss visa consultancy provides hassle-free services to all their clients because our travel consultants have updated and legal knowledge about the laws of visa and immigrations cases of different type of visa categories. We can help you to get a temporary visa and a permanent visa for settlement that can help you to move from one country to another with proper and legal documentation.</p>
                <p className="mt-4">We can also help you to schedule your appointments at visa centres all across Pakistan. Most people try to apply for visa themselves and but not all get the visa stamped just because they don’t know how to put a case in front of a visa officer. We are expert in tailoring up your documents most appealingly and legally according to your skillset and circumstances.</p>
                <p className="mt-4">Everyone claims to be a visa consultancy expert these days but not everyone can help you, even some of the visa consultants will fail to provide the right information to you as well.</p>
                <p className="mt-4">The most unethical practices followed by some visa consultants are selling fake documentation, for examples financial documentation like bank statements or any other source of income and/or fake sponsorship. If these types of actions are found in the interview process that could end up in permanent illegibility for that person to get a visa for many years or a lifetime and even, he can get a ban from a long period.

</p>
<p className="mt-4">We at Bliss Travels & Tours are fully aware of such issues and we carefully work with our clients to ensure that all the information provided in the visa application is 100% accurate and no fake and/or false information has been provided in the documentation</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default visaConsultancyPage
