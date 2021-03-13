import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/custom-error'

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .send({ errors: err.serializeErrors() })
    }

    console.error(
        '\n<----- TICKETING ERROR ----->\n\n',
        err,
        '\n\n<----- TICKETING ERROR ----->\n'
    )

    res.status(400).send({
        errors: [{ message: 'Something went wrong' }],
    })
}
