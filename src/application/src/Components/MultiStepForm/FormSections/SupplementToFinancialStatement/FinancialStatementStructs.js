const supplementToFinancialStatementStruct = {
    sellingGeneralAdministration:  {
        owners: '',
        sales: '',
        supervisors: {
            general: '',
            parts: '',
            office: '',
        },
        other: {
            general: '',
            office: ''
        }
    },
    productionPersonnel: {
        technicians: {
            bodyframe: '',
            paint: '',
            detail: '',
            mechanical: '',
        },
        totalNumberOfEmployees: ''
    },
    receivables: {
        current: '',
        prev60days: '',
        prev90days: '',
        over90days: ''
    },
    payablesStruct: {
        current: '',
        prev60days: '',
        prev90days: '',
        over90days: ''
    },
    hourlyRatesandStallsStruct: {
        body: {
            hourlyLaborRate: '',
            numberOfStalls: ''
        },
        frame: {
            hourlyLaborRate: '',
            numberOfStalls: ''
        },
        paint: {
            hourlyLaborRate: '',
            numberOfStalls: ''
        },
        detail: {
            hourlyLaborRate: '',
            numberOfStalls: ''
        },
        mechanical: {
            hourlyLaborRate: '',
            numberOfStalls: ''
        }
    },
    miscellaneousForSupplement: {
        totalSquareFootageOfBuilding: '',
        totalNumberROsYTD: '',
        paintLaborHoursSoldMTD: '',
        totalPaintClockHoursMTD: '',
        numberSprayBottles: '',
        gallonsOfClearPurchased: '',
        monthlyWorkDays: '',
        monthlyEstimatesWritten: '',
        monthlyEstimatesClosed: ''
    }
}

export default supplementToFinancialStatementStruct;
