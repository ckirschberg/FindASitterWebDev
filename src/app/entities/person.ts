export class Person {
  public customerId?: String;
  public username: String;
  public firstname: String;
  public lastname: String;
  public birthDate: Date;
  public area: String;
  public rating: number[];

  goToWork() {
    console.log("I am making money now");
  }
}