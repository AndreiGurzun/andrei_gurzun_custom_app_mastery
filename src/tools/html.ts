import DOMPurify from 'isomorphic-dompurify';

import { DEFAULT_ALLOWED_TAGS } from '@src/constants/html';

export const purifyHtml = (html: string | undefined, allowedtags?: string[]) => {
    if (!html) return '';

    return DOMPurify.sanitize(html.replace(/\\"/g, '"'), { ALLOWED_TAGS: allowedtags || DEFAULT_ALLOWED_TAGS });
};

export const purifyAndLimit = (html: string | undefined, limit = 220) => {
    if (!html) return '';

    const purified = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
    const stripped = purified.slice(0, limit);

    return stripped.length < purified.length ? `${stripped}...` : stripped;
};
