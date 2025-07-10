
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Stethoscope, Shield, ArrowRight } from 'lucide-react';

const WelcomeScreen = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-blue-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-40 right-16 w-24 h-24 bg-rose-100 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-32 left-8 w-40 h-40 bg-pink-100 rounded-full opacity-25 blur-3xl"></div>
      <div className="absolute bottom-20 right-12 w-28 h-28 bg-blue-200 rounded-full opacity-15 blur-xl"></div>
      
      {/* Main content card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-sm w-full mx-auto border border-white/20">
        {/* Illustration area */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Main illustration shape */}
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Abstract shapes */}
              <div className="absolute top-4 left-8 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
              <div className="absolute bottom-8 right-6 w-12 h-12 bg-white/15 rounded-full blur-sm"></div>
              
              {/* Medical icon */}
              <div className="relative z-10 bg-white/90 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-1">
                  <Heart className="w-8 h-8 text-blue-600 fill-current" />
                  <Stethoscope className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        {/* App branding */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">MED PAL</h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Your Health Companion</span>
          </div>
        </div>

        {/* Welcome message */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Welcome</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We are happy to see you here! Connect with qualified healthcare professionals and take control of your health journey.
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>

        {/* Get started button */}
        <Button 
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-200/50 transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Bottom decorative text */}
      <p className="text-xs text-gray-500 mt-6 text-center">
        Your health, our priority. Always.
      </p>
    </div>
  );
};

export default WelcomeScreen;
