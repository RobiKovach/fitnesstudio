import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { trainers } from "../data/trainers";
import { courses } from "../data/courses";
import { ArrowLeft, Star, Award, User } from "lucide-react";

const TrainerDetailPage: React.FC = () => {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.id === id);
  const trainerCourses = courses.filter((c) =>
    trainer ? c.instructor === trainer.name : false
  );

  if (!trainer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Trainer Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <Link to="/">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="absolute top-6 left-6 flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.button>
        </Link>

        <div className="absolute bottom-6 left-6 right-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-white">{trainer.name}</h1>
            <p className="text-md text-gray-200 max-w-2xl">{trainer.bio}</p>
            <p className="text-sm mt-2 text-gray-300">
              <strong>Specialty:</strong> {trainer.specialty}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Bio Section */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About the Trainer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {trainer.bio}
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-600 dark:text-gray-400 gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{trainer.experience} years of experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>{trainer.specialty}</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Courses by {trainer.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trainerCourses.map((course) => (
                  <Link
                    to={`/detail/${course.slug}`}
                    key={course.id}
                    className="group block rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {course.description}
                      </p>

                      <div className="mt-4 flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                          4.9 (127 reviews)
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Right - Trainer Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sticky top-24">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">
                {trainer.name}
              </h3>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                {trainer.specialty}
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Experience
                  </span>
                  <span>{trainer.experience} yrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Rating
                  </span>
                  <span>4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetailPage;
