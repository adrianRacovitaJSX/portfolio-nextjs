import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clientes = () => {
  return (
    <div className="py-20" id="testimonios">
      <h1 className="heading">
        Y no te lo digo yo... testimonios de <span className="text-purple">mis últimos clientes</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards 
            items={testimonials}
            direction="right"
            speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map (({ id, img, name, nameImg }) => (
                <div key={id} className="flex md:max-w-60 max-w-32 gap-2 mt-5">
                    <img 
                    src={nameImg}
                    alt={name}
                    className="md:w-30 w-24"
                    />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Clientes;
