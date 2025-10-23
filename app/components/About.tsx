'use client';

import aboutData from '@/app/data/about.json';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="text-6xl mb-4">👤</div>
                <p className="text-muted-foreground">[Profile Photo]</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">{aboutData.title}</h2>
            <p className="text-sm font-semibold text-primary">
              {aboutData.subtitle}
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {aboutData.bio}
            </p>

            <div className="py-6 border-l-4 border-primary pl-6">
              <p className="text-xl italic text-foreground">
                "{aboutData.quote}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutData.highlights.map((highlight, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-bold text-foreground">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
