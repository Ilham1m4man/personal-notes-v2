import React from "react";
import { Link } from "react-router-dom";

function PageNotFound404() {
    return (
        <div className="page-not-found">
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <h1>UH OH! You're lost.</h1>
            <p class="zoom-area">The <b>page</b> you are looking for does not exist.
                How you got here is a mystery. But you can click the button below
                to go back to the homepage.  </p>
            <div class="link-container">
                <Link to="/" className="more-link">Home</Link>
            </div>
        </div>
    )
}

export default PageNotFound404;