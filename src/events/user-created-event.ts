/**
 * @ @author: Razvan Rauta
 * @ Date: Mar 13 2021
 * @ Time: 21:12
 */

import { Subjects } from './subjects'

export interface UserCreatedEvent {
    subject: Subjects.UserCreated
    data: {
        email: string
    }
}
