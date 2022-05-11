import { Note } from "../components/Note";
import { Container } from './style'
import { useState, useEffect } from "react";

export function Main() {
    function datatimeRandom() {
        return((new Date().getTime() / 1000) * Math.random());
    }  
    const [notesList, setNotesList] = useState([
        <Note 
            id={datatimeRandom()} 
            key={datatimeRandom()}
            handleDeleteNote = {handleDeleteNote}
        />])

    function handleNewNote() {
        setNotesList([...notesList, 
        <Note 
            id={datatimeRandom()} 
            key={datatimeRandom()} 
            handleDeleteNote = {handleDeleteNote}
        />])     
    }

    function handleDeleteNote(id:number) {
        console.log(notesList)
        console.log(notesList.filter(note => note.props.id !== id ))
        /* setNotesList(notesList.filter((note) => {
            if(note.props.id !== id){
                return true
            }else {
                return false
            }
        })) */
    }
    return(
        <Container>
            <button onClick={handleNewNote}>Nova nota</button>
            {notesList.map((note) => <div>{note.props.id}{note}</div>)}
        </Container>
    )
}