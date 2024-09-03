import localFont from 'next/font/local';

import classNames from '@src/tools/classNames';

import General from '@styles/components/General.module.scss';

export const helvetica = localFont({
    src: 'webfonts/Helvetica.woff2',
    variable: '--helvetica',
    display: 'swap',
    weight: '400',
    style: 'normal'
});

export const unifySansRegular = localFont({
    src: 'webfonts/UnifySans_W_Rg.woff2',
    variable: '--unify-sans-regular',
    display: 'swap',
    weight: '400',
    style: 'normal'
});

export const unifySansBold = localFont({
    src: 'webfonts/CW_UnifySans_W_Bd.woff2',
    variable: '--unify-sans-bold',
    display: 'swap',
    weight: '700',
    style: 'normal'
});

export const unifySansBoldItalic = localFont({
    src: 'webfonts/UnifySans_W_BdIt.woff2',
    variable: '--unify-sans-bold-italic',
    display: 'swap',
    weight: '700',
    style: 'italic'
});

export const unifySansItalic = localFont({
    src: 'webfonts/UnifySans_W_It.woff2',
    variable: '--unify-sans-italic',
    display: 'swap',
    weight: '400',
    style: 'italic'
});

export const unifySansSemiBold = localFont({
    src: 'webfonts/UnifySans_W_SBd.woff2',
    variable: '--unify-sans-semi-bold',
    display: 'swap',
    weight: '600',
    style: 'normal'
});

export const unifySansSemiBoldItalic = localFont({
    src: 'webfonts/UnifySans_W_SBdIt.woff2',
    variable: '--unify-sans-semi-bold-italic',
    display: 'swap',
    weight: '600',
    style: 'italic'
});

export const unifySansCdBold = localFont({
    src: 'webfonts/UnifySansCd_W_Bd.woff2',
    variable: '--unify-sans-cd-bold',
    display: 'swap',
    weight: '700',
    style: 'normal'
});

export const unifySerifItalic = localFont({
    src: 'webfonts/UnifySerif-TextItalic.woff2',
    variable: '--unify-serif-italic',
    display: 'swap',
    weight: '400',
    style: 'italic'
});

export const unifySerifBold = localFont({
    src: 'webfonts/UnifySerif_W_Bd.woff2',
    variable: '--unify-serif-bold',
    display: 'swap',
    weight: '700',
    style: 'normal'
});

export const unifySerifSemiBold = localFont({
    src: 'webfonts/UnifySerif_W_SBd.woff2',
    variable: '--unify-serif-semi-bold',
    display: 'swap',
    weight: '600',
    style: 'normal'
});

export const unifySerifRegular = localFont({
    src: 'webfonts/UnifySerif-Text.woff2',
    variable: '--unify-serif-regular',
    display: 'swap',
    weight: '400',
    style: 'normal'
});

export const unifySerifSbDisplay = localFont({
    src: 'webfonts/UnifySerif_W_DisplaySBd.woff2',
    variable: '--unify-serif-sb-display',
    display: 'swap',
    weight: '600',
    style: 'normal'
});

export const icons = localFont({
    src: 'webfonts/iconsV2.woff',
    variable: '--icons',
    display: 'block',
    weight: '400',
    style: 'normal'
});

export const stateIcons = localFont({
    src: 'webfonts/stateIcons.woff',
    variable: '--state-icons',
    display: 'block',
    weight: '400',
    style: 'normal'
});

export const fontFamilies = () =>
    classNames(
        General.el_content_wrapper,
        helvetica.variable,
        unifySansRegular.variable,
        unifySansBold.variable,
        unifySansBoldItalic.variable,
        unifySansItalic.variable,
        unifySansSemiBold.variable,
        unifySansSemiBoldItalic.variable,
        unifySansCdBold.variable,
        unifySerifItalic.variable,
        unifySerifBold.variable,
        unifySerifSemiBold.variable,
        unifySerifRegular.variable,
        unifySerifSbDisplay.variable,
        icons.variable,
        stateIcons.variable
    );
