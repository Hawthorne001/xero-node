import { Account } from '././account';
import { ConversionBalances } from '././conversionBalances';
import { ConversionDate } from '././conversionDate';

export class Setup {
    'conversionDate'?: ConversionDate;
    /**
    * Balance supplied for each account that has a value as at the conversion date.
    */
    'conversionBalances'?: Array<ConversionBalances>;
    'accounts'?: Array<Account>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conversionDate",
            "baseName": "ConversionDate",
            "type": "ConversionDate"
        },
        {
            "name": "conversionBalances",
            "baseName": "ConversionBalances",
            "type": "Array<ConversionBalances>"
        },
        {
            "name": "accounts",
            "baseName": "Accounts",
            "type": "Array<Account>"
        }    ];

    static getAttributeTypeMap() {
        return Setup.attributeTypeMap;
    }
}

