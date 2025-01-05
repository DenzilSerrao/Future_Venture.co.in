import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@futureventures.com">contact@futureventures.com</a>
              </li>
              <li className="flex items-center">
                <div className="items-center space-y-2 mr-4 md:mr-6 border-b border-gray-700 md:border-none pb-4">
                  <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <h2 className="text-xs md:text-lg font-bold">Contact Us</h2>
                  </div>
                  <p className="mt-2 text-xs md:text-sm">ANA-official Contact:</p>
                  <p className="ml-4 mt-2 text-xs md:text-sm"><a href="tel:+919353802123" className="text-pink-500">+919353802123</a></p>
                  <p className="mt-2 text-xs md:text-sm">Customer Care:</p>
                  <p className="ml-4 mt-2 text-xs md:text-sm"><a href="tel:+919673501234" className="text-pink-500">+919673501234</a></p>
                  <p className="ml-4 mt-2 text-xs md:text-sm"><a href="tel:+919845042730" className="text-pink-500">+919845042730</a></p>
                  <p className="ml-4 mt-2 text-xs md:text-sm"><a href="tel:+918105915916" className="text-pink-500">+918105915916</a></p>
                </div>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Innovation Drive, Tech City</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} FutureVentures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}