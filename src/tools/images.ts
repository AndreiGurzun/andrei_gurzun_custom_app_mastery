import { PRESTO_BASE_URL } from '@src/constants/global';
import { aspectRatioType, ImageCrop, getCropsType } from '@src/ts/images';

export const createImageSourceProperties = (image: string, width?: number, height?: number): { src: string; srcSet?: string } => {
    const imgSourceProperties: { src: string; srcSet?: string } = { src: addFastlyParamsToImageUrl(image, width, height) };
    const srcSet = addFastlyParamsToImageUrl(image, width ? width * 2 : undefined, height ? height * 2 : undefined);
    imgSourceProperties.srcSet = `${srcSet} 2x`;

    return { ...imgSourceProperties };
};

export const addFastlyParamsToImageUrl = (image: string, width?: number, height?: number): string => {
    // These Fastly params are taking advantage of caching and image optimization.
    // Refer to https://developer.fastly.com/reference/io/ for more info.
    const imageType = checkImageType(image);
    if (!imageType.length || imageType === 'svg') return image;
    let fastlyParams = image.lastIndexOf('?') > 0 ? '&' : '?';
    switch (imageType) {
        case 'jpg':
            fastlyParams = fastlyParams + 'format=pjpg&auto=webp&quality=85,75';
            break;
        case 'jpeg':
            fastlyParams = fastlyParams + 'format=pjpg&auto=webp&quality=85,75';
            break;
        case 'png':
            fastlyParams = fastlyParams + 'format=png8&auto=webp';
            break;
        case 'webp':
            fastlyParams = fastlyParams + 'format=webp&quality=85,75';
            break;
        default:
            break;
    }
    if (width) fastlyParams = fastlyParams + `${fastlyParams.length ? '&' : '?'}width=${width}`;
    if (height) fastlyParams = fastlyParams + `${fastlyParams.length ? '&' : '?'}height=${height}`;
    return image + fastlyParams;
};

export const checkImageType = (image: string | undefined): string => {
    if (!image || !image?.length) return '';
    if (image.lastIndexOf('.') < 0) return '';
    const firstIndex = image.lastIndexOf('.') + 1;
    const lastIndex = image.lastIndexOf('?') > 0 && image.lastIndexOf('?') > firstIndex ? image.lastIndexOf('?') : image.length;
    if (!['jpg', 'jpeg', 'svg', 'png', 'webp'].includes(image.slice(firstIndex, lastIndex).toLowerCase())) return '';
    return image.slice(firstIndex, lastIndex).toLowerCase();
};

export const getCrop = ({ crops, width, height, aspectRatio }: getCropsType): string => {
    if (!crops || !crops.length) return '';
    const convertedAspectRatio = aspectRatio ? getAspectRatio(aspectRatio) : width && height && getAspectRatio(width / height);
    const path =
        crops.find((crop: ImageCrop) => {
            return crop.name === convertedAspectRatio;
        })?.path || '';
    if (path.length && path[0] === '/') return `${PRESTO_BASE_URL}${path}`;
    return path;
};

export const getAspectRatio = (ratio: number): aspectRatioType => {
    if (ratio <= 0) {
        return 'bestCrop';
    } else if (ratio < 0.65) {
        return '9_16';
    } else if (ratio < 0.95) {
        return '3_4';
    } else if (ratio < 1.05) {
        return '1_1';
    } else if (ratio < 1.35) {
        return '4_3';
    } else if (ratio < 3) {
        return '16_9';
    }
    return 'bestCrop';
};
