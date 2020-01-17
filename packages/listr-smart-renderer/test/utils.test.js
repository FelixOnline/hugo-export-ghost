// Switch these lines once there are useful utils
// const testUtils = require('./utils');
require('./utils');

const utils = require('../lib/utils');

describe('Task Number', function () {
    let index, tasks;

    const taskNumberShouldEql = result => utils.taskNumber(index, tasks).should.eql(result);

    it('Correctly outputs a simple task number in the format x/y', function () {
        index = 0;
        tasks = new Array(3); // Fake tasks array

        taskNumberShouldEql('1/3');
    });

    it('Can pad a task number correctly in the format 0x/yy', function () {
        index = 3;
        tasks = new Array(14); // Fake tasks array

        taskNumberShouldEql('04/14');
    });

    it('Can pad a task number correctly in the format xx/yy', function () {
        index = 11;
        tasks = new Array(14); // Fake tasks array

        taskNumberShouldEql('12/14');
    });

    it('Can pad a task number correctly in the format 00x/yyy', function () {
        index = 3;
        tasks = new Array(111); // Fake tasks array

        taskNumberShouldEql('004/111');
    });

    it('Can pad a task number correctly in the format 0xx/yyy', function () {
        index = 11;
        tasks = new Array(111); // Fake tasks array

        taskNumberShouldEql('012/111');
    });

    it('Can pad a task number correctly in the format xxx/yyy', function () {
        index = 100;
        tasks = new Array(111); // Fake tasks array

        taskNumberShouldEql('101/111');
    });
});
