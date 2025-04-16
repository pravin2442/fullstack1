// App.tsx
import React, { useState } from "react";

interface Student {
  id: number;
  name: string;
  status: "Present" | "Absent" | null;
}

const initialStudents: Student[] = [
  { id: 1, name: "Ram", status: null },
  { id: 2, name: "Raj", status: null },
  { id: 3, name: "Mohan", status: null },
  { id: 4, name: "Sita", status: null },
  { id: 5, name: "Gita", status: null },
  { id: 6, name: "Kiran", status: null },
  { id: 7, name: "Ravi", status: null },
  { id: 8, name: "Neha", status: null },
  { id: 9, name: "Shyam", status: null },
  { id: 10, name: "Amit", status: null },
  { id: 11, name: "Suman", status: null },
  { id: 12, name: "Anjali", status: null },
  { id: 13, name: "Vikram", status: null },
  { id: 14, name: "Priya", status: null },
  { id: 15, name: "Kavita", status: null },
  { id: 16, name: "Deepak", status: null },
  { id: 17, name: "Sunil", status: null },
  { id: 18, name: "Pooja", status: null },
  { id: 19, name: "Rajesh", status: null },
  { id: 20, name: "Ayesha", status: null },
];

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [filter, setFilter] = useState<"All" | "Present" | "Absent">("All");

  const markAttendance = (id: number, status: "Present" | "Absent") => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const filteredStudents = students.filter((s) =>
    filter === "All" ? true : s.status === filter
  );

  const presentCount = students.filter((s) => s.status === "Present").length;
  const totalMarked = students.filter((s) => s.status !== null).length;
  const attendancePercentage = totalMarked
    ? Math.round((presentCount / totalMarked) * 100)
    : 0;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Attendance Tracker</h1>

      <div className="mb-4 space-x-2">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Present")}>Present</button>
        <button onClick={() => setFilter("Absent")}>Absent</button>
      </div>

      <ul className="space-y-2">
        {filteredStudents.map((student) => (
          <li
            key={student.id}
            className="border rounded p-2 flex justify-between items-center"
          >
            <span>{student.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => markAttendance(student.id, "Present")}
                className="text-green-600"
              >
                Present
              </button>
              <button
                onClick={() => markAttendance(student.id, "Absent")}
                className="text-red-600"
              >
                Absent
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <p className="text-lg font-semibold">
          Attendance Percentage: {attendancePercentage}%
        </p>
      </div>
    </div>
  );
};

export default App;
