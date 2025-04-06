import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-500 text-white mt-4">
      <div className="container mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">[WEBSITE]</h2>
            <div className="pt-2">
              <h3 className="font-medium mb-2">Contact Us</h3>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={18} />
                <span>What's App</span>
              </div>
              <div className="ml-6 mb-2">+1 202-918-2132</div>
              
              <div className="flex items-center gap-2 mb-2">
                <Phone size={18} />
                <span>Call Us</span>
              </div>
              <div className="ml-6 mb-4">+1 202-918-2132</div>
            </div>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="text-xl font-medium border-b border-blue-400 pb-2 mb-4">Customer Services</h3>
            <ul className="space-y-2">
              {[
                'About Us',
                'Terms & Conditions',
                'FAQ',
                'Privacy Policy',
                'E-waste Policy',
                'Cancellation & Return Policy'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-blue-400 text-center text-sm">
          © 2022 All rights reserved. Reliance Retail Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;