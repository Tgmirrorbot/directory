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
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900">
      <Header search={search} setSearch={setSearch} popular={popular} setPopular={setPopular} />
      <main className="p-10 flex flex-wrap justify-center">
        {filteredWebApps.map((webApp, index) => (
          <WebAppCard key={index} {...webApp} />
        ))}
      </main>
      <Footer />
    </div>
  );
}