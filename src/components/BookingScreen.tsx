
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, User, Phone, Mail, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  availability: string;
  location: string;
  experience: string;
  image: string;
}

interface BookingScreenProps {
  doctor: Doctor;
  onBack: () => void;
}

const BookingScreen = ({ doctor, onBack }: BookingScreenProps) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [reason, setReason] = useState('');

  const availableDates = [
    { date: '2024-01-15', day: 'Mon', dayNum: '15' },
    { date: '2024-01-16', day: 'Tue', dayNum: '16' },
    { date: '2024-01-17', day: 'Wed', dayNum: '17' },
    { date: '2024-01-18', day: 'Thu', dayNum: '18' },
    { date: '2024-01-19', day: 'Fri', dayNum: '19' }
  ];

  const availableSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !patientName || !patientPhone) {
      alert('Please fill in all required fields');
      return;
    }
    
    alert('Appointment booked successfully! You will receive a confirmation email shortly.');
    onBack();
  };

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
          <h1 className="text-xl sm:text-2xl font-bold">Book Appointment</h1>
        </div>
        <p className="text-blue-100 text-xs sm:text-sm">Schedule your visit with {doctor.name}</p>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Doctor Info Card */}
        <Card className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm border-0 bg-white">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Avatar className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl flex-shrink-0">
                <AvatarImage src={`https://images.unsplash.com/${doctor.image}?w=150&h=150&fit=crop&crop=face`} />
                <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold rounded-lg sm:rounded-xl text-sm sm:text-lg">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium text-xs sm:text-sm mb-2">{doctor.specialty}</p>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                    {doctor.experience}
                  </Badge>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{doctor.location}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Date Selection */}
        <Card className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm border-0 bg-white">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-center mb-3 sm:mb-4">
              <Calendar className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Select Date</h3>
            </div>
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {availableDates.map((dateInfo) => (
                <button
                  key={dateInfo.date}
                  onClick={() => setSelectedDate(dateInfo.date)}
                  className={`p-2 sm:p-3 rounded-lg text-center transition-colors ${
                    selectedDate === dateInfo.date
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="text-xs font-medium">{dateInfo.day}</div>
                  <div className="text-lg sm:text-xl font-bold">{dateInfo.dayNum}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Time Selection */}
        <Card className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm border-0 bg-white">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-center mb-3 sm:mb-4">
              <Clock className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Select Time</h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
              {availableSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 sm:p-3 rounded-lg text-center text-xs sm:text-sm font-medium transition-colors ${
                    selectedTime === time
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Patient Information */}
        <Card className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm border-0 bg-white">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-center mb-3 sm:mb-4">
              <User className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Patient Information</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <Input
                  placeholder="Enter your full name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <Input
                  placeholder="Enter your phone number"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input
                  placeholder="Enter your email address"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                <Input
                  placeholder="Brief description of your concern"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary & Book Button */}
        {selectedDate && selectedTime && (
          <Card className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm border-0 bg-blue-50">
            <CardContent className="p-4 sm:p-5">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-3">Appointment Summary</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Doctor:</span>
                  <span className="font-medium">{doctor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-medium">{doctor.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Button 
          onClick={handleBooking}
          className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl font-medium py-3 sm:py-4 text-sm sm:text-base"
          size="lg"
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingScreen;
