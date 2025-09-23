"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Users, Building, Shield } from "lucide-react";

const PartnersTestimonialsSection = () => {
  const logoScrollRef = useRef<HTMLDivElement>(null);

  const partners = [
  { name: "Liberty Insurance", logo: "LI" },
  { name: "Bupa Global", logo: "BG" },
  { name: "MSIG Insurance", logo: "MI" },
  { name: "Great Eastern", logo: "GE" },
  { name: "AXA Insurance", logo: "AX" },
  { name: "Zurich Insurance", logo: "ZI" },
  { name: "Tokio Marine", logo: "TM" },
  { name: "QBE Insurance", logo: "QB" }];


  const testimonials = [
  {
    id: 1,
    name: "Elaine Tay",
    role: "Satisfied Customer",
    content:
    "Premier GIS always give me options and advice to make a sound decision. The staff was really attentive and patient. I feel comfortable getting insurance with them. I have recommended them to my family and friends.",
    rating: 5,
    image: "ET"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    content:
    "As a small business owner, I needed comprehensive coverage that wouldn't break the bank. Premier GIS provided exactly what I needed with exceptional customer service. They truly understand business insurance.",
    rating: 5,
    image: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Family Protection",
    content:
    "We bundle our home, auto, and life insurance with Premier GIS and save significantly. The peace of mind knowing our family is protected is invaluable. Their agents are knowledgeable and caring.",
    rating: 5,
    image: "ER"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Auto Insurance",
    content:
    "After shopping around for months, Premier GIS offered the best rates with excellent coverage. Their mobile app makes managing my policy and filing claims incredibly convenient.",
    rating: 5,
    image: "DT"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Travel Insurance",
    content:
    "Their travel insurance saved our vacation when my husband got sick abroad. The medical coverage and trip interruption benefits covered everything. Premier GIS handled our claim seamlessly.",
    rating: 5,
    image: "LW"
  },
  {
    id: 6,
    name: "Robert Martinez",
    role: "Commercial Insurance",
    content:
    "Premier GIS understands the unique challenges of our industry. They've provided tailored solutions and have been there whenever we needed them. True partnership in insurance.",
    rating: 5,
    image: "RM"
  }];


  useEffect(() => {
    if (logoScrollRef.current) {
      logoScrollRef.current.style.animation = "scroll-left 20s linear infinite";
    }
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden" data-oid="6-drv2-">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="pnn5-eq">

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          data-oid="wcnv9sm">

          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
            data-oid="6w2ba9b">

            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 mb-12" data-oid="z8e4-4_">
            We partner with top-rated insurance carriers to bring you the best
            coverage options
          </p>

          {/* Partner Logos Scroll */}
          <div
            className="relative overflow-hidden bg-gray-50 rounded-2xl py-8"
            data-oid="-3v7dim">

            <div
              className="flex items-center whitespace-nowrap"
              ref={logoScrollRef}
              data-oid="ojmt18u">

              {[...partners, ...partners, ...partners].map((partner, index) =>
              <div
                key={index}
                className="flex-shrink-0 mx-8 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200"
                data-oid="3grp6f.">

                  <div
                  className="text-2xl font-bold text-gray-700"
                  data-oid="fi:ecxl">

                    {partner.logo}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          data-oid="mjjwjwx">

          <div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl text-white mb-6"
            data-oid="i.x1kke">

            <Quote className="w-8 h-8" data-oid="12w8gq8" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            data-oid="347gj0c">

            What Our{" "}
            <span className="gradient-text" data-oid="pphuyhi">
              Customers Say
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="i_4mpxs">

            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with Premier GIS.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          data-oid="ari2e76">

          {testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            data-oid="3ojw4n.">

              {/* Rating */}
              <div className="flex items-center mb-4" data-oid="bh4k0wf">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                data-oid="k307-ap" />

              )}
              </div>

              {/* Content */}
              <blockquote
              className="text-gray-700 mb-6 leading-relaxed"
              data-oid="tviwo_d">

                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center" data-oid="t1cocz-">
                <div
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-4"
                data-oid="oxaa0h3">

                  {testimonial.image}
                </div>
                <div data-oid="vdof2ds">
                  <div
                  className="font-semibold text-gray-900"
                  data-oid="pl0sk14">

                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600" data-oid="uuj_61y">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-orange-500 rounded-3xl p-12 text-white text-center"
          data-oid="y9x3-uh">

          <h3 className="text-3xl font-bold mb-8" data-oid="fi2m_pw">
            Join Thousands of Satisfied Customers
          </h3>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-oid=":a4amyh">

            <div className="space-y-2" data-oid="q2z56hw">
              <div
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                data-oid="i21:-w-">

                <Users className="w-8 h-8" data-oid="8xp4mls" />
              </div>
              <div className="text-3xl font-bold" data-oid="61wbxze">
                50,000+
              </div>
              <div className="text-lg opacity-90" data-oid="whrit54">
                Happy Customers
              </div>
            </div>

            <div className="space-y-2" data-oid="7g0m96x">
              <div
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                data-oid="gtiauyz">

                <Shield className="w-8 h-8" data-oid="go88:h0" />
              </div>
              <div className="text-3xl font-bold" data-oid="697hyr2">
                98%
              </div>
              <div className="text-lg opacity-90" data-oid="gy1zet9">
                Satisfaction Rate
              </div>
            </div>

            <div className="space-y-2" data-oid="djw6:yo">
              <div
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                data-oid="3q3gi82">

                <Building className="w-8 h-8" data-oid="_k3-rjk" />
              </div>
              <div className="text-3xl font-bold" data-oid="7g8rfm5">
                25+
              </div>
              <div className="text-lg opacity-90" data-oid="dd-m7yr">
                Years Experience
              </div>
            </div>

            <div className="space-y-2" data-oid="rx_zjk3">
              <div
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                data-oid="jm91td0">

                <Star className="w-8 h-8" data-oid="zwyf47o" />
              </div>
              <div className="text-3xl font-bold" data-oid="f9qn:am">
                4.9/5
              </div>
              <div className="text-lg opacity-90" data-oid="tg13-fp">
                Average Rating
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
            data-oid="sdzhaev">

            <button
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover-lift shadow-lg"
              data-oid="bdd0a8l">

              Get Your Quote Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default PartnersTestimonialsSection;