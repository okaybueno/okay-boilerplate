import validate from 'validate.js';

const validationService = (validationObj, validationRules) => {
    let validationErrors = [];

    if (typeof validationObj !== 'object') throw new Error('First argument must be an object');
    else if (typeof validationRules !== 'object') throw new Error('Second argument must be an object');

    let constraints = {};
    let validationNames = {};

    Object.keys(validationRules).forEach(key => {
        constraints[validationRules[key].param] = validationRules[key].constraints;
        validationNames[validationRules[key].param] = key;
    });

    let validation = validate(validationObj, constraints);

    if (validation !== undefined) {
        Object.keys(validation).forEach(key => {
            validationErrors.push({field: validationNames[key], messages: validation[key]})
        });
    }

    return {
        passes: () => {
            return validationErrors.length === 0;
        },
        getErrors: () => {
            return validationErrors;
        }
    }
};

export default validationService;