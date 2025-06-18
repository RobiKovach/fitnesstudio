import React from 'react';
import { motion } from 'framer-motion';
import { CourseCategory } from '../types/Course';

interface CourseFiltersProps {
  activeCategory: CourseCategory;
  onCategoryChange: (category: CourseCategory) => void;
}

const categories: CourseCategory[] = ['All', 'Yoga', 'Strength', 'Cardio', 'Outdoor', 'Pilates'];

const categoryIcons: Record<CourseCategory, string> = {
  All: '🏃‍♂️',
  Yoga: '🧘‍♀️',
  Strength: '💪',
  Cardio: '❤️',
  Outdoor: '🌲',
  Pilates: '🤸‍♀️'
};

const CourseFilters: React.FC<CourseFiltersProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
            activeCategory === category
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
          }`}
        >
          <span className="text-lg">{categoryIcons[category]}</span>
          <span>{category}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CourseFilters;