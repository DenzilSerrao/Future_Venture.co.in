import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Company {
  name: string;
  description: string;
  logo: string;
  website: string;
  bgColor: string;
}

const companies: Company[] = [
  {
    name: 'AnaBeauty',
    description: 'Revolutionizing the beauty industry with sustainable, organic products that enhance natural beauty.',
    logo: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80',
    website: 'https://anabeauty.co.in',
    bgColor: 'bg-rose-50'
  },
  // Placeholder for future companies
];

export function Portfolio() {
  return (
    <section className="p-4 sm:pb-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">Our Product Websites</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className={`${company.bgColor} rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="object-cover w-full h-48"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-gray-600 mb-4">{company.description}</p>
                
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}