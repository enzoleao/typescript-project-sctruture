import { NextFunction, Request, Response } from 'express'
import { AppError } from '../err/AppError'
import { verify } from 'jsonwebtoken'
import { prisma } from '../prisma'

export const valiatePermission = (permission: string) => {
  const validateTokenAndPermission = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      throw new AppError('Token missing!!', 401)
    }

    const [, token] = authHeader.split(' ')
    try {
      const { sub } = verify(token, process.env.SECRETJWT as string)
      const user = await prisma.user.findUnique({
        where: { id: sub as string },
      })
      const rolesHasPermission = await prisma.rolesHasPermissions.findMany({
        where: {
          roleId: user?.role_id,
        },
        include: {
          permission: true,
        },
      })
      const userPermissions = rolesHasPermission.map((i) => i.permission.name)
      const hasPermission = userPermissions.some((p) => p.includes(permission))

      if (!hasPermission) {
        return res.status(403).json({ message: 'Invalid Permission !!' })
      }
      next()
    } catch (err) {
      throw new AppError('Invalid token!!', 401)
    }
  }
  return validateTokenAndPermission
}
