import { Pagination } from '././pagination';
import { Task } from '././task';

export class Tasks {
    'pagination'?: Pagination;
    'items'?: Array<Task>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Task>"
        }    ];

    static getAttributeTypeMap() {
        return Tasks.attributeTypeMap;
    }
}

