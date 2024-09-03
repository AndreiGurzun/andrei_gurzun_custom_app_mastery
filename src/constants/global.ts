export const ASSET_PREFIX = '/elections';
export const BROWSER_NOT_SUPPORTED = "We're sorry but your browser is not supported, please upgrade to a supported browser";
export const GLOBAL_SITE_CODE = 'USAT';
export const DEFAULT_SITE_NAME = 'USA TODAY';
export const DEFAULT_HEADSHOT = 'https://origin-staging-2-www.usatoday.com/gcdn/elections/staging/results/candidates/images/fallback.png';

export const analyticsScript = {
    scriptID: 'gciAnalyticsUAID',
    defaultSiteCode: 'USAT',
    scriptUrl: 'https://www.usatoday.com/gcdn/dcjs/prod/main.js',
    defaultOneTrustScriptId: '5eaec3d6-175d-498f-a6a7-ec66eb9b9673'
};

export const PRESTO_BASE_URL = 'https://www.gannett-cdn.com';
export const AD_SCRIPT = 'https://www.gannett-cdn.com/ads/scripts/framework/advanced.min.js';
export const LOCAL_DOMAINS = ['elections.usatoday.com', 'localhost:3000'];
export const USATODAY_LIST_CODE = '8872UT-E-NLETTER-Journey-KnowYourVote';
export const USAT_DOMAIN = 'https://www.usatoday.com/elections';

export const LOCAL_RESULTS_SCROLL_ID = 'local-results';

export const helpfulInfoAsset = (environment?: 'staging' | 'production' | undefined) => {
    if (environment === 'staging') {
        return '1742159006';
    }
    return '71768724007';
};

export const menuItems = {
    elections: 'Elections',
    delegateTotals: 'Delegate Totals',
    stateResults: 'State Results',
    latestResults: 'Latest Results',
    voterGuide: 'Voter Guide',
    allCandidates: 'Candidates',
    primaryCalendar: 'Primary Calendar'
};
