
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { History, Calendar, Clock, FileText, Download, User } from 'lucide-react';

const MedicalHistory = () => {
  const consultations = [
    {
      id: 1,
      date: "Dec 15, 2024",
      time: "2:30 PM",
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      type: "Video Consultation",
      status: "Completed",
      diagnosis: "Regular check-up, blood pressure monitoring",
      prescription: "Continue current medication",
      image: "photo-1559839734-2b71ea197ec2"
    },
    {
      id: 2,
      date: "Nov 28, 2024",
      time: "10:15 AM",
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      type: "In-person Visit",
      status: "Completed",
      diagnosis: "Skin examination, mole check",
      prescription: "Topical cream prescribed",
      image: "photo-1612349317150-e413f6a5b16d"
    },
    {
      id: 3,
      date: "Oct 10, 2024",
      time: "4:45 PM",
      doctor: "Dr. Emily Rodriguez",
      specialty: "General Practitioner",
      type: "Video Consultation",
      status: "Completed",
      diagnosis: "Annual physical examination",
      prescription: "Blood work recommended",
      image: "photo-1594824606853-da95e3fb7b67"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      date: "Jan 8, 2025",
      time: "11:00 AM",
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      type: "Follow-up Visit"
    }
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-3xl">
        <h1 className="text-2xl font-bold mb-2">Medical History</h1>
        <p className="text-blue-100">Track your healthcare journey</p>
      </div>

      {/* Upcoming Appointments */}
      <Card className="rounded-2xl shadow-sm border-0 border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <Calendar className="w-5 h-5 mr-2 text-green-600" />
            Upcoming Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{appointment.doctor}</p>
                  <p className="text-sm text-gray-600">{appointment.specialty}</p>
                  <p className="text-sm text-green-600 font-medium">
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
              </div>
              <Badge className="bg-green-600 hover:bg-green-700">
                {appointment.type}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Past Consultations */}
      <Card className="rounded-2xl shadow-sm border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <History className="w-5 h-5 mr-2 text-blue-600" />
            Recent Consultations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {consultations.map((consultation) => (
            <div key={consultation.id} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12 rounded-xl">
                  <AvatarImage src={`https://images.unsplash.com/${consultation.image}?w=150&h=150&fit=crop&crop=face`} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold rounded-xl">
                    {consultation.doctor.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{consultation.doctor}</h3>
                      <p className="text-sm text-blue-600">{consultation.specialty}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      {consultation.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{consultation.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{consultation.time}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {consultation.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start">
                      <User className="w-4 h-4 mr-2 mt-0.5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Diagnosis:</p>
                        <p className="text-sm text-gray-600">{consultation.diagnosis}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="w-4 h-4 mr-2 mt-0.5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Treatment:</p>
                        <p className="text-sm text-gray-600">{consultation.prescription}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full rounded-lg border-blue-200 hover:bg-blue-50">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Health Summary */}
      <Card className="rounded-2xl shadow-sm border-0 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <FileText className="w-5 h-5 mr-2 text-blue-600" />
            Health Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-white rounded-xl">
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-sm text-gray-600">Total Visits</p>
            </div>
            <div className="text-center p-3 bg-white rounded-xl">
              <p className="text-2xl font-bold text-green-600">3</p>
              <p className="text-sm text-gray-600">This Year</p>
            </div>
            <div className="text-center p-3 bg-white rounded-xl">
              <p className="text-2xl font-bold text-purple-600">5</p>
              <p className="text-sm text-gray-600">Specialists</p>
            </div>
            <div className="text-center p-3 bg-white rounded-xl">
              <p className="text-2xl font-bold text-orange-600">2</p>
              <p className="text-sm text-gray-600">Prescriptions</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalHistory;
