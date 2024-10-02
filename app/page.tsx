import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import heroImage from "./static/hero.png";

export default function Home() {
  return (
    <div className="relative">
      <AspectRatio ratio={1440 / 710}>
        <Image
          src={heroImage}
          alt="Student studying"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.85]"
        />
      </AspectRatio>
      <div className="absolute ml-[120px] inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-4 text-lg font-semibold text-white">Я ученик ▼</p>
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
            <Button className="">Пробный урок</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:text-black hover:bg-white"
            >
              Записаться со скидкой
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
