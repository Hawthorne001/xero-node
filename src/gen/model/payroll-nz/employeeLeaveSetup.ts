
export class EmployeeLeaveSetup {
    /**
    * Identifier if holiday pay will be included in each payslip
    */
    'includeHolidayPay'?: boolean;
    /**
    * Initial holiday pay balance. A percentage — usually 8% — of gross earnings since their last work anniversary.
    */
    'holidayPayOpeningBalance'?: number;
    /**
    * Initial annual leave balance. The balance at their last anniversary, less any leave taken since then and excluding accrued annual leave.
    */
    'annualLeaveOpeningBalance'?: number;
    /**
    * The dollar value of annual leave opening balance if negative.
    */
    'negativeAnnualLeaveBalancePaidAmount'?: number;
    /**
    * Number of hours accrued annually for sick leave. Multiply the number of days they\'re entitled to by the hours worked per day
    */
    'sickLeaveHoursToAccrueAnnually'?: number;
    /**
    * Maximum number of hours accrued annually for sick leave. Multiply the maximum days they can accrue by the hours worked per day
    */
    'sickLeaveMaximumHoursToAccrue'?: number;
    /**
    * Initial sick leave balance. This will be positive unless they\'ve taken sick leave in advance
    */
    'sickLeaveOpeningBalance'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "includeHolidayPay",
            "baseName": "includeHolidayPay",
            "type": "boolean"
        },
        {
            "name": "holidayPayOpeningBalance",
            "baseName": "holidayPayOpeningBalance",
            "type": "number"
        },
        {
            "name": "annualLeaveOpeningBalance",
            "baseName": "annualLeaveOpeningBalance",
            "type": "number"
        },
        {
            "name": "negativeAnnualLeaveBalancePaidAmount",
            "baseName": "negativeAnnualLeaveBalancePaidAmount",
            "type": "number"
        },
        {
            "name": "sickLeaveHoursToAccrueAnnually",
            "baseName": "sickLeaveHoursToAccrueAnnually",
            "type": "number"
        },
        {
            "name": "sickLeaveMaximumHoursToAccrue",
            "baseName": "sickLeaveMaximumHoursToAccrue",
            "type": "number"
        },
        {
            "name": "sickLeaveOpeningBalance",
            "baseName": "sickLeaveOpeningBalance",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeLeaveSetup.attributeTypeMap;
    }
}

