/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Employee } from '././employee';

export class Employees {
    'employees'?: Array<Employee>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employees",
            "baseName": "Employees",
            "type": "Array<Employee>"
        }    ];

    static getAttributeTypeMap() {
        return Employees.attributeTypeMap;
    }
}

