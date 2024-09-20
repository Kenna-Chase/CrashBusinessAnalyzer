import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import "./DataEntryForm.css"

const ExpenseForm = () => {

    const [salaries, setSalaries] = useState({
        sales: '',
        owners: '',
        supervision_general: '',
        supervision_parts: '',
        supervision_office: '',
        other_general: '',
        other_office: '',
    });

    const [operatingExpenses, setOperatingExpenses] = useState({
        employee_benefits: '',
        compensation_insurance: '',
        payroll_taxes: '',
        miscellaneous: ''
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Salaries:', salaries);
        console.log('Operating Expenses:', operatingExpenses);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Data Entry - Expense Form</h2>

            {/* Salaries Section */}
            <fieldset>
                <legend>Salaries, Wages, Commissions</legend>
                <div>
                    <label>
                        Compensation - Sales/Estimators
                        <NumericFormat
                            value={salaries.sales}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                setSalaries({...salaries, sales: floatValue});
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Compensation - Owners
                        <NumericFormat
                            value={salaries.owners}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                setSalaries({...salaries, owners: floatValue});
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Compensation - Supervision - General
                        <NumericFormat
                            value={salaries.supervision_general}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                setSalaries({...salaries, supervision_general: floatValue});
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Compensation - Supervision - Parts
                        <NumericFormat
                            value={salaries.supervision_parts}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                setSalaries({...salaries, supervision_parts: floatValue});
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Compensation - Supervision - Office
                        <NumericFormat
                            value={salaries.supervision_office}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                setSalaries({...salaries, supervision_office: floatValue});
                            }}
                        />
                    </label>
                </div>
            </fieldset>

            {/* Operating Expenses Section */}
            <fieldset>
                <legend>Operating Expenses</legend>
                <div>
                    <label>
                        Employee Benefits and Welfare
                        <NumericFormat
                            value={operatingExpenses.employee_benefits}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                setOperatingExpenses({...operatingExpenses, employee_benefits: floatValue });
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Workmen's Compensation and Insurance
                        <NumericFormat
                            value={operatingExpenses.compensation_insurance}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const { floatValue } = values;
                                setOperatingExpenses({ ...operatingExpenses, compensation_insurance: floatValue });
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Payroll Taxes
                        <NumericFormat
                            value={operatingExpenses.payroll_taxes}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const { floatValue } = values;
                                setOperatingExpenses({ ...operatingExpenses, payroll_taxes: floatValue });
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Miscellaneous
                        <NumericFormat
                            value={operatingExpenses.miscellaneous}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const { floatValue } = values;
                                setOperatingExpenses({ ...operatingExpenses, miscellaneous: floatValue });
                            }}
                        />
                    </label>
                </div>
            </fieldset>

            {/* Submit Button */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default ExpenseForm;
