/**
 * Return a function that catches and forwards any error a function throws to the next middleware
 *
 * @param {Function} fn - input function that catchAsync wraps around
 */

const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

module.exports = catchAsync;
