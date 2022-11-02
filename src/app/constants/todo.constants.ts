const userTypes = {
  ADMINISTRATOR: 1,
  MODERATOR: 2,
};

const userTypeNames = {
  [userTypes.ADMINISTRATOR]: 'Administrador',
  [userTypes.MODERATOR]: 'Moderador'
};

export {
  userTypes,
  userTypeNames
}