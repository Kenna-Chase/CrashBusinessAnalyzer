import React, { useState } from "react";
import { Provider } from "./SupplementFormContext";
import { Steps } from "antd";
import SellingGeneralAndAdministration from "./SellingGeneralAndAdministration";
import ProductionPersonnel from "./ProductionPersonnel";
import ReceivablesPayables from "./ReceivablesPayables";

const { Step } = Steps;

const renderStep = (step) => {
    switch (step) {
        //Sections of the Supplement To the Financial Statement Form
        case 0:
            return <SellingGeneralAndAdministration />;
        case 1:
            return <ProductionPersonnel />;
        case 2:
             return <ReceivablesPayables />;
        default:
            return null;
    }
};

const SupplementMultiStepForm = () => {

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
        <Provider value={{next, prev}}>
            <h1> Supplement to Financial Statement</h1>
            <Steps current={currentStep}>
                <Step title={"Selling, General, Administration"}/>
                <Step title={"Production Personnel"}/>
                <Step title={"Receivables & Payables"}/>
            </Steps>
            <main>{renderStep(currentStep)}</main>
        </Provider>
    );
};
export default SupplementMultiStepForm;
