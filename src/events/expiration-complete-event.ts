/**
 * @author: Razvan Rauta
 * Date: Mar 19 2021
 * Time: 22:44
 */

import { Subjects } from './subjects'

export interface ExpirationCompleteEvent {
    subject: Subjects.ExpirationComplete
    data: {
        orderId: string
    }
}
