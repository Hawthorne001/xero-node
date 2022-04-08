import { BalanceDetails } from '././balanceDetails';

/**
* Balance supplied for each account that has a value as at the conversion date.
*/
export class ConversionBalances {
    /**
    * The account code for a account
    */
    'accountCode'?: string;
    /**
    * The opening balances of the account. Debits are positive, credits are negative values
    */
    'balance'?: number;
    'balanceDetails'?: Array<BalanceDetails>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "AccountCode",
            "type": "string"
        },
        {
            "name": "balance",
            "baseName": "Balance",
            "type": "number"
        },
        {
            "name": "balanceDetails",
            "baseName": "BalanceDetails",
            "type": "Array<BalanceDetails>"
        }    ];

    static getAttributeTypeMap() {
        return ConversionBalances.attributeTypeMap;
    }
}

