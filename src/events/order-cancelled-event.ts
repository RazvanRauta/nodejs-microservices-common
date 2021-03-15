/**
 * @ @author: Razvan Rauta
 * @ Date: Mar 14 2021
 * @ Time: 22:25
 */

import { Subjects } from './subjects'

export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled
    data: {
        id: string
        version: number
        ticket: {
            id: string
        }
    }
}
