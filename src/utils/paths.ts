export type PathData = {
    firstPath: string;
    secondPath: string;
    thirdPath: string;
    fourthPath: string;
};

export const currentPath = function (pathname: string | null): PathData {
    const pathArr = pathname ? pathname.split('/') : [];

    return {
        firstPath: pathArr?.[1] || '',
        secondPath: pathArr?.[2] || '',
        thirdPath: pathArr?.[3] || '',
        fourthPath: pathArr?.[4] || ''
    };
};

export const isActivePath = (paths: PathData, shouldContain: string) => {
    return paths.thirdPath === shouldContain;
};

export const parseHostname = (hostname: string) => {
    const regex = /\.(?:([^.]+)\.)?[^.]+$/;
    const match = hostname.match(regex);
    let domainName = match && match[1] ? match[1] : hostname;

    if (domainName?.includes('.')) {
        domainName = domainName.split('.')[0];
    }

    return domainName;
};
