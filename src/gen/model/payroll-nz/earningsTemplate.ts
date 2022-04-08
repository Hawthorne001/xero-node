
export class EarningsTemplate {
    /**
    * The Xero identifier for the earnings template
    */
    'payTemplateEarningID'?: string;
    /**
    * The rate per unit
    */
    'ratePerUnit'?: number;
    /**
    * The rate per unit
    */
    'numberOfUnits'?: number;
    /**
    * The fixed amount per period
    */
    'fixedAmount'?: number;
    /**
    * The corresponding earnings rate identifier
    */
    'earningsRateID'?: string;
    /**
    * The read-only name of the Earning Template.
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "payTemplateEarningID",
            "baseName": "payTemplateEarningID",
            "type": "string"
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
        },
        {
            "name": "fixedAmount",
            "baseName": "fixedAmount",
            "type": "number"
        },
        {
            "name": "earningsRateID",
            "baseName": "earningsRateID",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EarningsTemplate.attributeTypeMap;
    }
}

