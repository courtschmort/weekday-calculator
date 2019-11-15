export class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  concatDate() {
    const date = `${this.month} ${this.day}, ${this.year}`;
    return date;
  }

  checkInputs() {
    if (this.year < 1582) {
      return false;
    } else if (this.year > 9999) {
      return false;
    } else if (this.year === 1582 && this.day >= 15 && this.month === "October") {
      return true;
    } else if (this.year === 1582 && this.day < 15 && this.month === "October") {
      return false;
    } else if (this.year === 1582 && (this.month === "November" || this.month === "December")) {
      return true;
    } else {
      return true;
    }
  }

  checkYearMonth() {
    const thirty = ["April", "June", "Semptember", "November"];
    const thirtyOne = ["January", "March", "May", "July", "August", "October", "December"];
    let february = 28;

    if ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0)) {
      february += 1;
    }

    if (thirty.includes(this.month)) {
      return "30";
    } else if (thirtyOne.includes(this.month)) {
      return "31";
    } else if (this.month === "February") {
      return february;
    } else {
      return false;
    }
  }


}
