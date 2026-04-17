const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (order, successUrl, cancelUrl) => {
  const line_items = order.items.map(i => ({
    price_data: {
      currency: 'ngn',
      product_data: { name: i.productName },
      unit_amount: Math.round(parseFloat(i.unitPrice) * 100)
    },
    quantity: i.quantity
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: { orderId: order.id }
  });
  return session;
};
