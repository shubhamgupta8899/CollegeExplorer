import React, { useEffect, useState } from "react";

const AdminManageHomeTopColleges = () => {
  const [colleges, setColleges] = useState([]);

  // Fetch all colleges
  useEffect(() => {
    fetch("http://localhost:8080/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.error(err));
  }, []);

  // Toggle homeTopCollege flag
  const toggleHomeTop = async (id, currentValue) => {
    try {
      const token = localStorage.getItem("adminToken"); // ✅ Now always available
      if (!token) {
        console.warn("⚠️ No JWT token found in localStorage. Please login as Admin first.");
        return;
      }

      const res = await fetch(
        `http://localhost:8080/api/colleges/${id}/markAsHomeTop?homeTop=${!currentValue}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ Use token here
          },
        }
      );

      if (!res.ok) throw new Error("Failed to update");

      const updatedCollege = await res.json();

      setColleges((prev) =>
        prev.map((c) => (c.id === updatedCollege.id ? updatedCollege : c))
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4">Manage Home Top Colleges</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Location</th>
            <th className="px-4 py-2 border">Home Top College</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college) => (
            <tr key={college.id} className="text-center">
              <td className="border px-4 py-2">{college.name}</td>
              <td className="border px-4 py-2">{college.location}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => toggleHomeTop(college.id, college.homeTop)}
                  className={`px-3 py-1 rounded-lg text-white ${
                    college.homeTop ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {college.homeTop ? "Remove" : "Add"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageHomeTopColleges;
