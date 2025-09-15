import React, { useState } from "react";
import AdminSideBar from "./AdminSideBar";

const AdminAddCollege = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    website: "",
    imageUrl: "",
    topPackage: "",
    category: "TOP_COLLEGE",
    ranking: "",
    description: "",
    established: "",
    homeTop: false, // ✅ include homeTop
  });

  const [loading, setLoading] = useState(false);

  // Handle input change for all fields
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) throw new Error("Admin not logged in");

      const response = await fetch("http://localhost:8080/api/admin/colleges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      alert("College added successfully!");
      console.log("Saved:", data);

      // Reset form after success
      setFormData({
        name: "",
        location: "",
        website: "",
        imageUrl: "",
        topPackage: "",
        category: "TOP_COLLEGE",
        ranking: "",
        description: "",
        established: "",
        homeTop: false,
      });
    } catch (err) {
      console.error("Error adding college:", err);
      alert(`Failed to add college: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New College</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <InputField
            label="College Name *"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <InputField
            label="Location *"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <InputField
            label="Website *"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            type="url"
            placeholder="https://collegewebsite.com"
          />
          <InputField
            label="College Image URL *"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            type="url"
            placeholder="https://example.com/image.jpg"
          />
          <InputField
            label="Top Package (LPA) *"
            name="topPackage"
            value={formData.topPackage}
            onChange={handleInputChange}
            type="number"
            placeholder="e.g. 50"
          />
          <InputField
            label="Ranking"
            name="ranking"
            value={formData.ranking}
            onChange={handleInputChange}
            type="number"
            placeholder="e.g. 5"
          />
          <InputField
            label="Established Year"
            name="established"
            value={formData.established}
            onChange={handleInputChange}
            type="number"
            placeholder="e.g. 1970"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
              placeholder="Short description of the college"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="TOP_COLLEGE">Top College</option>
              <option value="TOP_ACADEMICS">Top Academics</option>
              <option value="TOP_PLACEMENTS">Top Placements</option>
            </select>
          </div>

          {/* Home Top College */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="homeTop"
              checked={formData.homeTop}
              onChange={handleInputChange}
              id="homeTop"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="homeTop" className="text-sm text-gray-700">
              Show on Home Page
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  name: "",
                  location: "",
                  website: "",
                  imageUrl: "",
                  topPackage: "",
                  category: "TOP_COLLEGE",
                  ranking: "",
                  description: "",
                  established: "",
                  homeTop: false,
                })
              }
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded-lg text-white ${
                loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Saving..." : "Save College"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Reusable input field component
const InputField = ({ label, name, value, onChange, type = "text", placeholder = "" }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

export default AdminAddCollege;
