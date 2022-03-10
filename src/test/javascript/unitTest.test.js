const dateTest = require('../../../date-fns/A6/unitTest');

const aDate = new Date('05.03.2022');
const bDate = new Date('07.26.2021');
const cDate = new Date('01.3.2021')
const dateArr = [aDate, bDate, cDate];
const answer = [new Date('01.03.2021'), new Date('07.26.2021'), new Date('05.03.2022')];
test("Return a sorted array of dates", () => {
    expect(dateTest(dateArr)).toStrictEqual(answer);
});