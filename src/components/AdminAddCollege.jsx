import React, { useState } from "react";
import AdminSideBar from "./AdminSideBar";

const AdminAddCollege = () => {
  const [activeSection, setActiveSection] = useState("basic-info");
  const [courses, setCourses] = useState([{ id: 1 }]);
  const [customFacilities, setCustomFacilities] = useState([]);
  const [formData, setFormData] = useState({
    isFeatured: false,
    isBanner: false,
    isSponsored: false,
  });

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const addCourse = () => {
    setCourses([...courses, { id: courses.length + 1 }]);
  };

  const removeCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const addCustomFacility = () => {
    setCustomFacilities([...customFacilities, { id: customFacilities.length + 1 }]);
  };

  const removeCustomFacility = (id) => {
    setCustomFacilities(customFacilities.filter((facility) => facility.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex h-screen bg-gray-50">

        {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-3">
              <button
                id="menu-toggle"
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h2 className="text-xl font-semibold text-gray-800">
                Add New College
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {/* Add College Form */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  College Information
                </h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Save as Draft
                  </button>
                  <button
                    id="publish-btn"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Publish College
                  </button>
                </div>
              </div>

              {/* Form Navigation */}
              <div className="flex mb-6 border-b">
                <button
                  className={`px-4 py-2 font-medium ${
                    activeSection === "basic-info"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-indigo-600"
                  }`}
                  onClick={() => handleSectionChange("basic-info")}
                >
                  Basic Info
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    activeSection === "courses"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-indigo-600"
                  }`}
                  onClick={() => handleSectionChange("courses")}
                >
                  Courses
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    activeSection === "facilities"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-indigo-600"
                  }`}
                  onClick={() => handleSectionChange("facilities")}
                >
                  Facilities
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    activeSection === "media"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-indigo-600"
                  }`}
                  onClick={() => handleSectionChange("media")}
                >
                  Media
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    activeSection === "featured"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-indigo-600"
                  }`}
                  onClick={() => handleSectionChange("featured")}
                >
                  Featured Settings
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    activeSection === "seo"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-indigo-600"
                  }`}
                  onClick={() => handleSectionChange("seo")}
                >
                  SEO & Meta
                </button>
              </div>

              {/* Form Sections */}
              <form id="college-form" onSubmit={handleSubmit}>
                {/* Basic Info Section */}
                {activeSection === "basic-info" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          College Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter college name"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          College Type *
                        </label>
                        <select
                          name="type"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          required
                          onChange={handleInputChange}
                        >
                          <option value="">Select college type</option>
                          <option value="GOVERNMENT">Government</option>
                          <option value="PRIVATE">Private</option>
                          <option value="AUTONOMUS">Automnomus</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location *
                        </label>
                        <input
                          type="text"
                          name="location"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="City, State"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Established Year
                        </label>
                        <input
                          type="text"
                          name="establishedYear"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 1995"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="https://www.example.edu"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        name="description"
                        rows="4"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter college description..."
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          NAAC Rating
                        </label>
                        <select
                          name="naacRating"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          onChange={handleInputChange}
                        >
                          <option value="">Select NAAC Rating</option>
                          <option value="A++">A++</option>
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="B++">B++</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="Not Accredited">Not Accredited</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Approved By
                        </label>
                        <select
                          name="approvedBy"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          onChange={handleInputChange}
                        >
                          <option value="">Select Approval</option>
                          <option value="UGC">UGC</option>
                          <option value="AICTE">AICTE</option>
                          <option value="MCI">MCI</option>
                          <option value="BCI">BCI</option>
                          <option value="PCI">PCI</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Email
                        </label>
                        <input
                          type="email"
                          name="contactEmail"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="admissions@college.edu"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Phone
                        </label>
                        <input
                          type="tel"
                          name="contactPhone"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="+91 9876543210"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <textarea
                        name="address"
                        rows="2"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Full address of the college"
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* Courses Section */}
                {activeSection === "courses" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Courses Offered
                      </h4>
                      <button
                        type="button"
                        onClick={addCourse}
                        className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Add Course
                      </button>
                    </div>

                    <div id="courses-container">
                      {courses.map((course, index) => (
                        <div
                          key={course.id}
                          className="course-item bg-gray-50 p-4 rounded-lg mb-4"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h5 className="font-medium text-gray-700">
                              Course #{index + 1}
                            </h5>
                            <button
                              type="button"
                              onClick={() => removeCourse(course.id)}
                              className="remove-course text-red-500 hover:text-red-700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Course Name *
                              </label>
                              <input
                                type="text"
                                name={`courses[${index}].name`}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="e.g. B.Tech Computer Science"
                                required
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Course Type
                              </label>
                              <select
                                name={`courses[${index}].type`}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={handleInputChange}
                              >
                                <option value="">Select course type</option>
                                <option value="UG">Undergraduate</option>
                                <option value="PG">Postgraduate</option>
                                <option value="DIPLOMA">Diploma</option>
                                <option value="PHD">PhD</option>
                              </select>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Duration (Years)
                              </label>
                              <input
                                type="number"
                                name={`courses[${index}].duration`}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="e.g. 4"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Annual Fees (₹)
                              </label>
                              <input
                                type="number"
                                name={`courses[${index}].fees`}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="e.g. 150000"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Seats Available
                              </label>
                              <input
                                type="number"
                                name={`courses[${index}].seats`}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="e.g. 60"
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Eligibility Criteria
                            </label>
                            <textarea
                              name={`courses[${index}].eligibility`}
                              rows="2"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Minimum qualification required"
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-sm text-gray-500 italic">
                      Add all courses offered by the college. At least one course
                      is required.
                    </div>
                  </div>
                )}

                {/* Facilities Section */}
                {activeSection === "facilities" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Campus Facilities
                      </h4>
                      <button
                        type="button"
                        onClick={addCustomFacility}
                        className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Add Facility
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="HOSTEL"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Hostel
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="LIBRARY"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Library
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="SPORTS"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Sports Complex
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="LABS"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">Labs</span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="WIFI"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Wi-Fi Campus
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="CAFETERIA"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Cafeteria
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="AUDITORIUM"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Auditorium
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="TRANSPORT"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Transport
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="MEDICAL"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Medical Center
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="GYM"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Gymnasium
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="PLACEMENT"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Placement Cell
                          </span>
                        </label>
                      </div>
                      <div className="facility-checkbox">
                        <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            name="facilities"
                            value="RESEARCH"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            onChange={handleInputChange}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Research Center
                          </span>
                        </label>
                      </div>
                    </div>

                    <div id="custom-facilities-container" className="mt-6">
                      <h5 className="font-medium text-gray-700 mb-3">
                        Custom Facilities
                      </h5>
                      {customFacilities.map((facility, index) => (
                        <div
                          key={facility.id}
                          className="custom-facility bg-gray-50 p-4 rounded-lg mb-4"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h5 className="font-medium text-gray-700">
                              Custom Facility
                            </h5>
                            <button
                              type="button"
                              onClick={() => removeCustomFacility(facility.id)}
                              className="remove-facility text-red-500 hover:text-red-700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Facility Name *
                              </label>
                              <input
                                type="text"
                                name={`customFacilities[${index}].name`}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="e.g. Innovation Lab"
                                required
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Facility Type
                              </label>
                              <select
                                name={`customFacilities[${index}].type`}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={handleInputChange}
                              >
                                <option value="ACADEMIC">Academic</option>
                                <option value="RESIDENTIAL">Residential</option>
                                <option value="SPORTS">Sports</option>
                                <option value="INFRASTRUCTURE">
                                  Infrastructure
                                </option>
                                <option value="OTHER">Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Description
                            </label>
                            <textarea
                              name={`customFacilities[${index}].description`}
                              rows="2"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Brief description of the facility"
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Media Section */}
                {activeSection === "media" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        College Logo
                      </label>
                      <div className="mt-1 flex items-center">
                        <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex justify-center items-center bg-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <button
                            type="button"
                            className="px-3 py-1 bg-white border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Upload Logo
                          </button>
                          <p className="mt-1 text-xs text-gray-500">
                            PNG, JPG, GIF up to 1MB
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        College Banner Image
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg">
                        <div className="space-y-1 text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-12 w-12 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                              <span>Upload banner image</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Image URL (External)
                      </label>
                      <input
                        type="url"
                        name="imageUrl"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="https://example.com/college-image.jpg"
                        onChange={handleInputChange}
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        If you don't upload an image, you can provide an external URL
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Gallery Images
                      </label>
                      <div className="mt-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                          <button
                            type="button"
                            className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Add Image
                          </button>
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        Add up to 10 gallery images
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Virtual Tour URL
                      </label>
                      <input
                        type="url"
                        name="virtualTourUrl"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="https://example.com/virtual-tour"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Video URL
                      </label>
                      <input
                        type="url"
                        name="videoUrl"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="https://youtube.com/watch?v=example"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                {/* Featured Settings Section */}
                {activeSection === "featured" && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id="isFeatured"
                          name="isFeatured"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          checked={formData.isFeatured}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="isFeatured" className="ml-2 block text-sm font-medium text-gray-700">
                          Feature this college
                        </label>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Featured colleges appear in special sections on the homepage and category pages.
                      </p>
                      
                      {formData.isFeatured && (
                        <div id="featured-options" className="pl-6 space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Featured Section
                            </label>
                            <select
                              name="featuredSection"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              onChange={handleInputChange}
                            >
                              <option value="">Select section</option>
                              <option value="TOP_COLLEGES">Top Colleges</option>
                              <option value="TRENDING">Trending Colleges</option>
                              <option value="RECOMMENDED">Recommended</option>
                              <option value="POPULAR">Popular Choices</option>
                              <option value="NEW_ADDITIONS">New Additions</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Featured Priority (1-10)
                            </label>
                            <input
                              type="number"
                              name="featuredPriority"
                              min="1"
                              max="10"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="1 = highest priority"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Featured Label
                            </label>
                            <input
                              type="text"
                              name="featuredLabel"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="e.g. 'Editor's Choice'"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id="isBanner"
                          name="isBanner"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          checked={formData.isBanner}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="isBanner" className="ml-2 block text-sm font-medium text-gray-700">
                          Show in homepage banner
                        </label>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Colleges marked for banner will appear in the homepage carousel.
                      </p>
                      
                      {formData.isBanner && (
                        <div id="banner-options" className="pl-6 space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Banner Title
                            </label>
                            <input
                              type="text"
                              name="bannerTitle"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Banner headline"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Banner Description
                            </label>
                            <textarea
                              name="bannerDescription"
                              rows="2"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Short description for banner"
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Banner Priority (1-5)
                            </label>
                            <input
                              type="number"
                              name="bannerPriority"
                              min="1"
                              max="5"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="1 = highest priority"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id="isSponsored"
                          name="isSponsored"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          checked={formData.isSponsored}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="isSponsored" className="ml-2 block text-sm font-medium text-gray-700">
                          Mark as sponsored
                        </label>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Sponsored colleges will be marked accordingly and may appear in special promotional areas.
                      </p>
                      
                      {formData.isSponsored && (
                        <div id="sponsored-options" className="pl-6 space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Sponsorship End Date
                            </label>
                            <input
                              type="date"
                              name="sponsorshipEndDate"
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* SEO & Meta Section */}
                {activeSection === "seo" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        name="metaTitle"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="SEO title for the college page"
                        onChange={handleInputChange}
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Recommended length: 50-60 characters
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Meta Description
                      </label>
                      <textarea
                        name="metaDescription"
                        rows="3"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Brief description for search engines"
                        onChange={handleInputChange}
                      ></textarea>
                      <p className="mt-1 text-xs text-gray-500">
                        Recommended length: 150-160 characters
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Keywords
                      </label>
                      <input
                        type="text"
                        name="keywords"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g. engineering, bhopal, best college"
                        onChange={handleInputChange}
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Comma separated keywords
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Slug (URL)
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          example.com/colleges/
                        </span>
                        <input
                          type="text"
                          name="slug"
                          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                          placeholder="college-name"
                          onChange={handleInputChange}
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        Use lowercase letters, numbers, and hyphens only
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Canonical URL
                      </label>
                      <input
                        type="url"
                        name="canonicalUrl"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="https://example.com/colleges/college-name"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-3">Social Media Preview</h5>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Social Title
                          </label>
                          <input
                            type="text"
                            name="socialTitle"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Title for social media sharing"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Social Description
                          </label>
                          <textarea
                            name="socialDescription"
                            rows="2"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Description for social media sharing"
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Social Image
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg">
                            <div className="space-y-1 text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="social-image-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  <span>Upload image</span>
                                  <input
                                    id="social-image-upload"
                                    name="social-image-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                              </div>
                              <p className="text-xs text-gray-500">Recommended size: 1200x630 pixels</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Actions */}
                <div className="mt-8 flex justify-end space-x-3">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Publish College
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminAddCollege;