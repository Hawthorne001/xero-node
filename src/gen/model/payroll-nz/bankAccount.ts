
export class BankAccount {
    /**
    * Bank account name (max length = 32)
    */
    'accountName': string;
    /**
    * Bank account number (digits only; max length = 8)
    */
    'accountNumber': string;
    /**
    * Bank account sort code (6 digits)
    */
    'sortCode': string;
    /**
    * Particulars that appear on the statement.
    */
    'particulars'?: string;
    /**
    * Code of a transaction that appear on the statement.
    */
    'code'?: string;
    /**
    * Dollar amount of a transaction.
    */
    'dollarAmount'?: number;
    /**
    * Statement Text/reference for a transaction that appear on the statement.
    */
    'reference'?: string;
    /**
    * Calculation type for the transaction can be \'Fixed Amount\' or \'Balance\'
    */
    'calculationType'?: BankAccount.CalculationTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountName",
            "baseName": "accountName",
            "type": "string"
        },
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "sortCode",
            "baseName": "sortCode",
            "type": "string"
        },
        {
            "name": "particulars",
            "baseName": "particulars",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "dollarAmount",
            "baseName": "dollarAmount",
            "type": "number"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "calculationType",
            "baseName": "calculationType",
            "type": "BankAccount.CalculationTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BankAccount.attributeTypeMap;
    }
}

export namespace BankAccount {
    export enum CalculationTypeEnum {
        FixedAmount = <any> 'FixedAmount',
        Balance = <any> 'Balance'
    }
}
