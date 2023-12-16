export const roles = [
  { name: 'Admin', hasAllPermissions: true },
  { name: 'User', hasAllPermissions: false },
]
export const permissions = [
  { name: 'users.get', resource: 'users', type: 'get' },
  { name: 'users.update', resource: 'users', type: 'update' },
  { name: 'users.delete', resource: 'users', type: 'delete' },
]
export const rolesHasPermissions = [
  { roleId: 1, permissionId: 1 },
  { roleId: 1, permissionId: 2 },
  { roleId: 1, permissionId: 3 },
]
