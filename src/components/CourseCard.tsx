import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Users, Star } from 'lucide-react';
import { Course } from '../types/Course';

interface CourseCardProps {
  course: Course;
  index: number;
}

const levelColors = {
  Beginner: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200',
  Advanced: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'
};

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Level Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[course.level]}`}>
            {course.level}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
              ${course.price}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
            {course.category}
          </span>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">4.9</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">
              {course.instructor.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            {course.instructor}
          </span>
        </div>

        {/* Course Details */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{course.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.maxParticipants}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link to={`/detail/${course.slug}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;