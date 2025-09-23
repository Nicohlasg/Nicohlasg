"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Heart,
  Globe,
  Shield,
  Users,
  Lightbulb,
  Compass } from
"lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function VisionMissionPage() {
  const goals = [
  {
    icon: <Globe className="w-8 h-8" data-oid="ce:gryp" />,
    title: "Market Leadership",
    description:
    "To become the leading insurance provider in our region while maintaining our personal touch and customer-first approach."
  },
  {
    icon: <Lightbulb className="w-8 h-8" data-oid="35_ub68" />,
    title: "Innovation",
    description:
    "Continuously innovate our products and services to meet evolving customer needs in the digital age."
  },
  {
    icon: <Users className="w-8 h-8" data-oid="s645m5w" />,
    title: "Community Impact",
    description:
    "Strengthen communities by protecting families and empowering businesses to thrive with confidence."
  },
  {
    icon: <Compass className="w-8 h-8" data-oid="pdj1ict" />,
    title: "Sustainable Growth",
    description:
    "Build a sustainable business that creates value for customers, employees, and stakeholders for generations."
  }];


  const principles = [
  "Customer Centricity: Every decision we make is guided by what's best for our customers",
  "Integrity: We conduct business with honesty, transparency, and ethical practices",
  "Excellence: We strive for the highest quality in our products, services, and relationships",
  "Innovation: We embrace new technologies and methods to better serve our customers",
  "Community: We are committed to giving back and supporting the communities we serve",
  "Teamwork: We believe in the power of collaboration and mutual respect"];


  return (
    <main className="min-h-screen" data-oid="5039.j9">
      <Navigation data-oid="um3:eu:" />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-orange-50 relative overflow-hidden"
        data-oid="wzbupja">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="rfrmi5o">

          <div className="text-center" data-oid="tadqjge">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              data-oid="0za_.xz">

              Our Vision &{" "}
              <span className="gradient-text" data-oid=".b.dhkp">
                Mission
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="nc2udzf">

              Guided by our core values and driven by our commitment to
              excellence, we're building a better future for insurance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-white" data-oid="d4-sd_:">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="-6pgyfr">

          <div className="grid lg:grid-cols-2 gap-12" data-oid="4i9xj4h">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              data-oid="6rro145">

              <div
                className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-white shadow-2xl"
                data-oid="13.kctz">

                <div
                  className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-8"
                  data-oid="fu.6ys7">

                  <Eye className="w-10 h-10" data-oid="q37iqfc" />
                </div>
                <h2 className="text-4xl font-bold mb-6" data-oid="y6dxm.v">
                  Our Vision
                </h2>
                <p
                  className="text-xl leading-relaxed mb-8 text-white/90"
                  data-oid="-xv-h8o">

                  To be the most trusted and innovative insurance partner,
                  empowering individuals, families, and businesses to live
                  confidently by providing comprehensive protection that adapts
                  to their evolving needs.
                </p>
                <div className="space-y-4" data-oid="1pr:03h">
                  <div
                    className="flex items-center space-x-3"
                    data-oid="bj7:7s-">

                    <Shield
                      className="w-5 h-5 text-white/80"
                      data-oid="p4tqjz0" />

                    <span className="text-white/90" data-oid="6-4oasr">
                      Complete Protection
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="w9k8yc7">

                    <Heart
                      className="w-5 h-5 text-white/80"
                      data-oid="xg37ve7" />

                    <span className="text-white/90" data-oid="kekbk3d">
                      Peace of Mind
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="sweplyt">

                    <Users
                      className="w-5 h-5 text-white/80"
                      data-oid="-mtbb71" />

                    <span className="text-white/90" data-oid="o00p385">
                      Community Focus
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              data-oid="p0oshm.">

              <div
                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-white shadow-2xl"
                data-oid="sitrk4d">

                <div
                  className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-8"
                  data-oid=".lqapt:">

                  <Target className="w-10 h-10" data-oid="kgfgn88" />
                </div>
                <h2 className="text-4xl font-bold mb-6" data-oid="fd0qf-h">
                  Our Mission
                </h2>
                <p
                  className="text-xl leading-relaxed mb-8 text-white/90"
                  data-oid="j::xhf9">

                  To deliver exceptional insurance solutions through
                  personalized service, innovative technology, and unwavering
                  integrity, while building lasting relationships that protect
                  what matters most to our customers.
                </p>
                <div className="space-y-4" data-oid="er0kzg2">
                  <div
                    className="flex items-center space-x-3"
                    data-oid="4a.to1m">

                    <Target
                      className="w-5 h-5 text-white/80"
                      data-oid="9vd:bpc" />

                    <span className="text-white/90" data-oid="zgda:v3">
                      Personalized Solutions
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="6a6a_u5">

                    <Lightbulb
                      className="w-5 h-5 text-white/80"
                      data-oid="orxxost" />

                    <span className="text-white/90" data-oid="w5rp-1b">
                      Innovation
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="4lb-.mq">

                    <Compass
                      className="w-5 h-5 text-white/80"
                      data-oid="eamiqa6" />

                    <span className="text-white/90" data-oid="z:d25ol">
                      Integrity
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-gray-50" data-oid="kp:idn7">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="g:hzf77">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="52pb12s">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="4lfyfg3">

              Strategic Goals
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="-tkd1vp">

              Our roadmap for achieving our vision and fulfilling our mission
              through focused initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8" data-oid="9w:z824">
            {goals.map((goal, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-oid=".mgq88k">

                <div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-6"
                data-oid="ignwn6m">

                  {goal.icon}
                </div>
                <h3
                className="text-2xl font-semibold text-gray-900 mb-4"
                data-oid="gty___p">

                  {goal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" data-oid="uregalp">
                  {goal.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-white" data-oid="83fy3ys">
        <div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="i9.2s2u">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="1:.s43g">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="p_hn8i.">

              Guiding Principles
            </h2>
            <p className="text-xl text-gray-600" data-oid="cv_h3-b">
              The fundamental beliefs that shape our culture and guide our daily
              operations.
            </p>
          </motion.div>

          <div className="space-y-6" data-oid="i44cdqg">
            {principles.map((principle, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-gradient-to-b border-primary-500 shadow-sm hover:shadow-md transition-shadow duration-300"
              data-oid="h3a1yax">

                <div className="flex items-start space-x-4" data-oid="rz_t3dx">
                  <div
                  className="w-8 h-8 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  data-oid="sv2vxf8">

                    <span
                    className="text-white font-bold text-sm"
                    data-oid=".9vzpoo">

                      {index + 1}
                    </span>
                  </div>
                  <p
                  className="text-lg text-gray-700 leading-relaxed"
                  data-oid="_tbgxjd">

                    {principle}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section
        className="py-20 bg-gradient-to-br from-primary-900 to-gray-900 text-white relative overflow-hidden"
        data-oid="dc8qb85">

        <div className="absolute inset-0 opacity-10" data-oid="m_qqsu7">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
            data-oid="xl60dbj">
          </div>
        </div>

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="0s1:qep">

          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            data-oid="p1x9g:5">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-oid="31igy_8">

              <h2 className="text-4xl font-bold mb-6" data-oid="i8fzta5">
                Our Commitment to You
              </h2>
              <p
                className="text-xl text-white/90 mb-8 leading-relaxed"
                data-oid="y4egg47">

                At Premier GIS, our vision and mission aren't just words on a
                page – they're the driving force behind every decision we make
                and every service we provide. We are committed to being your
                trusted partner in protection, today and tomorrow.
              </p>
              <div className="space-y-4" data-oid="ot:wslo">
                <div className="flex items-center space-x-3" data-oid="ytd-7ni">
                  <Shield
                    className="w-6 h-6 text-orange-400"
                    data-oid="ut0b6.g" />

                  <span data-oid="87r564d">
                    Unwavering commitment to your protection
                  </span>
                </div>
                <div className="flex items-center space-x-3" data-oid="ikxcmmj">
                  <Heart
                    className="w-6 h-6 text-orange-400"
                    data-oid="xhsn:st" />

                  <span data-oid="6eg:u34">
                    Personal attention to your unique needs
                  </span>
                </div>
                <div className="flex items-center space-x-3" data-oid="zuxg.8u">
                  <Globe
                    className="w-6 h-6 text-orange-400"
                    data-oid="9vq7b7f" />

                  <span data-oid="urwijf7">
                    Continuous innovation and improvement
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              data-oid="vq6dh8n">

              <div
                className="w-full h-96 bg-gradient-to-br from-primary-500 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center"
                data-oid="6p4k7vg">

                <div className="text-center" data-oid="gxlfz3a">
                  <Shield
                    className="w-24 h-24 text-white mx-auto mb-4"
                    data-oid="xt-4nfk" />

                  <h3 className="text-2xl font-bold mb-2" data-oid="keyoffp">
                    Your Protection
                  </h3>
                  <p className="text-white/90" data-oid="-i24_u7">
                    Our Priority
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer data-oid="mr.ea:a" />
    </main>);

}