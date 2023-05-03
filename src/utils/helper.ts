export function getDiscountedPricePercentage(originalPrice: number, discountedPrice: number) {
  const discount = originalPrice - discountedPrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(2);
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price / 100);
}
