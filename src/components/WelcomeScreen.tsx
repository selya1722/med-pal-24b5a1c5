
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Stethoscope, Shield, ArrowRight } from 'lucide-react';

const WelcomeScreen = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-blue-200 rounded-full opacity-40 blur-lg"></div>
      <div className="absolute bottom-32 left-8 w-24 h-24 bg-blue-50 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute bottom-20 right-12 w-12 h-12 bg-blue-300 rounded-full opacity-20 blur-sm"></div>
      
      {/* Abstract wave pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q100,50 200,100 T400,100 L400,0 L0,0 Z" fill="currentColor" className="text-blue-600"/>
          <path d="M0,200 Q150,150 300,200 T400,200 L400,100 L0,100 Z" fill="currentColor" className="text-blue-500"/>
          <path d="M0,300 Q100,250 200,300 T400,300 L400,200 L0,200 Z" fill="currentColor" className="text-blue-400"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="z-10 flex flex-col items-center text-center max-w-sm space-y-8">
        {/* Logo - centered above */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-200/50 mb-6">
            <div className="relative">
              <Heart className="w-10 h-10 text-white fill-white" />
              <Stethoscope className="w-6 h-6 text-white/80 absolute -top-1 -right-1" />
            </div>
          </div>
          
          {/* App name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">HealthCare</h1>
          <div className="flex items-center justify-center space-x-1 mb-6">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Trusted Care</span>
          </div>
        </div>

        {/* Welcome message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 leading-tight">
            Find the Right Doctor for Your Health
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Connect with qualified healthcare professionals, book appointments, and manage your health journey with confidence.
          </p>
        </div>

        {/* Features highlights */}
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
              <Stethoscope className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Expert Doctors</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Quality Care</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Secure & Safe</span>
          </div>
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

        {/* Footer text */}
        <p className="text-xs text-gray-500 mt-4">
          Your health, our priority. Always.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
