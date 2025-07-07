
import React from 'react';
import { ArrowLeft, Star, Clock, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const CardiologySpecialists = ({ onBack }: { onBack: () => void }) => {
  const cardiologists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      credentials: "MD, FACC",
      rating: 4.9,
      reviews: 127,
      experience: "15 years",
      availability: "Available Today",
      location: "Downtown Medical Center",
      specialization: "Interventional Cardiology",
      image: "photo-1559839734-2b71ea197ec2"
    },
    {
      id: 2,
      name: "Dr. Michael Rivera",
      credentials: "MD, PhD, FACC",
      rating: 4.8,
      reviews: 94,
      experience: "18 years",
      availability: "Next Available: Tomorrow",
      location: "Heart Care Institute",
      specialization: "Electrophysiology",
      image: "photo-1612349317150-e413f6a5b16d"
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      credentials: "MD, FACC",
      rating: 4.9,
      reviews: 156,
      experience: "12 years",
      availability: "Available Today",
      location: "Cardiovascular Clinic",
      specialization: "Preventive Cardiology",
      image: "photo-1594824606853-da95e3fb7b67"
    },
    {
      id: 4,
      name: "Dr. Robert Thompson",
      credentials: "MD, FACC, FSCAI",
      rating: 4.7,
      reviews: 203,
      experience: "22 years",
      availability: "Next Available: Monday",
      location: "Regional Heart Center",
      specialization: "Cardiac Surgery",
      image: "photo-1582750433449-648ed127bb54"
    },
    {
      id: 5,
      name: "Dr. Lisa Martinez",
      credentials: "MD, FACC",
      rating: 4.8,
      reviews: 89,
      experience: "10 years",
      availability: "Available Today",
      location: "Metropolitan Heart Clinic",
      specialization: "Heart Failure & Transplant",
      image: "photo-1638202993928-7267aad84c31"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 sm:p-6 rounded-b-2xl sm:rounded-b-3xl">
        <div className="flex items-center mb-3 sm:mb-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-white/10 transition-colors mr-2 sm:mr-3"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold">Cardiology Specialists</h1>
        </div>
        <p className="text-blue-100 text-xs sm:text-sm">Find the best heart care specialists</p>
      </div>

      {/* Specialists List */}
      <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
        {cardiologists.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm border-0 bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Avatar className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl flex-shrink-0">
                  <AvatarImage src={`https://images.unsplash.com/${doctor.image}?w=150&h=150&fit=crop&crop=face`} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold rounded-lg sm:rounded-xl text-sm sm:text-lg">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 truncate">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium text-xs sm:text-sm">{doctor.credentials}</p>
                    <p className="text-gray-600 text-xs sm:text-sm truncate">{doctor.specialization}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-3">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm font-medium ml-1">{doctor.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({doctor.reviews})</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                      {doctor.experience}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500 flex-shrink-0" />
                      <span className={`truncate ${doctor.availability.includes('Available Today') ? 'text-green-600 font-medium' : ''}`}>
                        {doctor.availability}
                      </span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500 flex-shrink-0" />
                      <span className="truncate">{doctor.location}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm"
                    size="sm"
                  >
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardiologySpecialists;
