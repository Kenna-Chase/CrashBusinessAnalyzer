import React from 'react';
import { Button } from "antd";

const SectionPage = ({ section, content, handleSubmit, generateDemoData, goBack }) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(section); // Mark section as complete and go back
    };
    const handleDemoData = (e) => {
        e.preventDefault();
        generateDemoData(section);
    };
    return (
        <div>
            {content}
            <Button type={"default"} onClick={handleDemoData}> Generate Demo Data </Button>
            <div>
                <Button type={"default"} onClick={goBack}>
                    Go Back
                </Button>
                <br/>
                <span> </span>
                <Button type={"primary"} onClick={handleFormSubmit}>
                    Save Results
                </Button>
            </div>
        </div>
    );
};

export default SectionPage;
