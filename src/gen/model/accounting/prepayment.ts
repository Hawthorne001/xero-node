import { Allocation } from '././allocation';
import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { Payment } from '././payment';

export class Prepayment {
    /**
    * See Prepayment Types
    */
    'type'?: Prepayment.TypeEnum;
    'contact'?: Contact;
    /**
    * The date the prepayment is created YYYY-MM-DD
    */
    'date'?: string;
    /**
    * See Prepayment Status Codes
    */
    'status'?: Prepayment.StatusEnum;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * See Prepayment Line Items
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The subtotal of the prepayment excluding taxes
    */
    'subTotal'?: number;
    /**
    * The total tax on the prepayment
    */
    'totalTax'?: number;
    /**
    * The total of the prepayment(subtotal + total tax)
    */
    'total'?: number;
    /**
    * Returns Invoice number field. Reference field isn\'t available.
    */
    'reference'?: string;
    /**
    * UTC timestamp of last update to the prepayment
    */
    'updatedDateUTC'?: Date;
    'currencyCode'?: CurrencyCode;
    /**
    * Xero generated unique identifier
    */
    'prepaymentID'?: string;
    /**
    * The currency rate for a multicurrency prepayment. If no rate is specified, the XE.com day rate is used
    */
    'currencyRate'?: number;
    /**
    * The remaining credit balance on the prepayment
    */
    'remainingCredit'?: number;
    /**
    * See Allocations
    */
    'allocations'?: Array<Allocation>;
    /**
    * See Payments
    */
    'payments'?: Array<Payment>;
    /**
    * The amount of applied to an invoice
    */
    'appliedAmount'?: number;
    /**
    * boolean to indicate if a prepayment has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * See Attachments
    */
    'attachments'?: Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "Prepayment.TypeEnum"
        },
        {
            "name": "contact",
            "baseName": "Contact",
            "type": "Contact"
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "Prepayment.StatusEnum"
        },
        {
            "name": "lineAmountTypes",
            "baseName": "LineAmountTypes",
            "type": "LineAmountTypes"
        },
        {
            "name": "lineItems",
            "baseName": "LineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "subTotal",
            "baseName": "SubTotal",
            "type": "number"
        },
        {
            "name": "totalTax",
            "baseName": "TotalTax",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "Total",
            "type": "number"
        },
        {
            "name": "reference",
            "baseName": "Reference",
            "type": "string"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "currencyCode",
            "baseName": "CurrencyCode",
            "type": "CurrencyCode"
        },
        {
            "name": "prepaymentID",
            "baseName": "PrepaymentID",
            "type": "string"
        },
        {
            "name": "currencyRate",
            "baseName": "CurrencyRate",
            "type": "number"
        },
        {
            "name": "remainingCredit",
            "baseName": "RemainingCredit",
            "type": "number"
        },
        {
            "name": "allocations",
            "baseName": "Allocations",
            "type": "Array<Allocation>"
        },
        {
            "name": "payments",
            "baseName": "Payments",
            "type": "Array<Payment>"
        },
        {
            "name": "appliedAmount",
            "baseName": "AppliedAmount",
            "type": "number"
        },
        {
            "name": "hasAttachments",
            "baseName": "HasAttachments",
            "type": "boolean"
        },
        {
            "name": "attachments",
            "baseName": "Attachments",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return Prepayment.attributeTypeMap;
    }
}

export namespace Prepayment {
    export enum TypeEnum {
        RECEIVEPREPAYMENT = <any> 'RECEIVE-PREPAYMENT',
        SPENDPREPAYMENT = <any> 'SPEND-PREPAYMENT',
        ARPREPAYMENT = <any> 'ARPREPAYMENT',
        APPREPAYMENT = <any> 'APPREPAYMENT'
    }
    export enum StatusEnum {
        AUTHORISED = <any> 'AUTHORISED',
        PAID = <any> 'PAID',
        VOIDED = <any> 'VOIDED'
    }
}
