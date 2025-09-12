import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./RunSrc/ImageWithFallback";
import { Mail, Phone, Users, Crown, Shield, BookOpen, CheckCircle } from "lucide-react";

export function Leadership() {
  const founder = {
    name: "Mr. P.E. Mollo (Pheello Mollo)",
    position: "Founder & Overall Leader",
    role: "Overall Manager & Face of the Organization",
    image: "https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGVhZGVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NDc0Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    responsibilities: [
      "Co-signatory in bank accounts",
      "Casting deciding vote in equal votes", 
      "Executive delegated matters including AGM",
      "Dispute resolution and rulings",
      "Funding initiatives and relationships",
      "Strategy development and implementation",
      "Custodian of all adopted policies",
      "Task Force management and leadership"
    ],
    achievements: [
      "Founded TDR after standing against injustice",
      "Established democratic constitutional framework",
      "Built inclusive multi-community organization",
      "Created sustainable leadership structure"
    ],
    icon: Crown,
    color: "red"
  };

  const otherLeaders = [
    {
      name: "TDR Chairperson",
      position: "Chairperson",
      role: "Leader of Annual General Meetings",
      image: "https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGVhZGVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NDc0Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      responsibilities: [
        "Conduct meetings according to agenda",
        "Control meeting proceedings", 
        "Prepare and present AGM reports",
        "Co-signatory in organization bank account",
        "Inspect organizational assets quarterly",
        "Make pronouncements on AGM decisions"
      ],
      icon: Users,
      color: "green"
    },
    {
      name: "Deputy Chairperson",
      position: "Deputy Chairperson",
      role: "Assistant to Chairperson & Prosecutor",
      image: "https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGVhZGVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NDc0Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      responsibilities: [
        "Assist and deputise for Chairperson",
        "Member and Prosecutor in disciplinary proceedings",
        "Carry out functions assigned by Executive",
        "Support organizational leadership",
        "Handle designated responsibilities"
      ],
      icon: Shield,
      color: "red"
    },
    {
      name: "Secretary General",
      position: "Secretary General",
      role: "Administrative Officer of TDR",
      image: "https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGVhZGVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NDc0Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      responsibilities: [
        "Communicate decisions of all TDR structures",
        "Keep minutes of organizational activities",
        "Conduct Executive Committee correspondence",
        "Convey decisions to Branch Executives",
        "Present comprehensive organizational assessments",
        "Coordinate Branch Secretary activities"
      ],
      icon: BookOpen,
      color: "green"
    },
    {
      name: "Treasurer General",
      position: "Treasurer General",
      role: "Chief Custodian of Funds and Property",
      image: "https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGVhZGVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NDc0Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      responsibilities: [
        "Receive and bank all organizational monies",
        "Maintain accurate financial records",
        "Submit financial reports to AGM",
        "Work out and execute fundraising plans",
        "Control petty cash operations",
        "Co-signatory in organization bank account"
      ],
      icon: Shield,
      color: "red"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide Tau Dia Rora in its mission to restore and preserve our cultural heritage.
          </p>
        </div>

        {/* Founder - Featured Large Format */}
        <div className="mb-16">
          <Card className="overflow-hidden border-4 border-red-600 shadow-2xl">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Founder Image - Larger */}
                <div className="lg:w-2/5 relative">
                  <ImageWithFallback
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <Crown className="w-10 h-10 text-yellow-400" />
                      <Badge variant="secondary" className="bg-red-600 text-white text-lg px-4 py-2">
                        FOUNDER
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-red-200 text-lg">{founder.role}</p>
                  </div>
                </div>

                {/* Founder Content - Expanded */}
                <div className="lg:w-3/5 p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        The Visionary Leader
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        As the founder and driving force behind Tau Dia Rora, Mr. P.E. Mollo embodies the 
                        principles of Ubuntu and cultural preservation. His courageous decision to break away 
                        from a group that no longer aligned with his values led to the creation of an organization 
                        truly dedicated to community empowerment and cultural restoration.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Under his leadership, TDR has grown from a small group of like-minded individuals to 
                        a registered NPO with a comprehensive constitutional framework and democratic governance structure.
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Leadership Achievements</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {founder.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Responsibilities */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {founder.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-gray-600">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Leadership Quote */}
                    <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-lg border-l-4 border-red-600">
                      <blockquote className="text-gray-700 italic">
                        "Our motto is to maintain high morale and discipline, and our goals revolve around 
                        returning our culture to its roots. We believe in the true meaning of the saying that 
                        'It takes a village to raise a child.'"
                      </blockquote>
                      <footer className="text-gray-600 text-sm mt-2 font-medium">- Mr. P.E. Mollo, Founder</footer>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Leadership Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Executive Leadership Team</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {otherLeaders.map((leader, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-red-600">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-1/3 relative">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 bg-${leader.color}-600 rounded-full flex items-center justify-center`}>
                        <leader.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                      <Badge variant="secondary" className={`bg-${leader.color}-100 text-${leader.color}-700 mb-2`}>
                        {leader.position}
                      </Badge>
                      <p className="text-gray-600 font-medium">{leader.role}</p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {leader.responsibilities.slice(0, 4).map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                        {leader.responsibilities.length > 4 && (
                          <li className="text-sm text-gray-500 italic">
                            ...and {leader.responsibilities.length - 4} more responsibilities
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-red-50 to-green-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with Our Leadership</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our leadership team is committed to transparency and open communication with all members and 
                the community. Reach out to us for any inquiries or to learn more about our initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                  <Mail className="w-5 h-5" />
                  <span>info@taudiarora.org</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                  <Phone className="w-5 h-5" />
                  <span>+27 XXX XXX XXXX</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Organizational Structure Note */}
        <div className="mt-12">
          <Card className="border-dashed border-2 border-gray-300">
            <CardContent className="p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Democratic Leadership</h4>
              <p className="text-gray-600 text-sm">
                All executive positions are elected democratically every 2 years through secret ballot or as members see fit. 
                Elections are presided over by an independent person with assistance from the founding member.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}