import React from 'react';

const Facilities = () => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-secondary mb-8 text-center">Our Facilities</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "24/7 Medical Care", icon: "🩺" },
            { title: "Clean & Safe Rooms", icon: "🛏️" },
            { title: "Nutritious Meals", icon: "🍲" },
            { title: "Recreation Areas", icon: "🎯" },
            { title: "Prayer Hall", icon: "🕊️" },
            { title: "Personal Assistance", icon: "🤝" },
          ].map((facility, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow p-6 text-center">
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h4 className="text-xl font-semibold text-blue-deep">{facility.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
