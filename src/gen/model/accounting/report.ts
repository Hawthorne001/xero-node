import { TenNinetyNineContact } from '././tenNinetyNineContact';

export class Report {
    /**
    * See Prepayment Types
    */
    'reportName'?: string;
    /**
    * See Prepayment Types
    */
    'reportType'?: Report.ReportTypeEnum;
    /**
    * See Prepayment Types
    */
    'reportTitle'?: string;
    /**
    * Date of report
    */
    'reportDate'?: string;
    /**
    * Updated Date
    */
    'updatedDateUTC'?: Date;
    'contacts'?: Array<TenNinetyNineContact>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reportName",
            "baseName": "ReportName",
            "type": "string"
        },
        {
            "name": "reportType",
            "baseName": "ReportType",
            "type": "Report.ReportTypeEnum"
        },
        {
            "name": "reportTitle",
            "baseName": "ReportTitle",
            "type": "string"
        },
        {
            "name": "reportDate",
            "baseName": "ReportDate",
            "type": "string"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "contacts",
            "baseName": "Contacts",
            "type": "Array<TenNinetyNineContact>"
        }    ];

    static getAttributeTypeMap() {
        return Report.attributeTypeMap;
    }
}

export namespace Report {
    export enum ReportTypeEnum {
        AgedPayablesByContact = <any> 'AgedPayablesByContact'
    }
}
