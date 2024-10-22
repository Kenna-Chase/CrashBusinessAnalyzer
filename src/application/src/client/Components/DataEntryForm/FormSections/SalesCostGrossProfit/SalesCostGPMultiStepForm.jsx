import React, { useState } from "react";
import { Provider } from "./SalesCostGPFormContext";
import { Steps } from "antd";
import Labor from "./Labor";
import PartsAndMaterials from "./PartsAndMaterials";
import Other from "./Other";
import OtherAdditionsAndDeductions from "./OtherAdditionsAndDeductions";


const { Step } = Steps;

const renderStep = (step) => {
    switch (step) {
        //Sections of the Sales Cost GP Portion of Form
        case 0:
            return <Labor />;
        case 1:
            return <PartsAndMaterials />;
        case 2:
            return <Other />;
        case 3:
            return <OtherAdditionsAndDeductions />;
        default:
            return null;
    }
};

const BalanceSheetMultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const next = () => {
        if (currentStep === 3) {
            setCurrentStep(0);
            return;
        }
        setCurrentStep(currentStep + 1);
    };
    const prev = () => {
        if (currentStep === 0) {
            setCurrentStep(3);
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
            <Provider value={{next, prev}}>
                <h1> Sales / Cost / Gross Profit  </h1>
                <div className="steps-format-container">
                    <Steps current={currentStep} type="navigation" onChange={onChange}>
                        <Step title={"Labor"}/>
                        <Step title={"Parts & Materials"}/>
                        <Step title={"Other"}/>
                        <Step title={"Other Additions and Deductions"}/>
                    </Steps>
                    <main>{renderStep(currentStep)}</main>
                </div>
            </Provider>
        </div>

    );
};
export default BalanceSheetMultiStepForm;
