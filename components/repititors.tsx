"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import repit1 from "@/app/static/repit1.png";

export default function Repititors() {
  const [selected, setSelected] = useState<Array<number>>([0]);
  const items = [
    "Русский язык",
    "Обществознание",
    "Физика",
    "История",
    "Биология",
    "Литература",
    "Химия",
    "Информатика",
    "Профильная математика",
  ];

  return (
    <section className="py-16 bg-[#F7F3FF]">
      <div className="bg-[#F8F7FF] gap-x-[12px] flex flex-row px-4 md:px-8 lg:px-12 font-sans max-w-[1440px] mx-auto">
        <div className="bg-[#7F56D9] flex flex-col w-[594px] h-[542px] rounded-3xl p-6 md:p-10 lg:p-16 text-white mb-8">
          <div className="flex flex-col w-full h-[176px]">
            <div className="text-[40px] h-[33px] font-bold text-nowrap flex flex-row ">
              Репетиторы
              <h1 className="text-[#BC9CFB] ml-4">
                ЕГЭ <ChevronDown className="inline-block w-8 h-8" />
              </h1>
              ,
            </div>
            <h2 className="text-[40px] h-[33px] font-bold ">с которыми</h2>
            <h2 className="text-[40px] h-[33px] font-bold ">чувствуешь себя</h2>

            <h2 className="text-[40px] h-[33px] font-bold mb-8">уверенно</h2>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelected((selected) => {
                    if (selected.includes(index)) {
                      // Удаляем элемент из массива выбранных
                      return selected.filter((i) => i !== index);
                    } else {
                      // Добавляем элемент в массив выбранных
                      return [...selected, index];
                    }
                  })
                }
                className={`${
                  index in selected
                    ? "bg-white text-[#874EFA]"
                    : "bg-[#874EFA] hover:bg-[#9560ff] duration-200 transition-colors text-[#fff]"
                }  text-[16px] h-[45px] flex items-center px-6 py-3 rounded-[10px] font-medium text-lg`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-[16px] flex w-[594px] flex-col">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white h-[129px] rounded-xl p-6 flex items-center space-x-6"
            >
              <Image
                src={repit1}
                alt="Tutor"
                className="w-24 h-24 rounded-[24px] object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold">Ирина Беляева</h3>
                <p className="text-[#6941C6] text-lg">
                  Репетитор ЕГЭ по русскому языку
                </p>
                <p className="text-gray-600">Средний результат: 87 баллов</p>
                <p className="text-gray-600">Опыт работы: 8 лет</p>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <div className="text-[20px] ml-[16px] h-[48px] flex flex-col font-semibold mb-2">
              <h3>30+ преподавателей подготовят</h3>
              <h3>тебя к ЕГЭ по русскому</h3>
            </div>
            <a
              href="#"
              className="text-[#6941C6] underline ml-[16px] mt-[12px] font-medium text-lg"
            >
              Смотреть всех
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
