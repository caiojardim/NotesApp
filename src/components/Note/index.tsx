import { Container } from "./style"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {useState, useContext} from "react";
import { NotesContext, NoteType } from '../../NotesContext'

export function Note({id, noteValue, isEditing}: NoteType) {
    const {setNoteValue, setIsEditing, handleDeleteNote} = useContext(NotesContext)

    /* const [noteValue, setNoteValue] = useState('Hello World')
    const [isEditing, setIsEditing] = useState(false) */

    function toggleIsEditing(){
        setIsEditing(id, !isEditing)
    }

    function handleInput(event:any){
        let element = event.target
        setNoteValue(id, element.value);

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
            <button type="button" onClick={() => handleDeleteNote(id)}>Delete</button>
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
                {id}
                <ReactMarkdown 
                    children={noteValue}
                    remarkPlugins={[remarkGfm]}
                />
            </div>
        </Container>
    )
}