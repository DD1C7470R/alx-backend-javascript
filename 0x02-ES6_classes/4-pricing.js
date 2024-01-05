import Currency from './3-currency';

export default class Pricing extends Currency {
  super(amount, currency)

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
