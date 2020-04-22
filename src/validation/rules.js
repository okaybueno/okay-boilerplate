const getRule = (ruleName) => {
    switch (ruleName) {
        case ruleNames.firstName:
            return {
                constraints: {
                    presence: {
                        allowEmpty: false,
                        message: '^first_name_required'
                    },
                },
                param: 'first_name'
            };
        case ruleNames.lastName:
            return {
                constraints: {
                    presence: {
                        allowEmpty: false,
                        message: '^last_name_required'
                    },
                },
                param: 'last_name'
            };
        case ruleNames.email:
            return {
                constraints: {
                    presence: {
                        allowEmpty: false,
                        message: '^email_required'
                    },
                    email: {
                        message: '^email_invalid'
                    },
                },
                param: 'email'
            };
        default:
            return null;
    }
};

/**
 * @param rulesArray
 */
export const getValidationRules = (rulesArray) => {
    let result = {};
    let rule;
    if (Array.isArray(rulesArray)) {
        rulesArray.forEach(ruleKey => {
            rule = getRule(ruleKey);
            if (rule) {
                result[ruleKey] = rule;
            }
        });
    } else {
        rule = getRule(rulesArray);
        if (rule) {
            result[rulesArray] = rule;
        }
    }

    return result;
};

export const ruleNames = {
    // userEmail: 'user_email',
    firstName: 'first_name',
    lastName: 'last_name',
    email: 'email',
};