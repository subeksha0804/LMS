import React from 'react';
import CourseCard from './CourseCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedCourses = () => {
  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Sarah Johnson",
      rating: 4.8,
      students: 25420,
      duration: "40 hours",
      price: "$89.99",
      originalPrice: "$199.99",
      image: "/api/placeholder/400/240",
      category: "Web Development",
      level: "Beginner"
    },
    {
      title: "Advanced React & TypeScript",
      instructor: "Mark Williams",
      rating: 4.9,
      students: 18650,
      duration: "32 hours",
      price: "$79.99",
      originalPrice: "$149.99",
      image: "/api/placeholder/400/240",
      category: "Programming",
      level: "Advanced"
    },
    {
      title: "Digital Marketing Masterclass",
      instructor: "Emily Chen",
      rating: 4.7,
      students: 31200,
      duration: "28 hours",
      price: "$69.99",
      originalPrice: "$129.99",
      image: "/api/placeholder/400/240",
      category: "Marketing",
      level: "Intermediate"
    },
    {
      title: "Data Science with Python",
      instructor: "Prof. David Kumar",
      rating: 4.8,
      students: 22100,
      duration: "45 hours",
      price: "$99.99",
      originalPrice: "$199.99",
      image: "/api/placeholder/400/240",
      category: "Data Science",
      level: "Intermediate"
    },
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Lisa Rodriguez",
      rating: 4.9,
      students: 19800,
      duration: "25 hours",
      price: "$59.99",
      originalPrice: "$119.99",
      image: "/api/placeholder/400/240",
      category: "Design",
      level: "Beginner"
    },
    {
      title: "Machine Learning Essentials",
      instructor: "Dr. Alex Thompson",
      rating: 4.7,
      students: 15600,
      duration: "38 hours",
      price: "$89.99",
      originalPrice: "$179.99",
      image: "/api/placeholder/400/240",
      category: "AI & ML",
      level: "Advanced"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses chosen by thousands of students worldwide
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Courses
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;