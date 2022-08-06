import { expressjwt, Request as JWTRequest } from "express-jwt";


export const auth = expressjwt({
    secret: process.env.KEY || "",
    algorithms: ['HS256']
})