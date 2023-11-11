import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebAppCard from '../components/WebAppCard';
import webApps from '../data/webApps.json';

type WebApp = {
  name: string;
  description: string;
  url: string;
  isPopular?: boolean;
};

export default function Home() {
  const [search, setSearch] = useState('');
  const [filterPopular, setFilterPopular] = useState(false);

  const filteredWebApps = (webApps as WebApp[]).filter((webApp) =>
    webApp.name.toLowerCase().includes(search.toLowerCase()) && (!filterPopular || webApp.isPopular)
  );

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900">
      <Header search={search} setSearch={setSearch} filterPopular={filterPopular} setFilterPopular={setFilterPopular} />
      <main className="p-10 flex flex-wrap justify-around">
        {filteredWebApps.map((webApp, index) => (
          <WebAppCard key={index} {...webApp} isPopular={webApp.isPopular || false} />
        ))}
      </main>
      <Footer />
    </div>
  );
}