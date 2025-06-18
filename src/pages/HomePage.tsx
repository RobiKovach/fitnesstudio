import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import { fitnessStudios } from "../data/studios";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Studios Section */}
      <section id="studios" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Discover Fitness Studios
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find the perfect studio near you and explore their available
              classes.
            </p>
          </motion.div>

          {/* Studio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fitnessStudios.map((studio, index) => (
              <motion.div
                key={studio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="transform transition-transform duration-300 hover:scale-105 h-full"
              >
                <Link
                  to={`/studio/${studio.id}`}
                  className="flex flex-col h-full rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={studio.image}
                    alt={studio.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {studio.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">
                      {studio.description}
                    </p>

                    {studio.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {studio.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {studio.metadata && (
                      <ul className="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {Object.entries(studio.metadata).map(([key, value]) => (
                          <li key={key}>
                            <strong>{key}:</strong> {value}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default HomePage;
