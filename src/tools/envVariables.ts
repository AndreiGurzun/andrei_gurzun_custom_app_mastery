import { Environments, ServerVariablesValues } from '@src/ts/enums/enums';

export const productionAppHost = 'https://sportsdata.usatoday.com';

const config = {
    staging: {
        ENV_GANNETT_API_HOST: 'https://origin-staging-content-api.gannettdigital.com'
    },
    production: {
        ENV_GANNETT_API_HOST: 'https://content-api.gannettdigital.com'
    }
};

const getEnvironment = (environment: string): Environments => {
    switch (environment) {
        case 'staging':
            return Environments.staging;
        case 'production':
            return Environments.production;
    }
    console.log(`Environment "${environment}" is not a valid environment. Defaulting to "production".`);
    return Environments.production;
};

export const isNodeDev = (): boolean => {
    return process.env.NODE_ENV === 'development';
};

export const isStaging = (): boolean => {
    return getEnvironmentVariable(ServerVariablesValues.Environment) === 'staging';
};

export const isProduction = (): boolean => {
    return getEnvironmentVariable(ServerVariablesValues.Environment) === 'production';
};

export const getEnvironmentVariable = (variable: ServerVariablesValues | undefined): string => {
    if (!variable) return '';

    if (process.env.NEXT_RUNTIME !== 'nodejs') {
        throw new Error('getEnvironmentVariable is only available for use server-side.');
    }

    if (process.env.ENVIRONMENT !== 'staging' && process.env.ENVIRONMENT !== 'production') {
        throw new Error("ENVIRONMENT isn't set.");
    }

    const configEnvironment = getEnvironment(`${process.env.ENVIRONMENT}`);
    switch (variable) {
        case 'elections':
            return `${process.env.ENV_GANNETT_API_HOST || config[configEnvironment].ENV_GANNETT_API_HOST}/elections`;

        case 'assets':
            return `${process.env.ENV_GANNETT_API_HOST || config[configEnvironment].ENV_GANNETT_API_HOST}/assets`;

        case 'apiHost':
            return `${process.env.ENV_GANNETT_API_HOST || config[configEnvironment].ENV_GANNETT_API_HOST}`;

        case 'token':
            return `${process.env.ENV_GANNETT_API_TOKEN}`;

        case 'environment':
            return `${configEnvironment}`;

        case 'appVersion':
            return `${process.env.APP_VERSION || '0.0.0'}`;

        default:
            return 'Invalid environment variable';
    }
};
