import classNames, { type Argument } from 'classnames';

const __classNames = (...args: Argument[]): string | undefined => {
    return classNames(...args) || undefined;
};

export default __classNames;
