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

export default function About() {
  return (
    <div className={`relative ${ttRunsRegular.variable}`}>
      {/* banner */}

      {/* end banner */}

      <section className="bg-[#f9f8f9] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl flex flex-col font-bold mb-8">
            <p>Стабильно высокие</p>
            <p>результаты с 2011 года</p>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
            <div className="bg-[#6b40e9] h-[492px] w-full rounded-3xl float-end p-6 flex flex-col justify-between  md:col-span-1 sm:row-span-2 lg:row-span-2">
              <ArrowUpRight className="text-[#6b40e9] bg-white p-[10px] rounded-[10px] w-[46px] h-[46px] self-end" />
              <div>
                <div className="text-5xl font-bold text-white mb-2">
                  20 000+
                </div>
                <div className="text-xl text-white">Положительных отзывов</div>
              </div>
            </div>
            <div className="bg-white rounded-3xl  flex items-center justify-center">
              <Image
                src={phone_mockup}
                alt="App screenshot"
                className="rounded-2xl h-full w-full"
              />
            </div>
            <div className="bg-[#fff3ef] rounded-3xl p-6 flex flex-col justify-between">
              <ArrowUpRight className="text-white bg-[#E85E3E] p-[10px] rounded-[10px] w-[46px] h-[46px] self-end" />
              <div className="text-4xl font-bold text-[#f15a29]">73,2%</div>
              <div className="text-sm text-gray-600">
                Учеников поступают на бюджет
              </div>
            </div>
            <div className="bg-[#FCE8EF] rounded-3xl p-6 flex flex-col justify-between">
              <ArrowUpRight className="bg-[#F03C7C] p-[10px] text-white w-[46px] h-[46px] rounded-[10px] self-end" />
              <div className="text-4xl font-bold text-[#F03C7C]">79,5%</div>
              <div className="text-sm font-bold text-[#F03C7C]">
                Средний результат в 2024 году
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 flex flex-col justify-between">
              <ArrowUpRight className="bg-[#6b40e9] p-[10px] text-white w-[46px] h-[46px] rounded-[10px] self-end" />
              <div className="text-4xl font-bold text-[#6b40e9]">750</div>
              <div className="text-sm text-gray-600">Стобалльников</div>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <ContactFormSection variant="pink" />
    </div>
  );
}
