import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./RunSrc/ImageWithFallback";
import { 
  Calendar, 
  Users, 
  Shield, 
  Heart, 
  Building2, 
  Scale, 
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export function DetailedHistory() {
  const timeline = [
    {
      year: "Pre-Formation",
      title: "The Catalyst",
      description: "Mr. P.E. Mollo was part of a group focused on initiation school matters during a time of widespread violence and criminal activity in townships.",
      icon: Users,
      color: "red"
    },
    {
      year: "The Breaking Point",
      title: "Sister's Harassment",
      description: "Moipone Mollo, Mr. P.E. Mollo's sister, was physically harassed by the clan they belonged to, creating a conflict with their core beliefs.",
      icon: Shield,
      color: "red"
    },
    {
      year: "Formation Decision",
      title: "Breaking Away",
      description: "Mr. P.E. Mollo and several others decided to disassociate from their previous group and form a new organization aligned with their values.",
      icon: ArrowRight,
      color: "green"
    },
    {
      year: "2024",
      title: "Tau Dia Rora Founded",
      description: "Official formation of Tau Dia Rora Cultural and Traditional Lekgotla with NPO registration 283-283.",
      icon: Building2,
      color: "green"
    }
  ];

  const foundingPrinciples = [
    {
      title: "Cultural Protection",
      description: "Dedicated to the restoration of dignity and respect for African culture and traditions",
      icon: Shield,
      color: "red"
    },
    {
      title: "Community Safety",
      description: "Working with municipalities to implement crime prevention measures and tackle social issues",
      icon: Heart,
      color: "green"
    },
    {
      title: "Social Cohesion",
      description: "Safeguarding and enhancing unity among various groups including former addicts and offenders",
      icon: Users,
      color: "red"
    },
    {
      title: "Democratic Values",
      description: "Built on non-discriminatory, inclusive principles with respect for diversity",
      icon: Scale,
      color: "green"
    }
  ];

  const keyMilestones = [
    { milestone: "NPO Registration with Department of Social Development", status: "Completed" },
    { milestone: "Constitutional Framework Establishment", status: "Completed" },
    { milestone: "Leadership Structure Implementation", status: "Completed" },
    { milestone: "Branch Network Development", status: "In Progress" },
    { milestone: "Community Partnership Programs", status: "In Progress" },
    { milestone: "Youth and Women's Desk Establishment", status: "Completed" }
  ];

  return (
    <section id="history" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-green-100 text-green-700 mb-4">
            Our Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The History of Tau Dia Rora
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a moment of crisis to a movement of cultural restoration - the story of how principled leadership 
            created an organization dedicated to community empowerment.
          </p>
        </div>

        {/* Hero Story */}
        <div className="mb-16">
          <Card className="overflow-hidden border-2 border-green-200 shadow-xl">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                  <ImageWithFallback
                    src="/History.jpg"
                    alt="African community traditional gathering"
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-transparent"></div>
                </div>
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Genesis Story</h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      In the townships of South Africa, during a period marked by widespread violence and criminal activity, 
                      communities sought protection through clan affiliations. Mr. P.E. Mollo was part of such a group, 
                      focused primarily on matters relating to initiation schools.
                    </p>
                    <p className="leading-relaxed">
                      However, when his sister Moipone Mollo was physically harassed by members of their own clan, 
                      it became clear that the group's actions contradicted the very values they claimed to uphold. 
                      This incident became the catalyst for change.
                    </p>
                    <p className="leading-relaxed">
                      Rather than remain silent or accept the status quo, Mr. P.E. Mollo and several like-minded individuals 
                      made the difficult decision to break away and form an organization that would truly embody the principles 
                      of Ubuntu, cultural respect, and community protection.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg mt-6">
                      <p className="text-green-800 font-medium italic">
                        "Sometimes, the greatest act of leadership is knowing when to start something new rather than 
                        trying to fix what is fundamentally broken."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Formation Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
           <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 to-green-600"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className={`border-l-4 border-l-${event.color}-600 hover:shadow-lg transition-shadow`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-10 h-10 bg-${event.color}-100 rounded-full flex items-center justify-center`}>
                            <event.icon className={`w-5 h-5 text-${event.color}-600`} />
                          </div>
                          <Badge variant="secondary" className={`bg-${event.color}-100 text-${event.color}-700`}>
                            {event.year}
                          </Badge>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-white border-4 border-red-600 rounded-full z-10 relative"></div>
                  
                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founding Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Founding Principles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundingPrinciples.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-${principle.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <principle.icon className={`w-8 h-8 text-${principle.color}-600`} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{principle.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Milestones */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-red-50 to-green-50">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Development Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {keyMilestones.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className={`w-5 h-5 ${item.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`} />
                    <span className="text-gray-700 text-sm font-medium flex-1">{item.milestone}</span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-red-600 to-green-600 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Our Mission Today</h3>
              <blockquote className="text-xl mb-8 italic opacity-90 max-w-4xl mx-auto">
                "Tau Dia Rora Cultural and Traditional Lekgotla is committed to ensuring the reduction in crimes 
                and that our African culture and tradition are returned to its roots in communities where we are 
                operating. This will be done through collaboration with communities at large as well as law 
                enforcement agencies in general."
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </button>
                <button 
                  className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
                  onClick={() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Meet Our Leaders
                </button>
              </div>
              <Separator className="my-8 bg-white/20" />
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold mb-2">283-283</p>
                  <p className="text-sm opacity-75">NPO Registration Number</p>
                </div>
                <div>
                  <p className="text-2xl font-bold mb-2">2024</p>
                  <p className="text-sm opacity-75">Year of Formal Constitution</p>
                </div>
                <div>
                  <p className="text-2xl font-bold mb-2">Ubuntu</p>
                  <p className="text-sm opacity-75">Core Philosophy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}