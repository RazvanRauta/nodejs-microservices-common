/**
 * @ @author: Razvan Rauta
 * @ Date: Mar 14 2021
 * @ Time: 22:25
 */

import { Subjects } from './subjects'
import { OrderStatus } from './types/order-status'

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated
    data: {
        id: string
        version: number
        status: OrderStatus.Created
        userId: string
        expiresAt: string
        ticket: {
            id: string
            price: number
        }
    }
}
