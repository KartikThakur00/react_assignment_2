import React, { useState } from 'react'
import deleteSvg from '../images/delete.svg'
import updateSvg from '../images/edit.svg'
import tickSvg from '../images/tick.svg'
import crossSvg from '../images/cross.svg'

const TodoElements = ({ todos, setTodos }) => {
    // state for dialog box
    const [updateDialog, setUpdateDialog] = useState(false)

    // state for input
    const [input, setInput] = useState({
        id: "",
        title: "",
        content: "",
    });

    // delete todo function
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // update todo function
    const handleUpdate = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, title: input.title, content: input.content } : todo));
        setInput({
            id: "",
            title: "",
            content: "",
        });
    }

    // input change function
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    return (

        // grid of todo elements
        <div className=" grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5 my-12 mx-auto">
            {todos.map((todo) => (

                // todo element
                <div
                    className="todo-element relative p-5 bg-white border-[1px] border-solid border-[#dadce0] rounded-lg cursor-default transition-all break-words"
                    key={todo.id}>

                    {/* delete todo */}
                    <img
                        src={deleteSvg}
                        alt="delete icon"
                        onClick={() => handleDelete(todo.id)}
                        className='absolute top-4 right-4 w-5 h-5 text-gray-500 cursor-pointer opacity-0 transition-all'
                    />

                    {/* update icon */}
                    <img
                        src={updateSvg}
                        alt="update icon"
                        onClick={() => {
                            setUpdateDialog(!updateDialog);
                            setInput({ id: todo.id, title: todo.title, content: todo.content })
                        }}
                        className='absolute top-4 right-12 w-5 h-5 text-gray-500 cursor-pointer opacity-0 transition-all'
                    />


                    {/* title */}
                    <h1 className='text-lg font-semibold m-0 mb-2'>{todo.title}</h1>

                    {/* todo description */}
                    <p className='m-0 mb-2.5 font-sans whitespace-pre-wrap'>{todo.content}</p>

                </div>
            ))}

            {/* dialog box for updating */}
            <dialog open={updateDialog} className="fixed z-20 left-0 top-0 h-full w-full backdrop-blur-[2px] bg-[#00000033] " >
                <div className='flex h-full items-center justify-center'>

                    {/* <button
                        onClick={() => setUpdateDialog(!updateDialog)}
                        className="flex items-center justify-center absolute top-11 right-11 bg-[#ec7171] text-white rounded-full w-9 h-9 text-2xl cursor-pointer transition"
                        // className='absolute flex items-center justify-center top-11 right-11 p-4 text-xl bg-[#ec7171] rounded-full'
                        >
                        x
                    </button> */}

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

                        {/* close dialog */}
                        <button
                        onClick={() => setUpdateDialog(!updateDialog)}
                        className="flex items-center justify-center absolute -top-4 right-6  bg-[#ec7171] text-white rounded-full w-9 h-9 text-2xl cursor-pointer transition"
                        // className='absolute flex items-center justify-center top-11 right-11 p-4 text-xl bg-[#ec7171] rounded-full'
                        >
                        <img src={crossSvg} alt="cancel" />
                    </button>

                        {/* update the note */}
                        <button
                            disabled={!(input.content || input.title)}
                            style={!(input.content || input.title) ?{display:'none'}: { display:'block' } }
                            onClick={() => { handleUpdate(input.id); setUpdateDialog(!updateDialog) }}
                            className="flex items-center justify-center absolute right-6 -bottom-4 bg-[#42b8ac] text-white border-none rounded-full w-9 h-9 text-2xl text-center cursor-pointer transition"
                        >
                            <img src={tickSvg} alt="tick svg" />
                        </button>
                    </div>
                </div>
            </dialog>

        </div>
    );
}

export default TodoElements