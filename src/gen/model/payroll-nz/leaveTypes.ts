import { LeaveType } from '././leaveType';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class LeaveTypes {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leaveTypes'?: Array<LeaveType>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem"
        },
        {
            "name": "leaveTypes",
            "baseName": "leaveTypes",
            "type": "Array<LeaveType>"
        }    ];

    static getAttributeTypeMap() {
        return LeaveTypes.attributeTypeMap;
    }
}

