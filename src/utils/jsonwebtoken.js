import jwt from 'jsonwebtoken'

export const generateJwt = async (id) => {
    try {
        const token = await jwt.sign({ id }, 'shhhh');
        return token
    } catch (err) {
        return null
    }

}

export const verifyJwt = async (token) => {
    try {
        const decoded = await jwt.verify(token, 'shhhh')
        const userId = decoded.id
        return userId
    } catch (err) {
        return null
    }

}