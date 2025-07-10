
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Stethoscope, Shield, ArrowRight } from 'lucide-react';

const WelcomeScreen = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-blue-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements - smaller for mobile */}
      <div className="absolute top-16 left-4 w-20 h-20 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute top-32 right-8 w-16 h-16 bg-rose-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-24 left-4 w-24 h-24 bg-pink-100 rounded-full opacity-25 blur-2xl"></div>
      <div className="absolute bottom-16 right-6 w-18 h-18 bg-blue-200 rounded-full opacity-15 blur-xl"></div>
      
      {/* Main content card - optimized for mobile */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 max-w-sm w-full mx-auto border border-white/20">
        {/* Cute Doctor Illustration */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Doctor Character */}
            <div className="w-40 h-40 relative">
              {/* Doctor's head (circle) */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full border-2 border-orange-400">
                {/* Eyes */}
                <div className="absolute top-4 left-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                <div className="absolute top-4 right-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                {/* Smile */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-gray-800 rounded-b-full"></div>
              </div>
              
              {/* Doctor's hat */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-white rounded-t-full border-2 border-blue-400">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-red-400 rounded-full"></div>
              </div>
              
              {/* Doctor's body (white coat) */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-white rounded-t-lg border-2 border-blue-300">
                {/* Coat buttons */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                
                {/* Pocket */}
                <div className="absolute top-3 left-2 w-3 h-4 border border-blue-300 rounded-sm"></div>
              </div>
              
              {/* Arms */}
              <div className="absolute top-18 left-4 w-3 h-8 bg-white rounded-full border border-blue-300 rotate-12"></div>
              <div className="absolute top-18 right-4 w-3 h-8 bg-white rounded-full border border-blue-300 -rotate-12"></div>
              
              {/* Stethoscope */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 border-2 border-blue-500 rounded-full bg-blue-100 flex items-center justify-center">
                  <Stethoscope className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              
              {/* Floating medical icons */}
              <div className="absolute top-2 left-2 w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center animate-bounce">
                <Heart className="w-3 h-3 text-rose-500 fill-current" />
              </div>
              <div className="absolute top-6 right-2 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-green-100 rounded-full animate-bounce delay-300">
                <div className="w-2 h-2 bg-green-500 rounded-full m-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* App branding */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">MED PAL</h1>
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Your Health Companion</span>
          </div>
        </div>

        {/* Welcome message */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Welcome</h2>
          <p className="text-gray-600 text-sm leading-relaxed px-2">
            We are happy to see you here! Connect with qualified healthcare professionals and take control of your health journey.
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2 mb-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>

        {/* Get started button */}
        <Button 
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-2xl shadow-lg shadow-blue-200/50 transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Bottom decorative text */}
      <p className="text-xs text-gray-500 mt-4 text-center px-4">
        Your health, our priority. Always.
      </p>
    </div>
  );
};

export default WelcomeScreen;
