"use strict";

const util = require("util");
const Transform = require("stream").Transform;

/**
 * Creates a new TransformStream
 *
 * @param {Function}        fn          Function to use to transform the data in the stream
 * @param {Object}          opts        Options to use for the Stream instance
 *
 * @returns {OptimusPrime}              The newly created TransformStream
 * @constructor
 */
function OptimusPrime(fn, opts) {

    if (!(this instanceof OptimusPrime))
        return new OptimusPrime(fn, opts);

    this._transformFunction = fn;

    if (!opts) opts = {};
    opts.objectMode = true;
    
    Transform.call(this, opts);
}

util.inherits(OptimusPrime, Transform);

OptimusPrime.prototype._transform = function (data, encoding, cb) {

    cb(null, this._transformFunction(data));
};

module.exports = OptimusPrime;
