export interface MenuLi {
    route : string,
    h2    : string,
}
export interface MenuRRSS {
    href  : string,
    src   : string,
    title : string,
    alt   : string,
}
export interface GalleryData {
    jpg    : Array<ImageSrc>,
    webp   : Array<ImageSrc>,
    class  : string,
    class2 : string,
    alt    : string,
}
interface ImageSrc {
    small  : string,
    medium : string,
    large  : string,
}