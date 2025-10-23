'use client';

import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Zap, Rocket, TrendingUp } from 'lucide-react';
import servicesData from '@/app/data/services.json';

const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap className="w-8 h-8" />,
  Rocket: <Rocket className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
};

export function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {servicesData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {servicesData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.services.map((service) => (
            <Card key={service.id} className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6 text-primary">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-primary font-semibold mb-4">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Ideal for: {service.target}
                </p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t">
                <p className="text-lg font-bold text-primary">
                  {service.pricing}
                </p>
              </div>

              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
