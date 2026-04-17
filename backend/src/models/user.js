module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('retailer','wholesaler','admin'), defaultValue: 'retailer' },
    businessAddress: { type: DataTypes.STRING, allowNull: true }
  });
  User.associate = models => {
    User.hasMany(models.Order, { foreignKey: 'userId' });
  };
  return User;
};
