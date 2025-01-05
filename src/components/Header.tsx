import { Search, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
          <img src="/logo.jpg" alt="FutureVentures" className="h-10 w-10 rounded-full" />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">FutureVentures</h1>
              <p className="text-sm text-gray-500">Everyone's dreams come true</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Portfolio</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </nav> */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}