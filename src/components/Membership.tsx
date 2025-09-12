import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  UserPlus, 
  DollarSign, 
  Calendar, 
  Shield, 
  CheckCircle, 
  XCircle,
  RefreshCw,
  Users,
  FileText,
  AlertTriangle
} from "lucide-react";

export function Membership() {
  const membershipProcess = [
    {
      step: 1,
      title: "Application Submission",
      description: "Submit application to Branch Executive Committee",
      icon: FileText
    },
    {
      step: 2, 
      title: "Committee Review",
      description: "BEC considers application and confirms in Branch General Meeting",
      icon: Users
    },
    {
      step: 3,
      title: "Payment & Documentation", 
      description: "Pay joining fee and receive provisional membership card",
      icon: DollarSign
    },
    {
      step: 4,
      title: "Probationary Period",
      description: "6-month period of compliance with rules and regulations",
      icon: Calendar
    },
    {
      step: 5,
      title: "Full Membership",
      description: "Transfer to full member status after successful probation",
      icon: CheckCircle
    }
  ];

  const fees = [
    { type: "Joining Fee", amount: "R100.00", description: "One-time payment for new members" },
    { type: "Re-joining Fee", amount: "R200.00", description: "For members returning after lapse" },
    { type: "Monthly Fees", amount: "R50.00 - R100.00", description: "Regular membership dues" },
    { type: "Membership Card", amount: "R60.00", description: "Official TDR membership card" },
    { type: "Function Contribution", amount: "R50.00 - R100.00", description: "As and when required" },
    { type: "Absence Penalty", amount: "R20.00 - R50.00", description: "For unnotified absences" }
  ];

  const requirements = [
    "South African citizen above 16 years",
    "Accept TDR principles, policies, and programs", 
    "Willing to abide by constitution and regulations",
    "Parental consent required for ages 16-18",
    "Commitment to attend regular meetings",
    "Payment of all required fees"
  ];

  const responsibilities = [
    "Take active part in TDR activities and discussions",
    "Understand and carry out TDR aims and objectives",
    "Observe discipline and behave honestly",
    "Follow protocols when challenging decisions",
    "Attend meetings regularly with proper notification if absent",
    "Support fellow members during cultural ceremonies"
  ];

  const cessationReasons = [
    { reason: "3 consecutive absences without apology", icon: XCircle, color: "red" },
    { reason: "Failure to pay fees without notification", icon: DollarSign, color: "red" },
    { reason: "Death", icon: XCircle, color: "gray" },
    { reason: "Resignation (accepted without refunds)", icon: UserPlus, color: "yellow" },
    { reason: "Expulsion through disciplinary process", icon: Shield, color: "red" }
  ];

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Membership Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our community dedicated to preserving African culture and traditions while building safer communities.
          </p>
        </div>

        {/* Membership Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Membership Process</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {membershipProcess.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements and Responsibilities */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span>Membership Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-red-600" />
                <span>Member Responsibilities</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Fee Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Fee Structure</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fees.map((fee, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-gray-900">{fee.type}</h4>
                  </div>
                  <p className="text-2xl font-bold text-green-800 mb-2">{fee.amount}</p>
                  <p className="text-gray-600 text-sm">{fee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-6 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Additional Information</span>
              </h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p>• Failure to attend Executive/General Meetings by BEC: R500.00</p>
                <p>• Funeral benefits available through Boiketlong Funeral Directors</p>
                <p>• Financial year runs from 01 April to 31 March</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cessation and Reinstatement */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <XCircle className="w-6 h-6 text-yellow-600" />
                <span>Membership Cessation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">Membership may cease due to:</p>
              <div className="space-y-3">
                {cessationReasons.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className={`w-5 h-5 text-${item.color}-500 flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700 text-sm">{item.reason}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RefreshCw className="w-6 h-6 text-blue-600" />
                <span>Membership Reinstatement</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">To reinstate membership:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">Pay re-joining fee (R200.00)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">Pay 6 months membership fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">Obtain new membership card</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">Complete any suspension period</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-red-600 to-green-600 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Join Us?</h3>
              <p className="text-xl mb-8 opacity-90">
                Be part of a movement dedicated to preserving our cultural heritage and building stronger communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  Download Application Form
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Contact Us
                </Button>
              </div>
              <p className="text-sm mt-6 opacity-75">
                For more information, contact your nearest branch or reach out to our leadership team.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}