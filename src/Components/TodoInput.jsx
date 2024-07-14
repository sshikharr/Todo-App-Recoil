import { useSetRecoilState } from "recoil";
import { description1, title1 } from "../Store/recoilLogic";

function TodoInput(){
    const setTitle = useSetRecoilState(title1);
    const setDescription = useSetRecoilState(description1);
    return(
        <>
            <input type="text" placeholder="Title" onChange={(e)=>setDescription(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Description" onChange={(e)=>setTitle(e.target.value)}></input>
        </>
    )
}

export default TodoInput;