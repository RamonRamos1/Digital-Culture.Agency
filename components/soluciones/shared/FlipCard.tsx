"use client";

import { useState } from "react";


interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}


export default function FlipCard({
  front,
  back
}: FlipCardProps) {


  const [flipped, setFlipped] = useState(false);



  return (

    <div
      className="
        group
        perspective
        cursor-pointer
        md:cursor-default
      "
      onClick={() => setFlipped(!flipped)}
    >

      <div
        className={`
          relative
          min-h-[260px]
          transition-transform
          duration-500
          transform-style-preserve-3d

          ${
            flipped
              ? "rotate-y-180"
              : ""
          }

          md:transform-none
        `}
      >


        {/* FRONT */}
        <div
          className="
            absolute
            inset-0
            backface-hidden
            rounded-3xl
            border
            border-dc-border
            bg-dc-card
            p-6
          "
        >

          {front}


          <p
            className="
              mt-6
              text-xs
              text-dc-blue
              md:hidden
            "
          >
            Tocar para conocer más
          </p>


        </div>




        {/* BACK */}
        <div
          className="
            absolute
            inset-0
            rotate-y-180
            backface-hidden
            rounded-3xl
            border
            border-dc-border
            bg-dc-card
            p-6
            md:hidden
          "
        >

          {back}

        </div>



      </div>


    </div>

  );

}