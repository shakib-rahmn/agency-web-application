import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black overflow-hidden pt-20 pb-10">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-20 mb-14">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="text-white uppercase text-3xl font-semibold"
            >
              web logo
            </Link>

            <p className="text-lg sm:max-w-[20rem] leading-7 text-white">
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="" className="bg-[#20B15A] p-3 rounded-full">
                <FaFacebookF className="text-white" />
              </Link>
              <Link href="" className="bg-[#20B15A] p-3 rounded-full">
                <FaTwitter className="text-white" />
              </Link>
              <Link href="" className="bg-[#20B15A] p-3 rounded-full">
                <FaLinkedin className="text-white" />
              </Link>
              <Link href="" className="bg-[#20B15A] p-3 rounded-full">
                <AiFillInstagram className="text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-white mb-4 font-medium">Quick Links</h2>
            <Link href="" className="flex w-max mb-4 text-slate-100">Services</Link>
            <Link href="" className="flex w-max mb-4 text-slate-100">Portfolio</Link>
            <Link href="" className="flex w-max mb-4 text-slate-100">About Us</Link>
            <Link href="" className="flex w-max text-slate-100">Contact Us</Link>
          </div>

          <div className="text-white">
            <h2 className="text-white mb-4 font-medium">Address</h2>
            <p className="mb-2 text-[#FFFFFF]">Design Agency Head Office.</p>
            <p className="mb-2 text-[#FFFFFF]">Airport Road</p>
            <p className="text-[#FFFFFF]">United Arab Emirate</p>
          </div>
        </div>

        {/* copyright */}
        <div>
          <p className="text-white font-medium">Copyright Design Agency 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
