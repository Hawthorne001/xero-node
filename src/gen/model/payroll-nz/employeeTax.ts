import { TaxCode } from '././taxCode';

export class EmployeeTax {
    /**
    * The IRD Number.
    */
    'irdNumber'?: string;
    'taxCode'?: TaxCode;
    /**
    * Special tax rate percentage.
    */
    'specialTaxRatePercentage'?: number;
    /**
    * Does the employee has a special student loan rate?
    */
    'hasSpecialStudentLoanRate'?: boolean;
    /**
    * The employee student loan rate percentage.
    */
    'specialStudentLoanRatePercentage'?: number;
    /**
    * The employee eligibility for KiwiSaver.
    */
    'isEligibleForKiwiSaver'?: boolean;
    /**
    * Employer superannuation contribution tax rate.
    */
    'esctRatePercentage'?: number;
    /**
    * Contribution Option which can be \'MakeContributions\' \'OptOut\', \'OnAContributionsHoliday\', \'OnASavingsSuspension\', \'NotCurrentlyAKiwiSaverMember\' for employees without a KiwiSaver membership
    */
    'kiwiSaverContributions'?: EmployeeTax.KiwiSaverContributionsEnum;
    /**
    * Employee Contribution percentage.
    */
    'kiwiSaverEmployeeContributionRatePercentage'?: number;
    /**
    * Employer Contribution percentage.
    */
    'kiwiSaverEmployerContributionRatePercentage'?: number;
    /**
    * Employer Contribution through Salary Sacrifice percentage.
    */
    'kiwiSaverEmployerSalarySacrificeContributionRatePercentage'?: number;
    /**
    * Opt Out Date.
    */
    'kiwiSaverOptOutDate'?: string;
    /**
    * Contribution holiday expiry date or end date.
    */
    'kiwiSaverContributionHolidayEndDate'?: string;
    /**
    * Does the employee have a remaining student loan balance? Set a remaining balance if you have received a letter from IR.
    */
    'hasStudentLoanBalance'?: boolean;
    /**
    * The employee\'s student loan balance shown on the letter from IR.
    */
    'studentLoanBalance'?: number;
    /**
    * The date of the letter from IR.
    */
    'studentLoanAsAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "irdNumber",
            "baseName": "irdNumber",
            "type": "string"
        },
        {
            "name": "taxCode",
            "baseName": "taxCode",
            "type": "TaxCode"
        },
        {
            "name": "specialTaxRatePercentage",
            "baseName": "specialTaxRatePercentage",
            "type": "number"
        },
        {
            "name": "hasSpecialStudentLoanRate",
            "baseName": "hasSpecialStudentLoanRate",
            "type": "boolean"
        },
        {
            "name": "specialStudentLoanRatePercentage",
            "baseName": "specialStudentLoanRatePercentage",
            "type": "number"
        },
        {
            "name": "isEligibleForKiwiSaver",
            "baseName": "isEligibleForKiwiSaver",
            "type": "boolean"
        },
        {
            "name": "esctRatePercentage",
            "baseName": "esctRatePercentage",
            "type": "number"
        },
        {
            "name": "kiwiSaverContributions",
            "baseName": "kiwiSaverContributions",
            "type": "EmployeeTax.KiwiSaverContributionsEnum"
        },
        {
            "name": "kiwiSaverEmployeeContributionRatePercentage",
            "baseName": "kiwiSaverEmployeeContributionRatePercentage",
            "type": "number"
        },
        {
            "name": "kiwiSaverEmployerContributionRatePercentage",
            "baseName": "kiwiSaverEmployerContributionRatePercentage",
            "type": "number"
        },
        {
            "name": "kiwiSaverEmployerSalarySacrificeContributionRatePercentage",
            "baseName": "kiwiSaverEmployerSalarySacrificeContributionRatePercentage",
            "type": "number"
        },
        {
            "name": "kiwiSaverOptOutDate",
            "baseName": "kiwiSaverOptOutDate",
            "type": "string"
        },
        {
            "name": "kiwiSaverContributionHolidayEndDate",
            "baseName": "kiwiSaverContributionHolidayEndDate",
            "type": "string"
        },
        {
            "name": "hasStudentLoanBalance",
            "baseName": "hasStudentLoanBalance",
            "type": "boolean"
        },
        {
            "name": "studentLoanBalance",
            "baseName": "studentLoanBalance",
            "type": "number"
        },
        {
            "name": "studentLoanAsAt",
            "baseName": "studentLoanAsAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeTax.attributeTypeMap;
    }
}

export namespace EmployeeTax {
    export enum KiwiSaverContributionsEnum {
        MakeContributions = <any> 'MakeContributions',
        OptOut = <any> 'OptOut',
        OnAContributionsHoliday = <any> 'OnAContributionsHoliday',
        OnASavingsSuspension = <any> 'OnASavingsSuspension',
        NotCurrentlyAKiwiSaverMember = <any> 'NotCurrentlyAKiwiSaverMember'
    }
}
