module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: { type: DataTypes.UUID, allowNull: false },
    total: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    status: { type: DataTypes.ENUM('pending','paid','scheduled','delivered','cancelled'), defaultValue: 'pending' },
    deliveryOption: { type: DataTypes.ENUM('pickup','delivery'), defaultValue: 'delivery' },
    scheduledDate: { type: DataTypes.DATEONLY, allowNull: true },
    stripeSessionId: { type: DataTypes.STRING, allowNull: true }
  });
  Order.associate = models => {
    Order.belongsTo(models.User, { foreignKey: 'userId' });
    Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
  };
  return Order;
};
