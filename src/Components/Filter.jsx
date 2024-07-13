import { useSetRecoilState } from "recoil";
import { filterBox } from "../Store/recoilLogic";

function Filter(){
    const setFilter = useSetRecoilState(filterBox);
    return(
    <>
        <input type="text" placeholder="Filter" onChange={(e)=>setFilter(e.target.value)}></input>
    </>
)
}

export default Filter;