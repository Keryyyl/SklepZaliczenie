import Header from "./components/Header"
import KursCard from "./components/KursCard"
import MailForm from "./components/MailForm"
import { useCart } from "../context/CartContext"; // Import the cart context

function Koszyk() {
  const { cart } = useCart(); // Get the cart list from context

    return (
      <>
      <Header/>
      <div className="flex flex-wrap justify-center gap-6 p-6 mt-20 bg-base-100">
        {cart.length === 0 ? (
          <p className="text-center text-lg">Brak dodanych kursów.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>Opcja: {item.selectedOption}</p>
              <p>Cena: {item.price} zł</p>
              {item.isAdditional && <p>+ Dodatkowe pliki: 10 zł</p>}
            </div>
          ))
        )}
      </div>
    </>
  );
}
  
  export default Koszyk
  