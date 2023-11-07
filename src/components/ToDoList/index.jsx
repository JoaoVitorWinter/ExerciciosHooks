import { useState, useMemo } from "react";

import Button from '../Button';

export default function ToDoList() {
    const [list, setList] = useState(new Array());
    const displayList = useMemo(() => {
        return (
            <ul className="flex flex-col justify-center gap-2 mt-6 w-full">
                {
                    list.map((item, index) => {
                        return (
                            <li className="px-4 py-2 border border-black border-1 rounded-lg w-full text-left" key={"" + item + index}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }, [list])


    const addList = () => {
        var newList = [...list];
        let inputValue = document.getElementById("listName");
        newList.push(inputValue.value);
        inputValue.value = "";
        setList(newList);
    }

    return (
        <section className="flex flex-col my-10 w-[400px] m-auto">
            <div className="flex items-end justify-between w-full">
                <div>
                    <label className="block" htmlFor="listName">Nome da lista</label>
                    <input className="px-4 py-2 border border-black border-1 rounded-lg" id="listName" />
                </div>
                <Button onClick={addList} text={"Adicionar"} />
            </div>
            {displayList}
        </section>
    )
}