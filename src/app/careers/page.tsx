"use client";

import { motion } from "framer-motion";
import {
  Users,
  Heart,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  DollarSign,
  GraduationCap,
  Coffee,
  Shield,
  Briefcase,
  ArrowRight } from
"lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function CareersPage() {
  const benefits = [
  {
    icon: <Heart className="w-8 h-8" data-oid="bs.skps" />,
    title: "Health & Wellness",
    description:
    "Comprehensive medical, dental, and vision insurance plus wellness programs"
  },
  {
    icon: <TrendingUp className="w-8 h-8" data-oid="nfu2yxr" />,
    title: "Career Growth",
    description:
    "Continuous learning opportunities and clear advancement paths"
  },
  {
    icon: <DollarSign className="w-8 h-8" data-oid="4lo9dfi" />,
    title: "Competitive Pay",
    description:
    "Market-leading salaries with performance bonuses and profit sharing"
  },
  {
    icon: <Clock className="w-8 h-8" data-oid="e-p5.qj" />,
    title: "Work-Life Balance",
    description: "Flexible schedules, remote work options, and generous PTO"
  },
  {
    icon: <GraduationCap className="w-8 h-8" data-oid="aty15gz" />,
    title: "Education Support",
    description:
    "Tuition reimbursement and professional development programs"
  },
  {
    icon: <Coffee className="w-8 h-8" data-oid="j4gjln:" />,
    title: "Great Culture",
    description:
    "Inclusive environment with team events and recognition programs"
  }];


  const openPositions = [
  {
    title: "Senior Insurance Agent",
    department: "Sales",
    location: "Multiple Locations",
    type: "Full-time",
    description:
    "Experienced insurance professional to help grow our customer base and provide exceptional service to existing clients.",
    requirements: [
    "5+ years insurance experience",
    "Active insurance license",
    "Strong communication skills",
    "Customer service focused"],

    link: "/careers/apply/senior-agent"
  },
  {
    title: "Claims Adjuster",
    department: "Claims",
    location: "Remote/Hybrid",
    type: "Full-time",
    description:
    "Detail-oriented professional to investigate and process insurance claims while ensuring fair and timely settlements.",
    requirements: [
    "Insurance claims experience",
    "Investigation skills",
    "Attention to detail",
    "Problem-solving abilities"],

    link: "/careers/apply/claims-adjuster"
  },
  {
    title: "Underwriter",
    department: "Underwriting",
    location: "Headquarters",
    type: "Full-time",
    description:
    "Evaluate insurance applications and determine coverage terms based on risk assessment and company guidelines.",
    requirements: [
    "Underwriting experience",
    "Analytical skills",
    "Risk assessment knowledge",
    "Bachelor's degree preferred"],

    link: "/careers/apply/underwriter"
  },
  {
    title: "Customer Service Representative",
    department: "Customer Service",
    location: "Call Center",
    type: "Full-time",
    description:
    "Provide outstanding customer support via phone, email, and chat while helping customers with policy questions and changes.",
    requirements: [
    "Customer service experience",
    "Excellent communication",
    "Multi-tasking abilities",
    "Insurance knowledge helpful"],

    link: "/careers/apply/customer-service"
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Headquarters",
    type: "Full-time",
    description:
    "Develop and execute marketing campaigns to promote our insurance products and strengthen our brand presence.",
    requirements: [
    "Marketing experience",
    "Digital marketing skills",
    "Creative thinking",
    "Data analysis abilities"],

    link: "/careers/apply/marketing-specialist"
  },
  {
    title: "IT Support Specialist",
    department: "Information Technology",
    location: "Remote/On-site",
    type: "Full-time",
    description:
    "Provide technical support to employees and maintain our technology infrastructure to ensure smooth operations.",
    requirements: [
    "IT support experience",
    "Technical troubleshooting",
    "Network knowledge",
    "Customer service skills"],

    link: "/careers/apply/it-support"
  }];


  const values = [
  "Integrity in everything we do",
  "Customer-first mindset",
  "Continuous learning and growth",
  "Teamwork and collaboration",
  "Innovation and adaptability",
  "Community involvement"];


  return (
    <main className="min-h-screen" data-oid="jygwy2q">
      <Navigation data-oid="yyp-elf" />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-orange-50"
        data-oid="w76wyx1">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="6f.lmw6">

          <div className="text-center" data-oid="xtb:anz">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              data-oid="d7k:js6">

              Join Our{" "}
              <span className="gradient-text" data-oid="_wo9u08">
                Team
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="sogjuin">

              Build your career with Premier GIS, where talented professionals
              come together to protect what matters most to our customers and
              communities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
              data-oid="bl:zyzc">

              <button
                className="bg-gradient-to-r from-primary-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover-lift shadow-lg"
                data-oid="v-m2f5f">

                View Open Positions
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white" data-oid="w7xzebt">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="rcm5jq-">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="j-rffc9">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="d.urapk">

              Why Choose Premier GIS
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="u_1:zsz">

              We're more than just an insurance company – we're a family of
              professionals dedicated to making a difference in our customers'
              lives.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="6_l5tsp">

            {benefits.map((benefit, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-oid="j9bsq_c">

                <div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white mx-auto mb-6"
                data-oid="pbvmq:6">

                  {benefit.icon}
                </div>
                <h3
                className="text-xl font-semibold text-gray-900 mb-4"
                data-oid="0_q:8u3">

                  {benefit.title}
                </h3>
                <p className="text-gray-600" data-oid="blnls4v">
                  {benefit.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50" data-oid="3awf11c">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="rdw9m7h">

          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            data-oid="ohix7._">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-oid="nag373e">

              <h2
                className="text-4xl font-bold text-gray-900 mb-6"
                data-oid="_fn5ud-">

                Our Culture & Values
              </h2>
              <p className="text-lg text-gray-600 mb-8" data-oid="kf-au__">
                At Premier GIS, we believe that our employees are our greatest
                asset. We've built a culture that promotes growth, recognizes
                achievements, and supports both professional and personal
                development.
              </p>

              <div className="space-y-4 mb-8" data-oid="1qxdoxo">
                {values.map((value, index) =>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                  data-oid="kpzweqt">

                    <Shield
                    className="w-5 h-5 text-primary-600 flex-shrink-0"
                    data-oid="6ihgzik" />

                    <span className="text-gray-700" data-oid="m1dppkz">
                      {value}
                    </span>
                  </motion.div>
                )}
              </div>

              <button
                className="bg-gradient-to-r from-primary-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover-lift shadow-lg"
                data-oid=":wnqq_f">

                Learn More About Our Culture
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              data-oid=".ervxjy">

              <div
                className="w-full h-96 bg-gradient-to-br from-primary-500 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center"
                data-oid="3grt3f:">

                <div className="text-center text-white" data-oid=".v1odeg">
                  <Users
                    className="w-24 h-24 mx-auto mb-4"
                    data-oid="aw-nd-g" />

                  <h3 className="text-2xl font-bold mb-2" data-oid="6gm1t6z">
                    Join Our Team
                  </h3>
                  <p className="text-white/90" data-oid="d5hmd36">
                    Where Careers Flourish
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white" data-oid="3w-h56q">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="zp7e20p">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="8d0eii8">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="fbhlwib">

              Current Openings
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="xn3xr3m">

              Discover exciting career opportunities across different
              departments. Find the perfect role that matches your skills and
              aspirations.
            </p>
          </motion.div>

          <div className="space-y-6" data-oid="c:26dog">
            {openPositions.map((position, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-oid="_:y7gp3">

                <div className="grid lg:grid-cols-3 gap-8" data-oid="i1nc3e5">
                  {/* Position Info */}
                  <div className="lg:col-span-2" data-oid="yfn2aep">
                    <div
                    className="flex flex-wrap items-center gap-4 mb-4"
                    data-oid=".._v3._">

                      <h3
                      className="text-2xl font-bold text-gray-900"
                      data-oid="ahs:_q9">

                        {position.title}
                      </h3>
                      <span
                      className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                      data-oid="ptoyxve">

                        {position.department}
                      </span>
                    </div>

                    <div
                    className="flex flex-wrap items-center gap-6 mb-4 text-gray-600"
                    data-oid="gar3q3b">

                      <div
                      className="flex items-center space-x-2"
                      data-oid="i87jlwj">

                        <MapPin className="w-4 h-4" data-oid=":hzmfex" />
                        <span data-oid=".b-vw0f">{position.location}</span>
                      </div>
                      <div
                      className="flex items-center space-x-2"
                      data-oid="xsa96uz">

                        <Briefcase className="w-4 h-4" data-oid="9sr6bh-" />
                        <span data-oid="k2gns1l">{position.type}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6" data-oid="vuqjjh7">
                      {position.description}
                    </p>

                    <div data-oid="bm-p:.6">
                      <h4
                      className="font-semibold text-gray-900 mb-3"
                      data-oid="xq9j3h1">

                        Key Requirements:
                      </h4>
                      <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-2"
                      data-oid="u-v36zb">

                        {position.requirements.map((req, idx) =>
                      <div
                        key={idx}
                        className="flex items-center space-x-2"
                        data-oid="0lwrivq">

                            <div
                          className="w-2 h-2 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full"
                          data-oid="jz5cw2-">
                        </div>
                            <span
                          className="text-gray-700 text-sm"
                          data-oid="zz3pyed">

                              {req}
                            </span>
                          </div>
                      )}
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div
                  className="flex flex-col justify-center"
                  data-oid="j4u4j4v">

                    <button
                    className="w-full bg-gradient-to-r from-primary-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover-lift shadow-lg group flex items-center justify-center"
                    data-oid="tni_kr.">

                      Apply Now
                      <ArrowRight
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                      data-oid="oh.q04o" />

                    </button>
                    <button
                    className="w-full mt-3 border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-primary-500 hover:text-primary-600 transition-colors duration-200"
                    data-oid="wje_oy0">

                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50" data-oid="qjy-wne">
        <div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="etvru8w">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="so_w1z4">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="n8ez9nl">

              Application Process
            </h2>
            <p className="text-xl text-gray-600" data-oid="3ynka1u">
              Our streamlined hiring process is designed to find the best fit
              for both you and our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8" data-oid="95h3iyg">
            {[
            {
              step: "1",
              title: "Apply Online",
              description:
              "Submit your application and resume through our online portal"
            },
            {
              step: "2",
              title: "Initial Review",
              description:
              "Our HR team reviews your qualifications and experience"
            },
            {
              step: "3",
              title: "Interview",
              description:
              "Meet with hiring managers to discuss your background and goals"
            },
            {
              step: "4",
              title: "Welcome Aboard",
              description: "Join our team and begin your Premier GIS journey"
            }].
            map((process, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
              data-oid="jr-l:ph">

                <div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                data-oid=":4ko49s">

                  {process.step}
                </div>
                <h3
                className="text-xl font-semibold text-gray-900 mb-3"
                data-oid="6.yw033">

                  {process.title}
                </h3>
                <p className="text-gray-600" data-oid="kwu7t21">
                  {process.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 bg-gradient-to-r from-primary-500 to-orange-500"
        data-oid="7d-bdj.">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="umd4p:7">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-oid="csm2671">

            <h2
              className="text-4xl font-bold text-white mb-6"
              data-oid="1q.jbtf">

              Ready to Start Your Career Journey?
            </h2>
            <p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              data-oid="dun.43s">

              Don't see the perfect position listed? We're always looking for
              talented individuals who share our values and passion for
              protecting our customers.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="esc-cnh">

              <button
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover-lift shadow-lg"
                data-oid="l3-0khy">

                Browse All Positions
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
                data-oid="qrhpkfy">

                Submit General Application
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer data-oid="mgi3ew8" />
    </main>);

}