
export class Reimbursement {
    /**
    * Xero unique identifier for a reimbursement
    */
    'reimbursementID'?: string;
    /**
    * Name of the reimbursement
    */
    'name': string;
    /**
    * Xero unique identifier for the account used for the reimbursement
    */
    'accountID': string;
    /**
    * Indicates that whether the reimbursement is active
    */
    'currentRecord'?: boolean;
    /**
    * See Reimbursement Categories
    */
    'reimbursementCategory'?: Reimbursement.ReimbursementCategoryEnum;
    /**
    * See Calculation Types
    */
    'calculationType'?: Reimbursement.CalculationTypeEnum;
    /**
    * Optional Fixed Rate Amount. Applicable when calculation type is Fixed Amount
    */
    'standardAmount'?: string;
    /**
    * Optional Type Of Units. Applicable when calculation type is Rate Per Unit
    */
    'standardTypeOfUnits'?: Reimbursement.StandardTypeOfUnitsEnum;
    /**
    * Optional Rate Per Unit. Applicable when calculation type is Rate Per Unit
    */
    'standardRatePerUnit'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reimbursementID",
            "baseName": "reimbursementID",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "accountID",
            "baseName": "accountID",
            "type": "string"
        },
        {
            "name": "currentRecord",
            "baseName": "currentRecord",
            "type": "boolean"
        },
        {
            "name": "reimbursementCategory",
            "baseName": "reimbursementCategory",
            "type": "Reimbursement.ReimbursementCategoryEnum"
        },
        {
            "name": "calculationType",
            "baseName": "calculationType",
            "type": "Reimbursement.CalculationTypeEnum"
        },
        {
            "name": "standardAmount",
            "baseName": "standardAmount",
            "type": "string"
        },
        {
            "name": "standardTypeOfUnits",
            "baseName": "standardTypeOfUnits",
            "type": "Reimbursement.StandardTypeOfUnitsEnum"
        },
        {
            "name": "standardRatePerUnit",
            "baseName": "standardRatePerUnit",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Reimbursement.attributeTypeMap;
    }
}

export namespace Reimbursement {
    export enum ReimbursementCategoryEnum {
        GST = <any> 'GST',
        NoGST = <any> 'NoGST',
        GSTInclusive = <any> 'GSTInclusive'
    }
    export enum CalculationTypeEnum {
        Unknown = <any> 'Unknown',
        FixedAmount = <any> 'FixedAmount',
        RatePerUnit = <any> 'RatePerUnit'
    }
    export enum StandardTypeOfUnitsEnum {
        Hours = <any> 'Hours',
        Km = <any> 'km'
    }
}
