import { filterProps, createError } from '../utils';
const PLURAL_FORMAT_OPTIONS = [
    'localeMatcher',
    'type',
];
export function formatPlural({ locale, onError }, getPluralRules, value, options = {}) {
    let filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
    try {
        return getPluralRules(locale, filteredOptions).select(value);
    }
    catch (e) {
        onError(createError('Error formatting plural.', e));
    }
    return 'other';
}
