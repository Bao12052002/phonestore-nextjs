'use client';

import { useState } from 'react';

// SVG Icons for better quality and performance
const AppleLogo = () => (
  <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
    <path d="m13.0729 17.6828a3.61 3.61 0 0 0 -1.7248 3.0187 3.4132 3.4132 0 0 0 2.1379 3.12c.0461.0187.0922.0374.1383.0561.023.0093.0461.0187.0691.028-1.3211 4.2254-4.2158 8.4508-8.1593 8.4508-1.6336 0-3.3595-1.0187-4.2345-1.0187-1.0187 0-2.8953 1.0187-4.1783 1.0187-3.486 0-6.196-4.2254-7.4099-8.4508a11.464 11.464 0 0 1 3.9912-11.2355c1.5424-1.346 3.2212-2.1472 4.9-2.2995.808-.0748 1.616-.1122 2.424-.1122a16.223 16.223 0 0 1 1.6336.0935c1.4489.1308 2.8766.6916 3.9538 1.6433a.473.473 0 0 1 .1155.6536 4.636 4.636 0 0 1 -3.1118 4.5422 4.316 4.316 0 0 1 -3.884-2.2245c-.023-.0467-.0461-.0935-.0691-.14-.4186-1.0374-1.1355-2.0748-2.2244-2.0748s-1.5424 1.0187-2.0561 1.0187c-.5327 0-1.2046-.9999-2.161-1.0187-1.1542-.0187-2.2431 1.0187-2.8579 1.0187-.6148 0-1.2968-.9813-2.2057-1.0187-1.042-.0374-2.056.9813-2.6708 1.0187-.6334 0-1.388-1.0187-2.424-1.0187-1.3411 0-2.3879 1.0748-3.1118 2.1472a11.9472 11.9472 0 0 0 -3.9912 11.2355c.3458 1.271 1.1168 2.4767 1.8336 3.3645 1.4489 1.7757 3.0276 3.5514 5.2287 3.5514 1.0842 0 2.2244-1.0187 3.3221-1.0187.9626 0 2.3318 1.0187 3.3221 1.0187 2.056 0 3.8223-1.7757 5.2748-3.5514 1.042-1.2898 1.8336-2.916 2.1379-4.2255a3.483 3.483 0 0 0 -2.1379-3.12z" transform="translate(8.9486)"></path>
  </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44">
        <path d="M15.27 28.24a6.45 6.45 0 1 1-1.06-1.06l3.24 3.24c.29.29.77.29 1.06 0s.29-.77 0-1.06l-3.24-3.24zM6.45 25.9A4.45 4.45 0 1 0 2 21.45a4.45 4.45 0 0 0 4.45 4.45z"></path>
    </svg>
);

const BagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44">
        <path d="M4.5 16.5a1.5 1.5 0 0 0 1.5-1.5v-3a4.5 4.5 0 0 1 9 0v3a1.5 1.5 0 0 0 3 0v-3a7.5 7.5 0 0 0-15 0v3a1.5 1.5 0 0 0 1.5 1.5zM17 18.5H1a1 1 0 0 0-1 1v11a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-11a1 1 0 0 0-1-1zm-1 12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9h14v9z"></path>
    </svg>
);


export default function AppleHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'];

  return (
    <header className="bg-black/80 backdrop-blur-sm text-gray-300 sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm h-11">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center w-full">
            <a href="#" className="hover:text-white"><AppleLogo /></a>
            <div className="flex justify-center flex-grow">
              {navItems.map(item => (
                <a key={item} href="#" className="px-3 hover:text-white transition-colors duration-200">{item}</a>
              ))}
            </div>
            <a href="#" className="px-3 hover:text-white"><SearchIcon /></a>
            <a href="#" className="pl-3 hover:text-white"><BagIcon /></a>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="z-20">
              <span className={`block w-5 h-px bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block w-5 h-px bg-white mt-1.5 transition-transform duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-0.5' : ''}`}></span>
            </button>
            <a href="#" className="hover:text-white"><AppleLogo /></a>
            <a href="#" className="pl-3 hover:text-white"><BagIcon /></a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-0 left-0 w-full bg-black transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`} style={{paddingTop: '44px'}}>
        <div className="container mx-auto px-8 py-4">
            <input type="text" placeholder="Search apple.com" className="w-full bg-gray-800 rounded-md p-2 mb-4 text-white placeholder-gray-500" />
          {navItems.map(item => (
            <a key={item} href="#" className="block py-3 text-2xl font-semibold border-b border-gray-800">{item}</a>
          ))}
        </div>
      </div>
    </header>
  );
}
