import Link from "next/link";
import Cart from "./cart";
import Logo from "./logo";
import { Button } from "./ui/button";
import { ttRunsMedium, ttRunsRegular } from "@/app/font";

export default function Header() {
  const menuItems: Array<{ label: string; href: string }> = [
    { label: "Все курсы", href: "#" },
    { label: "Репетиторы", href: "product" },
    { label: "О компании", href: "about" },
    { label: "Отзывы", href: "#" },
    { label: "Бесплатное", href: "#" },
  ];

  return (
    <header className="header my-0 w-full h-[86px] bg-white">
      <div className="h-full w-[1440px] mx-auto flex items-center">
        <Link className="ml-[26px] cursor-pointer" href="/">
          <Logo />
        </Link>
        <nav className="nav ml-[106px]">
          <ul className="flex items-center justify-between w-full">
            {menuItems.map((menuItem, index) => (
              <li key={index} className="nav-item mr-[24px]">
                <Link
                  href={menuItem.href}
                  className={`nav-link text-[16px] ${ttRunsMedium.variable} text-[#313762] font-semibold rounded-md hover:text-[#515aa0] duration-200`}
                >
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div id="btns-place" className="flex items-center flex-row ml-[106px]">
          <div
            id="btns"
            className="phone-number flex items-center flex-col float-right text-right"
          >
            <p className="text-[#313762] font-semibold w-full text-right text-[16px]">
              8 (800) 101-07-79
            </p>
            <p className="text-[#7D83B2] font-medium w-full text-right text-[14px]">
              Заказать звонок
            </p>
          </div>
          <div id="btns" className="flex flex-row gap-x-[9px] ml-[16px]">
            <Button className="font-medium text-[14px] h-[50px] w-[148px]">
              Пробный урок
            </Button>
            <Button
              variant="outline"
              className="font-semibold text-input text-[14px] h-[50px] w-[99px]"
            >
              Войти
            </Button>
          </div>
          <div className="ml-[16px] hover:bg-muted p-2 rounded-s-md cursor-pointer duration-200">
            <Cart number={2} />
          </div>
        </div>
      </div>
    </header>
  );
}
