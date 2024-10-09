"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import heroImage from "@/app/static/hero.png";
import { ArrowUpRight, ChevronDown, Star } from "lucide-react";
import { ttRunsRegular } from "../font";
import phone_mockup from "@/app/static/phone_mock.png";
import person1 from "@/app/static/person1.png";
import person2 from "@/app/static/person2.png";
import person3 from "@/app/static/person3.png";
import ContactFormSection from "@/components/contact-form-section";
import PlatformFeatures from "@/components/platform-features";
import Repititors from "@/components/repititors";
import Reviews from "@/components/review";
import VideoCarousel from "@/components/videos-carousel";
import FAQ from "@/components/faq";

export default function Product() {
  return (
    <div className={`relative ${ttRunsRegular.variable}`}>
      {/* banner */}

      {/* end banner */}
      <PlatformFeatures />
      <Repititors />
      <Reviews />
      <FAQ />
      <section className="bg-[#FCFCFC] py-16">
        <ContactFormSection variant="pink" />
      </section>
    </div>
  );
}
