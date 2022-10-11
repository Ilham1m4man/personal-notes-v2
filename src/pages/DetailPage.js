import React from 'react';
import PropTypes from 'prop-types';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import DetailedNote from '../components/DetailedNote';
import DeleteButton from '../components/buttons/DeleteButton';
import ArchiveButton from '../components/buttons/ArchiveButton';
import UnarchiveButton from '../components/buttons/UnarchiveButton';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    function onDeleteNoteHandler(notes) {
        deleteNote(notes);
        navigate('/');
    }

    function onArchiveNoteHandler(notes) {
        archiveNote(notes);
        navigate('/');
    }

    function onUnarchiveNoteHandler(notes) {
        unarchiveNote(notes);
        navigate('/');
    }

    const note = getNote(id);

    let actionArchive;
    if (note.archived) {
        actionArchive = <UnarchiveButton id={id} onUnarchive={onUnarchiveNoteHandler} />
    } else {
        actionArchive = <ArchiveButton id={id} onArchive={onArchiveNoteHandler} />
    }

    return (
        <section className='detail-page'>
            <DetailedNote note={note} />
            <div className='detail-page__action'>
                {actionArchive}
                <DeleteButton id={id} onDelete={onDeleteNoteHandler} />
            </div>
        </section>
    )
}

DetailPage.propTypes = {
    note: PropTypes.object,
    id: PropTypes.string,
}

export default DetailPage;