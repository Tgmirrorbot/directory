import Header from '../components/Header';
import Footer from '../components/Footer';
import WebAppCard from '../components/WebAppCard';
import webApps from '../data/webApps.json';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="p-10">
        {webApps.map((webApp, index) => (
          <WebAppCard key={index} {...webApp} />
        ))}
      </main>
      <Footer />
    </div>
  );
}