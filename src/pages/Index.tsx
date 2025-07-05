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

const Index = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCardiology, setShowCardiology] = useState(false);

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

  if (showWelcome) {
    return <WelcomeScreen onGetStarted={handleGetStarted} />;
  }

  if (showCardiology) {
    return <CardiologySpecialists onBack={handleBackFromCardiology} />;
  }

  const renderSearchScreen = () => (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-4">Find Your Doctor</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200 w-5 h-5" />
          <Input
            placeholder="Search by condition or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-blue-100 rounded-full"
          />
        </div>
      </div>

      {/* Quick Categories */}
      <div className="px-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Popular Specialties</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Cardiology', onClick: handleCardiologyClick },
            { name: 'Dermatology', onClick: () => {} },
            { name: 'General Medicine', onClick: () => {} },
            { name: 'Pediatrics', onClick: () => {} }
          ].map((specialty) => (
            <Button 
              key={specialty.name} 
              variant="outline" 
              className="p-4 h-auto rounded-xl border-blue-200 hover:bg-blue-50"
              onClick={specialty.onClick}
            >
              <span className="text-sm font-medium">{specialty.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Doctors List */}
      <div className="px-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Available Doctors</h2>
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden rounded-2xl shadow-sm border-0 bg-white">
            <CardContent className="p-5">
              <div className="flex items-start space-x-4">
                <Avatar className="w-16 h-16 rounded-xl">
                  <AvatarImage src={`https://images.unsplash.com/${doctor.image}?w=150&h=150&fit=crop&crop=face`} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold rounded-xl">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{doctor.specialty}</p>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{doctor.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{doctor.availability}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {doctor.experience} experience
                    </Badge>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">
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
      <main className="pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
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
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                activeTab === id 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;
