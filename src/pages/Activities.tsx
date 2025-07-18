import React from "react";
import HeroSlider from "@/components/HeroSlider";
import { Heart, Dumbbell, Users, BookOpen } from "lucide-react";

const Activities = () => {
  const benefits = [
    {
      title: "Physical Wellbeing",
      description:
        "Regular exercise sessions including yoga, stretching, and light workouts to keep residents active and healthy.",
      icon: <Dumbbell className="w-8 h-8 text-blue-deep" />,
    },
    {
      title: "Mental Stimulation",
      description:
        "Engaging activities like book reading, puzzles, and memory games to enhance cognitive functions and prevent memory loss.",
      icon: <BookOpen className="w-8 h-8 text-blue-deep" />,
    },
    {
      title: "Emotional Support",
      description:
        "Group discussions, counseling, and one-on-one sessions to address emotional needs and promote a sense of belonging.",
      icon: <Heart className="w-8 h-8 text-blue-deep" />,
    },
    {
      title: "Social Interaction",
      description:
        "Community gatherings, celebrations, and group games to foster relationships and combat loneliness.",
      icon: <Users className="w-8 h-8 text-blue-deep" />,
    },
  ];


  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-white">Activities</h1>
          <p className="mt-4 text-lg text-white/80">
            A vibrant community with enriching experiences.
          </p>
        </div>
      </section>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Benefits of Activities */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-secondary text-center mb-12">
            Why Our Activities Matter
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow p-6 flex items-start space-x-4"
              >
                <div className="p-3 bg-blue-100 rounded-full">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-secondary text-center mb-12">A Glimpse of Our Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "/src/assets/activities1.jpg",
              "/src/assets/activities2.jpg",
              "/src/assets/activities3.jpg",
              "/src/assets/activities4.jpg",
              "/src/assets/activities5.jpg",
              "/src/assets/activities6.jpg",
            ].map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-3xl shadow">
                <img
                  src={src}
                  alt={`Activity ${idx + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Activities;
