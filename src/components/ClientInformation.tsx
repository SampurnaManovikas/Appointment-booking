import React from 'react';
import { User, Phone, Mail, FileText } from 'lucide-react';

interface ClientInformationProps {
  data: {
    clientName: string;
    clientPhone: string;
    clientEmail: string;
    notes: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ClientInformation: React.FC<ClientInformationProps> = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={data.clientName}
            onChange={onChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="John Doe"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            id="clientPhone"
            name="clientPhone"
            value={data.clientPhone}
            onChange={onChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="(555) 123-4567"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <p className="mt-1 text-xs text-gray-500">Enter a 10-digit phone number</p>
      </div>
      
      <div>
        <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            id="clientEmail"
            name="clientEmail"
            value={data.clientEmail}
            onChange={onChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="johndoe@example.com"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes (Optional)
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
            <FileText className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="notes"
            name="notes"
            value={data.notes}
            onChange={onChange}
            rows={4}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Any information you'd like to share before your appointment..."
          />
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-blue-800 mb-2">Privacy Notice</h4>
        <p className="text-xs text-blue-700">
          Your personal information will be kept confidential and only used for appointment scheduling 
          and communication purposes. For more information, please review our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default ClientInformation;