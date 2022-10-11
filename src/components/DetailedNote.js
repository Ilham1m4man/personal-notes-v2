import React from "react";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";

function DetaildeNote({ id }) {
    const { title,  createdAt, body } = getNote(id);

    return (
        <>
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{body}</div>
        </>
    )
}

export default DetaildeNote;