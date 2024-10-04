"use client";
import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideRight } from "@/lib/animation";
import { MdDirectionsCarFilled } from "react-icons/md";

const WhyChooseData = [
  {
    id: 1,
    title: "Accidents annuels",
    desc: "Plus de 30 000 accidents par an sont attribués au fait que les conducteurs ne comprennent pas le code de la route.",
    icon: <MdDirectionsCarFilled />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "taux de blessures",
    desc: "Environ 20 % des accidents de la route sont liés à l’ignorance du code de la route.",
    link: "/",
    icon: <MdDirectionsCarFilled />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Décès",
    desc: "Le manque de connaissance du code de la route contribue à 15 % des décès sur la route.",
    link: "/",
    icon: <MdDirectionsCarFilled />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Améliorer vos connaissances",
    desc: "Commencez votre parcours vers une conduite plus sécuritaire dès aujourd'hui ! Répondez à un questionnaire ou commencez une leçon pour améliorer vos connaissances du code de la route.",
    link: "/",
    icon: <MdDirectionsCarFilled />, // Optionally replace this with a different icon
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];
const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc] w-full px-12 flex justify-between items-center pb-20">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Choose Us
          </h1>
          
        </div>
        {/* cards section */}
        <div className='' >

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <div
                
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
                key={item.id}
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
