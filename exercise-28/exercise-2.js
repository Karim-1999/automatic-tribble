const order = {
  customer: {
    address: 'Birdcage Walk'
  }
};


if (!order.customer.address?.city) {
  console.log('City is required');
}