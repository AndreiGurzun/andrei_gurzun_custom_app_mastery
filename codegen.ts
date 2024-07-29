/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

const config: CodegenConfig = {
    ignoreNoDocuments: true,
    hooks: {
        afterAllFileWrite: ['prettier --write']
    },
    documents: ['src/graphql/data/**/*.ts'],
    schema: {
        [`${process.env.ENV_GANNETT_API_HOST}/assets`]: {
            headers: {
                'X-Api-Key': process.env.ENV_GANNETT_API_TOKEN! // TODO: Add custom API key
            }
        },
        [`${process.env.ENV_GANNETT_API_HOST}/elections`]: {
            headers: {
                'X-Api-Key': process.env.ENV_GANNETT_API_TOKEN! // TODO: Add custom API key
            }
        }
    },
    generates: {
        './src/graphql/codegen/': {
            preset: 'client',
            plugins: [],
            config: {
                useTypeImports: true,
                documentMode: 'string',
                namingConvention: 'keep'
            },
            presetConfig: {
                fragmentMasking: {
                    unmaskFunctionName: 'unmaskFragment'
                }
            },
            documentTransforms: [addTypenameSelectionDocumentTransform]
        }
    }
};

export default config;
