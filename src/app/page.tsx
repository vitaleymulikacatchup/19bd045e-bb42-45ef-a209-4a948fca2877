"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Home, Instagram, Linkedin, Sparkles, Star, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="radialGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891018428-car71ymd.jpg"
          logoAlt="Luxe Haven Hotel"
          brandName="Luxe Haven"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Luxe Haven"
          description="Experience timeless elegance and world-class service at our premium hotel destination"
          buttons={[
            { text: "Book Now", href: "rooms" },
            { text: "Explore", href: "amenities" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891019008-hllabvtb.jpg"
          imageAlt="Luxury hotel exterior at night"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="Established in 2010, Luxe Haven has been the premier destination for discerning travelers seeking unparalleled comfort and hospitality. Our commitment to excellence shines through every detail of your stay, from our meticulously appointed rooms to our world-class dining experiences and rejuvenating spa services."
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Our Rooms"
          description="Choose from our selection of elegantly designed rooms and suites, each offering premium comfort and modern amenities"
          tag="Accommodations"
          tagIcon={Home}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Deluxe Room",
              price: "$250/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891019522-dxdtmnk4.jpg",
              imageAlt: "Deluxe hotel room with king bed"
            },
            {
              id: "2",
              name: "Premium Suite",
              price: "$450/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891020054-xc5ravrs.jpg",
              imageAlt: "Premium suite with living area"
            },
            {
              id: "3",
              name: "Standard Room",
              price: "$180/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891020864-lvx5xzsh.jpg",
              imageAlt: "Standard comfortable hotel room"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="Premium Amenities"
          description="Discover our world-class facilities and services designed for your ultimate relaxation and convenience"
          tag="Facilities"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          features={[
            {
              title: "Luxury Spa",
              description: "Indulge in our full-service spa featuring massages, facials, and wellness treatments",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891021361-ql5wroku.jpg",
              imageAlt: "Luxury spa relaxation area"
            },
            {
              title: "Fine Dining",
              description: "Savor exquisite cuisine prepared by renowned chefs at our signature restaurants",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891021858-3h6ytooa.jpg",
              imageAlt: "Elegant fine dining restaurant"
            },
            {
              title: "Olympic Pool",
              description: "Swim in our beautifully designed pool with heated facilities and lounge areas",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891022583-oi04w26g.jpg",
              imageAlt: "Resort-style swimming pool"
            },
            {
              title: "Fitness Center",
              description: "State-of-the-art gym equipment and personal training services available",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891023326-tuiyskux.jpg",
              imageAlt: "Modern fitness center equipment"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Guest Experiences"
          description="Hear what our satisfied guests have to say about their stays at Luxe Haven"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Executive",
              company: "Corporate Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891024043-0ecu0y6q.png",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Anderson",
              role: "Travel Consultant",
              company: "Luxury Travels",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891024737-r3dvzjaw.jpg",
              imageAlt: "James Anderson"
            },
            {
              id: "3",
              name: "Emma Richardson",
              role: "Honeymoon Couple",
              company: "Romance Destination",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891025451-ket3m8pk.jpg",
              imageAlt: "Emma Richardson"
            },
            {
              id: "4",
              name: "Victoria Chen",
              role: "Wellness Coach",
              company: "Health Tourism",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763891026334-nhhucypj.jpg",
              imageAlt: "Victoria Chen"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about your stay at Luxe Haven"
          textPosition="left"
          animationType="smooth"
          buttons={[
            { text: "Still have questions? Contact us", href: "contact" }
          ]}
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport transportation for all guests. Please contact us 24 hours in advance to arrange your pickup."
            },
            {
              id: "3",
              title: "Is there free WiFi throughout the hotel?",
              content: "Complimentary high-speed WiFi is available in all guest rooms, common areas, and public spaces throughout the hotel."
            },
            {
              id: "4",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, debit cards, and wire transfers. We also offer flexible payment plans for extended stays."
            },
            {
              id: "5",
              title: "Can I cancel or modify my reservation?",
              content: "Cancellations made 7 days before arrival receive a full refund. Modifications can be made anytime at no additional cost subject to availability."
            },
            {
              id: "6",
              title: "Do you have pet-friendly rooms?",
              content: "Yes, select rooms are available for guests traveling with pets. A non-refundable pet fee of $50 per night applies. Please inform us during booking."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions or special requests? We are here to help. Reach out to our team and we will respond within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "checkIn",
              type: "date",
              placeholder: "Check-in Date",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Luxe Haven"
          copyrightText="© 2024 Luxe Haven Hotel. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Career", href: "https://www.luxehaven.com/careers" },
                { label: "Press", href: "https://www.luxehaven.com/press" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Rooms", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "https://www.luxehaven.com/dining" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://www.luxehaven.com/privacy" },
                { label: "Terms of Service", href: "https://www.luxehaven.com/terms" },
                { label: "Booking Terms", href: "https://www.luxehaven.com/booking-terms" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/luxehaven",
              ariaLabel: "Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/luxehaven",
              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/luxehaven",
              ariaLabel: "Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/luxehaven",
              ariaLabel: "LinkedIn"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}