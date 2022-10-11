import React from 'react';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

function CreateNotePage() {
    const navigate = useNavigate();

    function onAddNoteHandler(notes) {
        addNote(notes);
        navigate('/');
    }

    return (
        <section className='add-new-page'>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default CreateNotePage;