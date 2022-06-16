import { UnauthenticatedError } from "../errors/index.js"
const permissions = (requestUser, userId) => {
    if(requestUser.userId === userId.toString()) return
    throw new UnauthenticatedError('No authorization')
}   

export default permissions