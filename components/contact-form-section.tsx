"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import woman from "@/app/static/woman.png";
import woman2 from "@/app/static/woman2.png";
import vk from "@/app/static/Vk.svg";
import telegram from "@/app/static/Tg.svg";
import whatsapp from "@/app/static/Whatsapp.svg";
import rusphone from "@/app/static/rusphone.png";
import React from "react";

interface ContactFormSectionProps {
  variant: "purple" | "pink";
}

export default function ContactFormSection({
  variant,
}: ContactFormSectionProps) {
  const isPurple = variant === "purple";

  return (
    <div className="container mx-auto px-4 py-12">
      <div
        className={`${
          isPurple ? "bg-[#6b40e9]" : "bg-[#ffeef4]"
        } rounded-3xl p-8 ${
          isPurple ? "text-white" : "text-[#313762]"
        } overflow-hidden`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className={`lg:w-1/3 ${isPurple ? "pr-8" : "px-4"}`}>
            <h2 className="text-4xl font-bold mb-4">
              {isPurple ? (
                <>
                  Нужна помощь
                  <br />с выбором?
                </>
              ) : (
                "Остались вопросы?"
              )}
            </h2>
            <p className="mb-6 max-w-[338px]">
              {isPurple
                ? "Мы понимаем, как сложно подобрать специалиста, поэтому поможем закрыть все сомнения"
                : "Оставь заявку, чтобы заказать звонок, или напиши нам в мессенджер"}
            </p>
            <div className="mb-6">
              <p className="mb-2">
                {isPurple
                  ? "Или напишите нам в мессенджер"
                  : "Или сразу напишите нам"}
              </p>
              <div className="flex space-x-4">
                <Image src={vk} alt="VK" width={40} height={40} />
                <Image src={telegram} alt="Telegram" width={40} height={40} />
                <Image src={whatsapp} alt="WhatsApp" width={40} height={40} />
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 mb-8 lg:mb-0 order-first items-end lg:order-none">
            <Image
              src={isPurple ? woman : woman2}
              alt="Woman consultant"
              width={400}
              height={500}
              className="object-cover mx-auto"
            />
          </div>

          <div className="lg:w-1/3">
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Имя"
                className={`${
                  isPurple ? "bg-white text-black" : "bg-white"
                } rounded-[12px] border-none h-[61px] px-5`}
              />
              <div className="relative">
                <Input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  className={`${
                    isPurple ? "bg-white text-black" : "bg-white"
                  } rounded-[12px] border-none h-[61px] px-5 pl-12`}
                />
                <Image
                  src={rusphone}
                  alt="Russian flag"
                  width={24}
                  height={24}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 rounded-[12px]"
                />
              </div>
              <Textarea
                placeholder="Ваш вопрос"
                className={`${
                  isPurple ? "bg-white text-black" : "bg-white"
                } rounded-[12px] border-none p-5`}
                rows={4}
              />
              <Button
                className={`w-full ${
                  isPurple ? "bg-[#f15a29]" : "bg-[#f15a29]"
                } hover:bg-[#d84315] text-white rounded-xl py-3`}
              >
                Отправить
              </Button>
              <p className="text-sm text-center">
                Нажимая на кнопку, вы принимаете{" "}
                {isPurple
                  ? "условия политики обработки данных и даёте согласие на обработку персональных данных"
                  : "политику конфиденциальности"}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
