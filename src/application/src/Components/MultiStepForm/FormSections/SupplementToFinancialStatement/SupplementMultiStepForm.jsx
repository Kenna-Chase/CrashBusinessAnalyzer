import React, { useState } from "react";
import { Provider } from "./SupplementFormContext";
import {Button, Steps} from "antd";
import SellingGeneralAndAdministration from "./SellingGeneralAndAdministration";
import ProductionPersonnel from "./ProductionPersonnel";
import ReceivablesPayables from "./ReceivablesPayables";
import LaborRatesAndStalls from "./LaborRatesAndStalls";
import MiscForSupplement from "./MiscForSupplement";

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
        case 3:
            return <LaborRatesAndStalls />;
        case 4:
            return <MiscForSupplement />;
        default:
            return null;
    }
};

const SupplementMultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const next = () => {
        if (currentStep === 4) {
            setCurrentStep(0);
            return;
        }
        setCurrentStep(currentStep + 1);
    };
    const prev = () => {
        if (currentStep === 0) {
            setCurrentStep(4);
            return;
        }
        setCurrentStep(currentStep - 1);
    }
    const onChange = (value) => {
        console.log('onChange:', currentStep);
        setCurrentStep(value);
    };
    return (
        <div>
            {/*<Provider value={{overalNext, overallPrev}}>*/}
            <Provider value={{next, prev}}>
                <h1> Supplement to Financial Statement</h1>
                <div className="steps-format-container">
                    <Steps current={currentStep} type="navigation" onChange={onChange}>
                        <Step title={"Selling, General, Administration"}/>
                        <Step title={"Production Personnel"}/>
                        <Step title={"Receivables & Payables"}/>
                        <Step title={"Labor Rates & Stalls"}/>
                        <Step title={"Miscellaneous"}/>
                    </Steps>
                    <main>{renderStep(currentStep)}</main>
                </div>
            </Provider>
            <Button type={"default"} onClick={prev}>
                Back
            </Button>
            <Button type={"primary"} onClick={next}>
                Next
            </Button>
            {/*</Provider>*/}
            <br/>
            <br/>
        </div>

    );
};
export default SupplementMultiStepForm;
