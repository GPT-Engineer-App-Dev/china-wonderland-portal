import React from 'react';
import { MapPin, Utensils, Landmark, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover China</h1>
        <p className="text-xl text-gray-600">Experience the wonders of an ancient civilization</p>
      </header>

      <section className="mb-12">
        <img src="/placeholder.svg" alt="Great Wall of China" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { title: "Rich History", icon: <Landmark className="h-6 w-6" />, description: "5,000 years of civilization" },
          { title: "Diverse Cuisine", icon: <Utensils className="h-6 w-6" />, description: "From Sichuan spice to Cantonese delicacy" },
          { title: "Iconic Landmarks", icon: <MapPin className="h-6 w-6" />, description: "Great Wall, Forbidden City, and more" },
          { title: "Natural Beauty", icon: <Camera className="h-6 w-6" />, description: "From mountains to rivers and beyond" },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Plan Your Journey to China</h2>
        <p className="text-lg mb-6">Embark on an unforgettable adventure through the Middle Kingdom</p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
          Start Exploring
        </button>
      </section>
    </div>
  );
};

export default Index;
