import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  ExternalLink
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Organizational Structure", href: "#structure" },
    { name: "Membership", href: "#membership" },
    { name: "Contact", href: "#contact" }
  ];

  const objectives = [
    "Cultural Protection & Promotion",
    "Community Social Cohesion", 
    "Crime Prevention & Safety",
    "Youth Development Programs",
    "Traditional Ceremony Support"
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Organization Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TDR</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">TAU DIA RORA</h3>
                  <p className="text-gray-400 text-sm">Cultural and Traditional Lekgotla</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Dedicated to the restoration of dignity and respect for African culture and traditions, 
                working towards safer communities through cultural preservation and unity.
              </p>

              <div className="space-y-2">
                <p className="text-sm text-gray-400">
                  <strong>NPO Registration:</strong> 283-283
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Founded by:</strong> Mr. P.E. Mollo
                </p>
              </div>

              {/* Color Meanings */}
              <div className="pt-4">
                <h4 className="font-semibold mb-2">Our Colors</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">BOPHELO - Life & Unity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    <span className="text-sm text-gray-300">REKOPANA - Togetherness</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">KGOTSO - Peace</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Key Objectives */}
            <div>
              <h3 className="font-bold text-lg mb-6">Our Focus Areas</h3>
              <ul className="space-y-3">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-300 text-sm">{objective}</span>
                  </li>
                ))}
              </ul>

              <Card className="mt-6 bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white mb-2">Meeting Schedule</h4>
                  <p className="text-sm text-gray-300">
                    Monthly general meetings held every second weekend of the month at 14:00
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">info@taudiarora.org</p>
                    <p className="text-sm text-gray-300">leadership@taudiarora.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">+27 XXX XXX XXXX</p>
                    <p className="text-xs text-gray-400">Office Hours: Mon-Fri 8:00-17:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">
                      Various Branch Locations<br />
                      Across South Africa
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <Card className="mt-6 bg-red-900 border-red-700">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white mb-2">Emergency Contact</h4>
                  <p className="text-sm text-red-100">
                    For urgent cultural or community matters, contact your local branch coordinator.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Tau Dia Rora Cultural and Traditional Lekgotla. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                "It takes a village to raise a child" - Preserving our heritage for future generations
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                <span>Constitution</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Attribution */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-center text-xs text-gray-500">
              Committed to democratic governance, cultural preservation, and community safety
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}