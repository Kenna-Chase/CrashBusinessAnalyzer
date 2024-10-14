import React, { useState } from "react";
import { Provider } from "./ExpensesFormContext";
import {Button, Steps} from "antd";
import SalariesWagesCommissions from "./SalariesWagesCommissions";
import OperatingExpenses from "./OperatingExpenses";
import OutsideServices from "./OutsideServices";
import OtherOperatingExpenses from "./OtherOperatingExpenses";
import OccupancyExpenses from "./OccupancyExpenses";


const { Step } = Steps;

const renderStep = (step) => {
    switch (step) {
        //Sections of the Expenses Form
        case 0:
            return <SalariesWagesCommissions />;
        case 1:
            return <OperatingExpenses />;
        case 2:
            return <OutsideServices />;
        case 3:
            return <OtherOperatingExpenses />;
        case 4:
            return <OccupancyExpenses />;
        default:
            return null;
    }
};

const ExpensesMultiStepForm = () => {
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
                <h1> Expenses </h1>
                <div className="steps-format-container">
                    <Steps current={currentStep} type="navigation" onChange={onChange}>
                        <Step title={"S.G.A"}/>
                        <Step title={"Operating Expenses"}/>
                        <Step title={"Outside Services"}/>
                        <Step title={"O.E. Continued"}/>
                        <Step title={"Occupancy Expenses"}/>
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
export default ExpensesMultiStepForm;
