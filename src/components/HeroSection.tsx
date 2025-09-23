"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Star, Users, Award } from "lucide-react";

const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple floating animation using CSS transforms
    const floatingElements = floatingElementsRef.current?.children;
    if (floatingElements) {
      Array.from(floatingElements).forEach((el, index) => {
        (el as HTMLElement).style.animation =
        `bounce-gentle 3s ease-in-out infinite ${index * 0.5}s`;
      });
    }

    // Counter animation
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-count") || "0");
        const increment = target / 100;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target.toString();
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current).toString();
          }
        }, 20);
      });
    }
  }, []);

  const stats = [
  {
    icon: <Users className="w-6 h-6" data-oid="pt22jmf" />,
    count: 2010,
    label: "Established",
    suffix: ""
  },
  {
    icon: <Shield className="w-6 h-6" data-oid="tc8-l60" />,
    count: 14,
    label: "Years Experience",
    suffix: "+"
  },
  {
    icon: <Award className="w-6 h-6" data-oid="uplnr1p" />,
    count: 3,
    label: "Major Insurers",
    suffix: "+"
  },
  {
    icon: <Star className="w-6 h-6" data-oid="u9d8ulm" />,
    count: 100,
    label: "Customer Focused",
    suffix: "%"
  }];


  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden pt-16"
      data-oid="gk2iyny">

      {/* Floating Background Elements */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
        data-oid=".5i3ih0">

        <div
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
          data-oid="urnq7th">
        </div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20"
          data-oid="8ppwzm3">
        </div>
        <div
          className="absolute bottom-40 left-20 w-16 h-16 bg-primary-300 rounded-full opacity-30"
          data-oid="1ozlobl">
        </div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-300 rounded-full opacity-25"
          data-oid="8j89s3c">
        </div>
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-primary-200 to-orange-200 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"
          data-oid="fy6gf26">
        </div>
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12"
        data-oid="i58fzrp">

        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          data-oid="bs6mkhe">

          {/* Left Column - Content */}
          <div className="space-y-8" data-oid="3_7vek.">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              data-oid="t2ehrh-">

              <span
                className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6"
                data-oid="zm_:_2n">

                <Shield className="w-4 h-4 mr-2" data-oid="z7bj4o." />
                Singapore's Leading General Insurance Agency
              </span>

              <h1
                className="text-4xl md:text-6xl font-bold leading-tight"
                data-oid=":57nvdi">

                <span className="gradient-text" data-oid="1u1nnf0">
                  Singapore's Most
                </span>{" "}
                <span className="text-gray-900" data-oid="cr-ss:e">
                  Comprehensive
                </span>{" "}
                <span className="text-gray-900" data-oid="95-3x:p">
                  Range of
                </span>
                <br data-oid="d0q61c_" />
                <span className="gradient-text" data-oid="-m4edo5">
                  General Insurance
                </span>
              </h1>

              <h2
                className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4"
                data-oid="fgcz1st">

                Be In Control of Any Business or Personal Risk.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              data-oid="uzupybp">

              At Premier GIS, our goal is to help you and your business survive
              any insurable event financially. Your insurance interest always
              come first at Premier GIS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
              data-oid="0b.kv6y">

              <button
                className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-lg flex items-center justify-center"
                data-oid="qrl4qhk">

                Get Your Quote
                <ArrowRight
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                  data-oid="_kntw06" />

              </button>

              <button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary-500 hover:text-primary-600 transition-colors duration-200 hover-lift"
                data-oid="s59g6mr">

                Learn More
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex items-center space-x-6 pt-8"
              data-oid="9a43b5g">

              <div className="flex items-center space-x-1" data-oid="cxtz-p2">
                {[...Array(5)].map((_, i) =>
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  data-oid="re3kq0:" />

                )}
                <span
                  className="ml-2 text-gray-600 font-medium"
                  data-oid="id7gpyq">

                  4.9/5 Rating
                </span>
              </div>
              <div className="h-6 w-px bg-gray-300" data-oid="o_5:lc5"></div>
              <span className="text-gray-600 font-medium" data-oid="524-kp:">
                A+ BBB Rating
              </span>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
            data-oid="lmli0bl">

            {/* Main Visual Element */}
            <div className="relative" data-oid="6p.qfxn">
              <div
                className="w-full h-96 bg-gradient-to-br from-primary-500 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-1 transition-transform duration-500"
                data-oid="5ml_8sp">

                <Shield className="w-32 h-32 text-white" data-oid="bsi4y8:" />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                data-oid="w:a402m">

                <div className="flex items-center space-x-2" data-oid="gp5sexs">
                  <div
                    className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                    data-oid="xr7i_qm">

                    <Shield
                      className="w-4 h-4 text-green-600"
                      data-oid="my5wxz6" />

                  </div>
                  <div data-oid="0459g__">
                    <p className="text-xs text-gray-500" data-oid="5f21qj-">
                      Coverage
                    </p>
                    <p
                      className="text-sm font-semibold text-gray-800"
                      data-oid="a:llzat">

                      100% Protected
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                data-oid="c9tlm54">

                <div className="flex items-center space-x-2" data-oid="xil9r.j">
                  <div
                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                    data-oid="o5p7w:p">

                    <Award
                      className="w-4 h-4 text-blue-600"
                      data-oid="twvh0qa" />

                  </div>
                  <div data-oid="fi0tsma">
                    <p className="text-xs text-gray-500" data-oid="3yryab1">
                      Claims
                    </p>
                    <p
                      className="text-sm font-semibold text-gray-800"
                      data-oid="lbe4d9c">

                      24/7 Support
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200"
          data-oid="941tpa2">

          {stats.map((stat, index) =>
          <div key={index} className="text-center group" data-oid="q705s38">
              <div
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-200"
              data-oid="n-18bgu">

                {stat.icon}
              </div>
              <div
              className="text-3xl font-bold text-gray-800 mb-1"
              data-oid=".:m.r:x">

                <span
                className="counter"
                data-count={stat.count}
                data-oid="josx1u0">

                  0
                </span>
                <span data-oid="c2-ani6">{stat.suffix}</span>
              </div>
              <p
              className="text-gray-600 text-sm font-medium"
              data-oid="ku78:ja">

                {stat.label}
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        data-oid="04__9tq">

        <span className="text-sm text-gray-500 mb-2" data-oid="bt3sj6y">
          Scroll to explore
        </span>
        <div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          data-oid="qqxqm79">

          <div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"
            data-oid="107kgyb">
          </div>
        </div>
      </motion.div>
    </section>);

};

export default HeroSection;