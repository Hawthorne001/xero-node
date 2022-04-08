
export class ReimbursementLine {
    /**
    * Xero identifier for payroll reimbursement
    */
    'reimbursementTypeID'?: string;
    /**
    * Reimbursement line description
    */
    'description'?: string;
    /**
    * Reimbursement amount
    */
    'amount'?: number;
    /**
    * Rate per unit for leave earnings line
    */
    'ratePerUnit'?: number;
    /**
    * Leave earnings number of units
    */
    'numberOfUnits'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reimbursementTypeID",
            "baseName": "reimbursementTypeID",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "ratePerUnit",
            "baseName": "ratePerUnit",
            "type": "number"
        },
        {
            "name": "numberOfUnits",
            "baseName": "numberOfUnits",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ReimbursementLine.attributeTypeMap;
    }
}

