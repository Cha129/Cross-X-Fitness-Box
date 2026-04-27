import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';
import GoogleMapsSection from '@/components/GoogleMapsSection';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      message: ''
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', data);
    toast.success('Message sent successfully. We will get back to you soon.', {
      style: { background: 'hsl(var(--card))', color: '#fff', border: '1px solid hsl(var(--accent))' }
    });
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Cross X Fitness Box</title>
        <meta name="description" content="Get in touch with Cross X Fitness Box. Contact us for membership inquiries, personal training, or any questions about our gym facilities in Pragati Nagar." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow py-32 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase">
                Get in Touch
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message or visit our gym.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full"
              >
                <div className="bg-card border border-border rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-full transition-transform duration-300 hover:border-border/80">
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                    Send us a message
                  </h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                {...field}
                                className="bg-background border-border text-white placeholder:text-muted-foreground focus-visible:ring-accent h-12"
                              />
                            </FormControl>
                            <FormMessage className="text-primary" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted">Phone</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+91 1234567890"
                                {...field}
                                className="bg-background border-border text-white placeholder:text-muted-foreground focus-visible:ring-accent h-12"
                              />
                            </FormControl>
                            <FormMessage className="text-primary" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us how we can help you..."
                                rows={5}
                                {...field}
                                className="bg-background border-border text-white placeholder:text-muted-foreground focus-visible:ring-accent resize-none p-4"
                              />
                            </FormControl>
                            <FormMessage className="text-primary" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary border border-transparent hover:border-accent/50 text-white font-bold px-8 py-7 text-lg rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:-translate-y-1 uppercase tracking-wider"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-10"
              >
                <div className="h-[48%]">
                  <ContactInfo />
                </div>
                <div className="h-[48%]">
                  <GoogleMapsSection />
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
