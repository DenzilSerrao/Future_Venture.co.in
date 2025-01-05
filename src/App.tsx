import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Welcome />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;