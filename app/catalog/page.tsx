"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Monitor, Search, HourglassIcon } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const courses = [
    { image: "/placeholder.svg?height=175&width=269" },
    { image: "/placeholder.svg?height=175&width=269" },
    { image: "/placeholder.svg?height=175&width=269" },
    { image: "/placeholder.svg?height=175&width=269" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3FF] py-8">
      <div className="container mx-auto w-[1200px]">
        <h1 className="text-4xl font-bold text-[#313762] mb-6">
          Каталог курсов
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Input
              placeholder="Введите название"
              className="pl-4 pr-10 h-[60px] w-[291px] bg-[#FCFCFC] border-none rounded-lg"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <Select>
            <SelectTrigger className="h-[60px] w-[291px] bg-[#FCFCFC] border-none rounded-lg">
              <SelectValue placeholder="Выберите предмет" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">Математика</SelectItem>
              <SelectItem value="russian">Русский язык</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-[60px] w-[291px] bg-[#FCFCFC] border-none rounded-lg">
              <SelectValue placeholder="Выберите класс" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 класс</SelectItem>
              <SelectItem value="6">6 класс</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-[60px] w-[291px] bg-[#FCFCFC] border-none rounded-lg">
              <SelectValue placeholder="Выберите курс" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="annual">Годовой курс</SelectItem>
              <SelectItem value="intensive">Интенсив</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-none border-none bg-[#FCFCFC] rounded-[24px]"
            >
              <CardContent className="p-0 flex h-[220px]">
                <div className="w-[269px] h-[220px] flex items-center ml-[20px] justify-center">
                  <Image
                    src={course.image}
                    alt="Course instructor"
                    width={269}
                    height={175}
                    className="object-cover bg-[#E85E3E] rounded-[20px]"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-[20px] font-semibold mb-2">
                      Годовой курс «Русский язык»
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-[#F3EEFB] text-[#7B3CFA] text-[14px] rounded-lg font-normal">
                        Хит
                      </Badge>
                      <Badge className="bg-[#F3EEFB] text-[#7B3CFA] text-[14px] rounded-lg font-normal">
                        ЕГЭ
                      </Badge>
                      <Badge className="bg-[#F3EEFB] text-[#7B3CFA] text-[14px] rounded-lg font-normal">
                        В мини-группе или индивидуально
                      </Badge>
                      <Badge className="bg-[#FAF1EE] text-[#E85E3E] text-[14px] rounded-lg font-normal">
                        Скидка 20%
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> Старт 1 июня
                      </span>
                      <span className="flex items-center gap-1">
                        <HourglassIcon className="w-4 h-4" /> 9 месяцев
                      </span>
                      <span className="flex items-center gap-1">
                        <Monitor className="w-4 h-4" /> Занятия на платформе
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button className="h-[49px] w-[123px]">В корзину</Button>
                    <div>
                      <span className="text-lg font-bold">от 450 ₽</span>
                      <span className="text-sm text-gray-600"> за занятие</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className={`w-3 h-3 rounded-full ${
                  dot === 1 ? "bg-[#7B3CFA]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
