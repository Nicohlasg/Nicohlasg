"use client";

import { motion } from "framer-motion";
import {
  Home,
  Car,
  Plane,
  Heart,
  Building,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Award } from
"lucide-react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  const services = [
  {
    id: "home",
    icon: <Home className="w-12 h-12" data-oid="1dyv3ad" />,
    name: "Home Insurance",
    description:
    "Comprehensive protection for your home and belongings against damage, theft, and natural disasters.",
    features: [
    "Dwelling protection up to full replacement cost",
    "Personal property coverage",
    "Liability protection for accidents on your property",
    "Additional living expenses during repairs",
    "Natural disaster coverage options",
    "Home business coverage available"],


    benefits: [
    "24/7 Claims Support",
    "Fast Settlement Process",
    "Flexible Deductible Options",
    "Multi-Policy Discounts"],

    link: "/insurance/home",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "motor",
    icon: <Car className="w-12 h-12" data-oid="rfzyxb3" />,
    name: "Motor Insurance",
    description:
    "Complete vehicle protection with comprehensive coverage, collision, and liability insurance.",
    features: [
    "Liability coverage for bodily injury and property damage",
    "Comprehensive and collision coverage",
    "Uninsured/underinsured motorist protection",
    "Medical payments coverage",
    "Rental car reimbursement",
    "Roadside assistance 24/7"],


    benefits: [
    "Instant Policy Documents",
    "Mobile Claims Filing",
    "Accident Forgiveness",
    "Good Driver Discounts"],

    link: "/insurance/motor",
    color: "from-green-500 to-green-600"
  },
  {
    id: "travel",
    icon: <Plane className="w-12 h-12" data-oid="3s3f2y8" />,
    name: "Travel Insurance",
    description:
    "Global coverage for medical emergencies, trip cancellations, and travel-related incidents.",
    features: [
    "Emergency medical coverage worldwide",
    "Trip cancellation and interruption protection",
    "Lost or delayed baggage coverage",
    "Flight delay and missed connection benefits",
    "Emergency evacuation services",
    "Pre-existing medical condition coverage"],


    benefits: [
    "Instant Coverage",
    "Global Assistance Network",
    "Online Claims Portal",
    "Multi-Trip Policies"],

    link: "/insurance/travel",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "childcare",
    icon: <Heart className="w-12 h-12" data-oid="t9mgpya" />,
    name: "Childcare Insurance",
    description:
    "Specialized coverage for children's health, education, and future financial security.",
    features: [
    "Comprehensive health coverage for children",
    "Education fund protection",
    "Pediatric specialist network access",
    "Preventive care and wellness programs",
    "Emergency medical transportation",
    "Mental health and counseling services"],


    benefits: [
    "Family-Friendly Policies",
    "Pediatric Specialists",
    "Education Benefits",
    "Flexible Payment Plans"],

    link: "/insurance/childcare",
    color: "from-pink-500 to-pink-600"
  },
  {
    id: "business",
    icon: <Building className="w-12 h-12" data-oid="8qfjkqa" />,
    name: "Business Insurance",
    description:
    "Tailored protection for businesses of all sizes against liability, property damage, and operational risks.",
    features: [
    "General liability coverage",
    "Property insurance for buildings and equipment",
    "Business interruption protection",
    "Workers' compensation coverage",
    "Professional liability insurance",
    "Cyber liability protection"],


    benefits: [
    "Industry Expertise",
    "Risk Assessment",
    "Claims Advocacy",
    "Business Continuity Planning"],

    link: "/insurance/business",
    color: "from-orange-500 to-orange-600"
  }];


  const additionalServices = [
  {
    icon: <Shield className="w-8 h-8" data-oid="aee14j_" />,
    title: "Risk Assessment",
    description:
    "Comprehensive evaluation of your insurance needs and risk exposure"
  },
  {
    icon: <Phone className="w-8 h-8" data-oid="5u.qk8d" />,
    title: "24/7 Claims Support",
    description:
    "Round-the-clock assistance for filing and managing insurance claims"
  },
  {
    icon: <Clock className="w-8 h-8" data-oid="c8r0z9m" />,
    title: "Policy Reviews",
    description:
    "Annual reviews to ensure your coverage remains adequate and competitive"
  },
  {
    icon: <Award className="w-8 h-8" data-oid="0-ui4wp" />,
    title: "Premium Financing",
    description:
    "Flexible payment options and financing solutions for large premiums"
  }];


  return (
    <main className="min-h-screen" data-oid="p-3wuj.">
      <Navigation data-oid="oh287-u" />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-orange-50"
        data-oid="8:2eh94">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="on:0s3n">

          <div className="text-center" data-oid="qujm9fg">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              data-oid="7tz:1fm">

              Our{" "}
              <span className="gradient-text" data-oid="f.ke6jt">
                Services
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="s4rp3j4">

              Comprehensive insurance solutions designed to protect what matters
              most to you. From individuals to businesses, we have the coverage
              you need.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" data-oid="7mhdf.g">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="kn8gsng">

          <div className="space-y-20" data-oid="ttiur2k">
            {services.map((service, index) =>
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`
              }
              data-oid="qcc:aey">

                {/* Content */}
                <div
                className={index % 2 === 1 ? "lg:col-start-2" : ""}
                data-oid="jl.pkbk">

                  <div
                  className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-8`}
                  data-oid="9gbn7uf">

                    {service.icon}
                  </div>

                  <h2
                  className="text-4xl font-bold text-gray-900 mb-6"
                  data-oid="mefu4ph">

                    {service.name}
                  </h2>
                  <p
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  data-oid="7699o2t">

                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8" data-oid="j9tr47y">
                    <h3
                    className="text-xl font-semibold text-gray-900 mb-4"
                    data-oid="m0cd2t5">

                      Coverage Features:
                    </h3>
                    <div className="grid grid-cols-1 gap-3" data-oid="0_kzq8s">
                      {service.features.map((feature, idx) =>
                    <div
                      key={idx}
                      className="flex items-start space-x-3"
                      data-oid="5ldvou9">

                          <CheckCircle
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        data-oid="czw.8qv" />

                          <span className="text-gray-700" data-oid=".mmbmxu">
                            {feature}
                          </span>
                        </div>
                    )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8" data-oid="tqmpxrr">
                    <h3
                    className="text-xl font-semibold text-gray-900 mb-4"
                    data-oid="1g:cb.m">

                      Additional Benefits:
                    </h3>
                    <div className="flex flex-wrap gap-3" data-oid=":5g3g.3">
                      {service.benefits.map((benefit, idx) =>
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-medium`}
                      data-oid="a7gv534">

                          {benefit}
                        </span>
                    )}
                    </div>
                  </div>

                  <Link
                  href={service.link}
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full hover-lift shadow-lg group`}
                  data-oid="x:.ebh3">

                    Learn More About {service.name}
                    <ArrowRight
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                    data-oid="ipwmvn:" />

                  </Link>
                </div>

                {/* Visual */}
                <div
                className={index % 2 === 1 ? "lg:col-start-1" : ""}
                data-oid="979sahq">

                  <div
                  className={`relative w-full h-96 bg-gradient-to-br ${service.color} rounded-3xl shadow-2xl flex items-center justify-center`}
                  data-oid="jpqygwv">

                    <div className="text-center" data-oid="_kqym:9">
                      <div
                      className="scale-[2] text-white mb-8"
                      data-oid="dytx0xp">

                        {service.icon}
                      </div>
                      <h3
                      className="text-2xl font-bold text-white"
                      data-oid="_y0rcm8">

                        {service.name}
                      </h3>
                      <p className="text-white/90 mt-2" data-oid="ncott_7">
                        Comprehensive Protection
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50" data-oid="5f0.04q">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="hvem.7b">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="r:gvrib">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="xbnpt9a">

              Additional Services
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="_9mazcz">

              Beyond insurance policies, we offer comprehensive support services
              to help you manage your coverage and navigate any challenges.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="sqpnpaq">

            {additionalServices.map((service, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-oid="bae:h-q">

                <div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white mx-auto mb-6"
                data-oid="iek7h8u">

                  {service.icon}
                </div>
                <h3
                className="text-xl font-semibold text-gray-900 mb-4"
                data-oid="eq6ja8f">

                  {service.title}
                </h3>
                <p className="text-gray-600" data-oid="o.lci7e">
                  {service.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-gradient-to-r from-primary-500 to-orange-500"
        data-oid="exdn_2z">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="3p0xv1d">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-oid="lwz9:-l">

            <h2
              className="text-4xl font-bold text-white mb-6"
              data-oid="fgxgjjn">

              Ready to Get Protected?
            </h2>
            <p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              data-oid="qn3jd3d">

              Don't wait until it's too late. Get the coverage you need today
              with a free, no-obligation quote from Premier GIS.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="4n34wy6">

              <button
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover-lift shadow-lg"
                data-oid="z0k36le">

                Get Free Quote
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
                data-oid="x5krn7l">

                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer data-oid="vf1omla" />
    </main>);

}