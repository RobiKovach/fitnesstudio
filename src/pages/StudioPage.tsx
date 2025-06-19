import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import { fitnessStudios } from "../data/studios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Calendar,
  Award,
  User,
  CheckCircle,
} from "lucide-react";

const StudioPage: React.FC = () => {
  const { id } = useParams();
  const studio = fitnessStudios.find((s) => s.id === id);
  const studioCourses = courses.filter((course) => course.studioId === id);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      slides: { perView: 3, spacing: 16 },
      breakpoints: {
        "(max-width: 1024px)": { slides: { perView: 2, spacing: 12 } },
        "(max-width: 640px)": { slides: { perView: 1, spacing: 8 } },
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 max-w-7xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center space-x-2 mb-6 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back</span>
      </Link>
      {/* Studio Hero */}
      <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-10">
        <img
          src={studio.image}
          alt={studio.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
          <h1 className="text-4xl font-bold text-white">{studio.name}</h1>
          <p className="text-md text-gray-200 max-w-3xl">
            {studio.description}
          </p>
        </div>
      </div>

      {/* Tags */}
      {studio.tags && (
        <div className="mb-6 flex flex-wrap gap-2">
          {studio.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Metadata */}
      {studio.metadata && (
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
          {Object.entries(studio.metadata).map(([key, value]) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <strong className="capitalize">{key}:</strong> {value}
            </div>
          ))}
        </div>
      )}

      {/* Courses */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
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

                    {/* Info */}
                    <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>

                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {course.level}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {course.maxParticipants} max
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {course.instructor}
                      </div>
                    </div>

                    {/* Schedule */}
                    {course.schedule && (
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
                    )}

                    {/* Equipment */}
                    {course.equipment && (
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
                    )}
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
