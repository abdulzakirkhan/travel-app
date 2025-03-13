"use client"
import Accordion, { AccordionMini } from "@/components/Tab";
import Image from "next/image";

export default function Home() {
  const countries= [
    {
      image:"/countries/paris.webp",
      title :"Paris"
    },
    {
      image:"/countries/austrailia.webp",
      title :"Australia"
    },
    {
      image:"/countries/london.webp",
      title :"London"
    },
    {
      image:"/countries/south-africa.webp",
      title :"South Africa"
    },
  ]
  const packgages= [
    {
      title:"Visa Service",
      desc:"All kind of visa filling and visa consultancy services.",
      image:"/packages/1-Visa-Services.webp"
    },
    {
      title:"Tour Packages",
      desc:"Customized tour packages all around the world with tickets.",
      image:"/packages/2-Tour-Packages.webp"
    },
    {
      title:"Group Tours",
      desc:"Amazing group tours with friends and families.",
      image:"/packages/3-Group-Tours.webp"
    },
    {
      title:"Honeymooners",
      desc:"Unforgettable Honeymoon packages for couples.",
      image:"/packages/4-HoneyMoon-Packages.webp"
    },
    {
      title:"Newyear Packages",
      desc:"Newyear packages for solo, friends and families.",
      image:"/packages/5-Newyear-Packages.webp"
    },
    {
      title:"Hajj & Umrah",
      desc:"Hajj and Umrah packages with economy and luxury options.",
      image:"/packages/6-Hajj-Umrah-Packages.webp"
    },
  ]
  const logos=[
    {
      image:"/logos/1.png",
      title:"Best Agents"
    },
    {
      image:"/logos/2.png",
      title:"Best Prices"
    },
    {
      image:"/logos/3.png",
      title:"Instant Support"
    },
    {
      image:"/logos/4.png",
      title:"Fast Booking"
    },
    {
      image:"/logos/5.png",
      title:"Safety & trust"
    },
  ]
  return (
    <>
    <section>
      <div className="container mt-5 mx-auto px-6">
        <h1 className="text-fs20 text-primary text-center">Welcome To Bliss Travels & Tours™ (PVT) LTD - The Best Travel Agency in Lahore & Karachi, Pakistan</h1>
      </div>
      <div className="grid md:grid-cols-12 py-14">
        {countries.map((card, index) => (
          <div className="w-full md:col-span-3" key={index | card.title}>
            <div
              className="relative bg-no-repeat bg-center w-full h-96 bg-cover group"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              {/* Title Section (Initially Hidden) */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h1 className="h-1/2 flex justify-center items-center w-1/2 text-white relative px-4 py-2 custom-border">
                  <span className="text-fs25 absolute top-44 left-32">{card.title}</span>
                </h1>
              </div>
            </div>
          </div>
        ))}


      </div>
      <div className="py-4 px-4">
        <div className="grid md:grid-cols-12 gap-12 md:gap-2">
          {packgages.map((card,index) => (
            <div className="w-full rounded-md shadow-cust md:col-span-2 transition-shadow duration-300 bg-white " key={index}>
              <div className="text-center mt">
                <span className="fs-42">{index+1}</span>
              </div>
              <div className="px-4">
                <Image className="w-full md:w-auto" src={`${card.image}`} width={200} height={230} alt="" />
              </div>
              <div className="text-center px-2 pb-4">
                <h1 className="fs-30">{card.title}</h1>
                <p className="text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 mt-12 py-6">
        <AccordionMini />

        <div className="grid md:grid-cols-12 my-8 py-5 px-4">
          <div className="w-full md:col-span-12">
            <h1 className="text-fs25 text-gray-800 text-center"> <strong>Why Bliss Travels & Tours (Pvt.) Ltd?</strong></h1>
          </div>
        </div>
        <div className="grid md:grid-cols-10 lg:ms-6 pb-8 justify-center">
          {logos.map((item,index)=>(
            <div className="w-full md:col-span-2"key={index}>
              <Image src={item.image} width={100} height={90} alt={item.title} />
              <div className=""></div>
            </div>
          ))}
        </div>
        <Accordion />
      </div>
    </section>

    <section>
      <div className="container mx-auto px-6 py-6">
        <div className="grid md:grid-cols-1 justify-center">
          <img src="/Travel-Affilations.jpg" alt="" className="w-full" />
        </div>
      </div>
    </section>
    </>
  );
}
