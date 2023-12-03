import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";

const HeroAlt = ({ children, title }) => {
  return (
    <section className="bg-[#F8F9FC] w-full mt-[-80px] pt-48 pb-20 relative overflow-hidden">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-5 capitalize">{title}</h2>
        <p className="flex items-center gap-1 capitalize text-lg font-semibold">
          Home <MdOutlineChevronRight />{" "}
          <span className="text-[#20B15A]">{title}</span>
        </p>
      </div>
    </section>
  );
};

export default HeroAlt;
