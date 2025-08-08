import React, { useState } from 'react';
import LandingPage from './landingpage'; // Corrected: Changed 'LandingPage' to 'landingpage'
import WhatsAppPage from './WhatsAppPage'; // Import the new WhatsAppPage

// This is the background component, kept here for simplicity
const PaintSplatterBackground = () => (
    <div className="absolute inset-0 z-0 bg-gray-900 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" opacity="0.8">
            <g className="animate-spin-very-slow"><path d="M 50 50 C 10 10, 90 10, 50 50 L 150 150 C 190 190, 10 190, 50 50 Z" fill="#FFD700" transform="translate(100 50) rotate(45)" /><path d="M 100 100 Q 0 150, 100 200 T 300 100" stroke="#FF1493" strokeWidth="10" fill="none" /><path d="M 250 250 C 200 300, 350 350, 300 200 S 400 100, 250 250" fill="#00FFFF" /><path d="M 50 50 C 200 200, 300 0, 450 250" stroke="black" strokeWidth="3" fill="none" /><path d="M 400 50 S 200 150, 50 400" stroke="black" strokeWidth="2" fill="none" /></g>
        </svg>
    </div>
);


export default function App() {
    // This state determines which page to show: 'landing' or 'whatsapp'
    const [currentPage, setCurrentPage] = useState('landing');

    // Function to switch to the WhatsApp page
    const navigateToChat = () => setCurrentPage('whatsapp');

    // Function to switch back to the Landing page
    const navigateToLanding = () => setCurrentPage('landing');

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap'); 
                body { font-family: 'Gaegu', cursive; } 
                @keyframes pulse-slow {0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); }} 
                @keyframes spin-very-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } 
                .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; } 
                .animate-spin-very-slow { animation: spin-very-slow 120s linear infinite; }
            `}</style>
            
            <PaintSplatterBackground />
            
            <div className="relative z-10 w-full">
                {/* Conditional rendering based on the state */}
                {currentPage === 'landing' ? (
                    <LandingPage onNavigate={navigateToChat} />
                ) : (
                    <WhatsAppPage onNavigateBack={navigateToLanding} />
                )}
            </div>
        </div>
    );
}
