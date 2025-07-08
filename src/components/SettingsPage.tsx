
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, Bell, Globe, Shield, Moon, Smartphone, Lock, HelpCircle } from 'lucide-react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    appointments: true,
    reminders: true,
    marketing: false,
    security: true
  });

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-3xl">
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-blue-100">Customize your app experience</p>
      </div>

      {/* Notification Settings */}
      <Card className="rounded-2xl shadow-sm border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800 dark:text-gray-200">
            <Bell className="w-5 h-5 mr-2 text-blue-600" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div>
                <p className="font-medium dark:text-gray-200">Appointment Reminders</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about upcoming appointments</p>
              </div>
              <Switch
                checked={notifications.appointments}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, appointments: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div>
                <p className="font-medium dark:text-gray-200">Medication Reminders</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Daily medication and health reminders</p>
              </div>
              <Switch
                checked={notifications.reminders}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, reminders: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div>
                <p className="font-medium dark:text-gray-200">Marketing Communications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Health tips and promotional offers</p>
              </div>
              <Switch
                checked={notifications.marketing}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, marketing: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div>
                <p className="font-medium dark:text-gray-200">Security Alerts</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Account security and login notifications</p>
              </div>
              <Switch
                checked={notifications.security}
                onCheckedChange={(checked) => 
                  setNotifications(prev => ({ ...prev, security: checked }))
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Language & Region */}
      <Card className="rounded-2xl shadow-sm border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800 dark:text-gray-200">
            <Globe className="w-5 h-5 mr-2 text-blue-600" />
            Language & Region
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div>
                <p className="font-medium dark:text-gray-200">Language</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Choose your preferred language</p>
              </div>
              <Select defaultValue="en">
                <SelectTrigger className="w-32 border-blue-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div>
                <p className="font-medium dark:text-gray-200">Time Zone</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Set your local time zone</p>
              </div>
              <Select defaultValue="est">
                <SelectTrigger className="w-32 border-blue-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="est">EST</SelectItem>
                  <SelectItem value="pst">PST</SelectItem>
                  <SelectItem value="cst">CST</SelectItem>
                  <SelectItem value="mst">MST</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card className="rounded-2xl shadow-sm border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800 dark:text-gray-200">
            <Shield className="w-5 h-5 mr-2 text-blue-600" />
            Privacy & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            <Lock className="w-4 h-4 mr-3" />
            Two-Factor Authentication
          </Button>
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            <Shield className="w-4 h-4 mr-3" />
            Privacy Settings
          </Button>
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            <Smartphone className="w-4 h-4 mr-3" />
            Biometric Login
          </Button>
        </CardContent>
      </Card>

      {/* App Preferences */}
      <Card className="rounded-2xl shadow-sm border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800 dark:text-gray-200">
            <Settings className="w-5 h-5 mr-2 text-blue-600" />
            App Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div>
              <p className="font-medium dark:text-gray-200">Dark Mode</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Switch to dark theme</p>
            </div>
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div>
              <p className="font-medium dark:text-gray-200">Auto-sync Data</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Automatically sync health data</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Support */}
      <Card className="rounded-2xl shadow-sm border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-800 dark:text-gray-200">
            <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
            Support & Help
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            Help Center
          </Button>
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            Contact Support
          </Button>
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            Terms of Service
          </Button>
          <Button variant="outline" className="w-full justify-start rounded-xl border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            Privacy Policy
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
