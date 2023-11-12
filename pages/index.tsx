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
    <div className="flex flex-col justify-between">
      <Header search={search} setSearch={setSearch} popular={popular} setPopular={setPopular} />
      <main className="p-10 flex flex-wrap justify-center min-h-[50vh]">
        {filteredWebApps.length > 0 ? (
          filteredWebApps.map((webApp, index) => (
            <WebAppCard key={index} {...webApp} />
          ))
        ) : (
          <div className="w-full flex justify-center items-center">
            <h2 className="text-2xl text-gray-700 dark:text-white">404 - Not Found</h2>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}