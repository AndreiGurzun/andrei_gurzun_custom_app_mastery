/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GetServerSidePropsContext } from 'next';

import { parseHostname } from '@src/utils/paths';

export const getDefaultProps = <
    P extends {
        queryData?: Record<string, any>;
        fallback?: any;
    }
>(
    context: GetServerSidePropsContext,
    passedProps: P = <P>{}
) => {
    const { req, resolvedUrl } = context;

    const xForwardedHost = req?.headers?.['x-forwarded-host'] as string;
    const domainName = parseHostname(xForwardedHost || req.headers.host || '');

    const queryData = {
        domainName,
        hostName: xForwardedHost || req.headers.host || '',
        resolvedUrl
    };

    passedProps.queryData = {
        ...passedProps.queryData,
        ...queryData
    };

    return {
        props: {
            ...passedProps,
            ...queryData
        }
    };
};

// export function getDefaultProps<P>(passedProps: P) {
//     return {
//         props: passedProps
//     };
// }
