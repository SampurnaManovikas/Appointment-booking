import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeSlotsProps {
  selectedTime: string;
  onTimeSelect: (time: string) => void;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({ selectedTime, onTimeSelect }) => {
  // Simulate fetching available slots
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get available time slots
    const fetchTimeSlots = () => {
      setLoading(true);
      
      // Mock data - in a real app, this would come from an API
      setTimeout(() => {
        const slots = [
          { time: '9:00 AM', available: true },
          { time: '10:00 AM', available: true },
          { time: '11:00 AM', available: true },
          { time: '12:00 PM', available: false },
          { time: '1:00 PM', available: true },
          { time: '2:00 PM', available: true },
          { time: '3:00 PM', available: false },
          { time: '4:00 PM', available: true },
          { time: '5:00 PM', available: true },
          { time: '6:00 PM', available: false },
          { time: '7:00 PM', available: true },
        ];
        
        setTimeSlots(slots);
        setLoading(false);
      }, 800);
    };
    
    fetchTimeSlots();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            onClick={() => slot.available && onTimeSelect(slot.time)}
            disabled={!slot.available}
            className={`
              py-3 px-4 rounded-lg border flex items-center justify-center transition-all duration-200
              ${!slot.available 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200' 
                : selectedTime === slot.time
                  ? 'bg-blue-100 text-blue-700 border-blue-500 shadow-sm transform scale-105'
                  : 'hover:bg-blue-50 text-gray-700 border-gray-200'
              }
            `}
          >
            <Clock className={`w-4 h-4 mr-2 ${!slot.available ? 'text-gray-400' : selectedTime === slot.time ? 'text-blue-700' : 'text-gray-500'}`} />
            {slot.time}
          </button>
        ))}
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-100 border border-blue-500 mr-1"></div>
          <span className="text-gray-600">Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-100 mr-1"></div>
          <span className="text-gray-600">Unavailable</span>
        </div>
      </div>
    </div>
  );
};

export default TimeSlots;