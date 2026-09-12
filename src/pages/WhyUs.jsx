import { motion } from "framer-motion";
import { FaHandshake, FaStore, FaTags } from "react-icons/fa";
import CompanyLayout from "../Components/CompanyLayout.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  {
    Icon: FaHandshake,
    title: "Delivery of Commitments",
    body: "Our team ensures that all the services are delivered as committed to ensure a hassle-free experience for you.",
  },
  {
    Icon: FaStore,
    title: "One-Stop Shop",
    body: "No need to run around for your wedding services - Book our trusted vendors under one roof.",
  },
  {
    Icon: FaTags,
    title: "Guaranteed Best Prices",
    body: (
      <>
        We guarantee our prices for venue and non-venue services.{" "}
        <span className="text-red-500 font-semibold">Up to 30% off.</span>
      </>
    ),
  },
];

const featuredOn = [
  {
    title: "Banquethall.co - the first online wedding company to complete 1000 Weddings",
    source: "Pocketnewsalert.com",
    date: "5 January 2024",
  },
  {
    title: "Banquethall.co - An Online Marketplace for Wedding Services",
    source: "Business World",
    date: "14 March 2024",
  },
  {
    title: "How This Startup Is Fighting It Out In The Disorganized Business Of Wedding Planning",
    source: "Entrepreneur India",
    date: "22 May 2024",
  },
  {
    title: "Within two months of raising $1L, Banquethall.co raises another round of funding",
    source: "YourStory",
    date: "7 July 2024",
  },
  {
    title: "Exclusive: Banquethall.co gets pre-Series A funding from Sixth Sense Ventures",
    source: "VCCircle",
    date: "19 August 2024",
  },
  {
    title: "Banquethall.co raises undisclosed funding from Sixth Sense Ventures",
    source: "etlogo",
    date: "30 September 2024",
  },
  {
    title: "Banquethall.co Raises Pre Series A Round of Funding",
    source: "iamwire",
    date: "15 November 2024",
  },
  {
    title: "Within two months of raising $1L, Banquethall.co raises another round of funding",
    source: "YourStory",
    date: "28 December 2024",
  },
];

const WhyUs = () => {
  return (
    <CompanyLayout>
      <div className="relative min-h-[75vh] flex items-center justify-center text-white text-center px-6 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">Why book with Banquethall.co</h1>
          <p className="mt-4 text-lg md:text-xl">2,000+ events organized till date</p>
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-red-500 rounded-full">
                  <Icon size={40} color="white" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-center mb-8"
          >
            Featured On
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredOn.map((item, index) => (
              <motion.div
                key={`${item.source}-${item.date}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center bg-white shadow-lg rounded-lg p-6"
              >
                <div className="w-20 h-20 mr-6 flex-shrink-0 flex items-center justify-center rounded-full bg-red-50 text-red-600 font-semibold text-sm text-center px-2">
                  {item.source.split(" ")[0]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.source}</p>
                  <p className="text-gray-400 text-sm">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </CompanyLayout>
  );
};

export default WhyUs;
