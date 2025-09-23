"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight } from
"lucide-react";

const OverviewSection = () => {
  const features = [
  {
    icon: <Shield className="w-8 h-8" data-oid="l:.:7fs" />,
    title: "Comprehensive Coverage",
    description:
    "Our insurance plans cover all aspects of your life, providing complete peace of mind with extensive protection options."
  },
  {
    icon: <Clock className="w-8 h-8" data-oid="rc6-yv_" />,
    title: "24/7 Customer Support",
    description:
    "Round-the-clock assistance for claims, inquiries, and emergencies. Our dedicated team is always here to help you."
  },
  {
    icon: <Users className="w-8 h-8" data-oid="ltc8tj6" />,
    title: "Expert Team",
    description:
    "Our experienced professionals provide personalized advice and tailored solutions to meet your unique insurance needs."
  },
  {
    icon: <Award className="w-8 h-8" data-oid="z3nd2b_" />,
    title: "Award-Winning Service",
    description:
    "Recognized for excellence in customer service and claims processing, setting industry standards for quality."
  }];


  const benefits = [
  "Affordable personal and business insurance",
  "More choices – products from various major insurers",
  "Liberty Insurance, Bupa Global Insurance, MSIG Insurance partnerships",
  "Customised solutions for all insurance needs",
  "Professional personalized service in Singapore",
  "Best value for money coverage guaranteed"];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const containerTransition = {
    staggerChildren: 0.2
  };

  const itemTransition = {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94]
  };

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      data-oid="agvm2.l">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-oid="-:783eg">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px"
          }}
          data-oid="i9bq1y4">
        </div>
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid=".yilaf-">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          data-oid="6kjtl90">

          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            data-oid="mh-asii">

            Why Choose{" "}
            <span className="gradient-text" data-oid="b0u8493">
              Premier GIS
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            data-oid=":p1vn5r">

            As an established general insurance agency in Singapore since 2010,
            we have the negotiating power to secure on your behalf, the best
            value for money coverage from major insurers including Liberty
            Insurance, Bupa Global Insurance, and MSIG Insurance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          data-oid="-6vzd1p">

          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            data-oid="7ibe0v7">

              <div
              className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
              data-oid="r:m6h9r">

                {feature.icon}
              </div>
              <h3
              className="text-xl font-semibold text-gray-900 mb-3"
              data-oid="r9ysw5d">

                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" data-oid="kr02.-9">
                {feature.description}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Main Content */}
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          data-oid=":tiyr3:">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            data-oid="uj6i1mt">

            <h3
              className="text-3xl font-bold text-gray-900 mb-6"
              data-oid="lvi8p0r">

              Your Trusted Insurance Partner Since 2010
            </h3>

            <p
              className="text-lg text-gray-600 leading-relaxed"
              data-oid="70h93.a">

              Buying directly from general insurance companies may not give you
              the same one-to-one customer service while buying from an
              individual agent often restricts your choice of products to those
              offered by the company they are representing.
            </p>

            <p
              className="text-lg text-gray-600 leading-relaxed"
              data-oid="i00amy_">

              Choosing to work with a specialist agency like Premier GIS means
              you have access to detailed information about a range of policies
              as well as a professional, personalized service to help determine
              the best product for your needs.
            </p>

            {/* Benefits List */}
            <div className="space-y-3" data-oid="v8rv50w">
              {benefits.map((benefit, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
                data-oid="h58_zcp">

                  <CheckCircle
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                  data-oid="a.blbqv" />


                  <span className="text-gray-700" data-oid="zetqbh7">
                    {benefit}
                  </span>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
              data-oid="s:::ism">

              <button
                className="group bg-gradient-to-r from-primary-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover-lift shadow-lg flex items-center"
                data-oid="s9yfa_2">

                Get Started Today
                <ArrowRight
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                  data-oid="2dgd-tw" />

              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            data-oid="huk_5li">

            {/* Main Image Container */}
            <div className="relative" data-oid="_wxvtem">
              <div
                className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl overflow-hidden"
                data-oid="mjyd101">

                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-orange-500/20"
                  data-oid="mv6h-dk">
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  data-oid="5aic_.0">

                  <div className="text-center space-y-4" data-oid="33flszn">
                    <div
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto"
                      data-oid="3.vfe0e">

                      <Shield
                        className="w-10 h-10 text-primary-600"
                        data-oid=".ymud0l" />

                    </div>
                    <h4
                      className="text-2xl font-bold text-gray-800"
                      data-oid="vmy7dea">

                      Protected
                    </h4>
                    <p className="text-gray-600" data-oid="w7ymlf:">
                      Your Peace of Mind
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-8 -left-8 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                data-oid="w-0pw6n">

                <div className="text-center" data-oid="ji6xshh">
                  <div
                    className="text-2xl font-bold text-primary-600 mb-1"
                    data-oid="1jgrfl-">

                    50K+
                  </div>
                  <div className="text-sm text-gray-600" data-oid="u.0uqf8">
                    Happy Clients
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                data-oid="n3c0qlb">

                <div className="text-center" data-oid="8xz17mg">
                  <div
                    className="text-2xl font-bold text-orange-500 mb-1"
                    data-oid=".-xrgbh">

                    98%
                  </div>
                  <div className="text-sm text-gray-600" data-oid="-o5.7w:">
                    Satisfaction
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-1/2 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                data-oid="z-93a4h">

                <div className="text-center" data-oid="em7g-vq">
                  <div
                    className="text-2xl font-bold text-green-500 mb-1"
                    data-oid="2-o-fj_">

                    24/7
                  </div>
                  <div className="text-sm text-gray-600" data-oid="1zv7yub">
                    Support
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default OverviewSection;