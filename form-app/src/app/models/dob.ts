export class DOB {
    date: number;
    month: number;
    year: number;
    valid: boolean;

    constructor(date: number, month: number, year: number) {
        this.valid = true;
        this.year = year;
        if (month <= 12 && month >= 1) {
            this.month = month;
            if (this.month == 1 || this.month == 3 || this.month == 5 || this.month == 7 || this.month == 8 || this.month == 10 || this.month == 12) {
                this.enterDate(date, 32);
            } else if (this.month == 4 || this.month == 6 || this.month == 9 || this.month == 11) {
                this.enterDate(date, 31);
            } else if (this.month == 2) {
                if (this.year % 4 == 0 && this.year % 100 != 0) {
                    this.enterDate(date, 30);
                } else {
                    this.enterDate(date, 29);
                }
            }
        } else {
            this.valid = false;
        }
    }

    enterDate(date: number, limit: number): void {
        if (date < limit && date > 0) {
            this.date = date;
        } else {
            this.valid = false;
        }
    }
}