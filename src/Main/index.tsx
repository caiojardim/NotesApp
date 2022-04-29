import { Container } from "./style"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {useState} from "react";

export function Main() {
    const [noteValue, setNoteValue] = useState('Hello World')
    const [isEditing, setIsEditing] = useState(false)

    function toggleIsEditing(){
        setIsEditing(!isEditing)
    }

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
            <button type="button" onClick={toggleIsEditing}>Edit</button>
            <textarea 
                onInput={handleInput}
                cols={0} 
                rows={5}
                value={noteValue}
                style={!isEditing ? {display: 'none'} : {}}
            ></textarea>
            <div
                className="markdown"
                style={isEditing ? {display: 'none'} : {}}
            >
                <ReactMarkdown 
                    children={noteValue}
                    remarkPlugins={[remarkGfm]}
                />
            </div>
        </Container>
    )
}