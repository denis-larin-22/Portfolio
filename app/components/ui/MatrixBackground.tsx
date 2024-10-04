'use client'

import React, { useRef, useEffect } from "react";

interface IMatrixBackgroundProps {
    color?: string;
    custom_class?: string;
    webVariantBg?: boolean;
}

const GREEN_COLOR = "#00FF00";

const renderMatrix = (
    ref: React.RefObject<HTMLCanvasElement>,
    color?: string,
    webBg: boolean = false
): (() => void) | undefined => {
    const canvas = ref.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const matrixVariant = katakana + latin + nums;

    const web = '< > / \ | & * ` : ; " . # @ { } [ ] ( )';

    const alphabet = webBg ? web : matrixVariant;

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const rainDrops: number[] = Array.from({ length: Math.floor(columns) }, () => 1);

    const render = () => {
        context.fillStyle = "rgba(0, 0, 0, 0.1)"; // black with slight transparency
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = color || GREEN_COLOR;
        context.font = `${fontSize}px monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(
                Math.floor(Math.random() * alphabet.length)
            );
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.9992) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    return render;
};

export const MatrixBackground: React.FC<IMatrixBackgroundProps> = ({
    color,
    custom_class = "",
    webVariantBg = false,
}) => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const render = renderMatrix(ref, color, webVariantBg);
        if (render) {
            const intervalId = setInterval(render, 45);
            return () => clearInterval(intervalId);
        }
    }, [color, webVariantBg]);

    const thisClassName = `fixed top-0 -z-10 h-dvh bg-[#1D1D1D] brightness-50 ${custom_class}`;

    return <canvas className={thisClassName} ref={ref} />;
};
