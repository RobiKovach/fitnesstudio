import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import { fitnessStudios } from "../data/studios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Clock,
  MapPin,
  Users,
  Calendar,
  Award,
  User,
  CheckCircle,
} from "lucide-react";

const StudioPage: React.FC = () => {
  const { id } = useParams(); // studioId
  const studio = fitnessStudios.find((s) => s.id === id);
  const studioCourses = courses.filter((course) => course.studioId === id);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: 3,
        spacing: 16,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 2, spacing: 12 },
        },
        "(max-width: 640px)": {
          slides: { perView: 1, spacing: 8 },
        },
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  if (!studio) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Studio not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 max-w-6xl mx-auto">
      {/* Studio Info */}
      <div className="mb-12">
        <img
          src={studio.image}
          alt={studio.name}
          className="w-full h-64 object-cover rounded-lg shadow"
        />
        <h1 className="text-3xl font-bold mt-6 text-gray-900 dark:text-white">
          {studio.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {studio.description}
        </p>
      </div>

      {/* Studio Tags */}
      {studio.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
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

      {/* Studio Metadata */}
      {studio.metadata && (
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300">
          {Object.entries(studio.metadata).map(([key, value]) => (
            <li
              key={key}
              className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md shadow-sm"
            >
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      )}

      {/* Courses */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white mt-10">
        Available Courses
      </h2>

      {studioCourses.length > 0 ? (
        <div className="relative overflow-visible">
          {/* Arrows */}
          {studioCourses.length > 3 && (
            <>
              <button
                onClick={() => slider.current?.prev()}
                className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-emerald-500 transition-colors shadow-lg p-2 rounded-full z-10 pointer-events-auto group"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-emerald-500 transition" />
              </button>
              <button
                onClick={() => slider.current?.next()}
                className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-emerald-500 transition-colors shadow-lg p-2 rounded-full z-10 pointer-events-auto group"
              >
                <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-emerald-500 transition" />
              </button>
            </>
          )}

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider py-2">
            {studioCourses.map((course) => (
              <Link
                to={`/detail/${course.slug}`}
                key={course.id}
                className="keen-slider__slide min-w-[300px] h-full transition-transform transform hover:scale-[1.03]"
              >
                <div className="h-full flex flex-col justify-between border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white dark:bg-gray-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 rounded-full">
                        {course.category}
                      </span>
                      <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                        ${course.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                      {course.description}
                    </p>

                    {/* Info badges */}
                    <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {course.location}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {course.level}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {course.maxParticipants} max
                      </div>
                      <div className="flex items-center col-span-2">
                        <User className="w-4 h-4 mr-2" />
                        {course.instructor}
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-1 text-gray-900 dark:text-white">
                        Schedule:
                      </h4>
                      <ul className="text-sm space-y-1 text-gray-500 dark:text-gray-400">
                        {course.schedule.map((s, idx) => (
                          <li key={idx} className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {s.day}, {s.time}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Equipment */}
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-1 text-gray-900 dark:text-white">
                        Equipment:
                      </h4>
                      <ul className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {course.equipment.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1"
                          >
                            <CheckCircle className="w-3 h-3 mr-2 text-emerald-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No courses listed.</p>
      )}
    </div>
  );
};

export default StudioPage;
