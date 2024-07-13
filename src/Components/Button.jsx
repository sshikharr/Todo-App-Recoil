import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { description1, title1, todos } from "../Store/recoilLogic";

function Button(){
    const [title, setTitle] = useRecoilState(title1);
    const [description, setDescription] = useRecoilState(description1);
    const setTodoList = useSetRecoilState(todos);
    function handleAdd(){
        const newTodo = {
            title,
            description
        }
        setTodoList((oldTodos) => [...oldTodos, newTodo]);
        setTitle("");
        setDescription("");
    }
    return(
        <>
            <button onClick={handleAdd}>Add Todo</button>
        </>
    )
}

export default Button;