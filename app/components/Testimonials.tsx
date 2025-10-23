'use client';

import { Card } from '@/app/components/ui/card';
import testimonialsData from '@/app/data/testimonials.json';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {testimonialsData.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.testimonials.map((testimonial, i) => (
            <Card key={i} className="p-8 flex flex-col">
              <div className="mb-6 flex-1">
                <p className="text-lg italic text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
