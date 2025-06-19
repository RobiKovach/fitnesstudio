import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import { fitnessStudios } from "../data/studios";
import { courses } from "../data/courses";
import { trainers } from "../data/trainers";

const TABS = ["Studios", "Trainers", "Courses"];

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Studios");

  const renderCardWrapper = (children: React.ReactNode, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="transform transition-transform duration-300 hover:scale-[1.03] h-full"
    >
      {children}
    </motion.div>
  );

  const cardClass =
    "flex flex-col h-full rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-900 shadow hover:shadow-xl transition-shadow duration-300";

  const renderContent = () => {
    switch (activeTab) {
      case "Studios":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fitnessStudios.map((studio, index) =>
              renderCardWrapper(
                <Link to={`/studio/${studio.id}`} className={cardClass}>
                  <img
                    src={studio.image}
                    alt={studio.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
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
                            className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>,
                index
              )
            )}
          </div>
        );

      case "Trainers":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) =>
              renderCardWrapper(
                <Link to={`/trainer/${trainer.id}`} className={cardClass}>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {trainer.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">
                      {trainer.bio}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-3">
                      <strong>Specialty:</strong> {trainer.specialty}
                    </p>
                  </div>
                </Link>,
                index
              )
            )}
          </div>
        );

      case "Courses":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) =>
              renderCardWrapper(
                <Link to={`/detail/${course.slug}`} className={cardClass}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">
                      {course.description}
                    </p>
                    <ul className="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>
                        <strong>Instructor:</strong> {course.instructor}
                      </li>
                      <li>
                        <strong>Level:</strong> {course.level}
                      </li>
                      <li>
                        <strong>Duration:</strong> {course.duration}
                      </li>
                      <li>
                        <strong>Price:</strong> ${course.price}
                      </li>
                    </ul>
                  </div>
                </Link>,
                index
              )
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />

      <section id="tabs-section" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Offers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose between studios, trainers, and courses to find what suits
              you best.
            </p>
          </motion.div>

          <div className="flex justify-center flex-wrap gap-4 mb-10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300 border 
                  ${
                    activeTab === tab
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                      : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-emerald-100 dark:hover:bg-gray-800 hover:text-emerald-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {renderContent()}
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default HomePage;
