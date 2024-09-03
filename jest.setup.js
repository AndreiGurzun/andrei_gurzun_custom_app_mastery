import '@testing-library/jest-dom';
import 'whatwg-fetch';

jest.mock('next/image', () => ({
    __esModule: true,
    default: () => {
        return 'Next image stub';
    }
}));

jest.mock('next/config', () => {
    return () => ({
        publicRuntimeConfig: {
            images: {
                domains: ['www.gannett-cdn.com']
            }
        }
    });
});

jest.mock('next/dynamic', () => ({
    __esModule: true,
    default: (...props) => {
        const dynamicModule = jest.requireActual('next/dynamic');
        const dynamicActualComp = dynamicModule.default;
        const RequiredComponent = dynamicActualComp(props[0]);
        RequiredComponent.preload ? RequiredComponent.preload() : RequiredComponent.render.preload();
        return RequiredComponent;
    }
}));

jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        NEXT_PUBLIC_APP_VERSION: '1.0.0',
        NEXT_PUBLIC_ASSET_PREFIX: '/elections'
    },
    serverRuntimeConfig: {
        ENV_GANNETT_API_HOST: 'https://content-api.gannettdigital.com',
        ENV_GANNETT_API_TOKEN: '...'
    }
}));
