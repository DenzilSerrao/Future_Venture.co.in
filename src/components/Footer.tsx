import React from 'react';
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
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
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