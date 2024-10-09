"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import heroImage from "@/app/static/hero.png";
import { ArrowUpRight, ChevronDown, Star } from "lucide-react";
import { ttRunsRegular } from "./font";
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

export default function Home() {
  //["Годовой курс", "Марафон", "Megaзабег"]
  enum ECoursePayType {
    perOne = "perOne",
    perMonth = "perMonth",
    perYear = "perYear",
  }
  const courses = [
    {
      name: "Годовой курс",
      price: "450",
      description: "Флагманский курс Репетиторской империи",
      image: person1,
      tags: ["Марафон", "Megaзабег", "ОГЭ"],
      payType: ECoursePayType.perOne,
      backgroundColor: "bg-[#F03C7C]",
    },
    {
      name: "Марафон",
      price: "3 990",
      description: "Повтори всю программу ЕГЭ за месяц до сдачи экзаменов",
      image: person2,
      tags: ["Годовой курс", "Megaзабег"],
      payType: ECoursePayType.perMonth,
      backgroundColor: "bg-[#E85E3E]",
    },
    {
      name: "Megaзабег",
      price: "1 290",
      description: "Интенсивная подготовка за неделю до экзаменов",
      image: person3,
      tags: ["Годовой курс", "Марафон"],
      payType: ECoursePayType.perYear,
      backgroundColor: "bg-[#7B3CFA]",
    },
  ];

  return (
    <div className={`relative ${ttRunsRegular.variable}`}>
      <section>
        <AspectRatio ratio={1440 / 710}>
          <Image
            src={heroImage}
            alt="Student studying"
            layout="fill"
            objectFit="cover"
            className="brightness-[0.85]"
          />

          <div className="absolute ml-[120px] inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="mb-4 text-lg font-semibold text-white flex flex-row items-center gap-x-1">
                Я ученик <ChevronDown className="text-white pt-1" />
              </p>
              <h1 className="mb-4 text-4xl flex flex-row text-nowrap font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                Готовим к ЕГЭ и ОГЭ
              </h1>
              <h1 className="mb-4 text-4xl truncate w-full font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                с любого уровня
              </h1>
              <h1 className="mb-4 text-4xl flex flex-row text-nowrap font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                до нужного результата
              </h1>

              <p className="mb-8 text-xl text-white">
                Без стресса, от 340 ₽ за занятие
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button className="h-[46px]">Пробный урок</Button>
                <Button
                  variant="outline"
                  className="border-white h-[46px] text-white hover:text-black hover:bg-white"
                >
                  Записаться со скидкой
                </Button>
              </div>
            </div>
          </div>
        </AspectRatio>
      </section>
      {/* ! TODO: Сделать отдельный элемент  */}
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
      <section className="py-16 bg-[#F7F3FF]">
        <div className="container mx-auto px-4  my-[20px]">
          <h2 className="text-3xl flex flex-col  font-bold mb-0">
            <p>Выбирай курс, который</p>
            <div className="flex flex-grow space-x-2">
              <p>приведет тебя</p>
              <p className="text-[#7B3CFA]">к цели</p>
            </div>
          </h2>
          <div className="flex  justify-end mb-4">
            <Button
              variant="default"
              className="rounded-[10px] text-white  font-bold bg-[#313762] mr-2"
            >
              ЕГЭ
            </Button>
            <Button
              variant="default"
              className="text-[#313762] bg-white font-bold rounded-[10px]"
            >
              ОГЭ
            </Button>
          </div>
          <div className="grid justify-between h-[519px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white w-[432px]  h-full rounded-[40px] overflow-hidden"
              >
                <div
                  className={`w-[432px] items-end justify-center flex h-[240px] ${course.backgroundColor}`}
                >
                  <Image
                    src={course.image}
                    alt={`Instructor for ${course.name}`}
                    width={432}
                    height={240}
                    className="w-[280px] h-[200px]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex space-x-2 mb-2">
                    {course.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-[6px] h-[38px] text-[16px] items-center flex"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{course.name}</h3>
                  <p className="text-sm mb-4 max-h-[42px] overflow-y-auto text-gray-600">
                    {course.description}
                  </p>
                  <div className="font-bold text-lg mb-4">
                    {course.payType === ECoursePayType.perOne ? (
                      <span>{course.price}₽ / занятие</span>
                    ) : (
                      <span>от {course.price}₽</span>
                    )}
                  </div>
                  <Button className="w-full h-[50px] bg-[#f15a29] text-white hover:bg-[#d84315] rounded-[10px] py-3">
                    Выбрать предметы
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="rounded-[12px] text-[#7B3CFA] h-[61px] px-6 py-3"
            >
              Посмотреть все курсы
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[#FCFCFC] py-16">
        <ContactFormSection variant="purple" />
      </section>
      <PlatformFeatures />
      <section className="py-16 h-[943px] bg-[#7B3CFA]"></section>
      <Repititors />
      <Reviews />
      <VideoCarousel />
      <FAQ />
      <section className="bg-[#FCFCFC] py-16">
        <ContactFormSection variant="pink" />
      </section>
    </div>
  );
}
