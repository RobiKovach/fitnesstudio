import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Users,
  Star,
  Calendar,
  Award,
  CheckCircle,
  User,
} from "lucide-react";
import { courses } from "../data/courses";
import BookingForm from "../components/BookingForm";

const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Course Not Found
          </h1>
          <Link
            to="/"
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const levelColors = {
    Beginner:
      "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
    Intermediate:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Back Button */}
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

        {/* Course Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                {course.category}
              </span>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  levelColors[course.level]
                }`}
              >
                {course.level}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {course.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              {course.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About This Class
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {course.longDescription}
              </p>
            </motion.section>

            {/* Schedule */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Schedule
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {course.schedule.map((session, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{session.day}</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {session.time}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Equipment */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Equipment Provided
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {course.equipment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sticky top-24"
            >
              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  ${course.price}
                </div>
                <p className="text-gray-600 dark:text-gray-300">per session</p>
              </div>

              {/* Course Stats */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>Duration</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {course.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users className="w-5 h-5 mr-3" />
                    <span>Max Size</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {course.maxParticipants}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Award className="w-5 h-5 mr-3" />
                    <span>Level</span>
                  </div>
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      levelColors[course.level]
                    }`}
                  >
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Instructor */}
              <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Your Instructor
                </h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {course.instructor}
                    </p>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                        4.9 (127 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book This Class
              </motion.button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                Free cancellation up to 2 hours before class
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <BookingForm
        course={course}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default CourseDetailPage;
