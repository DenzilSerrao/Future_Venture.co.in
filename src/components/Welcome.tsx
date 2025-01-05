import React from 'react';
import { Target, Zap, Users } from 'lucide-react';

export function Welcome() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Building the Future of Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FutureVentures is a all-in-one stop shop for your Daily needs.
          </p>
        </div>
        
        {/* <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <Target className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Strategic Vision</h3>
            <p className="text-gray-600">Identifying and nurturing high-potential ventures</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <Zap className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-600">Driving technological advancement and market disruption</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <Users className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Strong Partnerships</h3>
            <p className="text-gray-600">Building lasting relationships with industry leaders</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}