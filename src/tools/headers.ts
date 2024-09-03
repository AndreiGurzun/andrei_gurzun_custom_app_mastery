import type { ServerResponse } from 'http';

export const formatKey = (key: string) =>
    key
        .split(' ')
        .reduce((p: string[], c) => {
            if (!p.includes(c)) {
                p.push(c);
            }

            return p;
        }, [])
        .join(' ');

export const sendResponseHeaders = (queries: { headers: Headers }[], res: ServerResponse) => {
    const surrogates = formatKey(queries.map(el => (el.headers?.has('surrogate-key') ? el.headers.get('surrogate-key') : '')).join(' '));

    if (surrogates && res && surrogates.length <= 16000) {
        res.setHeader('surrogate-key', surrogates);
    }

    for (const el of queries) {
        const control = el.headers?.has('surrogate-control') ? el.headers.get('surrogate-control') : null;

        if (control && res) {
            res.setHeader('surrogate-control', control);
            break;
        }
    }
};
