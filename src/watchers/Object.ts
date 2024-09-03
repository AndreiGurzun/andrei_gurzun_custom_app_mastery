type SObject = Record<
    string,
    {
        expect?: unknown;
        [key: string]: unknown;
    }
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UObject = Record<string, any>;

export class WatchObject {
    public callback: () => void;

    public constructor(callback: () => void) {
        this.callback = callback;
    }

    public bindTrap(object: UObject, key: string, currentValue: unknown, expectedValue: unknown) {
        let current = currentValue;

        Object.defineProperty(object, key, {
            enumerable: true,
            configurable: true,

            get: () => current,
            set: (value: unknown) => {
                current = value;

                if (value === expectedValue) {
                    this.callback();
                }
            }
        });
    }

    public watch(object: UObject, schema: SObject) {
        for (const [key, value] of Object.entries(schema)) {
            if (typeof object[key] === 'undefined') {
                let current: unknown;

                Object.defineProperty(object, key, {
                    enumerable: true,
                    configurable: true,

                    get: () => current,
                    set: (trapValue: unknown) => {
                        current = trapValue;

                        if (value !== null && typeof value === 'object' && typeof value.expect === 'undefined') {
                            this.watch(current as UObject, value as SObject);
                        } else if (value !== null && typeof value === 'object' && typeof value.expect !== 'undefined') {
                            if (value.expect === current) {
                                this.callback();
                            } else {
                                this.bindTrap(object, key, current, value.expect);
                            }
                        }
                    }
                });
            } else {
                if (value !== null && typeof value === 'object' && typeof value.expect === 'undefined') {
                    this.watch(object[key] as UObject, value as SObject);
                } else if (value !== null && typeof value === 'object' && typeof value.expect !== 'undefined') {
                    if (value.expect === object[key]) {
                        this.callback();
                    } else {
                        this.bindTrap(object, key, object[key], value.expect);
                    }
                }
            }
        }
    }
}
