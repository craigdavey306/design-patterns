export abstract class Beverage {
  constructor(private _description = 'Unknown Beverage') {}

  get description(): string {
    return this._description;
  }

  abstract cost(): number;
}
