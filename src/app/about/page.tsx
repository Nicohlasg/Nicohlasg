"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Award,
  Clock,
  Building,
  Heart,
  Target,
  Eye } from
"lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const values = [
  {
    icon: <Shield className="w-8 h-8" data-oid="16el_bp" />,
    title: "Trust & Integrity",
    description:
    "We build lasting relationships through honest communication and transparent business practices."
  },
  {
    icon: <Users className="w-8 h-8" data-oid="upw7t.5" />,
    title: "Customer First",
    description:
    "Your needs are our priority. We provide personalized service and support at every step."
  },
  {
    icon: <Award className="w-8 h-8" data-oid="1icn:hl" />,
    title: "Excellence",
    description:
    "We strive for excellence in everything we do, from policy creation to claims processing."
  },
  {
    icon: <Heart className="w-8 h-8" data-oid=".nr0eg_" />,
    title: "Compassion",
    description:
    "We understand that insurance protects what matters most to you and your family."
  }];


  const milestones = [
  {
    year: "2010",
    event: "Premier GIS Founded",
    description:
    "Established in Singapore to offer superior insurance service"
  },
  {
    year: "2012",
    event: "Insurance Partnerships",
    description: "Partnered with Liberty Insurance, Bupa Global, MSIG"
  },
  {
    year: "2015",
    event: "Childcare Innovation",
    description:
    "Launched comprehensive childcare insurance with infectious disease coverage"
  },
  {
    year: "2018",
    event: "Digital Services",
    description: "Enhanced online services and customer portal"
  },
  {
    year: "2020",
    event: "Professional Team",
    description: "Built dedicated team of full-time insurance professionals"
  },
  {
    year: "2024",
    event: "Trusted Advisor",
    description:
    "Recognized as Singapore's trusted general insurance advisor"
  }];


  return (
    <main className="min-h-screen" data-oid="n:v7kkz">
      <Navigation data-oid=".k-tkp8" />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-orange-50 relative overflow-hidden"
        data-oid="hjf3tyo">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="vt2k4if">

          <div className="text-center" data-oid="i7:-8u3">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              data-oid="_:qqlab">

              About{" "}
              <span className="gradient-text" data-oid="x57lq9t">
                Premier GIS
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="2rm7g9g">

              Your Most Trusted General Insurance Advisor in Singapore since
              2010, committed to help personal and business clients find
              cost-effective insurance solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white" data-oid="c.54rj6">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="247g-op">

          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            data-oid="i5l6lp4">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-oid="xz6lb0:">

              <h2
                className="text-4xl font-bold text-gray-900 mb-6"
                data-oid="a2gk_8c">

                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6" data-oid="fuphv2_">
                Premier GIS Pte Ltd is a general insurance agency in Singapore
                committed to help its personal and business insurance clients
                find the most cost-effective and most value-adding products so
                they can manage risk with confidence and peace of mind.
              </p>
              <p className="text-lg text-gray-600 mb-6" data-oid="6w3w.6i">
                As Premier GIS is a general insurance agency, we are able to
                offer a wide choice of quality insurance products at different
                price points, each customised to meet various insurance needs,
                including home insurance, motor insurance, travel insurance,
                childcare insurance and business insurance.
              </p>
              <p className="text-lg text-gray-600" data-oid="7xh64t-">
                Whether you are an individual customer, a corporate client or
                small and medium-sized enterprise (SME), our focus is always on
                you. Premier GIS was established in Singapore in 2010 to offer
                superior service for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              data-oid="b0ijk5f">

              <div
                className="w-full h-96 bg-gradient-to-br from-primary-500 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center"
                data-oid="c7w.6rk">

                <Building className="w-32 h-32 text-white" data-oid="kzvfeev" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50" data-oid="xvs9o1r">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="gph4qkg">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="qnh72s_">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="xeo-til">

              Our Core Values
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="l57veln">

              These fundamental principles guide our decisions and shape our
              relationships with customers, partners, and communities.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="tzwuvqi">

            {values.map((value, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              data-oid="rii2v56">

                <div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white mx-auto mb-6"
                data-oid="ehw7-qv">

                  {value.icon}
                </div>
                <h3
                className="text-xl font-semibold text-gray-900 mb-4"
                data-oid="5uz7jbv">

                  {value.title}
                </h3>
                <p className="text-gray-600" data-oid="9612vrk">
                  {value.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white" data-oid="gh1u.fb">
        <div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="l:6xzxu">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="17lrceu">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="k_-prpq">

              Our Journey
            </h2>
            <p className="text-xl text-gray-600" data-oid="fwie87s">
              Key milestones in our 25+ year history
            </p>
          </motion.div>

          <div className="relative" data-oid=":w0brdy">
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-orange-500"
              data-oid="5bq2iau">
            </div>

            <div className="space-y-12" data-oid="wy5xeg5">
              {milestones.map((milestone, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                data-oid="chy5wr_">

                  <div
                  className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                  data-oid="_zwq:gc">

                    <div
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                    data-oid="5ffhgvv">

                      <div
                      className="text-primary-600 font-bold text-lg mb-2"
                      data-oid="uk6mq-k">

                        {milestone.year}
                      </div>
                      <div
                      className="font-semibold text-gray-900 mb-2"
                      data-oid="rqizo3a">

                        {milestone.event}
                      </div>
                      <div className="text-gray-600 text-sm" data-oid="g0xat3f">
                        {milestone.description}
                      </div>
                    </div>
                  </div>
                  <div
                  className="w-2/12 flex justify-center"
                  data-oid="su74x.2">

                    <div
                    className="w-4 h-4 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full"
                    data-oid="fp9zwae">
                  </div>
                  </div>
                  <div className="w-5/12" data-oid="xzo:bz."></div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership CTA */}
      <section
        className="py-20 bg-gradient-to-r from-primary-500 to-orange-500"
        data-oid="yjzipu3">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="o8o1x28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-oid="wb:qok_">

            <h2
              className="text-4xl font-bold text-white mb-6"
              data-oid="2g_r418">

              Ready to Experience the Premier GIS Difference?
            </h2>
            <p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              data-oid="44pk_n3">

              Join thousands of satisfied customers who trust Premier GIS for
              their insurance needs. Get your personalized quote today.
            </p>
            <button
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover-lift shadow-lg"
              data-oid="n86cuu2">

              Get Your Free Quote
            </button>
          </motion.div>
        </div>
      </section>

      <Footer data-oid="yw5:ovq" />
    </main>);

}