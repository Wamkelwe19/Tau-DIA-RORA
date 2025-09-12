import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./RunSrc/ImageWithFallback";
import { Quote, Crown, Users, Shield } from "lucide-react";

export function LeaderQuotes() {
  const quotes = [
    {
      text: "It takes a village to raise a child - this is not just a saying, but the foundation of our cultural beliefs. An entire community of people must provide for and interact positively with children for those children to experience and grow in a safe and healthy environment.",
      context: "On Community Responsibility",
      date: "2024"
    },
    {
      text: "We are confident that we can achieve our goals by returning to the traditional cultural practices of our ancestors. Our culture is not just history - it is our roadmap to a better future.",
      context: "On Cultural Restoration",
      date: "2024"
    },
    {
      text: "The dignity of our culture and traditions must be restored and respected. When we honor our heritage, we create communities that are safe and free from crime.",
      context: "On Vision for the Future",
      date: "2024"
    },
    {
      text: "Tau Dia Rora believes in unity of purpose. We are not divided by tribe, ethnicity, or gender - we are united by our common commitment to protecting our culture, beliefs, and community.",
      context: "On Unity and Inclusion",
      date: "2024"
    }
  ];

  const achievements = [
    { icon: Shield, text: "Founded TDR after standing against clan harassment", color: "red" },
    { icon: Users, text: "Built inclusive movement across all communities", color: "green" },
    { icon: Crown, text: "Established democratic leadership structure", color: "red" }
  ];

  return (
    <section id="quotes" className="py-20 bg-gradient-to-br from-red-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-red-100 text-red-700 mb-4">
            Words from Our Founder
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights and wisdom from Mr. P.E. Mollo (Pheello Mollo), the visionary founder of Tau Dia Rora.
          </p>
        </div>

        {/* Leader Profile */}
        <div className="mb-16">
          <Card className="overflow-hidden border-2 border-red-200 shadow-2xl">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Leader Image */}
                <div className="lg:w-1/3 relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGVhZGVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NDc0Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mr. P.E. Mollo - Founder of Tau Dia Rora"
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-3 mb-2">
                      <Crown className="w-8 h-8 text-yellow-400" />
                      <Badge variant="secondary" className="bg-red-600 text-white">
                        Founder & Leader
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold">Mr. P.E. Mollo</h3>
                    <p className="text-red-200">(Pheello Mollo)</p>
                  </div>
                </div>

                {/* Leader Info */}
                <div className="lg:w-2/3 p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        The Visionary Behind Tau Dia Rora
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        A leader driven by principle and unwavering commitment to cultural preservation, 
                        Mr. P.E. Mollo founded Tau Dia Rora after witnessing the need for an organization 
                        that truly protects community values and cultural integrity.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        His journey from activism to founding TDR demonstrates his dedication to creating 
                        positive change through traditional values and community unity.
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Leadership Legacy</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className={`w-10 h-10 bg-${achievement.color}-100 rounded-full flex items-center justify-center`}>
                              <achievement.icon className={`w-5 h-5 text-${achievement.color}-600`} />
                            </div>
                            <span className="text-sm text-gray-700 font-medium">{achievement.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Core Philosophy */}
                    <div className="bg-gradient-to-r from-green-50 to-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Core Philosophy</h4>
                      <p className="text-gray-700 text-sm italic">
                        "Our motto is to maintain high morale and discipline, and our goals revolve around 
                        returning our culture to its roots. We believe in the true meaning of Ubuntu - 
                        the spirit of humanitarianism and togetherness."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quotes Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-red-600">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-green-100 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                      "{quote.text}"
                    </blockquote>
                    <div className="flex justify-between items-center">
                      <div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                          {quote.context}
                        </Badge>
                      </div>
                      <span className="text-gray-500 text-sm">{quote.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-100 to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-100 to-transparent opacity-50"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Movement</h3>
              <p className="text-lg mb-6 opacity-90">
                Be part of the cultural restoration and community building initiative led by our founder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Become a Member
                </button>
                <button 
                  className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Leadership
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}