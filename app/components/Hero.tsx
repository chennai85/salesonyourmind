'use client';

import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroData from '@/app/data/hero.json';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">{heroData.badge}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {heroData.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              {heroData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection(heroData.primaryCTA.action)}
              >
                {heroData.primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection(heroData.secondaryCTA.action)}
              >
                {heroData.secondaryCTA.text}
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 pt-8">
              {heroData.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-muted-foreground">[Hero Illustration]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
