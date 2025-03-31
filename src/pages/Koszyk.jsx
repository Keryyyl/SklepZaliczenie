import Header from "./components/Header";
import { useCart } from "../context/CartContext"; 
import { useState, useEffect } from "react";
import MailForm from "./components/MailForm";

function Koszyk() {
  const { cart, removeFromCart } = useCart(); 
  const [wholePrice, setWholePrice] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => {
      return acc + item.price + item.additionalPrice;
    }, 0);
    setWholePrice(totalPrice);
  }, [cart]); 

  return (
    <>
      <Header />
      <div className="w-full mt-30">
        <p className="text-center text-2xl">Łączna Cena: {wholePrice} zł</p>
      </div>
      <div className="overflow-x-auto whitespace-nowrap mt-10 mb-0 bg-base-100 px-6 py-4">
        <div className="flex space-x-6">
          {cart.length === 0 ? (
            <p className="text-center text-lg">Brak dodanych kursów.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md w-80 h-50 flex-none" 
              >
                <h2 className="text-xl font-semibold">{item.id}</h2>
                <p>Opcja: {item.selectedOption}</p>
                <p>Cena: {item.price} zł</p>
                {item.isAdditional && (
                  <p>+ Dodatkowe pliki: {item.additionalPrice} zł</p>
                )}
                <button
                  className="btn btn-soft btn-accent text-accent hover:text-black dark:hover:text-white btn-md w-full text-xl flex items-center justify-center mt-5 shadow-2xl dark:shadow-black gap-2 transition duration-2500"
                  onClick={() => removeFromCart(index)} 
                >
                  Usuń
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <MailForm />
    </>
  );
}

export default Koszyk;
