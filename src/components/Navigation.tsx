"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Vision & Mission", href: "/vision-mission" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" }];


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-effect shadow-lg" : "bg-transparent"}`
      }
      data-oid="8is3dwh">

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="kxlnir6">

        <div
          className="flex items-center justify-between h-16"
          data-oid="tvog::l">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2"
            data-oid="dkkthf7">

            <Image
              src="/premier-gis-logo.svg"
              alt="Premier GIS Logo"
              width={120}
              height={48}
              className="w-30 h-12"
              data-oid="g-d0-fa" />

          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex flex-1 max-w-md mx-8"
            data-oid="d..olqc">

            <div className="relative w-full" data-oid="17unbd5">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid="85dji6p" />


              <input
                type="text"
                placeholder="Search insurance services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                data-oid="u4u4qda" />

            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-6"
            data-oid="bu5no9d">

            {navItems.map((item, index) =>
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 3) }}
              data-oid="v40al92">

                <Link
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                data-oid="_3-rbj8">

                  {item.name}
                  <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"
                  data-oid="ti3-5ne">
                </span>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-oid="yo0k.3s">

            {isMobileMenuOpen ?
            <X className="w-6 h-6" data-oid="dmg2csp" /> :

            <Menu className="w-6 h-6" data-oid="qgd23q-" />
            }
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect mt-2 rounded-lg shadow-lg"
          data-oid="0yl1kdh">

            <div className="px-4 py-2 space-y-2" data-oid="viuphwo">
              {/* Mobile Search */}
              <div className="relative" data-oid="iuggf2g">
                <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid="_b_x34p" />


                <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                data-oid="_00dubi" />

              </div>

              {/* Mobile Navigation Items */}
              {navItems.map((item) =>
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              data-oid="0-0v-d1">

                  {item.name}
                </Link>
            )}
            </div>
          </motion.div>
        }
      </div>
    </motion.nav>);

};

export default Navigation;