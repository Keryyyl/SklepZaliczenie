import { useEffect, useState } from "react";
import Header from "./components/Header";
import KursCard from "./components/KursCard";

function MainPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:8080/items")
      .then((response) => response.json())
      .then((data) => {
        // Transform data to match KursCard's expected format
        const formattedData = data.map((course) => ({
          id: course.id,
          title: course.name,
          description: course.desc,
          prices: {
            Temporary: course.cost1,
            Forever: course.cost2,
            Download: course.cost3,
            Additional: course.cost4,
          },
        }));
        setCourses(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {courses.map((course) => (
          <KursCard
            key={course.id}
            title={course.title}
            description={course.description}
            prices={course.prices}
            onAdd={(item) => console.log("Added:", item)}
          />
        ))}
      </div>
    </>
  );
}

export default MainPage;

