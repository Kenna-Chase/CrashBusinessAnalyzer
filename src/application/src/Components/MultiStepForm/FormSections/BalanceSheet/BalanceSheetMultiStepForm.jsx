import React, { useState } from "react";
import { Provider } from "./BalanceSheetFormContext";
import {Button, Steps} from "antd";
import CurrentAssets from "./CurrentAssets";
import OtherAssets from "./OtherAssets";
import CurrentLiabilities from "./CurrentLiabilities";
import LongTermLiabilities from "./LongTermLiabilities";
import Equity from "./Equity";


const { Step } = Steps;

const renderStep = (step) => {
    switch (step) {
        //Sections of the Balance Sheet Form
        case 0:
            return <CurrentAssets />;
        case 1:
            return <OtherAssets />;
        case 2:
            return <CurrentLiabilities />;
        case 3:
            return <LongTermLiabilities />;
        case 4:
            return <Equity />;
        default:
            return null;
    }
};

const BalanceSheetMultiStepForm = () => {
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
            <Provider value={{next, prev}}>
                <h1> Balance Sheet </h1>
                <div className="steps-format-container">
                    <Steps current={currentStep} type="navigation" onChange={onChange}>
                        <Step title={"Current Assets"}/>
                        <Step title={"Other Assets"}/>
                        <Step title={"Current Liabilities"}/>
                        <Step title={"Long Term Liabilities"}/>
                        <Step title={"Equity"}/>
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
            <br/>
            <br/>
        </div>

    );
};
export default BalanceSheetMultiStepForm;
