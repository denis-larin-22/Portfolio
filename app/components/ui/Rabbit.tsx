'use client'

import { motion } from "framer-motion";

interface IProps {
    className?: string
}

export const Rabbit = ({ className = "" }: IProps) => {

    return (
        <div className={className + " w-fit"}>
            <svg
                width="180" height="410"
                viewBox="0 0 210 474">
                <motion.path
                    initial={{ pathLength: 0, fill: 'rgba(255, 255, 255, 0)' }}
                    animate={{ pathLength: 1, fill: 'rgba(255, 255, 255, 0.04)' }}
                    transition={{ default: { duration: 4, ease: "easeInOut" }, delay: 2 }}
                    d="M69.2623 75.8132C66.0671 64.4055 56.8008 39.1229 45.2979 29.2539C33.7949 19.3849 21.3334 8.69356 16.5405 4.58148C6.28902 12.5403 -9.26127 38.8841 10.5494 80.5885C35.3127 132.719 42.502 137.096 41.3037 147.841C41.3037 150.228 34.9132 153.412 38.1085 162.565C38.5079 162.167 29.3215 177.687 32.1174 195.992C34.354 210.636 37.0434 217.215 38.1085 218.675C33.5818 223.185 23.4901 235.468 19.3363 248.52C17.8718 254.357 15.1026 268.02 15.7416 275.978C13.212 281.417 8.55228 295.159 10.1499 306.62C10.1499 306.222 -2.63114 344.822 10.1499 377.056C15.7416 399.739 13.7446 402.126 15.7416 413.269C17.3393 422.182 19.8688 440.859 20.9339 449.083C18.8038 450.277 15.0227 454.973 16.9398 464.205C18.857 473.437 26.7919 470.705 30.5197 468.185C33.8481 469.113 41.3037 470.413 44.499 468.185C48.0937 468.981 55.4428 469.538 56.0818 465.399C56.8806 460.226 56.8806 453.063 52.8866 449.083C52.567 449.083 52.7534 445.104 52.8866 443.114C53.9517 444.839 56.641 448.447 58.8777 449.083C61.6735 449.879 61.2741 453.859 67.6647 455.848C72.7771 457.44 77.5167 456.512 79.2475 455.848C78.3155 460.093 78.0493 469.06 84.4398 470.97C89.5522 471.925 91.8954 471.368 92.428 470.97C94.5581 472.031 100.496 473.835 107.206 472.562C108.404 472.164 119.588 473.756 121.185 470.97C122.783 468.185 122.384 459.828 117.191 457.042C117.83 457.042 120.12 453.328 121.185 451.471C125.446 450.145 135.724 448.447 142.753 452.267C149.783 456.087 150.475 455.185 149.943 454.257C151.141 456.512 154.895 461.34 160.327 462.613C167.117 464.205 173.907 465.001 176.304 461.022C177.102 459.828 185.091 463.409 184.292 455.848C183.653 449.8 181.629 445.9 180.697 444.706C194.41 432.105 218.481 400.932 205.061 377.056C205.061 374.668 207.457 335.67 171.511 308.61C170.313 301.845 170.313 293.488 166.318 284.733C165.12 281.152 163.123 270.407 156.333 261.254C150.901 253.932 142.886 249.714 139.558 248.52C141.688 248.653 144.83 247.486 140.357 241.755C135.884 236.025 132.635 232.735 131.57 231.807C138.626 231.541 154.097 229.419 159.528 223.052C160.327 221.858 171.511 222.256 173.508 212.308C175.105 204.349 172.842 199.175 171.511 197.584C172.842 191.615 172.709 178.323 161.526 172.911C161.925 172.513 160.727 148.239 137.561 137.096C114.395 125.954 118.389 125.556 96.8214 127.148C97.6203 126.75 96.8214 113.22 105.209 100.486C113.597 87.7515 116.527 46.7679 110.002 27.2642C105.209 12.9383 91.2662 1 91.2662 1C85.711 9.75474 78.1751 41.9856 75.6893 51.5387C72.8934 62.2832 69.2623 71.0379 69.2623 75.8132Z"
                    stroke="white" strokeLinecap="round" />
            </svg>

            <motion.svg
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 1, 0, 1, 1, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute top-[34%] right-[28%]"
                width="15"
                height="12"
                viewBox="0 0 36 35"
                xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_87_1072" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                    <ellipse cx="18" cy="17.5" rx="18" ry="17.5" transform="matrix(1 0 0 -1 0 35.875)" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_87_1072)">
                    <path d="M14.2661 6.28799C24.3069 6.18484 31.9179 19.6407 33.4969 25.8728C30.727 29.3208 18.0724 33.2394 10.5092 26.1643C4.4587 20.5042 3.84257 14.6199 5.73177 10.7992C5.73177 10.7992 8.70098 6.39221 14.2661 6.28799Z" fill="#00FF00" />
                    <ellipse cx="11.7" cy="20.9998" rx="1.8" ry="1.75" fill="white" fillOpacity="0.01" />
                </g>
            </motion.svg>
        </div>

    )
}