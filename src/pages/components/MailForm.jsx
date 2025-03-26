import React, { useState } from 'react';

function KursCard(props) {
    const [formData, setFormData] = useState({
        name: '',
        forename: '',
        address: '',
        email: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
            <div className="card w-full max-w-xl bg-base-100 shadow-2xl rounded-lg p-6">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center text-accent mb-6">Informacje Do Sprzedaży</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Imie</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Wpisz Swoje Imie"
                                    className="input input-accent w-full text-accent"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Nazwisko</span>
                                </label>
                                <input
                                    type="text"
                                    name="forename"
                                    value={formData.forename}
                                    onChange={handleChange}
                                    placeholder="Wpisz Swoje Nazwisko"
                                    className="input input-accent w-full text-accent"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Adres</span>
                            </label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Wpisz Swój Adres"
                                className="textarea textarea-accent h-24 w-full text-accent"
                                required
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Wpisz Swój Email"
                                className="input input-accent w-full text-accent"
                                required
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Telefon</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Wpisz Swój Numer Telefonu"
                                className="input input-accent w-full text-accent"
                                required
                            />
                        </div>

                        <div className="card-actions justify-end mt-6">
                            <button type="submit" className="btn btn-accent btn-lg w-full flex items-center justify-center gap-2 text-white dark:text-black">
                                Płatność
                                <span className="material-icons-accent"> check </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default KursCard;
