import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebAppCard from '../components/WebAppCard';
import webApps from '../data/webApps.json';
import Image from 'next/image';

type WebApp = {
  name: string;
  description: string;
  url: string;
  isPopular: boolean;
};

export default function Home() {
  const [search, setSearch] = useState('');
  const [popular, setPopular] = useState(false);

  const filteredWebApps = (webApps as WebApp[]).filter((webApp) =>
    webApp.name.toLowerCase().includes(search.toLowerCase()) && (!popular || webApp.isPopular)
  );

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header search={search} setSearch={setSearch} popular={popular} setPopular={setPopular} />
      <main className="p-10 flex flex-wrap justify-center min-h-[50vh]">
        {filteredWebApps.length > 0 ? (
          filteredWebApps.map((webApp, index) => (
            <WebAppCard key={index} {...webApp} />
          ))
        ) : (
          <div className="w-full flex flex-col justify-center items-center text-center space-y-4">
            <h2 className="text-4xl text-gray-700 dark:text-white">404</h2>
            <p className="text-xl text-gray-500 dark:text-gray-300">Oops! We couldn&apos;t find what you were looking for.</p>
            <Image src="https://i.imgur.com/qIufhof.png" alt="Not Found" width={500} height={500} />
            <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">Go Home</button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}