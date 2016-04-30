"use strict";

const OptimusPrime = require("./OptimusPrime");

/**
 * Returns a new stream with transformed data
 *
 * @param {Stream}      input       The readable stream that you want to transform
 * @param {Function}    fn          The function that transforms the chunks of data in the stream
 * @param {Object}      opts        The options to use for the underlying stream instance
 *
 * @returns {OptimusPrime}          A new readable stream with the transformed data
 */
const transformStream = (input, fn, opts) => {

    const transformer = new OptimusPrime(fn, opts);
    input.pipe(transformer);
    return transformer;
};

module.exports = transformStream;
