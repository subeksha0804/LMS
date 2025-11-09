import React from 'react';
import { Code, Palette, TrendingUp, Brain, Camera, Briefcase, Globe, Music } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: Code,
      name: "Programming",
      courses: "500+ courses",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Palette,
      name: "Design",
      courses: "300+ courses",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: TrendingUp,
      name: "Business",
      courses: "250+ courses",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Brain,
      name: "Data Science",
      courses: "180+ courses",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Camera,
      name: "Photography",
      courses: "150+ courses",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Briefcase,
      name: "Marketing",
      courses: "200+ courses",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Globe,
      name: "Languages",
      courses: "120+ courses",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Music,
      name: "Music",
      courses: "90+ courses",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Explore <span className="bg-gradient-primary bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect course for your goals across various categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer p-6 bg-card rounded-2xl shadow-card hover:shadow-course transition-all duration-300 transform hover:-translate-y-2 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`w-8 h-8 ${category.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm">{category.courses}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;