import { prisma } from '../src/prisma'
import {
  permissions,
  roles,
  rolesHasPermissions,
} from '../src/database/seeders'

async function main() {
  const rolesSeeder = await prisma.roles.createMany({
    data: roles,
  })
  const permissionsSeeder = await prisma.permissions.createMany({
    data: permissions,
  })
  const rolesHasPermissionsSeeder = await prisma.rolesHasPermissions.createMany(
    {
      data: rolesHasPermissions,
    },
  )
  console.log({ rolesSeeder, permissionsSeeder, rolesHasPermissionsSeeder })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
