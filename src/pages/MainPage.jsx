import { useEffect, useState } from "react";
import Header from "./components/Header";
import KursCard from "./components/KursCard";
import { useCart } from "../context/CartContext"; // Import useCart

function MainPage() {
  const { cart, addToCart } = useCart(); // Get cart and addToCart function

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((response) => response.json())
      .then((data) => {
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

  // Calculate total price from the cart
  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.price || 0) + (item.additionalPrice || 0),
    0
  );

  const handleAddCourse = (item) => {
    addToCart(item); // Add item to global cart
  };

  return (
    <>
      <Header />
      <div className="mt-25 text-center">
      <p className="text-accent font-extrabold text-2xl">{totalPrice !== 0 ? `Łączna Cena: ${totalPrice} zł` : "Nie wybrano jeszcze żadnych kursów"}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6 mt-20 mb-20 bg-slate-400 dark:bg-base-100 w-full transition duration-2500">
        {courses.map((course) => (
          <div key={course.id} className="flex w-full sm:w-[90%] md:w-[45%] lg:w-[30%]">
            <KursCard
              title={course.title}
              description={course.description}
              prices={course.prices}
              onAdd={handleAddCourse}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPage;
