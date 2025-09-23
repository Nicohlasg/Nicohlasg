"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
  {
    question: "What types of insurance coverage does Premier GIS offer?",
    answer:
    "We offer comprehensive insurance solutions including Home Insurance, Motor Insurance, Travel Insurance, Childcare Insurance, and Business Insurance. Each policy is customizable to meet your specific needs and budget requirements."
  },
  {
    question: "How quickly can I get a quote for insurance?",
    answer:
    "You can get an instant quote online in under 5 minutes. Simply fill out our quick form with basic information, and our system will provide you with competitive rates immediately. For complex policies, our agents can provide detailed quotes within 24 hours."
  },
  {
    question: "What is the claims process like?",
    answer:
    "Our claims process is designed to be simple and fast. You can file a claim online, over the phone, or through our mobile app 24/7. Once filed, you'll be assigned a dedicated claims representative who will guide you through the process. Most claims are processed within 48-72 hours."
  },
  {
    question: "Do you offer multi-policy discounts?",
    answer:
    "Yes! We offer significant discounts when you bundle multiple policies with us. You can save up to 25% by combining your home and auto insurance, or up to 30% with three or more policies. Our agents can help you find the best combination for maximum savings."
  },
  {
    question: "Can I manage my policy online?",
    answer:
    "Absolutely! Our online portal and mobile app allow you to view your policy details, make payments, update information, file claims, and access important documents 24/7. You can also set up automatic payments and receive digital policy documents."
  },
  {
    question:
    "What makes Premier GIS different from other insurance companies?",
    answer:
    "Our 25+ years of experience, A+ BBB rating, and 98% customer satisfaction rate set us apart. We provide personalized service, competitive rates, fast claims processing, and 24/7 support. Our local agents understand your community's specific needs and risks."
  },
  {
    question: "Is there a waiting period for coverage to begin?",
    answer:
    "Coverage typically begins immediately upon payment and policy issuance for most types of insurance. For certain high-risk policies or specific conditions, there may be short waiting periods. Our agents will clearly explain any waiting periods during the quote process."
  },
  {
    question: "How often should I review my insurance coverage?",
    answer:
    "We recommend reviewing your insurance coverage annually or whenever you experience major life changes such as moving, getting married, having children, or purchasing new assets. We provide complimentary annual reviews to ensure your coverage remains adequate."
  }];


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      data-oid="bc4-y5x">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-oid="6.-8tn0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm0 0c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
          data-oid="g117dwm">
        </div>
      </div>

      <div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="nk5l7dk">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          data-oid="h.9htk:">

          <div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl text-white mb-6"
            data-oid="1qrklg5">

            <HelpCircle className="w-8 h-8" data-oid="lqddo3y" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            data-oid="xnrprto">

            Frequently Asked{" "}
            <span className="gradient-text" data-oid=".ngl0o3">
              Questions
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            data-oid="4gqo0e.">

            Got questions? We've got answers. Find quick solutions to common
            inquiries about our insurance services.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
          data-oid="gnl3geb">

          {faqs.map((faq, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            data-oid="sev68n.">

              <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              data-oid="sywhi-4">

                <h3
                className="text-lg font-semibold text-gray-900 pr-4"
                data-oid="_3m-uiq">

                  {faq.question}
                </h3>
                <div className="flex-shrink-0" data-oid="wsbg8k5">
                  <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center text-white"
                  data-oid="q9uaw5j">

                    {openIndex === index ?
                  <Minus className="w-4 h-4" data-oid="_izhb28" /> :

                  <Plus className="w-4 h-4" data-oid="-q8r7j8" />
                  }
                  </motion.div>
                </div>
              </button>

              <AnimatePresence data-oid="f:c.:i8">
                {openIndex === index &&
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                data-oid="co9b.wo">

                    <div className="px-6 pb-6" data-oid="lo_joc4">
                      <div
                    className="h-px bg-gradient-to-r from-primary-200 to-orange-200 mb-4"
                    data-oid="7:y2lcj">
                  </div>
                      <p
                    className="text-gray-600 leading-relaxed"
                    data-oid="zlj.llo">

                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
          data-oid="9::n56.">

          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            data-oid="-fe4a2n">

            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6" data-oid="c-h3avg">
            Our friendly team is here to help you find the perfect insurance
            solution for your needs.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="kzciekw">

            <button
              className="bg-gradient-to-r from-primary-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover-lift shadow-lg"
              data-oid="xzfxx6v">

              Contact Us Today
            </button>
            <button
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-primary-500 hover:text-primary-600 transition-colors duration-200"
              data-oid="z5c5-u-">

              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default FAQSection;