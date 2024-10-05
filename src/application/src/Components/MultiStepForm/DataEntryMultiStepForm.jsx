import React, { useState } from "react";
import { Provider } from "./DataEntryMultiStepFormContext";
import { Steps } from "antd";
import SupplementMultiStepForm from "./FormSections/SupplementToFinancialStatement/SupplementMultiStepForm";
import Home from "../Home/Home";

const { Step } = Steps;

const renderStep = (step) => {
    switch (step) {
        //Sections of the Supplement To the Financial Statement Form
        case 0:
            return <SupplementMultiStepForm />;
        case 1:
            return <Home />;
        default:
            return null;
    }
};

const DataEntryMultiStepForm = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if (currentStep === 2) {
            setCurrentStep(0);
            return;
        }
        setCurrentStep(currentStep + 1);
    };
    const prev = () => setCurrentStep(currentStep - 1);
    return (
        <Provider value={{next, prev}} >
            <h1> Overall Data Entry Attempt</h1>
            <Steps current={currentStep}
                   direction="vertical"
                   size="small"
                   steps={{
                       align: "center",
                       display: 'inline-block',
                   }}
            >
                <Step title={"Supplement to Financial Statement"}/>
                <Step title={"Balance Sheet"}/>
            </Steps>
            <main>{renderStep(currentStep)}</main>
        </Provider>
    );
};
export default DataEntryMultiStepForm;
