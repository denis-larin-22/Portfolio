"use client";

import { useRef } from "react";
import { greenGradientText, slateBgText } from "../lib/text-styles";
import TagWrap from "./ui/TagWrap";
import { motion, useInView } from "framer-motion";
import { HoverEffect } from "./ui/CardHoverEffect";

export function Reviews() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} id="reviews" className="container mt-10">
            <TagWrap tag="h5" appearanceDelay={1.5}>
                <motion.h5
                    initial={{ opacity: 0, y: 100, scale: 1.1 }}
                    animate={isInView && { opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                    className={slateBgText + " text-5xl lg:text-[78px] font-bold pb-2"}
                >
                    <span className={greenGradientText}>R</span>ev<span className={greenGradientText}>i</span>ews
                </motion.h5>
            </TagWrap>
            <motion.section
                initial={{ opacity: 0 }}
                animate={isInView && { opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
            >
                <HoverEffect items={projects} />
            </motion.section>
        </section >
    );
}


export const projects = [
    {
        title: "Юлия",
        subtitle: {
            text: 'Julia Magic Beauty',
            link: "https://julia-beauty.vercel.app/"
        },
        text:
            "Сотрудничество с Денисом по созданию моего сайта-портфолио прошло на высшем уровне. Он внимательно выслушал все мои пожелания и сразу приступил к работе, быстро уловив мой стиль и идеи. Денис также помог подобрать современный и привлекательный дизайн, который отлично отражает мои работы. Я очень довольна результатом и уже получила множество положительных отзывов от клиентов!",
    },
    {
        title: "Виталий",
        subtitle: {
            text: 'Odins shoes',
            link: "https://odin-s-2-0.vercel.app/"
        },
        text:
            "Сотрудничество с Денисом при разработке сайта-каталога было очень успешным. Изначально мы столкнулись с проблемой в администрировании сайта, и Денис предложил внедрить систему управления контентом, что полностью изменило ситуацию. Теперь обновление информации о товарах стало простым и быстрым процессом. Во время разработки все пожелания и замечания были соблюдены. Отдельная благодарность за выполнение поставленых задач иногда даже раньше поставленого срока. Результатом очень доволен!"
    },
    {
        title: "Сергей",
        text:
            "Обратился к Денису за помощью в исправлении ошибок в моем React приложении, и он сделал всё быстро и эффективно. Он быстро выявил проблемы, а после ещё и предложил дополнительные решения, которые улучшили функционал. Благодаря его помощи приложение теперь работает стабильно и даже значительно быстрее. Огромная благодарность за помощь.",
    },
    {
        title: "Мария",
        text:
            "Обратилась за помощью обновить верстку, нужно было освежить внешний вид. Задача выполнена отлично, быстро и с учётом всех моих пожеланий. Отдельное большое спасибо за крутые визуальные эффекты, анимации а также предложение использовать библиотеку готовых элементов, что значительно ускорило процесс. Спасибо за обновление))",
    }
];
