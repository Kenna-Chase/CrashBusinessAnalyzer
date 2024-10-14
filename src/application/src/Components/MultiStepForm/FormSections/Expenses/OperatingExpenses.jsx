import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import expensesData from "./ExpensesStruct";
import {Button} from "antd";
import ExpensesFormContext from "./ExpensesFormContext";

const OperatingExpenses = () => {
    const {next, prev } = useContext(ExpensesFormContext);
    return (
        <div>
            <fieldset>
                <legend> Operating Expenses </legend>
                <div>
                    <label>
                        Employee Benefits And Welfare
                        (ACCT#:{expensesData.operatingExpenses.employee_benefits.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.employee_benefits.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.employee_benefits.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Workmen's Compensation And Insurance
                        (ACCT#:{expensesData.operatingExpenses.compensation_insurance.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.compensation_insurance.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.compensation_insurance.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Payroll Taxes
                        (ACCT#:{expensesData.operatingExpenses.payroll_taxes.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.payroll_taxes.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.payroll_taxes.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Towing And Delivery (Absorbed)
                        (ACCT#:{expensesData.operatingExpenses.absorbedTowingDelivery.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.absorbedTowingDelivery.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.absorbedTowingDelivery.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Car Rental (Absorbed)
                        (ACCT#:{expensesData.operatingExpenses.absorbedCarRental.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.absorbedCarRental.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.absorbedCarRental.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Advertising
                        (ACCT#:{expensesData.operatingExpenses.advertising.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.advertising.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.advertising.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Promotion - Business Development
                        (ACCT#:{expensesData.operatingExpenses.promotion.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.promotion.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.promotion.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Training Fees and Tuition
                        (ACCT#:{expensesData.operatingExpenses.trainingFees.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.trainingFees.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.trainingFees.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Seminars and Conventions
                        (ACCT#:{expensesData.operatingExpenses.seminarsConventions.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.seminarsConventions.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.seminarsConventions.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Travel
                        (ACCT#:{expensesData.operatingExpenses.travel.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.travel.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.travel.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Meals And Entertainment
                        (ACCT#:{expensesData.operatingExpenses.mealsEntertainment.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.mealsEntertainment.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.mealsEntertainment.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Company Vehicle Expense
                        (ACCT#:{expensesData.operatingExpenses.companyVehicleExpense.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.companyVehicleExpense.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.companyVehicleExpense.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Stationary And Office Supplies
                        (ACCT#:{expensesData.operatingExpenses.stationaryAndOfficeSupplies.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.stationaryAndOfficeSupplies.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.stationaryAndOfficeSupplies.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Other Supplies - Small Tools
                        (ACCT#:{expensesData.operatingExpenses.otherSuppliesSmall.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.otherSuppliesSmall.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.otherSuppliesSmall.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Telephone And Fax
                        (ACCT#:{expensesData.operatingExpenses.telephoneFax.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.telephoneFax.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.telephoneFax.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Postage
                        (ACCT#:{expensesData.operatingExpenses.postage.accountNumber})
                        <NumericFormat
                            value={expensesData.operatingExpenses.postage.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.operatingExpenses.postage.value = floatValue;
                            }}
                        />
                    </label>
                </div>

                <Button type={"default"} onClick={prev}>
                    Back
                </Button>
                <Button type={"primary"} onClick={next}>
                    Next
                </Button>
            </fieldset>
        </div>
    );
};
export default OperatingExpenses;