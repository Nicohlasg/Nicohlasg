"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Car,
  Plane,
  Heart,
  Building } from
"lucide-react";
import Link from "next/link";

interface Insurance {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  features: string[];
  link: string;
}

const insuranceTypes: Insurance[] = [
{
  id: "home",
  name: "Home Insurance",
  title: "Protect Your Home",
  description:
  "Comprehensive coverage for your most valuable asset with flexible plans and excellent customer service.",
  icon: <Home className="w-12 h-12" data-oid="vaykn2." />,
  color: "from-blue-500 to-blue-700",
  gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
  features: [
  "Property Protection",
  "24/7 Claims Support",
  "Natural Disaster Coverage",
  "Personal Belongings"],

  link: "/insurance/home"
},
{
  id: "motor",
  name: "Motor Insurance",
  title: "Drive with Confidence",
  description:
  "Complete vehicle protection with roadside assistance and hassle-free claim processing.",
  icon: <Car className="w-12 h-12" data-oid="whn:791" />,
  color: "from-green-500 to-green-700",
  gradient: "bg-gradient-to-br from-green-50 to-green-100",
  features: [
  "Comprehensive Coverage",
  "Roadside Assistance",
  "No-Claim Bonus",
  "Quick Settlement"],

  link: "/insurance/motor"
},
{
  id: "travel",
  name: "Travel Insurance",
  title: "Journey with Peace of Mind",
  description:
  "Global coverage for all your travel needs including medical emergencies and trip cancellations.",
  icon: <Plane className="w-12 h-12" data-oid="uhdf8ts" />,
  color: "from-purple-500 to-purple-700",
  gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
  features: [
  "Medical Emergency",
  "Trip Cancellation",
  "Lost Baggage",
  "Flight Delay"],

  link: "/insurance/travel"
},
{
  id: "childcare",
  name: "Childcare Insurance",
  title: "Secure Your Child's Future",
  description:
  "Comprehensive health and education coverage designed specifically for your children's needs.",
  icon: <Heart className="w-12 h-12" data-oid="q7-7s.r" />,
  color: "from-pink-500 to-pink-700",
  gradient: "bg-gradient-to-br from-pink-50 to-pink-100",
  features: [
  "Health Coverage",
  "Education Support",
  "Emergency Care",
  "Preventive Care"],

  link: "/insurance/childcare"
},
{
  id: "business",
  name: "Business Insurance",
  title: "Protect Your Enterprise",
  description:
  "Tailored business solutions covering liability, property, and operational risks for companies of all sizes.",
  icon: <Building className="w-12 h-12" data-oid="_c4z_uf" />,
  color: "from-orange-500 to-orange-700",
  gradient: "bg-gradient-to-br from-orange-50 to-orange-100",
  features: [
  "Liability Protection",
  "Property Coverage",
  "Business Interruption",
  "Cyber Security"],

  link: "/insurance/business"
}];


const InsuranceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % insuranceTypes.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + insuranceTypes.length) % insuranceTypes.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const currentInsurance = insuranceTypes[currentIndex];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      data-oid="pid-ail">

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="4oaai:_">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
          data-oid="awvct01">

          <h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
            data-oid="qaa4fd8">

            Insurance Solutions
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="a-m3xqv">

            Discover our comprehensive range of insurance products designed to
            protect what matters most to you
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-oid="zuuy3x_">

          {/* Main Carousel */}
          <div
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            data-oid="yj9:iqu">

            <AnimatePresence mode="wait" data-oid=":pz8d8e">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute inset-0 ${currentInsurance.gradient} flex items-center justify-between px-12`}
                data-oid="7dhtenc">

                {/* Content */}
                <div className="flex-1 pr-8" data-oid="2wg-psz">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${currentInsurance.color} mb-6`}
                    data-oid="6.jxrsr">

                    {currentInsurance.icon}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                    data-oid="ipv:il4">

                    {currentInsurance.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-600 mb-6 leading-relaxed"
                    data-oid="g4z:2gr">

                    {currentInsurance.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                    data-oid="_7p:qdw">

                    <h4
                      className="text-xl font-semibold text-gray-800 mb-4"
                      data-oid="s2kioz2">

                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-3" data-oid="yehu0rx">
                      {currentInsurance.features.map((feature, index) =>
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center space-x-2"
                        data-oid=":dtr:w1">

                          <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentInsurance.color}`}
                          data-oid="2b1mqw.">
                        </div>
                          <span className="text-gray-700" data-oid="74s4x7k">
                            {feature}
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    data-oid="4e_mvcr">

                    <Link
                      href={currentInsurance.link}
                      className={`inline-flex items-center px-8 py-3 bg-gradient-to-r ${currentInsurance.color} text-white font-semibold rounded-full hover-lift shadow-lg`}
                      data-oid="4-d4s8k">

                      Learn More
                      <ChevronRight
                        className="ml-2 w-4 h-4"
                        data-oid="qbkwjb:" />

                    </Link>
                  </motion.div>
                </div>

                {/* Visual Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex-1 flex items-center justify-center"
                  data-oid="ph1wfrw">

                  <div
                    className={`w-80 h-80 bg-gradient-to-r ${currentInsurance.color} rounded-full flex items-center justify-center text-white shadow-2xl`}
                    data-oid="zzu-02f">

                    <div className="scale-[3]" data-oid="6-r1pp4">
                      {currentInsurance.icon}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover-lift"
              data-oid=":i_9gre">

              <ChevronLeft
                className="w-6 h-6 text-gray-700"
                data-oid="l9o9uis" />

            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover-lift"
              data-oid="bcxx5z_">

              <ChevronRight
                className="w-6 h-6 text-gray-700"
                data-oid="_p453i9" />

            </button>
          </div>

          {/* Indicators */}
          <div
            className="flex justify-center mt-8 space-x-3"
            data-oid="rqcakpi">

            {insuranceTypes.map((_, index) =>
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${
              index === currentIndex ?
              `bg-gradient-to-r ${insuranceTypes[index].color} scale-125` :
              "bg-gray-300 hover:bg-gray-400"}`
              }
              data-oid="c6cju0c" />

            )}
          </div>

          {/* Insurance Type Cards */}
          <div
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"
            data-oid="dyfs8n0">

            {insuranceTypes.map((insurance, index) =>
            <motion.button
              key={insurance.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 hover-lift ${
              index === currentIndex ?
              `border-gradient-to-r ${insurance.color} bg-white shadow-lg` :
              "border-gray-200 bg-white hover:border-gray-300"}`
              }
              data-oid="59wq3lw">

                <div
                className={`mb-2 text-transparent bg-clip-text bg-gradient-to-r ${insurance.color}`}
                data-oid="4trigdk">

                  {insurance.icon}
                </div>
                <h3
                className="text-sm font-semibold text-gray-800"
                data-oid="9-8y2qx">

                  {insurance.name}
                </h3>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default InsuranceCarousel;