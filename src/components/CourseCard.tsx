import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, Play } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  students,
  duration,
  price,
  originalPrice,
  image,
  category,
  level
}) => {
  return (
    <div className="bg-card rounded-2xl shadow-card hover:shadow-course transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Button variant="hero" size="sm" className="w-full">
              <Play className="w-4 h-4 mr-2" />
              Preview Course
            </Button>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-card/80 backdrop-blur-sm text-foreground px-2 py-1 rounded-full text-xs">
            {level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">by {instructor}</p>
        </div>

        {/* Rating and Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({students.toLocaleString()})</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg text-primary">{price}</span>
            {originalPrice && (
              <span className="text-muted-foreground line-through text-sm">{originalPrice}</span>
            )}
          </div>
          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;