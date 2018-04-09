export interface ClassMap {
    [key: string]: string;
}

export interface LazyLoadParams {
    selector?: string;
    loadClass?: string;
    errorClass?: string;
    loadCallback?: Function;
    errorCallback?: Function;
    parentId?: string;
    rootMargin?: string;
    threshold?: number;
}

export interface LazyLoadAPI {
    init: () => void;
    destroy: () => void;
    update: () => void;
}
