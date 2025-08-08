import React from 'react';

// --- Import images needed for THIS component ---
import ammaImg from './assets/amma.png';
import ammayiImg from './assets/ammayi.png';
import ammavanImg from './assets/ammavan.png';
import nriImg from './assets/nri.png';
import ammomaImg from './assets/ammoma.jpg';
import njanNintePrayathilImg from './assets/njnan ninte prayathil.jpg';
import healthConsciousImg from './assets/health concious.jpeg';
import achaImg from './assets/dad.png';
import kunjaniyanImg from './assets/aniyan.png';
import chechiImg from './assets/chechi.jpg';

// --- Components used only by the Landing Page ---
const CharacterAvatar = ({ characterName }) => {
    const avatarStyles = "w-16 h-16 rounded-full shadow-lg mr-4 flex-shrink-0 object-cover bg-gray-300";
    const characterImages = {
        "AI Amma": ammaImg, "Inquisitive Ammayi": ammayiImg, "American Ammavan": ammavanImg,
        "NRI Cousin": nriImg, "Adoring Ammumma": ammomaImg, "Njan-Ninte-Prayathil Ammavan": njanNintePrayathilImg,
        "Health-Conscious Appooppa": healthConsciousImg, "Chill Acha": achaImg, "Kunjaniyan": kunjaniyanImg,
        "Loving Chechi": chechiImg,
    };
    return <img src={characterImages[characterName]} alt={characterName} className={avatarStyles} />;
};

const CharacterItem = ({ name, description }) => (
    <div className="flex items-center bg-black bg-opacity-20 p-3 rounded-xl mb-4 shadow-md border border-white/10">
        <CharacterAvatar characterName={name} />
        <div className="flex-grow">
            <h3 className="font-bold text-white text-2xl">{name}</h3>
            <p className="text-white/80 text-lg">{description}</p>
        </div>
    </div>
);

// --- The Landing Page Component ---
const LandingPage = ({ onNavigate }) => {
    const characters = [
        { name: "AI Amma", description: "Tracks your sleep, cleanliness, and eating habits." },
        { name: "Inquisitive Ammayi", description: "Will find out your secrets just by zooming into your photo." },
        { name: "American Ammavan", description: "Starts every sentence with 'In America...'" },
        { name: "NRI Cousin", description: "Visits once every five years and acts like a tourist." },
        { name: "Adoring Ammumma", description: "Only concern: have you eaten? Dispenses health remedies." },
        { name: "Njan-Ninte-Prayathil Ammavan", description: "Believes you’re spoiled because you have WiFi." },
        { name: "Health-Conscious Appooppa", description: "Sends daily step goals and WhatsApp health tips." },
        { name: "Chill Acha", description: "Pretends not to notice... until Amma complains." },
        { name: "Kunjaniyan", description: "Leaks your secrets for snacks. Steals your charger." },
        { name: "Loving Chechi", description: "Your best friend and second Amma, all in one." },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto bg-[#37474F] bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20">
            <header className="p-5 text-center" style={{ backgroundColor: '#FFF8E1' }}>
                <h1 className="font-bold text-3xl md:text-4xl tracking-wide drop-shadow-lg px-2" style={{ color: '#263238' }}>AIKudumbam – Your Digital Dose of Family Drama</h1>
            </header>
            <main className="p-6">
                <h2 className="text-6xl text-white mb-6 text-center drop-shadow-sm">The Fam</h2>
                <div className="max-h-[50vh] overflow-y-auto pr-2">
                    {characters.map(char => <CharacterItem key={char.name} {...char} />)}
                </div>
                <div className="text-center mt-8">
                    <button onClick={onNavigate} className="bg-[#FF1493] hover:bg-pink-600 text-white font-bold text-2xl py-4 px-10 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-pink-300/50 animate-pulse-slow">
                        JUMP TO CHIT CHAT
                    </button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
