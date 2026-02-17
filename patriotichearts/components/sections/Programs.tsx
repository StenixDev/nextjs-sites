"use client";

import { Briefcase, Heart, Car, Sparkles, Home, Cross } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { PROGRAMS } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase,
  heart: Heart,
  car: Car,
  sparkles: Sparkles,
  home: Home,
  cross: Cross,
};

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Programs"
          subtitle="Comprehensive support for America's veterans and their families"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => {
            const Icon = iconMap[program.icon];
            return (
              <Card
                key={program.id}
                className="h-full border-t-4 border-t-patriotic-red hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mr-4 ${
                      index % 2 === 0 ? "bg-patriotic-navy" : "bg-patriotic-red"
                    }`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-patriotic-navy">
                    {program.title}
                  </h3>
                </div>

                <p className="text-patriotic-red font-medium text-sm mb-2">
                  {program.tagline}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA for more programs */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Want to support these programs? Every donation makes a difference.
          </p>
          <Button variant="primary" size="lg" href="#donate">
            Support Our Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
