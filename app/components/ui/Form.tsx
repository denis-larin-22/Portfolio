'use client'

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ReportMessage } from "./ReportMessage";
import { useLanguage } from "@/app/lib/LanguageContext";

function Form() {
    const { t } = useLanguage();
    const inputStyles = 'bg-[#000] outline-none border-[1px] border-[#121212] rounded-2xl px-2.5 md:px-5 py-2.5 focus:border-m-green-light duration-500';
    const initInputState = {
        name: '',
        email: '',
        text: ''
    };
    const [inputValue, setInputValue] = useState(initInputState);
    const [sendingStatus, setSendingStatus] = useState({
        isVissible: false,
        status: true
    });

    const showStatus = (status: boolean) => {
        setSendingStatus({ isVissible: true, status });
        setTimeout(() => {
            setSendingStatus({ isVissible: false, status: true });
            if (status) setInputValue(initInputState);
        }, 3000)
    }

    const btnHandler = (e: FormEvent) => {
        e.preventDefault();

        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputValue)
        })
            .then((res) => showStatus(res.ok))
            .catch((err) => {
                console.log('FAILED...', err);
                showStatus(false);
            })
    }

    return (
        <>
            <AnimatePresence>
                {sendingStatus.isVissible &&
                    <motion.div
                        className="relative z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <ReportMessage
                            isSuccess={sendingStatus.status}
                            successMessage={t.form.sent}
                            errorMessage={t.form.error}
                        />
                    </motion.div>
                }
            </AnimatePresence>

            <motion.form className="w-full lg:w-[75%] mx-auto px-4 lg:px-[2em] py-4 lg:py-[1.6em]">
                <p className="text-lg md:text-2xl text-center opacity-70">{t.form.title}</p>
                <div className="text-xs md:text-base text-slate-300 flex flex-col">
                    <input
                        type="text"
                        className={inputStyles + " mt-5"}
                        placeholder={t.form.name}
                        value={inputValue.name}
                        onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
                    />
                    <input
                        type="email"
                        className={inputStyles + " my-2 md:my-5"}
                        placeholder={t.form.email}
                        value={inputValue.email}
                        onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
                    />
                    <textarea
                        rows={5} cols={33}
                        placeholder={t.form.message}
                        className={inputStyles}
                        value={inputValue.text}
                        onChange={(e) => setInputValue({ ...inputValue, text: e.target.value })}
                    />
                    <AnimatePresence>
                        {
                            inputValue.name && inputValue.email && inputValue.text &&
                            <motion.button
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                onClick={btnHandler}
                                className="py-3 mt-5 rounded-md border-2 border-m-green/40 max-w-64 w-full self-center text-slate-300 hover:bg-m-green/50 hover:text-black duration-200"
                            >
                                {t.form.send}
                            </motion.button>
                        }
                    </AnimatePresence>
                </div>
            </motion.form>
        </>
    )
}

export default Form;