import { Note } from "../components/Note";
import { Container } from './style'
import { useState, useEffect, useContext } from "react";
import { NotesContext, NoteType } from "../NotesContext";

export function Main() {
    /* function datatimeRandom() {
        return((new Date().getTime() / 1000) * Math.random());
    }   */


    /* function handleNewNote() {
        setNotesList([...notesList, 
        <Note 
            id={datatimeRandom()} 
            key={datatimeRandom()} 
        />])     
    } */

    /* function handleDeleteNote(id:number) {
        console.log(id)
        console.log(notesList[0].props.id)
        setNotesList(notesList.filter((function(note){return note.props.id !== id})))
    } */
    const {Notes, handleNewNote} = useContext(NotesContext)

    return(
        <Container>
            <button onClick={handleNewNote}>Nova nota</button>
            {Notes.map((note: NoteType) => 
            <Note key = {note.id}
                id={note.id} 
                noteValue={note.noteValue} 
                isEditing={note.isEditing}
            />)}
        </Container>
    )
}