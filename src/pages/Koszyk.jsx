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
      <div className="w-full mt-10 text-center">
        <p className="text-2xl text-accent">Łączna Cena: {wholePrice} zł</p>
      </div>
      
      <div className="flex justify-center items-start gap-10 px-6 py-4 mt-10 min-h-[80vh]">
        {/* Adjusted to align MailForm to the top */}
        <div className="flex justify-center items-start w-1/3 self-start">
          <MailForm />
        </div>

        {/* Right Side: Cart Items aligned to the top of MailForm */}
        <div className="flex flex-col space-y-6 mt-5 overflow-y-auto max-h-[620px] w-80 self-start scrollhid rounded-2xl">
          {cart.length === 0 ? (
            <p className="text-3xl text-center text-accent">Brak wybranych kursów.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md w-full" 
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
    </>
  );
}

export default Koszyk;
