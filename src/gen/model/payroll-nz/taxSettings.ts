import { TaxCode } from '././taxCode';

export class TaxSettings {
    /**
    * The number of units for the period type
    */
    'periodUnits'?: number;
    /**
    * The type of period (\"weeks\" or \"months\")
    */
    'periodType'?: TaxSettings.PeriodTypeEnum;
    'taxCode'?: TaxCode;
    /**
    * Tax rate for STC and WT
    */
    'specialTaxRate'?: string;
    /**
    * Tax code for a lump sum amount
    */
    'lumpSumTaxCode'?: string;
    /**
    * The total of the lump sum amount
    */
    'lumpSumAmount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "periodUnits",
            "baseName": "periodUnits",
            "type": "number"
        },
        {
            "name": "periodType",
            "baseName": "periodType",
            "type": "TaxSettings.PeriodTypeEnum"
        },
        {
            "name": "taxCode",
            "baseName": "taxCode",
            "type": "TaxCode"
        },
        {
            "name": "specialTaxRate",
            "baseName": "specialTaxRate",
            "type": "string"
        },
        {
            "name": "lumpSumTaxCode",
            "baseName": "lumpSumTaxCode",
            "type": "string"
        },
        {
            "name": "lumpSumAmount",
            "baseName": "lumpSumAmount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TaxSettings.attributeTypeMap;
    }
}

export namespace TaxSettings {
    export enum PeriodTypeEnum {
        Weeks = <any> 'weeks',
        Months = <any> 'months'
    }
}
