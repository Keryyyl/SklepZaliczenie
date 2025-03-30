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
      <div className="flex flex-wrap justify-center  gap-6 p-6 mt-20 mb-20 bg-slate-400 dark:bg-base-100 w-full transition duration-2500">
  {courses.map((course) => (
    <div key={course.id} className="flex w-full sm:w-[90%] md:w-[45%] lg:w-[30%]">
      <KursCard
        title={course.title}
        description={course.description}
        prices={course.prices}
        onAdd={(item) => console.log("Added:", item)}
      />
    </div>
  ))}
</div>
    </>
  );
}

export default MainPage;

