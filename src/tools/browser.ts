export const isServer: boolean = typeof window === 'undefined';

export const isBrowserSupported = (userAgent: string | undefined | null): boolean => {
    if (!userAgent) {
        return true;
    }

    const blockedAgents = ['msie ', 'trident/', 'edge/'];

    for (let i = 0; i < blockedAgents.length; i++) {
        const agent = blockedAgents[i];

        if (userAgent.indexOf(agent) > -1) {
            return false;
        }
    }

    return true;
};
