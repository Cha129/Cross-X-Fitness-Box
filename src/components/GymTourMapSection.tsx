import { MapPin } from 'lucide-react';

function GymTourMapSection() {
  const views = [
    {
      title: "Street View (Outside)",
      image: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=BqRCx347FEjyyjhD2F0phw&cb_client=lu.gallery.gps&w=160&h=106&yaw=186.49796&pitch=0&thumbfov=100",
      link: "https://www.google.com/local/place/fid/0x3bcb8f5589d4bd4b:0xa79cc452eb645faf/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DBqRCx347FEjyyjhD2F0phw%26cb_client%3Dlu.gallery.gps%26w%3D160%26h%3D106%26yaw%3D186.49796%26pitch%3D0%26thumbfov%3D100&ik=CAISFkJxUkN4MzQ3RkVqeXlqaEQyRjBwaHc%3D"
    },
    {
      title: "Gym Interior View 1",
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF2ZPe_H03xpYPE01P5WWJZJkCEu-84taFOLa1q-RJKwlcQcgqchzd-UigGdUz4GfLirY9sGZeXkmwfHKDl3j7Et5oGdBbwiWiRUpqrLC0VfT9N7bag1-rcpQCTz9JNjdZ3fFL1=w160-h106-k-no-pi-0-ya344-ro0-fo100",
      link: "https://www.google.com/local/place/fid/0x3bcb8f5589d4bd4b:0xa79cc452eb645faf/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAF2ZPe_H03xpYPE01P5WWJZJkCEu-84taFOLa1q-RJKwlcQcgqchzd-UigGdUz4GfLirY9sGZeXkmwfHKDl3j7Et5oGdBbwiWiRUpqrLC0VfT9N7bag1-rcpQCTz9JNjdZ3fFL1%3Dw160-h106-k-no-pi-0-ya344-ro0-fo100&ik=CAoSFkNJSE0wb2dLRUlDQWdJRHV0cFN1VFE%3D"
    },
    {
      title: "Gym Interior View 2",
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGlF1PwrYhO_oaBJbz84lFXNkX3HFW5qiCg9rNgEBw8Y-WwJheSVX6QOrgQF0WqV21kES0oa71d2GezMPh23B303640TotgCY-Z8ItXT5bK5ssoAoH2B3K0UuH_KdMOwKwfGcI=w160-h106-k-no-pi-0-ya270-ro0-fo100",
      link: "https://www.google.com/local/place/fid/0x3bcb8f5589d4bd4b:0xa79cc452eb645faf/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAGlF1PwrYhO_oaBJbz84lFXNkX3HFW5qiCg9rNgEBw8Y-WwJheSVX6QOrgQF0WqV21kES0oa71d2GezMPh23B303640TotgCY-Z8ItXT5bK5ssoAoH2B3K0UuH_KdMOwKwfGcI%3Dw160-h106-k-no-pi-0-ya270-ro0-fo100&ik=CAoSFkNJSE0wb2dLRUlDQWdJRHV0cFRQWWc%3D"
    },
    {
      title: "Gym Interior View 3",
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHiokjaU7Ht09brpBYDSPRyz-xzpJHGiPnxPGRLIz2gDMHg_E5iTX7fKf6FvKjm4nhpzcpDhAPxQZQZPG4Z-HUtduo80G80Agvr43COTd-IEEx7VypluRIfEVH2454TOCDnRnZx=w160-h106-k-no-pi-0-ya99.9-ro-0-fo100",
      link: "https://www.google.com/local/place/fid/0x3bcb8f5589d4bd4b:0xa79cc452eb645faf/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAHiokjaU7Ht09brpBYDSPRyz-xzpJHGiPnxPGRLIz2gDMHg_E5iTX7fKf6FvKjm4nhpzcpDhAPxQZQZPG4Z-HUtduo80G80Agvr43COTd-IEEx7VypluRIfEVH2454TOCDnRnZx%3Dw160-h106-k-no-pi-0-ya99.9-ro-0-fo100&ik=CAoSFkNJSE0wb2dLRUlDQWdJRHV0cFNpZHc%3D"
    }
  ];

  return (
    <section className="bg-[#0B0B0B] py-[40px] px-[20px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <h2 className="text-white text-[28px] font-bold text-center mb-[15px]">
          Explore Our Gym in 360°
        </h2>
        <p className="text-[#CCCCCC] text-[16px] text-center mb-[40px]">
          Take a virtual tour of our gym before you visit
        </p>

        {/* Google Map Container */}
        <div className="bg-[#0B0B0B] p-[20px] rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)] mb-[40px] border border-[#1A1A1A]">
          <iframe
            src="https://www.google.com/maps?q=cross+x+fitness+box+pragathi+nagar&output=embed"
            className="w-full h-[300px] md:h-[350px] lg:h-[450px] rounded-[12px] border-0 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            allow="geolocation"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cross X Fitness Box Location"
          ></iframe>
        </div>

        {/* Open Full Map Button */}
        <div className="flex justify-center mb-[40px]">
          <a
            href="https://www.google.com/maps/search/cross+x+fitness+box+pragathi+nagar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#FF2E2E] text-white px-[32px] py-[12px] rounded-[8px] font-bold text-[14px] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]"
          >
            <MapPin className="w-[18px] h-[18px] mr-2" />
            Open Full Map
          </a>
        </div>

        {/* Thumbnail Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[12px] md:gap-[16px] lg:gap-[20px] mt-[40px]">
          {views.map((view, index) => (
            <a
              key={index}
              href={view.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#1A1A1A] border-[2px] border-transparent rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:border-[#FFD700] hover:-translate-y-[8px] hover:shadow-[0_0_30px_rgba(255,215,0,0.4),_0_8px_20px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div className="w-full h-[150px] md:h-[180px] lg:h-[200px] overflow-hidden">
                <img 
                  src={view.image} 
                  alt={view.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-[15px] bg-[#0B0B0B] border-t border-[#333333] transition-colors duration-300 group-hover:bg-[#111111]">
                <h3 className="text-white text-[14px] font-bold text-center">
                  {view.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GymTourMapSection;
