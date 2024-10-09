"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

const videoReviews = [
  {
    id: 1,
    name: "Ирина Фадеева",
    subject: "Обществознание: 100",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Ирина Фадеева",
    subject: "Обществознание: 100",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Ирина Фадеева",
    subject: "Обществознание: 100",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Ирина Фадеева",
    subject: "Обществознание: 100",
    thumbnail: "/placeholder.svg",
  },
];

export default function VideoCarousel() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 w-full max-w-[1440px] mx-auto">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-8">
          Вот, что говорят выпускники:
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {videoReviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="rounded-[32px] overflow-hidden">
                  <CardContent className="p-0 aspect-[285/480] relative group">
                    <img
                      src={review.thumbnail}
                      alt={`${review.name} video thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <p className="text-white font-semibold">{review.name}</p>
                      <p className="text-white text-sm">{review.subject}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
