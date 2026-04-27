import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleMapsSection from '@/components/GoogleMapsSection';
import ContactInfo from '@/components/ContactInfo';

function LocationsPage() {
  return (
    <>
      <Helmet>
        <title>Our Location - Cross X Fitness Box</title>
        <meta name="description" content="Find Cross X Fitness Box in Pragati Nagar, Hyderabad. Visit us today for a premium fitness experience." />
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
                Our Location
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Visit our premium gym facility in Pragati Nagar, Hyderabad
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full"
              >
                <ContactInfo />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-full"
              >
                <GoogleMapsSection />
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default LocationsPage;
