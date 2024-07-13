import { useRecoilValue } from "recoil";
import { filteredList, todos } from "../Store/recoilLogic";

function List(){
    const todoList = useRecoilValue(filteredList);
    console.log(todoList);
    return(
        <>
            {todoList.map((x)=>{return(<div><div>{x.title}</div><div>{x.description}</div><br></br></div>)})}
        </>
    )
}

export default List;