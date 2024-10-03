import Image from "next/image";
import Link from "next/link";
import { Facebook, Mail, Phone, Youtube } from "lucide-react";
import Logo from "./logo";
import vk from "@/app/static/Vk.svg";
import telegram from "@/app/static/Tg.svg";
import youtube from "@/app/static/Youtube.svg";
import ticktok from "@/app/static/Tiktok.svg";
import dzen from "@/app/static/Dzen.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f9f8f9] text-[#313762]">
      <div className="max-w-[1400px] mx-auto px-4 py-12 mb-[115px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1">
          {/* Logo and Social Links */}
          <div className="col-span-1 min-w-[280px] lg:col-span-1">
            <Logo className="mb-[20px]" />
            <h3 className="font-bold mb-[12px]">Полезный контент:</h3>
            <ul className="mb-[20px] text-[#313762]">
              <li>Библиотека кейсов</li>
              <li>Журнал «По факту»</li>
            </ul>
            <div className="flex space-x-[8px]">
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <Image src={vk} alt="VK" width={36} height={36} />
              </Link>
              <Link href="#" className="text-blue-400 hover:text-blue-600">
                <Image src={telegram} alt="Telegram" width={36} height={36} />
              </Link>
              <Link href="#" className="text-red-600 hover:text-red-800">
                <Image src={youtube} alt="YouTube" width={36} height={36} />
              </Link>
              <Link href="#" className="text-black hover:text-gray-800">
                <Image src={ticktok} alt="TikTok" width={36} height={36} />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-black">
                <Image src={dzen} alt="Dzen" width={36} height={36} />
              </Link>
            </div>
          </div>

          {/* Pages Links */}
          <div>
            <h3 className="font-bold mb-2">Страницы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Тарифы
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Сотрудничество
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>

          {/* EGE Links */}
          <div>
            <h3 className="font-bold mb-2 ">ЕГЭ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Полугодовой курс
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Спецкурсы
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Пробный экзамен
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Пробный урок
                </Link>
              </li>
            </ul>
          </div>

          {/* OGE Links */}
          <div>
            <h3 className="font-bold mb-2">ОГЭ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Полугодовой курс
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Бесплатная диагностика
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Пробный урок
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className=" flex items-center justify-center">
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <p className="font-medium mb-2">Ждем вашего звонка</p>
                <p className="text-2xl font-bold mb-[20px]">
                  8 (800) 101-07-79
                </p>
                <p className=" flex flex-col font-semibold mb-[20px]">
                  <span className="font-medium">Для сотрудничества:</span>{" "}
                  hr@ri-ege.ru
                </p>
                <p className="flex flex-col font-semibold mb-[20px]">
                  <span className="font-medium">Для партнерства:</span>{" "}
                  pr@ri-ege.ru
                </p>
              </div>
              <div className="mt-4 lg:mt-0">
                <p className="mb-2">Ежедневно с 09:00 до 23:00</p>
                <div className="flex space-x-[8px]">
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    <Image src={vk} alt="VK" width={40} height={40} />
                  </Link>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    <Image
                      src={telegram}
                      alt="Telegram"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-1"></div>
      </div>
      {/* Legal Information */}
      <div className="bg-[#313762] text-white h-[128px] flex items-center">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex  w-full space-x-[86px] flex-row justify-between items-center text-sm">
            <div className="flex text-left  mb-2 mt-4 space-y-[12px] flex-col w-auto text-nowrap">
              <p>ИП Шкурский Виктор Александрович</p>
              <p>ИНН 723010601463 ОГРНИП 316723200100018</p>
            </div>
            <div className="flex  mb-2 mt-4 space-y-[12px] flex-col w-auto text-nowrap">
              <p>ИП Шкурский В.А. образовательные услуги не оказывает</p>
              <p>Согласие на обработку персональных данных</p>
            </div>
            <div className="flex  mb-2 mt-4 space-y-[12px] flex-col text-left w-auto text-nowrap">
              <Link href="#" className="hover:underline">
                Политика конфиденциальности
              </Link>
              <div className="flex flex-row space-x-[16px] w-auto text-nowrap">
                <Link href="#" className="hover:underline">
                  Договор-оферта ПГК
                </Link>
                <Link href="#" className="hover:underline">
                  Договор-оферта ГК
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
