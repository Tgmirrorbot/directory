import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebAppCard from '../components/WebAppCard';
import webApps from '../data/webApps.json';

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
      <main className="flex flex-wrap justify-center p-10 min-h-[50vh]">
        {filteredWebApps.length > 0 ? (
          filteredWebApps.map((webApp, index) => (
            <WebAppCard key={index} {...webApp} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 text-center w-full">
            <h2 className="text-4xl text-gray-700 dark:text-white">No Results Found</h2>
            <p className="text-xl text-gray-500 dark:text-gray-300">We couldn&apos;t find any web apps matching your search.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}