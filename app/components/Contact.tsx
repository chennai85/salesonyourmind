'use client';

import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import contactData from '@/app/data/contact.json';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you'd send this to a backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', serviceInterest: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {contactData.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {contactData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactData.contactMethods.map((method, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  {method.type === 'email' && <Mail className="w-6 h-6 text-primary" />}
                  {method.type === 'phone' && <Phone className="w-6 h-6 text-primary" />}
                  {method.type === 'linkedin' && <Linkedin className="w-6 h-6 text-primary" />}
                </div>
                <p className="font-semibold text-foreground mb-2">{method.label}</p>
                <a
                  href={
                    method.type === 'email'
                      ? `mailto:${method.value}`
                      : method.type === 'phone'
                        ? `tel:${method.value}`
                        : method.value
                  }
                  target={method.type === 'linkedin' ? '_blank' : undefined}
                  rel={method.type === 'linkedin' ? 'noopener noreferrer' : undefined}
                  className="text-primary hover:underline break-all"
                >
                  {method.value}
                </a>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  >
                    <option value="">Select a service</option>
                    {contactData.formFields[3]?.options?.map((option: string) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Tell me about your challenge
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Share your sales challenges..."
                />
              </div>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you! I'll get back to you soon.
                  </p>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
