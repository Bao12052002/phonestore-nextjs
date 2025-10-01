import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  theme?: 'dark' | 'light';
  productName: string;
}

export default function HeroSection({ title, subtitle, imageUrl, theme = 'dark', productName }: HeroSectionProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const linkColor = theme === 'dark' ? 'text-blue-500 hover:underline' : 'text-blue-600 hover:underline';

  return (
    <section className={`h-screen flex flex-col items-center pt-20 ${theme === 'dark' ? 'bg-black' : 'bg-neutral-50'}`}>
      <div className="text-center">
        <h2 className={`text-5xl font-bold ${textColor}`}>{productName}</h2>
        <h3 className={`text-2xl mt-2 ${textColor}`}>{title}</h3>
        <p className={`mt-4 ${textColor}`}>{subtitle}</p>
        <div className="mt-4 space-x-4">
          <a href="#" className={linkColor + ' bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors'} >Learn more &gt;</a>
          <a href="#" className={linkColor}>Buy &gt;</a>
        </div>
      </div>
      <div className="flex-grow w-full mt-8">
        <img src={imageUrl} alt={productName} className="w-full h-full object-contain object-bottom" />
      </div>
    </section>
  );
}
