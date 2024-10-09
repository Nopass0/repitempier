"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Анна Иванова",
    subject: "Информатика: 100",
    content:
      "Ура! Наконец-то я пишу отзыв на лучший курс по подготовке к ЕГЭ по английскому с лучшим репетитором Anastasia Jones (и да, это действительно так, отзывы остальных учеников тому подтверждение)! Так как я знакома с РИ еще с 10 класса, в 11 не было сомнений, где мне готовиться к английскому. В 10 классе я прошла марафон (полугодовой курс) по английскому языку. Им...",
    image: "/placeholder.svg",
  },
  {
    name: "Иван Петров",
    subject: "Математика: 95",
    content:
      "Хочу выразить огромную благодарность за курс по математике! Я был уверен, что не смогу сдать ЕГЭ, но благодаря этому курсу я получил 95 баллов! Репетиторы были очень терпеливыми и помогали мне в каждом шаге. Я рекомендую этот курс всем, кто хочет достичь успеха в математике.",
    image: "/placeholder.svg",
  },
  {
    name: "Екатерина Сергеева",
    subject: "Русский язык: 98",
    content:
      "Я хотела бы поблагодарить за курс по русскому языку. Я была в шоке, когда получила 98 баллов на ЕГЭ! Это стало возможным только благодаря этому курсу и репетитору, который помог мне разобраться в сложных темах и подготовиться к экзамену.",
    image: "/placeholder.svg",
  },
  // ... (other reviews)
];

export default function Reviews() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-purple-600">15 000+</span> настоящих
          <br />
          отзывов учеников
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="carousel-prev">
            <span className="sr-only">Previous slide</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="carousel-next">
            <span className="sr-only">Next slide</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="rounded-[32px]">
                  <CardContent className="flex flex-col p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-[90px] w-[90px] rounded-[24px]">
                        <AvatarImage src={review.image} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 flex flex-col justify-center">
                        <h3 className="font-semibold">{review.name}</h3>
                        <span className="inline-block px-3 py-1 mt-2 text-[#7B3CFA] bg-[#EFE6FE] rounded-lg text-sm h-[37px] leading-[29px]">
                          {review.subject}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm mb-4 flex-grow">{review.content}</p>
                    <Button
                      variant="link"
                      className="text-[#7B3CFA] p-0 underline self-start"
                    >
                      Читать полностью
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-8 flex justify-between items-end">
        <div>
          <p className="mb-4 font-semibold">
            Больше отзывов ищите в нашей группе VK
          </p>
          <Button variant="outline" className="text-[#7B3CFA] border-[#7B3CFA]">
            Смотреть отзывы
          </Button>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg"
              alt="Отзовик"
              width={32}
              height={32}
            />
            <span className="ml-2 font-semibold">4.4</span>
          </div>
          <div className="flex items-center">
            <Image src="/placeholder.svg" alt="Сравни" width={32} height={32} />
            <span className="ml-2 font-semibold">4.38</span>
          </div>
        </div>
      </div>
    </section>
  );
}
