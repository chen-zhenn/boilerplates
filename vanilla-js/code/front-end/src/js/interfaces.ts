export interface IgenerateIds {
    get: () => number;
}

export interface Iutils {
    generateIds: () => IgenerateIds;
}
