import Currency from './currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(amount, currency);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
