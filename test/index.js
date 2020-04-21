const {expect} = require('chai');
const samplesJson = require('./samples.json');
const {countBigrams} = require('../src');

describe('countBigrams()', function() {
    samplesJson.samples.forEach(sample => {
        it(sample.description, function() {
            // add an assertion
            expect(countBigrams(sample.text)).to.deep.equal(sample.expectation);
        })
    });
});
