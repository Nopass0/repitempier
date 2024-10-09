import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Как проходит обучение?",
    answer:
      "Обучение проходит онлайн через нашу интерактивную платформу. Вы будете заниматься с профессиональными репетиторами в мини-группах или индивидуально.",
  },
  {
    question: "Кто проводит занятия?",
    answer:
      "Занятия проводят опытные преподаватели, прошедшие строгий отбор. Все наши репетиторы имеют высокую квалификацию и опыт подготовки к ЕГЭ и ОГЭ.",
  },
  {
    question: "Как можно оплатить занятия?",
    answer:
      "Мы предлагаем различные способы оплаты, включая банковские карты, электронные кошельки и банковский перевод. Также доступна оплата в рассрочку.",
  },
  {
    question: "Что делать, если я не справляюсь с нагрузкой?",
    answer:
      "Не волнуйтесь! Наши преподаватели всегда готовы помочь. Вы можете обратиться к ним за дополнительной поддержкой или попросить скорректировать программу обучения.",
  },
  {
    question: "Можно ли сменить репетитора, если он мне не понравится?",
    answer:
      "Да, конечно. Мы стремимся обеспечить комфортное обучение для каждого ученика. Если вы чувствуете, что вам не подходит текущий репетитор, мы поможем подобрать другого.",
  },
  {
    question: "Какая нужна техника? Можно ли заниматься с телефона?",
    answer:
      "Для занятий вам понадобится компьютер или планшет с устойчивым интернет-соединением. Заниматься с телефона возможно, но мы рекомендуем использовать устройство с большим экраном для лучшего восприятия материала.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-8">
          Ученики нас часто спрашивают...
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Скорее всего, здесь есть ответ на твой вопрос
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Другой вопрос?</h3>
          <p className="text-gray-600 mb-4">Напишите нам:</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <img src="/vk-icon.svg" alt="VK" className="w-8 h-8" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <img
                src="/telegram-icon.svg"
                alt="Telegram"
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <img
                src="/whatsapp-icon.svg"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
