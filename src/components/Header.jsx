import { nanoid } from "nanoid";
import React, { useState } from "react";

export default function Header({ todos, setTodos }) {
    const [input, setInput] = useState({
        title: "",
        content: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleAdd = () => {
        setTodos([
            {
                id: nanoid(),
                title: input.title,
                content: input.content,
            },
            ...todos,
        ]);
        setInput({
            title: "",
            content: "",
        });
    };

    return (
        <div className="todo-input relative w-full max-w-2xl m-0 mx-auto p-5 bg-white z-10 rounded-lg">

            {/* title input */}
            <input
                name="title"
                type="text"
                placeholder="Title"
                onChange={handleInputChange}
                value={input.title}
                className="w-full block border-0 outline-none m-0 p-0 bg-transparent font-semibold text-lg mb-2.5"
            />

            {/* input note */}
            <textarea
                name="content"
                placeholder="Take a note..."
                spellCheck="false"
                onChange={handleInputChange}
                value={input.content}
                className="w-full block border-0 outline-none m-0 p-0 bg-transparent font-sans resize-none text-base font-normal leading-6 min-h-[5em] max-h-[50vh]"
            ></textarea>

            {/* adding the note */}
            <button
                disabled={!(input.content || input.title)}
                style={!(input.content || input.title) ? { background: "#ec7171" } : {}}
                onClick={handleAdd}
                className="flex items-center justify-center absolute right-6 -bottom-4 bg-[#42b8ac] text-white border-none rounded-full w-9 h-9 text-2xl text-center cursor-pointer transition"
            >+</button>
        </div>
    );
}