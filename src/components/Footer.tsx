"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Shield } from
"lucide-react";

const Footer = () => {
  const quickLinks = [
  { name: "Home Insurance", href: "/insurance/home" },
  { name: "Motor Insurance", href: "/insurance/motor" },
  { name: "Travel Insurance", href: "/insurance/travel" },
  { name: "Business Insurance", href: "/insurance/business" },
  { name: "Get a Quote", href: "/quote" },
  { name: "File a Claim", href: "/claims" }];


  const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Vision & Mission", href: "/vision-mission" },
  { name: "Careers", href: "/careers" },
  { name: "Press Releases", href: "/press" },
  { name: "Investor Relations", href: "/investors" },
  { name: "Contact Us", href: "/contact" }];


  const supportLinks = [
  { name: "Help Center", href: "/help" },
  { name: "Claims Process", href: "/claims-process" },
  { name: "Payment Options", href: "/payments" },
  { name: "Policy Documents", href: "/documents" },
  { name: "FAQ", href: "/faq" },
  { name: "Live Chat", href: "/chat" }];


  const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Accessibility", href: "/accessibility" },
  { name: "Compliance", href: "/compliance" },
  { name: "Licensing", href: "/licensing" }];


  const socialLinks = [
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" data-oid="0sp5zs3" />,
    href: "#"
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" data-oid="caqm6jv" />,
    href: "#"
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" data-oid="zlaw6wi" />,
    href: "#"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" data-oid="tq76od1" />,
    href: "#"
  }];


  return (
    <footer
      className="bg-gray-900 text-white relative overflow-hidden"
      data-oid="rozh84:">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-oid="i4cp8dm">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20zm0 0c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
          data-oid="jaj-pvv">
        </div>
      </div>

      <div className="relative" data-oid="_.8p.dz">
        {/* Main Footer Content */}
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
          data-oid="-uanbn6">

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            data-oid="6-01iri">

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
              data-oid="d7loz_d">

              <div
                className="flex items-center space-x-3 mb-6"
                data-oid="..j_6s5">

                <Image
                  src="/premier-gis-logo.svg"
                  alt="Premier GIS Logo"
                  width={160}
                  height={64}
                  className="w-40 h-16"
                  data-oid="6nb1tgv" />

              </div>

              <p
                className="text-gray-300 mb-6 leading-relaxed"
                data-oid="q8-v0sy">

                Premier General Insurance Services has been protecting families
                and businesses in Singapore since 2010. Trust us to safeguard
                your future with reliable, affordable insurance solutions.
              </p>

              <div className="space-y-3 mb-6" data-oid="qzcaz86">
                <div className="flex items-center space-x-3" data-oid="is3492q">
                  <Phone
                    className="w-4 h-4 text-orange-500"
                    data-oid="56krgne" />


                  <span className="text-gray-300" data-oid=":hzuh8e">
                    +65 9145 9872
                  </span>
                </div>
                <div className="flex items-center space-x-3" data-oid="6yqqwhs">
                  <Mail
                    className="w-4 h-4 text-orange-500"
                    data-oid="0m:bn0." />


                  <span className="text-gray-300" data-oid="cvxpx49">
                    enquiry@premiergis.com.sg
                  </span>
                </div>
                <div className="flex items-center space-x-3" data-oid="x6wkkmt">
                  <MapPin
                    className="w-4 h-4 text-orange-500"
                    data-oid="myj72v." />


                  <span className="text-gray-300" data-oid="15su-mu">
                    1 Pasir Panjang Road, #05-01V Labrador Tower
                  </span>
                </div>
                <div className="flex items-center space-x-3" data-oid="7hj0tka">
                  <Clock
                    className="w-4 h-4 text-orange-500"
                    data-oid="1emcncw" />


                  <span className="text-gray-300" data-oid="h8ibebf">
                    Singapore 118479
                  </span>
                </div>
                <div className="flex items-center space-x-3" data-oid="3wx19d3">
                  <Clock
                    className="w-4 h-4 text-orange-500"
                    data-oid="o:-xu.g" />


                  <span className="text-gray-300" data-oid="axm5y.c">
                    Mon-Fri: 9AM-5PM
                  </span>
                </div>
              </div>

              <div className="flex space-x-4" data-oid="_69ugy2">
                {socialLinks.map((social) =>
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-orange-500 transition-all duration-300 hover-lift"
                  data-oid="2e66bta">

                    {social.icon}
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-oid="mrucf-u">

              <h3 className="text-lg font-semibold mb-6" data-oid="5j-yene">
                Insurance Products
              </h3>
              <ul className="space-y-3" data-oid="-mcaw6u">
                {quickLinks.map((link) =>
                <li key={link.name} data-oid="vn2j58w">
                    <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center group transition-colors duration-200"
                    data-oid=":qe3d6s">

                      <ArrowRight
                      className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      data-oid="qvae9hj" />


                      <span
                      className="group-hover:translate-x-2 transition-transform duration-200"
                      data-oid="3ntongr">

                        {link.name}
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-oid="tlq0ei-">

              <h3 className="text-lg font-semibold mb-6" data-oid="idttvfv">
                Company
              </h3>
              <ul className="space-y-3" data-oid="9teu7f:">
                {companyLinks.map((link) =>
                <li key={link.name} data-oid="ecwi3bt">
                    <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center group transition-colors duration-200"
                    data-oid="zjn.9y8">

                      <ArrowRight
                      className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      data-oid="zzsrf3t" />


                      <span
                      className="group-hover:translate-x-2 transition-transform duration-200"
                      data-oid="8d-7r91">

                        {link.name}
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              data-oid="835_qpg">

              <h3 className="text-lg font-semibold mb-6" data-oid="::5vkjo">
                Support
              </h3>
              <ul className="space-y-3" data-oid="9:b_cyu">
                {supportLinks.map((link) =>
                <li key={link.name} data-oid="50:zm3m">
                    <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center group transition-colors duration-200"
                    data-oid="046_gz0">

                      <ArrowRight
                      className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      data-oid="76z_s.a" />


                      <span
                      className="group-hover:translate-x-2 transition-transform duration-200"
                      data-oid="3q13q25">

                        {link.name}
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 rounded-2xl p-8 mb-12"
            data-oid="r:xyonb">

            <div
              className="grid md:grid-cols-2 gap-8 items-center"
              data-oid="e_cp-w.">

              <div data-oid="wix.pze">
                <h3 className="text-2xl font-bold mb-4" data-oid="3d88z7k">
                  Stay Protected with Updates
                </h3>
                <p className="text-gray-300" data-oid="we42w57">
                  Subscribe to receive important insurance tips, policy updates,
                  and exclusive offers.
                </p>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-4"
                data-oid="o5m4yoi">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  data-oid="2w4z0pq" />


                <button
                  className="bg-gradient-to-r from-primary-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover-lift shadow-lg whitespace-nowrap"
                  data-oid="3k8.xsg">

                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-gray-800 pt-8"
            data-oid="cnvq38m">

            <div
              className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
              data-oid="1g:0sbf">

              <div
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6"
                data-oid="k6vuo3t">

                <p className="text-gray-400" data-oid="bzbg-_x">
                  © 2024 Premier General Insurance Services. All rights
                  reserved.
                </p>
                <div className="flex items-center space-x-2" data-oid=":sp7lex">
                  <Shield
                    className="w-4 h-4 text-green-500"
                    data-oid="a_g1e_q" />


                  <span className="text-sm text-gray-400" data-oid="k5cor5y">
                    Licensed & Regulated
                  </span>
                </div>
              </div>

              <div
                className="flex flex-wrap justify-center lg:justify-end space-x-6"
                data-oid="xwf3oi2">

                {legalLinks.map((link) =>
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  data-oid="vn70v3k">

                    {link.name}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>);

};

export default Footer;