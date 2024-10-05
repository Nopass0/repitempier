import Image from "next/image";
import { useState } from "react";

// Assuming these images exist. If not, we'll use placeholders.
// import platformWideImage from './static/platform-wide.png'
// import platformImage1 from './static/platform-image1.png'
// import platformImage2 from './static/platform-image2.png'
import featureTop from "@/app/static/feature-top.png";
import feature1 from "@/app/static/feature1.png";

const features = [
  {
    title: "Домашка с проверкой",
    description:
      "После каждого занятия  домашнее задание, оно проверяется лично репетитором; он даст обратную связь и ответит на любые вопросы.",
    image: feature1,
  },
  {
    title: "Постоянная практика",
    description:
      "В среднем 200 часов на каждую неделю задания, 15-2 часа в неделю, чтобы закрепить материал и отработать навыки.",
    image: feature1,
  },
  {
    title: "Регулярные пробники",
    description:
      "Пробники с имитацией реальной сдачи  следим за прогрессом и тренируем стрессоустойчивость в условиях, близких к реальным.",
    image: feature1,
  },
  {
    title: "Дисциплина и мотивация",
    description:
      "Мы задаем оптимальный темп обучения и следим за его соблюдением. Ты всегда будешь знать свой прогресс и зоны роста.",
    image: feature1,
  },
  {
    title: "Репетитор всегда на связи",
    description:
      "В любое время можно задать вопрос репетитору в чате и получить быстрый ответ.",
    image: feature1,
  },
];

export default function PlatformFeatures() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section className="py-16 bg-[#f9f8f9]">
      <div className="container w-[1200px] mx-auto px-4">
        <div className="text-3xl font-bold mb-8 text-center">
          <h2>Комфортная учёба</h2>
          <h2>на удобной платформе</h2>
        </div>
        <div className="mb-12">
          <Image
            src={featureTop}
            alt="Platform overview"
            width={1200}
            height={400}
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 pr-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  index === selectedFeature ? "" : "text-[#E7E8EB]"
                } mb-8`}
                onClick={() => setSelectedFeature(index)}
              >
                <h3 className="text-[32px] font-bold mb-2">{feature.title}</h3>
                <p className="text-[16px] max-w-[415px] text-wrap">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src={features[selectedFeature].image}
              alt={features[selectedFeature].title}
              width={600}
              height={600}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
