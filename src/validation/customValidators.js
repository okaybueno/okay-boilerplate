import validate from "validate.js";

/**
 * Custom validators
 * @param value
 * @param options
 * @param key
 * @param attributes
 * @returns {null|*|string}
 */
validate.validators.file_size = (value, options) => {
    let message = null;

    if (value) {
        message = options.bytes && value.size > options.bytes ? options.message || 'Too large' : null;
    }

    return message;
};