import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';

// Reusable DesignerCard component
const DesignerCard = ({ name, image, description }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-md mb-4"
            onError={(e) => (e.target.src = '/fallback-image.png')} // Fallback image if the provided one fails
        />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button
            aria-label={`View ${name}'s collection`}
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
            View Collection
        </button>
    </div>
);

const BoutiqueFashionPlatform = () => {
    // Designers array moved to a separate function for maintainability
    const designers = [
        {
            name: 'Elisa Bloom',
            image: '/images/elisa-bloom.jpg', // Ensure this image is in the public/images folder
            description: 'Sustainable luxury for the modern woman',
        },
        {
            name: 'Marco Vega',
            image: '/images/marco-vega.jpg', // Update the image source
            description: 'Avant-garde menswear with a twist',
        },
        {
            name: 'Yuki Tanaka',
            image: '/images/yuki-tanaka.jpg',
            description: 'Minimalist Japanese-inspired designs',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* SEO Enhancements */}
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content="Discover unique fashion designers offering sustainable, avant-garde, and minimalist designs."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BoutiqueVogue - Discover Unique Designers</title>
            </head>

            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">BoutiqueVogue</h1>
                    <div className="flex items-center space-x-4">
                        <button
                            aria-label="Search"
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <Search size={24} />
                        </button>
                        <button
                            aria-label="Shopping Bag"
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <ShoppingBag size={24} />
                        </button>
                        <button
                            aria-label="User Profile"
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <User size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-6">Discover Unique Designers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {designers.map((designer, index) => (
                        <DesignerCard key={index} {...designer} />
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <p className="text-center">&copy; 2024 BoutiqueVogue. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default BoutiqueFashionPlatform;