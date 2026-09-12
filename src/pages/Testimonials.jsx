import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import CompanyLayout from "../Components/CompanyLayout.jsx";
import companyTestimonials from "../data/companyTestimonials.js";

const Testimonials = () => {
  return (
    <CompanyLayout>
      <div className="relative min-h-[75vh] flex items-center justify-center text-white text-center px-6 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl">Meet Our Customers</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Meet our wonderful customers and learn the magical journey they went through, with us.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 bg-blue-50">
        <motion.h2
          className="text-center text-3xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {companyTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${testimonial.booked}`}
              className="bg-white border rounded-lg shadow-md p-6 flex flex-col justify-between w-full max-w-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="bg-gray-100 px-4 py-2 flex items-center font-semibold text-gray-800 rounded-t-lg">
                <FaQuoteLeft className="mr-2 text-xl text-gray-500" />
                {testimonial.title}
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center justify-between">
                  <div className="text-yellow-500 text-lg flex">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <FaStar key={starIndex} />
                    ))}
                  </div>
                  {testimonial.date ? (
                    <span className="text-gray-400 text-sm">{testimonial.date}</span>
                  ) : null}
                </div>
                <p className="mt-2 text-gray-700">{testimonial.review}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <p className="font-bold">By: {testimonial.name}</p>
                <p className="text-sm text-gray-600">Booked: {testimonial.booked}</p>
                <p className="text-sm text-gray-600">Event: {testimonial.event}</p>
                {testimonial.bookingDate ? (
                  <p className="text-sm text-gray-600">
                    Booking Date: {testimonial.bookingDate}
                  </p>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CompanyLayout>
  );
};

export default Testimonials;
