import React from "react";
import { Tab } from "@headlessui/react";
import { User, Users, Laptop, BookOpen } from "lucide-react";

const features = [
  {
    title: "Профессиональные репетиторы",
    description:
      "Мы собрали лучших репетиторов со всей страны, которые интересно и понятно объясняют материал. Их цель — высокий балл ученика на ЕГЭ и ОГЭ.",
    icon: User,
  },
  {
    title: "В мини-группах или индивидуально",
    description:
      "Выберите формат обучения, который подходит именно вам. Занимайтесь в мини-группах или индивидуально с преподавателем.",
    icon: Users,
  },
  {
    title: "Интерактивная платформа",
    description:
      "Наша современная онлайн-платформа делает обучение удобным и эффективным. Все материалы и задания доступны в любое время.",
    icon: Laptop,
  },
  {
    title: "Авторские методики",
    description:
      "Мы разработали уникальные методики подготовки, которые помогают нашим ученикам достигать высоких результатов на экзаменах.",
    icon: BookOpen,
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-8">
        Все для надежной
        <br />и эффективной подготовки
      </h2>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-8">
          {features.map((feature) => (
            <Tab
              key={feature.title}
              className={({ selected }: { selected: boolean }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                 ${
                   selected
                     ? "bg-white shadow"
                     : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                 }`
              }
            >
              {feature.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {features.map((feature, idx) => (
            <Tab.Panel
              key={idx}
              className={`rounded-xl bg-white p-3
                 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
              {idx === 0 && (
                <div className="mt-6 bg-purple-600 rounded-lg p-6 text-white">
                  <p className="font-semibold mb-2">ГАРАНТИЯ РЕЗУЛЬТАТА</p>
                  <p className="text-sm">
                    Задания будет проверять преподаватель, который ведет
                    занятия, а не кураторы-студенты.
                  </p>
                  <p className="text-sm mt-2">
                    Будьте уверены, что вас подготовит профессионал.
                  </p>
                </div>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
