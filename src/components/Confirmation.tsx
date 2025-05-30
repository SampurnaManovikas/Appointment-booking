import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, MapPin, Video, Phone, ArrowLeft } from 'lucide-react';

interface AppointmentData {
  date: Date | null;
  time: string;
  sessionType: 'in-person' | 'video' | 'phone';
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
}

const Confirmation: React.FC = () => {
  const [appointmentData, setAppointmentData] = useState<AppointmentData | null>(null);
  
  useEffect(() => {
    const storedData = localStorage.getItem('appointmentData');
    if (storedData) {
      const data = JSON.parse(storedData);
      // Convert date string back to Date object
      if (data.date) {
        data.date = new Date(data.date);
      }
      setAppointmentData(data);
    }
  }, []);
  
  if (!appointmentData) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  const formatDate = (date: Date | null) => {
    if (!date) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  const getSessionTypeIcon = () => {
    switch (appointmentData.sessionType) {
      case 'in-person':
        return <MapPin className="h-5 w-5 text-blue-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-blue-500" />;
      case 'phone':
        return <Phone className="h-5 w-5 text-blue-500" />;
      default:
        return <MapPin className="h-5 w-5 text-blue-500" />;
    }
  };
  
  const getSessionTypeText = () => {
    switch (appointmentData.sessionType) {
      case 'in-person':
        return 'In-Person Appointment';
      case 'video':
        return 'Video Call Appointment';
      case 'phone':
        return 'Phone Call Appointment';
      default:
        return 'Appointment';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
      <div className="bg-green-500 px-6 py-12 text-center">
        <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white">Appointment Confirmed!</h1>
        <p className="text-green-100 mt-2">
          Your appointment has been successfully scheduled
        </p>
      </div>
      
      <div className="p-6">
        <div className="bg-gray-50 rounded-lg p-5 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointment Details</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-500">Date</p>
                <p className="text-base text-gray-800">{formatDate(appointmentData.date)}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-500">Time</p>
                <p className="text-base text-gray-800">{appointmentData.time}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              {getSessionTypeIcon()}
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Session Type</p>
                <p className="text-base text-gray-800">{getSessionTypeText()}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Client Information</h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="text-base text-gray-800">{appointmentData.clientName}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-500">Phone Number</p>
              <p className="text-base text-gray-800">{appointmentData.clientPhone}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="text-base text-gray-800">{appointmentData.clientEmail}</p>
            </div>
            
            {appointmentData.notes && (
              <div>
                <p className="text-sm font-medium text-gray-500">Additional Notes</p>
                <p className="text-base text-gray-800">{appointmentData.notes}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 mt-6">
          <p className="text-sm text-blue-700">
            A confirmation email has been sent to your email address. If you need to reschedule or cancel your appointment, 
            please contact us at least 24 hours in advance.
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;