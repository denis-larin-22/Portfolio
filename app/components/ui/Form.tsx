'use client'

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Form() {
    const inputStyles = 'bg-[#000] outline-none border-[1px] border-[#121212] rounded-2xl px-[20px] py-[10px] focus:border-m-green-light duration-500';
    const [isSent, setIsSent] = useState(false);
    const initInputState = {
        name: '',
        email: '',
        text: ''
    };
    const [inputValue, setInputValue] = useState(initInputState);

    const btnHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(inputValue);
    }
    return (
        <motion.form className="w-[75%] mx-auto px-[2em] py-[1.6em] rounded-2xl bg-[#12121270] hover:ring-1 hover:ring-m-green-light duration-700">
            <p className="text-2xl opacity-70 text-m-green">Follow the <span className="text-white"> white rabbit</span> and contact me</p>
            <div className="text-slate-300 flex flex-col">
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

                {isSent && <p className="mt-4 text-center text-m-md">✔ Sent</p>}
            </div>
        </motion.form>
    )
}

export default Form;