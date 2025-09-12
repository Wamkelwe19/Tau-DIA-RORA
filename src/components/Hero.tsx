import { Button } from "./ui/button";
import { ImageWithFallback } from "./RunSrc/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="src\components\HOME.jpg"
          alt="African community gathering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-green-900/60 to-red-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            TAU DIA RORA
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-200">
            Cultural and Traditional Lekgotla
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-medium">
            Restoration of Our Ancestral Culture and Tradition by Going Back to Our Roots
          </p>
          
          {/* Colors representation */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2 border-4 border-white shadow-lg"></div>
              <p className="text-sm font-medium">BOPHELO<br />Life & Unity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 border-4 border-gray-300 shadow-lg"> </div>
              <p className="text-sm font-medium">REKOPANA<br />Togetherness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-2 border-4 border-white shadow-lg"> </div>
              <p className="text-sm font-medium">KGOTSO<br />Peace</p>
            </div>
          </div>

          <blockquote className="text-lg md:text-xl italic mb-8 text-green-100">
            "It takes a village to raise a child"
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
            <Button 
           
              size="lg" 
                  className="bg-white hover:bg-white text-green-700 px-8 py-3"
              onClick={() => document.getElementById('quotes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Leader Quotes
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}