import { useState } from "react";
import { useCart } from "../../context/CartContext";

function KursCard({ title, description, prices }) {
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState("Temporary");
  const [isAdditional, setIsAdditional] = useState(false);

  const handleAdd = () => {
    const additionalPrice = isAdditional ? prices.Additional : 0; 
    const item = {
      id: title, // Use the course ID from props (assuming `title` isn't the ID here, so you might want to use the correct field)
      selectedOption,
      price: prices[selectedOption],
      additionalPrice: isAdditional ? prices.Additional : 0,
      isAdditional,
      CoursePrice: prices[selectedOption] + additionalPrice
    };
    addToCart(item); // Add item to cart
  };

  return (
    <div className="card dark:bg-gray-800 bg-slate-300 shadow-xl shadow-gray-700 dark:shadow-gray-900 rounded-lg text-accent w-100 transition duration-2500 p-4">
      <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="text-xl">{description}</p>
        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            className="checkbox checkbox-accent" 
            checked={isAdditional} 
            onChange={(e) => setIsAdditional(e.target.checked)} 
          />
          <span className="text-lg">Dodatkowe pliki - {prices.Additional} zł</span>
        </div>
        <div className="card-actions flex items-center gap-4 w-full mt-4">
          <div className="flex w-full items-center gap-4">
            <select
              className="select select-bordered text-lg bg-slate-400 dark:bg-gray-700 flex-1 transition duration-2500"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Temporary">Temporary - {prices.Temporary} zł</option>
              <option value="Forever">Forever - {prices.Forever} zł</option>
              <option value="Download">Download - {prices.Download} zł</option>
            </select>
            <button 
              className="btn btn-accent transition duration-2500 flex-1 shadow-2xl dark:shadow-black gap-2 text-white dark:text-black"
              onClick={handleAdd}
            >
              Dodaj 
              <span className="material-icons-accent"> check </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KursCard;
