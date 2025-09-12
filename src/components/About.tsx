import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, Users, Heart, Scale } from "lucide-react";

export function About() {
  const objectives = [
    {
      icon: Shield,
      title: "Cultural Protection",
      description: "Protect and promote initiation rituals and traditional ceremonies while ensuring compliance with cultural laws."
    },
    {
      icon: Users,
      title: "Community Unity",
      description: "Promote social cohesion and unity among community members, initiates, and various groups."
    },
    {
      icon: Heart,
      title: "Crime Prevention",
      description: "Collaborate with law enforcement to combat crime and create safer communities through traditional values."
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Assist government with compliance and implementation of regulations relating to initiation and cultural practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Tau Dia Rora
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A cultural and traditional lekgotla dedicated to the restoration of dignity and respect for African culture and traditions.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Tau Dia Rora Cultural and Traditional Lekgotla envisions a future where the dignity of our 
                culture and traditions are restored and respected. This will lead to our communities being 
                safe and reduction in crime.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Tau Dia Rora Cultural and Traditional Lekgotla is committed to ensuring the reduction in crimes 
                and that our African culture and tradition are returned to its roots in communities where we are 
                operating. This will be done through collaboration with communities at large as well as law 
                enforcement agencies in general.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Background Story */}
        <div className="mb-16">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Our Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded by Mr. P.E. Mollo, Tau Dia Rora emerged from a commitment to protect community values 
                and cultural integrity. Originally part of a group focused on initiation school matters, 
                Mr. Mollo and several others decided to form an independent organization when their sister, 
                Moipone Mollo, was physically harassed by their previous clan.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This incident was in direct opposition to the beliefs held by Mr. Mollo and other members, 
                prompting them to disassociate themselves and form Tau Dia Rora Cultural and Traditional Lekgotla.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>NPO Registration:</strong> 283-283 | <strong>Registered with:</strong> Department of Social Development
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Objectives */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Key Objectives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <objective.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{objective.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Character Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-green-50 to-red-50">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center">Our Character</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Non-Discriminatory</h4>
                  <p className="text-sm text-gray-700">
                    We are non-tribalist, non-ethnicity, non-sexist and democratic in our approach.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Inclusive</h4>
                  <p className="text-sm text-gray-700">
                    Membership is open to all who believe and subscribe to our aims, objectives, and principles.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Diverse</h4>
                  <p className="text-sm text-gray-700">
                    We respect the linguistic, cultural and religious diversity of our members.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}