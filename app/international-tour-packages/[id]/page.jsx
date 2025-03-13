"use client";
import React from "react";
import { tourPackages } from "@/app/data";
import { useParams } from "next/navigation";

const CardDetailsPage = () => {
  const { id } = useParams();
  
  const card = tourPackages.find((item) => item.id === Number(id));

  console.log("card", card);

  return (
    <>
      <section>
        <div className="container mx-auto px-6 py-6">
            {card ? (
                <div className="grid md:grid-cols-12">
                    <div className="w-full md:col-span-6">
                        <div className="px-6">
                            <h1 className="fs-40">{card.title}</h1>
                            <p className="font-semibold py-3 px-4">Package Price Starting From PKR ={card.price}</p>
                        </div>
                        <div className="">
                            <h3 className="text-lg">Package Details:</h3>
                            <div className="space-y-2">
                                <p>Minimum Allowed: 2 Persons</p>
                                <p>Rate Mentioned: Per Head</p>
                                <p>Visas: Included</p>
                                <p>Air Ticket: Included</p>
                                <p>Insurance: Included</p>
                                <p>Hotel Choice: 4 Star</p>
                                <p>Stay : 17 Nights & 18 Days</p>
                                <h3 className="text-lg">Package Includes:</h3>
                                <p className="text-sm font-semibold">{card.name}:</p>
                            </div>
                            <ol className="space-y-2 list-disc list-inside">
                                <li>4 Night’s Accommodation In 4 Star Hotel</li>
                                <li>Daily Buffet Breakfast</li>
                                <li>Bursa Day Trip from Istanbul</li>
                                <li>Princess Island With Lunch</li>
                                <li>Return Airport Transfers</li>

                            </ol>
                            <p className="text-lg">Dubai:</p>
                            <ol className="space-y-2 list-disc list-inside">
                                <li>4 Night’s Accommodation In 4 Star Hotel</li>
                                <li>Daily Buffet Breakfast</li>
                                <li>Desert Safari with Dinner and Return Transfers</li>
                                <li>Dubai Aquarium Admission Ticket</li>
                                <li>Return Airport Transfers</li>
                            </ol>
                            <p className="text-lg">Umrah:</p>
                            <ol className="space-y-2 list-disc list-inside">
                                <li>5 Night’s Accommodation In Economy Hotel (Makkah)</li>
                                <li>4 Night’s Accommodation In Economy Hotel (Madinah)</li>
                                <li>Transport By Bus</li>
                            </ol>
                        </div>
                    </div>

                    <div className="w-full md:col-span-6">
                        <img src={card.image} alt="" />
                    </div>
                </div>
            ) : (
              <p>No data found for this card.</p>
            )}
        </div>
      </section>
    </>
  );
};

export default CardDetailsPage;
