import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Users, 
  Shield, 
  DollarSign, 
  MapPin, 
  Scale, 
  Heart, 
  Zap,
  Building,
  UserCheck
} from "lucide-react";

export function Structure() {
  const structures = [
    {
      name: "Senior Council Executive Committee",
      icon: Users,
      color: "red",
      members: [
        "Founder",
        "Chairperson", 
        "Deputy Chairperson",
        "One Representative from each TDR structure",
        "Secretary General",
        "Treasurer General"
      ],
      responsibilities: [
        "Discuss and decide any necessary issues",
        "Fill vacancies in structures (up to 50%)",
        "Deal with votes of no confidence",
        "Provide oversight and guidance"
      ]
    },
    {
      name: "Executive Council Committee", 
      icon: Shield,
      color: "green",
      members: [
        "Founder",
        "Chairperson",
        "Deputy Chairperson", 
        "Secretary General",
        "Treasurer General",
        "Branch Coordinators and Deputies",
        "Branch Secretaries"
      ],
      responsibilities: [
        "Carry out TDR policies and programmes",
        "Lead and control funds and assets",
        "Supervise and direct all TDR work",
        "Develop social cohesion programmes",
        "Audit branch functioning"
      ]
    },
    {
      name: "Disciplinary Committee",
      icon: Scale,
      color: "red", 
      members: [
        "Founder (ex-officio)",
        "TDR Chairperson (Chair)",
        "TDR Deputy Chairperson (Prosecutor)",
        "Nominated participants and observers",
        "Secretary or Deputy General"
      ],
      responsibilities: [
        "Collect facts on complaints",
        "Investigate merit of complaints", 
        "Facilitate amicable resolutions",
        "Conduct disciplinary hearings",
        "Manage discipline within TDR"
      ]
    },
    {
      name: "Finance Committee",
      icon: DollarSign,
      color: "green",
      members: [
        "All Branch Treasurers and Deputies",
        "Secretary",
        "Independent finance person (where necessary)"
      ],
      responsibilities: [
        "Manage and control TDR funds",
        "Implement financial management systems",
        "Prepare financial statements",
        "Oversee annual audits",
        "Establish financial policies"
      ]
    }
  ];

  const branches = [
    {
      name: "Branch Executive Committee",
      icon: Building,
      responsibilities: [
        "Carry out day-to-day branch activities",
        "Submit monthly/quarterly/annual programs",
        "Maintain community partnerships",
        "Support cultural activities during initiation seasons"
      ]
    },
    {
      name: "Branch Coordinators", 
      icon: MapPin,
      responsibilities: [
        "Conduct current TDR work in branches",
        "Ensure Branch Executive elections",
        "Play oversight role on branch funds",
        "Develop local social cohesion programmes"
      ]
    }
  ];

  const specialDesks = [
    {
      name: "Di Tawana Executive",
      icon: Heart,
      color: "red",
      description: "Women and Gender Desk",
      purpose: "Defend and advance the rights of women and other vulnerable genders, both inside and outside TDR",
      structure: "Same structure as TDR with programs complementing TDR objectives"
    },
    {
      name: "Youth Executive", 
      icon: Zap,
      color: "green",
      description: "Youth Desk (Ages 16-35)",
      purpose: "Unite and lead young people in confronting youth problems and ensure full contribution to TDR work",
      structure: "Operates on same structure as TDR with youth-focused programs"
    }
  ];

  return (
    <section id="structure" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Organizational Structure
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our democratic and inclusive structure ensures effective governance and representation at all levels.
          </p>
        </div>

        <Tabs defaultValue="executive" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="executive">Executive Structures</TabsTrigger>
            <TabsTrigger value="branches">Branch Structure</TabsTrigger>
            <TabsTrigger value="special">Special Desks</TabsTrigger>
          </TabsList>

          <TabsContent value="executive">
            <div className="grid lg:grid-cols-2 gap-6">
              {structures.map((structure, index) => (
                <Card key={index} className={`border-l-4 border-l-${structure.color}-600 hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-${structure.color}-100 rounded-full flex items-center justify-center`}>
                        <structure.icon className={`w-5 h-5 text-${structure.color}-600`} />
                      </div>
                      <span className="text-lg">{structure.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Members:</h4>
                        <div className="flex flex-wrap gap-1">
                          {structure.members.map((member, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {structure.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="branches">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Branch Operations</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Branches are strategic demarcations designed to make TDR manageable and effectively serve our members and communities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {branches.map((branch, index) => (
                  <Card key={index} className="border-l-4 border-l-green-600">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <branch.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <span>{branch.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {branch.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Branch Executive Committee Composition:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Branch Coordinator", "Deputy Coordinator", "Treasurers", "Secretaries", "Additional Members"].map((position, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-700">
                        {position}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="special">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Departments</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Dedicated desks ensuring representation and advocacy for specific groups within our organization.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {specialDesks.map((desk, index) => (
                  <Card key={index} className={`border-l-4 border-l-${desk.color}-600`}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-${desk.color}-100 rounded-full flex items-center justify-center`}>
                          <desk.icon className={`w-6 h-6 text-${desk.color}-600`} />
                        </div>
                        <div>
                          <h3 className="text-xl">{desk.name}</h3>
                          <p className="text-sm text-gray-600 font-normal">{desk.description}</p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                          <p className="text-gray-700 text-sm">{desk.purpose}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Structure:</h4>
                          <p className="text-gray-700 text-sm">{desk.structure}</p>
                        </div>
                        {desk.name === "Youth Executive" && (
                          <div className="bg-yellow-50 p-3 rounded-lg">
                            <p className="text-xs text-yellow-800">
                              <strong>Age Requirement:</strong> Open to all persons between 16 and 35 years
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-red-50 to-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <UserCheck className="w-6 h-6 text-gray-700" />
                    <h4 className="font-semibold text-gray-900">Integration with TDR</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Both specialized desks are integral parts of TDR with programs that complement TDR objectives. 
                    All programs must be approved by Senior Executives and cannot conflict with main organizational goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Task Force Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Task Force</h3>
                <p className="text-gray-300 mb-4">
                  The Task Force operates under the sole leadership of the Founder and to certain extent the Senior Council, 
                  with its own separate mandate for specialized operations.
                </p>
                <Badge variant="secondary" className="bg-red-600 text-white">
                  Special Operations Unit
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}