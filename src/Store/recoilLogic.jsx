import { atom, selector } from "recoil";

export const title1 = atom({
    key:"title1",
    default: ""
});

export const description1 = atom({
    key:"description1",
    default: ""
});

export const todos = atom({
    key:"todos",
    default: [{title:"test", description:"test"}]
});

export const filterBox = atom({
    key:"filterBox",
    default:""
});

export const filteredList = selector({
    key:"filteredList",
    get:({get})=>{
        const oldTodos = get(todos);
        const filter = get(filterBox);
        return(
            
                oldTodos.filter(x=>x.title.includes(filter) || x.title.includes(filter))
            
        )
    }
})
