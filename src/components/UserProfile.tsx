
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Phone, Mail, MapPin, Calendar, Heart, Shield } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-3xl">
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
        
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          <Avatar className="w-20 h-20 rounded-2xl border-4 border-white/20">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face" />
            <AvatarFallback className="bg-blue-300 text-blue-800 text-2xl font-bold rounded-2xl">JD</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h2 className="text-xl font-bold">Jane Doe</h2>
            <p className="text-blue-100">Premium Member</p>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 mt-2">
              Verified Account
            </Badge>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <Card className="rounded-2xl shadow-sm border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <User className="w-5 h-5 mr-2 text-blue-600" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-xl">
              <Phone className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-gray-50 rounded-xl">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-medium">jane.doe@email.com</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-gray-50 rounded-xl">
              <MapPin className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">123 Main St, New York, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-gray-50 rounded-xl">
              <Calendar className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium">March 15, 1990</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Preferences */}
      <Card className="rounded-2xl shadow-sm border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <Heart className="w-5 h-5 mr-2 text-blue-600" />
            Health Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
              <span className="font-medium">Blood Type</span>
              <Badge variant="outline" className="bg-white border-blue-200 text-blue-700">O+</Badge>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
              <span className="font-medium">Allergies</span>
              <Badge variant="outline" className="bg-white border-blue-200 text-blue-700">Penicillin</Badge>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
              <span className="font-medium">Emergency Contact</span>
              <span className="text-sm text-gray-600">John Doe - Spouse</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
              <span className="font-medium">Insurance Provider</span>
              <span className="text-sm text-gray-600">Blue Cross Blue Shield</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card className="rounded-2xl shadow-sm border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800">
            <Shield className="w-5 h-5 mr-2 text-blue-600" />
            Account Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50">
            Edit Profile Information
          </Button>
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50">
            Update Health Preferences
          </Button>
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50">
            Change Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
