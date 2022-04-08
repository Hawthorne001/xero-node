
/**
* Can be `TIME`, `FIXED` or `NON_CHARGEABLE`, defines how the task will be charged. Use `TIME` when you want to charge per hour and `FIXED` to charge as a fixed amount. If the task will not be charged use `NON_CHARGEABLE`.
*/
export enum ChargeType {
    TIME = <any> 'TIME',
    FIXED = <any> 'FIXED',
    NONCHARGEABLE = <any> 'NON_CHARGEABLE'
}
