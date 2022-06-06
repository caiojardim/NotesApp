import { createContext, useContext, useState, ReactNode } from 'react';

export interface NoteType {
    id: number;
    noteValue: string;
    isEditing: boolean;
}

interface NotesProviderProps {
    children: ReactNode
}

interface NotesProviderValue {
    Notes: Array<NoteType>;
    setNoteValue: (id: number, newNoteValue: string) => void;
    setIsEditing: (id: number, newIsEditing: boolean) => void;
    handleNewNote: () => void;
    handleDeleteNote: (id: number) => void;
}




export const NotesContext = createContext<NotesProviderValue | any>({})

export function NotesProvider({ children }: NotesProviderProps) {

    const [Notes, setNotes] = useState<NoteType[]>([{
        id: 1,
        noteValue: 'Hello World',
        isEditing: false
    }])
    
    function setNoteValue(id: number, newNoteValue: string){
        const modifiedNotes = Notes.map(Note => {
            if (Note.id == id) {
                return {
                    id: Note.id,
                    noteValue: newNoteValue,
                    isEditing: Note.isEditing
                }
            } else {
                return Note
            }
        })
        setNotes(modifiedNotes)
    }
    
    function setIsEditing(id: number, newIsEditing: boolean) {
        const modifiedNotes = Notes.map(Note => {
            if (Note.id == id) {
                return {
                    id: Note.id,
                    noteValue: Note.noteValue,
                    isEditing: newIsEditing
                }
            } else {
                return Note
            }
        })
        setNotes(modifiedNotes)
    }

    function handleNewNote() {
        console.log(Notes[Notes.length -1])
        setNotes([...Notes, {
            id: Notes[Notes.length -1].id + 1,
            noteValue: 'Hello World',
            isEditing: false
        }])
    }

    function handleDeleteNote(id:number) {
        setNotes(Notes.filter(((note) => note.id !== id)))
    }

    return (
        <NotesContext.Provider value={{Notes, setNoteValue, setIsEditing, handleNewNote, handleDeleteNote}}>
            {children}
        </NotesContext.Provider>
    )
}