"use client";
import { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";

const AccountDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const bankAccountDetails = [
    {
      title: "Bank Al Falah Limited",
      accountTitle: "Bliss Travels &amp; Tours (Pvt.) Ltd.",
      account: "0028-1007188990",
      IBAN: `PK55ALFH0028001007188990`,
    },
    {
      title: "Meezan Bank Limited",
      accountTitle: "Bliss Travels &amp; Tours (Pvt.) Ltd.",
      account: "0290-0103955485",
      IBAN: `PK31MEZN0002900103955485`,
    },
    {
      title: "Bank Al-Habib Limited",
      accountTitle: "Bliss Travels &amp; Tours (Pvt.) Ltd.",
      account: "0109-0981-004240-01-5",
      IBAN: `PK83BAHL0109098100424001`,
    },
  ];

  return (
    <div className="w-full">
      {bankAccountDetails.map((item, index) => (
        <div key={index} className="border my-2 border-gray-200">
          <button
            className="w-full text-left p-3 text-gray-700 hover:bg-blue-50 transition-all duration-200 flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-gray-500">{item.title}</span>
            <CiCircleMinus size={30} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-12 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-3 bg-blue-50 text-gray-700">
              <p>
                <strong>Account Title:</strong> {item.accountTitle}
                <br />
                <strong>Account #</strong> {item.account}
                <br />
                <strong>IBAN #</strong> {item.IBAN}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountDetails;
