"use client"
import Link from "next/link";
import React from "react";
import AccountDetails from "./AccountDetails";

const Footer = () => {
  const bankAccountDetails = [
    {
      title: "Bank Al Falah Limited",
      accountTitle: "Bliss Travels &amp; Tours (Pvt.) Ltd.",
      account:"0028-1007188990",
      IBAN:`<strong>IBAN #</strong> PK55ALFH0028001007188990`,
    },
    {
      title: "Meezan Bank Limited",
      accountTitle: "Bliss Travels &amp; Tours (Pvt.) Ltd.",
      account:"0290-0103955485",
      IBAN:`<strong>IBAN #</strong> PK31MEZN0002900103955485`,
    },
    {
      title: "Bank Al-Habib Limited",
      accountTitle: "Bliss Travels &amp; Tours (Pvt.) Ltd.",
      account:"0109-0981-004240-01-5",
      IBAN:`<strong>IBAN #</strong> PK83BAHL0109098100424001`,
    },
  ]
  return (
    <footer className="bg-[#F2F2F2] pt-8">
      <div className="container mx-auto px-7">
        <div className="grid md:grid-cols-3 justify-center gap-8">
          <div className="w-full">
            <div className="">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <b>Sales and Support:</b>
                  <p>
                    <b> LHR:</b>{" "}
                    <Link target="_blank" href="tel:+9242-35774781" className="text-red-700">
                      042-35774781-2-3
                    </Link>
                  </p>
                  <p>
                    <b> KHI:</b>{" "}
                    <Link target="_blank" href="tel:+9221-34134781" className="text-red-700">
                      021-34134781-2-3
                    </Link>
                  </p>
                </div>

                <p>
                  <b>WhatsApp:</b>&nbsp;
                  <Link target="_blank"
                    href="https://api.whatsapp.com/send?phone=923001171171"
                    className="text-red-700"
                  >
                    0092 300 117 1171
                  </Link>
                </p>
                <p>
                  <b>UAN:</b> 0304 111 2733
                </p>
                <p>
                  <b>Email:</b>&nbsp;
                  <Link target="_blank"
                    href="mailto:info@blisstravels.com.pk"
                    className="text-red-700"
                  >
                    info@blisstravels.com.pk
                  </Link>
                </p>
                <p>
                  <b>Lahore Office:</b>{" "}
                  <Link target="_blank"
                    className="map text-red-700"
                    href="https://www.google.com/maps/place/Bliss+Travels+%26+Tours+(Pvt.)+Ltd+-+Best+Travel+Agency/@31.514206,74.3434354,15z/data=!4m5!3m4!1s0x0:0x56633f01fca4bdc!8m2!3d31.514206!4d74.3434354"
                  >
                    Suite No. 1-2 GF, Al-Hafeez Shopping Mall, Ground Floor,
                    82-D/1 Main Boulevard, Gulberg 3, Lahore.
                  </Link>
                </p>
                <p>
                  <b>Karachi Office: </b>
                  <Link target="_blank"
                    className="text-red-700"
                    href="https://www.google.com/maps/place/Bliss+Travel+%26+Tours+PVT.+LTD/data=!4m2!3m1!1s0x0:0x24fa6930c6527452?sa=X&amp;ved=1t:2428&amp;ictx=111"
                    title="Karachi Branch Location"
                  >
                    Suite No. 8, Adam Arcade, Bihar Muslim Cooperative Housing
                    Society, Shaheed-e-Millat Road, Karachi.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="">
              <div className="et_pb_text_inner">
                <p style={{ textAlign: "center" }}>
                  <strong>Affiliations</strong>
                </p>
              </div>
            </div>

            <div className="md:mt-12 lg:mt-20">
              <span className="">
                <img
                  decoding="async"
                  width="719"
                  height="469"
                  src="https://blisstravels.com.pk/wp-content/uploads/2024/03/Travel-Certifications.png"
                  alt="Travel-Certifications"
                  title="Travel-Certifications"
                />
              </span>
            </div>
          </div>

          <div className="w-full">
            <div className="et_pb_module et_pb_text et_pb_text_14  et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <strong>&nbsp;Bank Account Details</strong>
              </div>
            </div>
            <AccountDetails />
          </div>
        </div>
      </div>
        <div className="inner-footer bg-no-repeat bg-center bg-cover w-full h-24" style={{backgroundImage:"url(https://blisstravels.com.pk/wp-content/uploads/2019/12/footer-bg.png)"}}></div>
      <div className="bg-[#383937]">
        <div className="container mx-auto px-7">
          <div className="grid md:grid-cols-1 justify-center items-center">
            <p className="text-white py-5">©2024 Bliss Travels & Tours - All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
