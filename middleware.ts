// import { NextRequest, NextResponse } from 'next/server';

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|blocked).*)', '/']
// };

// export const middleware = (_request: NextRequest) => {
//     const response = NextResponse.next();

//     return response;
// };

import { NextRequest, NextResponse } from 'next/server';

import { isBrowserSupported } from '@src/tools/browser';

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|blocked).*)', '/']
};

export const middleware = (request: NextRequest) => {
    const response = NextResponse.next();

    if (request.nextUrl.pathname.includes('blocked')) {
        return response;
    }

    const userAgent = request.headers.get('user-agent');
    const browserSupported = isBrowserSupported(userAgent);

    if (!browserSupported) {
        request.nextUrl.pathname += '/blocked';
        return NextResponse.redirect(request.nextUrl);
    }

    return response;
};
