'use client'

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ReportMessage } from "./ReportMessage";

function Form() {
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

    const btnHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(inputValue);

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (serviceID && templateID && publicKey) {
            emailjs.send(serviceID, templateID, inputValue, { publicKey: publicKey })
                .then(() => {
                    setSendingStatus({ isVissible: true, status: true });
                    setTimeout(() => {
                        // Sending status pop-up
                        setSendingStatus({ isVissible: false, status: true });
                        // Clear form inputs
                        setInputValue(initInputState);
                    }, 3000)
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                    setSendingStatus({ isVissible: true, status: false });
                    setTimeout(() => {
                        setSendingStatus({ isVissible: false, status: true });
                    }, 3000)
                })
        } else {
            console.log('No keys found for the request!');
            setSendingStatus({ isVissible: true, status: false });
            setTimeout(() => {
                setSendingStatus({ isVissible: false, status: true });
            }, 3000)
        }
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
                            successMessage="Sent"
                            errorMessage="Something went wrong"
                        />
                    </motion.div>
                }
            </AnimatePresence>

            <motion.form className="w-full lg:w-[75%] mx-auto px-4 lg:px-[2em] py-4 lg:py-[1.6em] rounded-b-2xl lg:rounded-2xl bg-m-grey-bg hover:ring-1 hover:ring-m-green-light duration-700">
                <p className="text-lg md:text-2xl opacity-70 text-m-green">Follow the <span className="text-white"> white rabbit</span> and contact me</p>
                <div className="text-xs md:text-base text-slate-300 flex flex-col">
                    <input
                        type="text"
                        className={inputStyles + " mt-5"}
                        placeholder="Name"
                        value={inputValue.name}
                        onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
                    />
                    <input
                        type="email"
                        className={inputStyles + " my-5"}
                        placeholder="Email"
                        value={inputValue.email}
                        onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
                    />
                    <textarea
                        rows={5} cols={33}
                        placeholder="Your message"
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
                                Send
                            </motion.button>
                        }
                    </AnimatePresence>
                </div>
            </motion.form>
        </>
    )
}

export default Form;