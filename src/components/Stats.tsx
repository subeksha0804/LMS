import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Active Students",
      description: "Learning every day"
    },
    {
      icon: BookOpen,
      number: "1,200+",
      label: "Quality Courses",
      description: "Across all categories"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      description: "Students complete courses"
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries",
      description: "Worldwide reach"
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-primary-foreground rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-foreground rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Trusted by Learners Worldwide
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/20 transition-all duration-300">
                <stat.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-primary-foreground/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;