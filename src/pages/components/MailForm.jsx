import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useCart } from "../../context/CartContext"; // Import Cart Context

function MailForm() {
    const { cart } = useCart(); // Get cart items
    const [formData, setFormData] = useState({
        name: "",
        forename: "",
        address: "",
        email: "",
        phone: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format cart items into a readable string
        const cartItems = cart.map(item => 
            `${item.id} - ${item.selectedOption} - ${item.price} zł${item.isAdditional ? ` (+${item.additionalPrice} zł)` : ""}`
        ).join("\n");

        const emailParams = {
            name: formData.name,
            forename: formData.forename,
            address: formData.address,
            email: formData.email,
            phone: formData.phone,
            cartItems: cartItems || "Brak wybranych kursów.", // Fallback if empty
        };

        emailjs.send(
            "service_a6aytde", // Replace with your EmailJS Service ID
            "template_m1bedtc", // Replace with your EmailJS Template ID
            emailParams,
            "VAecmVeHz75tuZhet" // Replace with your EmailJS Public Key
        )
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email został wysłany!");
        })
        .catch((err) => {
            console.error("FAILED...", err);
            alert("Wystąpił błąd podczas wysyłania emaila.");
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="bg-slate-400 dark:bg-base-100 flex items-center justify-center transition duration-2500 mt-0 p-6">
            <div className="card w-full max-w-xl bg-slate-200 dark:bg-base-100 shadow-2xl dark:shadow-xl shadow-gray-700 dark:shadow-gray-950 rounded-lg p-6 transition duration-2500">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center text-accent mb-6">Informacje Do Sprzedaży</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-accent font-semibold">Imię</span>
                                </label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input input-accent w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-accent font-semibold">Nazwisko</span>
                                </label>
                                <input type="text" name="forename" value={formData.forename} onChange={handleChange} required className="input input-accent w-full" />
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-accent font-semibold">Adres</span>
                            </label>
                            <textarea name="address" value={formData.address} onChange={handleChange} required className="textarea textarea-accent w-full h-24" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-accent font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input input-accent w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-accent font-semibold">Telefon</span>
                            </label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input input-accent w-full" />
                        </div>

                        <div className="card-actions justify-end mt-6">
                            <button type="submit" className="btn btn-accent w-full">Wyślij Email <span className="material-icons-accent"> check </span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MailForm;
