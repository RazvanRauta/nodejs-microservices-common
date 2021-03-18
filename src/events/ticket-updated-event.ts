/**
 * @ @author: Razvan Rauta
 * @ Date: Mar 13 2021
 * @ Time: 21:15
 */

import { Subjects } from './subjects'

export interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated
    data: {
        id: string
        version: number
        title: string
        price: number
        userId: string
        orderId?: string
    }
}
