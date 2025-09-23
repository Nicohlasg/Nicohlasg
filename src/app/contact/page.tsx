"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users,
  Shield,
  CheckCircle } from
"lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
  {
    icon: <Phone className="w-8 h-8" data-oid="g05kxdo" />,
    title: "Phone Support",
    subtitle: "Speak with our experts",
    info: "1-800-PREMIER (773-6437)",
    description:
    "Available 24/7 for claims and emergencies\nBusiness hours: Mon-Fri 8AM-8PM, Sat 9AM-5PM",
    action: "Call Now"
  },
  {
    icon: <Mail className="w-8 h-8" data-oid="8c64_m:" />,
    title: "Email Support",
    subtitle: "Send us your questions",
    info: "info@premiergis.com",
    description:
    "Get detailed responses within 24 hours\nFor claims: claims@premiergis.com",
    action: "Send Email"
  },
  {
    icon: <MessageSquare className="w-8 h-8" data-oid="z4.xus5" />,
    title: "Live Chat",
    subtitle: "Instant online assistance",
    info: "Available on our website",
    description:
    "Chat with our customer service team\nAverage response time: 2-3 minutes",
    action: "Start Chat"
  },
  {
    icon: <Calendar className="w-8 h-8" data-oid="-.bqb0." />,
    title: "Schedule Meeting",
    subtitle: "Book a consultation",
    info: "Free policy review",
    description:
    "Meet with our insurance experts\nIn-person or virtual appointments available",
    action: "Book Now"
  }];


  const offices = [
  {
    name: "Main Office",
    address: "123 Insurance Plaza, Suite 100",
    city: "Your City, ST 12345",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 8AM-6PM"
  },
  {
    name: "North Branch",
    address: "456 North Avenue, Suite 200",
    city: "North City, ST 12346",
    phone: "(555) 234-5678",
    hours: "Mon-Fri: 9AM-5PM"
  },
  {
    name: "South Branch",
    address: "789 South Street, Suite 300",
    city: "South City, ST 12347",
    phone: "(555) 345-6789",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-1PM"
  }];


  return (
    <main className="min-h-screen" data-oid="slny6.x">
      <Navigation data-oid="j312g60" />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-orange-50"
        data-oid="gnis-jr">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="ic1qg9v">

          <div className="text-center" data-oid="vj8dr41">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              data-oid="xqw7q8.">

              Contact{" "}
              <span className="gradient-text" data-oid="cnog0gn">
                Premier GIS
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="qdr.gqo">

              We're here to help you with all your insurance needs. Reach out to
              our experienced team for quotes, claims support, or any questions
              you may have.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white" data-oid="qz4tkjr">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="rm.8oz2">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="fn8iphp">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="60rn41r">

              Get in Touch
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="qhqadua">

              Choose the contact method that works best for you. Our team is
              ready to assist with personalized service and expert guidance.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="j9n_znj">

            {contactMethods.map((method, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-oid="gqle-h3">

                <div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white mx-auto mb-6"
                data-oid="992adfi">

                  {method.icon}
                </div>
                <h3
                className="text-xl font-semibold text-gray-900 mb-2"
                data-oid="mx:_42e">

                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4" data-oid="tjunv14">
                  {method.subtitle}
                </p>
                <p
                className="text-lg font-semibold text-primary-600 mb-4"
                data-oid="0i054ug">

                  {method.info}
                </p>
                <p
                className="text-sm text-gray-600 mb-6 leading-relaxed whitespace-pre-line"
                data-oid="b9:ifuq">

                  {method.description}
                </p>
                <button
                className="w-full bg-gradient-to-r from-primary-600 to-orange-500 text-white py-3 rounded-full font-semibold hover-lift shadow-lg"
                data-oid="f45uzs0">

                  {method.action}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50" data-oid="m95e_df">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="vao_:28">

          <div className="grid lg:grid-cols-2 gap-16" data-oid="rw.9ow0">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
              data-oid="x.ty43s">

              <h2
                className="text-3xl font-bold text-gray-900 mb-6"
                data-oid="nxh86-h">

                Send us a Message
              </h2>

              {isSubmitted ?
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
                data-oid="_e.2q8:">

                  <CheckCircle
                  className="w-16 h-16 text-green-500 mx-auto mb-4"
                  data-oid="qg2up92" />


                  <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  data-oid="68x:-x.">

                    Message Sent!
                  </h3>
                  <p className="text-gray-600" data-oid="0j3pilr">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div> :

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-oid="i-53h:8">

                  <div className="grid md:grid-cols-2 gap-6" data-oid="99pefk6">
                    <div data-oid="2r.l5fi">
                      <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      data-oid="cx8sy1r">

                        Full Name *
                      </label>
                      <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                      data-oid="oaek-9b" />

                    </div>

                    <div data-oid="wpmtoit">
                      <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      data-oid="fvap:09">

                        Email Address *
                      </label>
                      <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                      data-oid="o1iu1ha" />

                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6" data-oid="-qirgzz">
                    <div data-oid="2f75og9">
                      <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      data-oid="upxbobt">

                        Phone Number
                      </label>
                      <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                      data-oid="9h87qeq" />

                    </div>

                    <div data-oid="gfpgtnp">
                      <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      data-oid=":_fy76h">

                        Subject *
                      </label>
                      <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      data-oid="x1w09wy">

                        <option value="" data-oid="zqxij8g">
                          Select a topic
                        </option>
                        <option value="quote" data-oid="hscs0:e">
                          Request a Quote
                        </option>
                        <option value="claim" data-oid="g44n1k8">
                          File a Claim
                        </option>
                        <option value="policy" data-oid="8af5jf.">
                          Policy Question
                        </option>
                        <option value="billing" data-oid="oi9e1bv">
                          Billing Inquiry
                        </option>
                        <option value="general" data-oid="0tq3..6">
                          General Information
                        </option>
                        <option value="other" data-oid="t4l1e._">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div data-oid="7g6ysd5">
                    <label
                    htmlFor="preferredContact"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="2g2g1qc">

                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4" data-oid="lvbbz32">
                      <label className="flex items-center" data-oid="1hkoe.h">
                        <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                        data-oid=":5i1rll" />


                        <span className="ml-2 text-gray-700" data-oid="4xxz6xg">
                          Email
                        </span>
                      </label>
                      <label className="flex items-center" data-oid="f0wttpu">
                        <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                        data-oid="uy:mo.-" />


                        <span className="ml-2 text-gray-700" data-oid="tfjh3kw">
                          Phone
                        </span>
                      </label>
                    </div>
                  </div>

                  <div data-oid="gsjbl7x">
                    <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    data-oid="-lpu55u">

                      Message *
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                    data-oid="xc60b::">
                  </textarea>
                  </div>

                  <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-orange-500 text-white py-4 rounded-full font-semibold hover-lift shadow-lg flex items-center justify-center group"
                  data-oid="4:9sa8x">

                    <Send
                    className="mr-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                    data-oid="q5.4twx" />

                    Send Message
                  </button>
                </form>
              }
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
              data-oid="4rn5d9v">

              <div data-oid="kkudc32">
                <h2
                  className="text-3xl font-bold text-gray-900 mb-6"
                  data-oid="ixu2tst">

                  Contact Information
                </h2>
                <div className="space-y-6" data-oid="a.1inmf">
                  <div
                    className="flex items-start space-x-4"
                    data-oid="h-qf3f:">

                    <div
                      className="w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      data-oid="o-u7:-s">

                      <Phone className="w-6 h-6" data-oid="a.:.a8_" />
                    </div>
                    <div data-oid="fg--::.">
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-1"
                        data-oid="ap2saxs">

                        Phone
                      </h3>
                      <p className="text-gray-600 mb-1" data-oid="gryef74">
                        +65 9145 9872
                      </p>
                      <p className="text-sm text-gray-500" data-oid="hmdq1_v">
                        Business Hours: Mon-Fri 9AM-5PM
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-start space-x-4"
                    data-oid="6bcnmu0">

                    <div
                      className="w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      data-oid="j2mrfj:">

                      <Mail className="w-6 h-6" data-oid="iaeo_p2" />
                    </div>
                    <div data-oid="hd0823e">
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-1"
                        data-oid="iagzr_h">

                        Email
                      </h3>
                      <p className="text-gray-600 mb-1" data-oid="zwdkjoo">
                        enquiry@premiergis.com.sg
                      </p>
                      <p className="text-sm text-gray-500" data-oid="5imwj_m">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-start space-x-4"
                    data-oid="1f6rnp7">

                    <div
                      className="w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      data-oid="7:g:0zn">

                      <MapPin className="w-6 h-6" data-oid="fuzciq7" />
                    </div>
                    <div data-oid="hopmx0_">
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-1"
                        data-oid="p0a146a">

                        Singapore Office
                      </h3>
                      <p className="text-gray-600" data-oid="wt:tmm-">
                        1 Pasir Panjang Road
                      </p>
                      <p className="text-gray-600" data-oid="e6q2e9-">
                        #05-01V Labrador Tower, Singapore 118479
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-start space-x-4"
                    data-oid="31_1y9w">

                    <div
                      className="w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      data-oid="8mytj_z">

                      <Clock className="w-6 h-6" data-oid=":0e3h2j" />
                    </div>
                    <div data-oid="ova:x12">
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-1"
                        data-oid="76-jpdj">

                        Business Hours
                      </h3>
                      <p className="text-gray-600" data-oid="ljfi9j3">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-600" data-oid="u:hpeoq">
                        Saturday & Sunday: Closed
                      </p>
                      <p className="text-gray-600" data-oid="5f-ldrc">
                        For enquiries outside office hours, please email us
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div
                className="bg-red-50 p-6 rounded-xl border border-red-200"
                data-oid="zetb6kc">

                <div
                  className="flex items-center space-x-3 mb-4"
                  data-oid="o0hqf5q">

                  <Shield className="w-8 h-8 text-red-600" data-oid="1ybot40" />
                  <h3
                    className="text-xl font-semibold text-red-800"
                    data-oid="5ipu:vf">

                    Emergency Claims
                  </h3>
                </div>
                <p className="text-red-700 mb-3" data-oid="akzo-xg">
                  For urgent claims requiring immediate attention, call our 24/7
                  emergency hotline.
                </p>
                <p
                  className="text-lg font-semibold text-red-800"
                  data-oid="wd05_ms">

                  1-800-CLAIMS-1 (1-800-252-4671)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white" data-oid="ns95evi">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="02cjwgi">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            data-oid="2u1c_lj">

            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-oid="_gk1b:h">

              Office Locations
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid=":8:fokf">

              Visit one of our convenient office locations to speak with our
              insurance experts in person.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8" data-oid="cfcv7av">
            {offices.map((office, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              data-oid="c_cow2:">

                <div
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white mx-auto mb-6"
                data-oid="z1uqpld">

                  <MapPin className="w-8 h-8" data-oid="880zh40" />
                </div>
                <h3
                className="text-xl font-semibold text-gray-900 mb-4"
                data-oid="3xsmfp2">

                  {office.name}
                </h3>
                <p className="text-gray-600 mb-2" data-oid="0vfvas8">
                  {office.address}
                </p>
                <p className="text-gray-600 mb-4" data-oid="chdhst7">
                  {office.city}
                </p>
                <p
                className="text-primary-600 font-semibold mb-2"
                data-oid="zj0j0bd">

                  {office.phone}
                </p>
                <p className="text-sm text-gray-500" data-oid="jw53smd">
                  {office.hours}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer data-oid="pwzr.:s" />
    </main>);

}