export default ( n?: number ) => {
    let id = n || 0;

    return ():number => {
        return id += 1;
    };
};
