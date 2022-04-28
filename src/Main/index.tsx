import { Container } from "./style"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {useState} from "react";

export function Main() {
    const [noteValue, setNoteValue] = useState('')

    function handleInput(event:any){
        let element = event.target
        setNoteValue(element.value);

        while (element.scrollHeight < element.offsetHeight && element.rows > 5) {
            element.rows -= 1;
        }
        while (element.scrollHeight > element.offsetHeight) {
            element.rows += 1;
        }     
    }

    return(
        <Container>
            <textarea 
            onInput={handleInput}
            name="" id="" cols={30} rows={5}></textarea>
            <ReactMarkdown 
                children={noteValue}
                remarkPlugins={[remarkGfm]}
            />
        </Container>
    )
}