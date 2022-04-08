import { SuperannuationCalculationType } from '././superannuationCalculationType';
import { SuperannuationContributionType } from '././superannuationContributionType';

export class SuperLine {
    /**
    * Xero super membership ID
    */
    'superMembershipID'?: string;
    'contributionType'?: SuperannuationContributionType;
    'calculationType'?: SuperannuationCalculationType;
    /**
    * amount of minimum earnings
    */
    'minimumMonthlyEarnings'?: number;
    /**
    * expense account code
    */
    'expenseAccountCode'?: string;
    /**
    * liabilty account code
    */
    'liabilityAccountCode'?: string;
    /**
    * percentage for super line
    */
    'percentage'?: number;
    /**
    * Super membership amount
    */
    'amount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "superMembershipID",
            "baseName": "SuperMembershipID",
            "type": "string"
        },
        {
            "name": "contributionType",
            "baseName": "ContributionType",
            "type": "SuperannuationContributionType"
        },
        {
            "name": "calculationType",
            "baseName": "CalculationType",
            "type": "SuperannuationCalculationType"
        },
        {
            "name": "minimumMonthlyEarnings",
            "baseName": "MinimumMonthlyEarnings",
            "type": "number"
        },
        {
            "name": "expenseAccountCode",
            "baseName": "ExpenseAccountCode",
            "type": "string"
        },
        {
            "name": "liabilityAccountCode",
            "baseName": "LiabilityAccountCode",
            "type": "string"
        },
        {
            "name": "percentage",
            "baseName": "Percentage",
            "type": "number"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SuperLine.attributeTypeMap;
    }
}

