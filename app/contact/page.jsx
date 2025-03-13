"use client"
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { useFormik } from "formik";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
const ContactPage = () => {
    const contactInformations=[
        {
            title:"Email US",
            icon:<AiOutlineMail className="text-white" size={30} />,
            email:"info@blisstravels.com.pk",
            bg:"#F5BA6A"
        },
        {
            title:"Call US",
            icon:<IoIosCall className="text-white" size={30} />,
            whatsApp:"WhatsApp: +92 300 0651990",
            bg:"#CC6B59"
        },
        {
            title:"Visit US",
            icon:<MdLocationOn className="text-white size-10 md:size-8" />,
            add:"Suite No. 1-GF, Al-Hafeez Shopping Mall, Ground Floor, 82-D/1 Main Boulevard, Gulberg 3, Lahore.",
            bg:"#15C39A"
        },
    ]
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string().required("Phone Number is required"),
        message: Yup.string().required("Message is required"),
      });
    
      const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
          message: "",
        },
        validationSchema,
        onSubmit: (values) => {
          console.log(values);
        },
      });
  return (
    <>

    <section>
        <div className="container mt-12 py-8 mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="w-full">
                    <h1 className="text-7xl font-bold">Contact Us</h1>

                    <p className="para text-gray-700 my-5 px-2">Get In Touch Anytime!</p>
                    <p className="text-gray-700">If you have any query regarding visa consultancy, air ticketing, travel and tour packages or you want to perform a Hajj or Umrah. feel free to contact us at any time.</p>



                    <div className="py-6 mt-3 space-y-4">
                        {contactInformations.map((contact,index) => (
                            <div className="flex gap-4" key={index}>
                                <div className={`rounded-full w-h ${contact.title === "Visit US" ? "hlocations" : ""} flex justify-center items-center`} style={{backgroundColor:contact.bg,}}>
                                    {contact.icon}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p>{contact.title}</p>
                                    {contact?.email && (
                                        <p className="text-gray-700">{contact?.email}</p>
                                    )}
                                    {contact?.add && (
                                        <p className="text-gray-700">{contact?.add}</p>
                                    )}
                                    {contact?.whatsApp && (
                                        <p className="text-gray-700">{contact?.whatsApp}</p>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>



                </div>

                <div className="w-full">
                <form onSubmit={formik.handleSubmit} className="md:mx-auto w-full md:p-4">
  
                        <div className="mb-2">
                            <input
                            id="name"
                            name="name"
                            type="text"
                            className="w-full p-2 border rounded"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name} placeholder='Name'
                            />
                            {formik.touched.name && formik.errors.name && (
                            <div className="text-red-500 text-sm">{formik.errors.name}</div>
                            )}
                        </div>

                        <div className="mb-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full p-2 border rounded"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder='Email'
                            />
                            {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                            )}
                        </div>

                        <div className="mb-2">
                            <input
                            id="phone"
                            name="phone"
                            type="text"
                            className="w-full p-2 border rounded"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            placeholder='Phone'
                            />
                            {formik.touched.phone && formik.errors.phone && (
                            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                            )}
                        </div>

                        <div className="mb-2">
                            <textarea
                            id="message"
                            name="message"
                            className="w-full p-2 border rounded h-32 resize-none"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message} rows={8}
                            placeholder='Message'
                            />
                            {formik.touched.message && formik.errors.message && (
                            <div className="text-red-500 text-sm">{formik.errors.message}</div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-[#E02B20] text-white py-3 px-7 hover:bg-orange-800 rounded-full"
                            disabled={!formik.isValid || formik.isSubmitting}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

        
        <div className="grid grid-cols-1">
            <div className="">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3621382350752!2d74.34070857602217!3d31.514212274216877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017b4938ff03%3A0x56633f01fca4bdc!2sBliss%20Travels%20%26%20Tours%C2%AE%20PVT.%20LTD.!5e0!3m2!1sen!2sus!4v1739519163646!5m2!1sen!2sus" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default ContactPage
