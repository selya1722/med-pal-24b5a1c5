import React, { useState } from 'react';
import { Search, User, Settings, History, Star, Clock, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import UserProfile from '@/components/UserProfile';
import SettingsPage from '@/components/SettingsPage';
import MedicalHistory from '@/components/MedicalHistory';
import WelcomeScreen from '@/components/WelcomeScreen';
import CardiologySpecialists from '@/components/CardiologySpecialists';
import BookingScreen from '@/components/BookingScreen';

const Index = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCardiology, setShowCardiology] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 127,
      availability: "Available Today",
      location: "Downtown Medical Center",
      experience: "15 years",
      image: "photo-1559839734-2b71ea197ec2"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      rating: 4.8,
      reviews: 94,
      availability: "Next Available: Tomorrow",
      location: "City Health Clinic",
      experience: "12 years",
      image: "photo-1612349317150-e413f6a5b16d"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "General Practitioner",
      rating: 4.7,
      reviews: 156,
      availability: "Available Today",
      location: "Wellness Medical Group",
      experience: "8 years",
      image: "photo-1594824606853-da95e3fb7b67"
    }
  ];

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  const handleCardiologyClick = () => {
    setShowCardiology(true);
  };

  const handleBackFromCardiology = () => {
    setShowCardiology(false);
  };

  const handleBookNow = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBooking(true);
  };

  const handleBackFromBooking = () => {
    setShowBooking(false);
    setSelectedDoctor(null);
  };

  if (showWelcome) {
    return <WelcomeScreen onGetStarted={handleGetStarted} />;
  }

  if (showCardiology) {
    return <CardiologySpecialists onBack={handleBackFromCardiology} />;
  }

  if (showBooking && selectedDoctor) {
    return <BookingScreen doctor={selectedDoctor} onBack={handleBackFromBooking} />;
  }

  const renderSearchScreen = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 sm:p-6 rounded-b-2xl sm:rounded-b-3xl">
        <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Find Your Doctor</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200 w-4 h-4 sm:w-5 sm:h-5" />
          <Input
            placeholder="Search by condition or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 sm:pl-12 bg-white/10 border-white/20 text-white placeholder:text-blue-100 rounded-full text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Quick Categories */}
      <div className="px-4 sm:px-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Popular Specialties</h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {[
            { name: 'Cardiology', onClick: handleCardiologyClick },
            { name: 'Dermatology', onClick: () => {} },
            { name: 'General Medicine', onClick: () => {} },
            { name: 'Pediatrics', onClick: () => {} }
          ].map((specialty) => (
            <Button 
              key={specialty.name} 
              variant="outline" 
              className="p-3 sm:p-4 h-auto rounded-xl border-blue-200 hover:bg-blue-50 text-xs sm:text-sm"
              onClick={specialty.onClick}
            >
              <span className="font-medium">{specialty.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Doctors List */}
      <div className="px-4 sm:px-6 space-y-3 sm:space-y-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Available Doctors</h2>
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm border-0 bg-white">
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Avatar className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex-shrink-0">
                  <AvatarImage src={`https://images.unsplash.com/${doctor.image}?w=150&h=150&fit=crop&crop=face`} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base truncate">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium text-xs sm:text-sm mb-2">{doctor.specialty}</p>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm font-medium ml-1">{doctor.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({doctor.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{doctor.availability}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{doctor.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 sm:mt-4 gap-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs flex-shrink-0">
                      {doctor.experience}
                    </Badge>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 rounded-full px-4 sm:px-6 text-xs sm:text-sm"
                      onClick={() => handleBookNow(doctor)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return renderSearchScreen();
      case 'profile':
        return <UserProfile />;
      case 'settings':
        return <SettingsPage />;
      case 'history':
        return <MedicalHistory />;
      default:
        return renderSearchScreen();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="pb-16 sm:pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 sm:px-4 py-1 sm:py-2 safe-area-pb">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {[
            { id: 'search', icon: Search, label: 'Search' },
            { id: 'history', icon: History, label: 'History' },
            { id: 'profile', icon: User, label: 'Profile' },
            { id: 'settings', icon: Settings, label: 'Settings' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center py-1 sm:py-2 px-2 sm:px-4 rounded-lg transition-colors ${
                activeTab === id 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;
