function isEmptyArray(list: any[], key: string) {
    if (list?.length > 0 && list[0][key]) return false
    return true
}

export default isEmptyArray