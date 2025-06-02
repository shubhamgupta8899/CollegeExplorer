import { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    mobile: "",
    email: "",
    course: ""
  });

  const courses = ["B.Tech", "BBA", "MBA", "BCA", "MCA", "BA", "MA"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              required
              pattern="[0-9]{10}"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="" disabled>Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
