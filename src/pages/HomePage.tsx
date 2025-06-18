import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CourseFilters from '../components/CourseFilters';
import CourseCard from '../components/CourseCard';
import Testimonials from '../components/Testimonials';
import { courses } from '../data/courses';
import { CourseCategory } from '../types/Course';

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('All');

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white dark:bg-gray-800">
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
              Choose Your Perfect Class
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From beginner-friendly sessions to advanced challenges, find the class that matches your fitness goals and schedule.
            </p>
          </motion.div>

          {/* Filters */}
          <CourseFilters 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                index={index}
              />
            ))}
          </div>

          {/* No results message */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No classes found in this category. Try selecting a different filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default HomePage;