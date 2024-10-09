import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Мини-группа «Лайт»",
    description: "Для тех, кто хочет без чрезмерной нагрузки",
    price: 550,
    originalPrice: 750,
    features: [
      "Занятия 2 раза в неделю по 120 минут",
      "Пробники раз в месяц",
      "Домашка с экспертной проверкой меньшего объема",
      "Ежедневная отработка 1 и 2 частей",
    ],
  },
  {
    name: "Мини-группа «Про»",
    description: "Для тех, кто хочет поступить на бюджет",
    price: 650,
    originalPrice: 850,
    features: [
      "Занятия 2 раза в неделю по 120 минут",
      "Пробники раз в месяц",
      "Домашка с экспертной проверкой",
      "Ежедневная отработка 1 и 2 частей",
    ],
  },
  {
    name: "Индивидуальный",
    description: "Для тех, кто предпочитает индивидуально",
    price: 1900,
    originalPrice: 2300,
    features: [
      "Индивидуальные занятия 2 раза в неделю по 90 минут",
      "Пробники раз в месяц",
      "Индивидуальная траектория обучения",
      "Домашка с экспертной проверкой",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-8  text-center">
        У всех разные цели —<br />у нас разные тарифы
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">
                {plan.price}₽{" "}
                <span className="text-lg line-through text-gray-400">
                  {plan.originalPrice}₽
                </span>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                за 1 занятие до 20.05
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">В корзину</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
