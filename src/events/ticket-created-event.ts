/**
 * @ @author: Razvan Rauta
 * @ Date: Mar 13 2021
 * @ Time: 21:12
 */

import { Subjects } from './subjects'

export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated
    data: {
        id: string
        version: number
        title: string
        price: number
        userId: string
    }
}
