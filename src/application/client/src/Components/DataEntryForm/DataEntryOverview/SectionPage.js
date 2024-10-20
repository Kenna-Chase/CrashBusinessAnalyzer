import React from 'react';
import { Button } from "antd";

const SectionPage = ({ section, content, handleSubmit, goBack }) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(section); // Mark section as complete and go back
    };

    return (
        <div>
            {content}
            <Button type={"default"} onClick={goBack}>
                Go Back
            </Button>
            <span> </span>
            <Button type={"primary"} onClick={handleFormSubmit}>
                Save Results
            </Button>
            <div>
                <br/>
                <br/>
            </div>
        </div>
    );
};

export default SectionPage;
