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
      <div className="w-full mt-30 text-center">
        <p className="text-2xl font-bold text-accent">Łączna Cena: {wholePrice} zł</p>
      </div>
      
      <div className="flex justify-center items-start gap-10 px-6 py-4 mt-10 min-h-[80vh]">
        <div className="flex justify-center items-start w-1/3 self-start">
          <MailForm />
        </div>

        <div className="flex flex-col space-y-6 mt-5 overflow-y-auto max-h-[620px] w-80 self-start scrollhid rounded-2xl">
          {cart.length === 0 ? (
            <p className="text-3xl text-center text-accent">Brak wybranych kursów.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-xs">
                <h2 className="text-xl font-semibold text-accent">{item.id}</h2>
                <p className="text-accent">Opcja: {item.selectedOption}</p>
                <p className="text-accent">Cena: {item.price} zł</p>
                {item.isAdditional && <p className="text-accent">+ Dodatkowe pliki: {item.additionalPrice} zł</p>}
              <button onClick={() => removeFromCart(index)} className="btn btn-accent w-full">Usuń <span className="material-icons-accent"> close </span></button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Koszyk;
