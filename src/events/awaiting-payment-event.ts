/**
 * @ @author: Razvan Rauta
 * @ Date: Mar 14 2021
 * @ Time: 22:25
 */

import { Subjects } from './subjects'
import { OrderStatus } from './types/order-status'

export interface AwaitingPaymentEvent {
    subject: Subjects.AwaitingPayment
    data: {
        orderId: string
        version: number
        status: OrderStatus
    }
}
