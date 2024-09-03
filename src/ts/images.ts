import type { ImageCrops } from '@src/graphql/codegen/graphql';

export type ImageParams = {
    def?: boolean;
    subfolder?: string;
};

export type ImageHostReplacement = {
    find: string;
    replace: string;
};

export type CustomImageProps = {
    fallback?: string;
    url?: string;
    name?: string | undefined | null;
    width?: number;
    height?: number;
    lazyLoad?: boolean;
};

export type getCropsType = { crops: { __typename: 'ImageCrops'; path: string; name: string }[] | null; width?: number; height?: number; aspectRatio?: number };
export type aspectRatioType = '9_16' | '3_4' | '1_1' | '4_3' | '16_9' | 'bestCrop';
export type ImageCrop = Omit<ImageCrops, 'width' | 'height'>;
