"use client";
import React from "react";
import { useParams } from "next/navigation";
import CardDetails from "@/components/CardDetails";
import { umrahData } from "@/app/data";

const CardDetailsPage = () => {
  const { id } = useParams();
  
  const card = umrahData.find((item) => item.id === Number(id));

  console.log("card", card);

  return (
    <>
      <section>
        <div className="container mx-auto px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-5">
                <CardDetails card={card} />
            </div>
        </div>
      </section>
    </>
  );
};

export default CardDetailsPage
