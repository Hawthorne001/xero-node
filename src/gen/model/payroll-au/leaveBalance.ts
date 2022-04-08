
export class LeaveBalance {
    /**
    * The name of the leave type
    */
    'leaveName'?: string;
    /**
    * Identifier of the leave type (see PayItems)
    */
    'leaveTypeID'?: string;
    /**
    * The balance of the leave available
    */
    'numberOfUnits'?: number;
    /**
    * The type of units as specified by the LeaveType (see PayItems)
    */
    'typeOfUnits'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "leaveName",
            "baseName": "LeaveName",
            "type": "string"
        },
        {
            "name": "leaveTypeID",
            "baseName": "LeaveTypeID",
            "type": "string"
        },
        {
            "name": "numberOfUnits",
            "baseName": "NumberOfUnits",
            "type": "number"
        },
        {
            "name": "typeOfUnits",
            "baseName": "TypeOfUnits",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LeaveBalance.attributeTypeMap;
    }
}

