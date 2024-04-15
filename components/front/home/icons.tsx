import React from 'react'
import { FaGoogle, FaFacebook, FaInstagramSquare, FaLinkedin, FaTiktok, FaSnapchat, FaYoutube } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { TfiYoutube } from "react-icons/tfi";
import { BsBing } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

type Props = {}

function Icons({}: Props) {
  return (
    <section className="container py-14">
        <div className="flex justify-between">
            <FaGoogle className="h-12 w-12 text-gray-300"/>
            <FaLinkedin className="h-12 w-12 text-gray-300"/>
            <BsBing className="h-10 w-10 text-gray-300"/>
            <FaFacebook className="h-12 w-12 text-gray-300"/>
            <TbWorldWww className="h-14 w-14 text-gray-300"/>
            <TfiYoutube className="h-12 w-12 text-gray-300"/>
            <SiGoogleads className="h-12 w-12 text-gray-300"/>
            <FaInstagramSquare className="h-12 w-12 text-gray-300"/>
        </div>
    </section>
  )
}

export default Icons