
export const objForReducer = (items, objPropsName, itenId, newObjProps) => {
    return items.map(u => {
        if(u[objPropsName] === itenId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}