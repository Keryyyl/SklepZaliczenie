import { useEffect, useState } from "react";
import Header from "./components/Header";
import KursCard from "./components/KursCard";
import { useCart } from "../context/CartContext"; 

function MainPage() {
  const { cart, addToCart } = useCart(); 

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((course, index) => ({
          id: index, 
          title: course.name,
          description: course.desc,
          prices: {
            Temporary: course.cost1,
            Forever: course.cost2,
            Download: course.cost3,
            Additional: course.cost4,
          },
          link1: course.link1,
          link2: course.link2,
        }));
        setCourses(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.price || 0) + (item.additionalPrice || 0),
    0
  );

  const handleAddCourse = (item) => {
    addToCart(item); 
  };

  return (
    <>
      <Header />
    <div className="w-[80%] mx-auto">
      <div className="mt-25 text-center bg-slate-400 dark:bg-base-100 transition duration-2500">
      <p className="text-accent font-extrabold text-2xl">{totalPrice !== 0 ? `Łączna Cena: ${totalPrice} zł` : "Nie wybrano jeszcze żadnych kursów"}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-6 p-4 mt-20 mb-20 bg-slate-400 dark:bg-base-100 w-full transition duration-2500 place-items-center">
      {courses.map((course, index) => (
  <KursCard
    key={index} 
    title={course.title}
    description={course.description}
    prices={course.prices}
    onAdd={handleAddCourse}
    link1={course.link1}
    link2={course.link2}

  />
))}
</div>
    </div>
    </>
  );
}

export default MainPage;
