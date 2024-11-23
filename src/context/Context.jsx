import {createContext,useState} from "react"
import run from "../config/Gemini";
const Context=createContext();
const ContextProvider=(props)=>{

    const [input,setInput]=useState("");
    const [result,setResult]=useState("");
    const [prevPrompt,setPrevPrompt]=useState("");
    const [recent,setRecent]=useState("");
    const [loading, setLoading]=useState(false);

    const onSent=async (prompt)=>{
        await run(prompt)
        }
        run("what is react js ?");
        
    const contextValue={

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider