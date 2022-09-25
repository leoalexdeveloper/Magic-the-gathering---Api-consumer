export const toCapitalLetter = (word) => {
    return (word[0].toUpperCase() + word.slice(1))
}

export const returnIcons = (iconsSet, name, prefix) => {
    const symbolName = Object.keys(iconsSet).filter(set => {
        const a = name.toString().toLowerCase().trim()
        const b = set.toString().toLowerCase().trim()
        return (a.match(b)) ? set : ''
    })
    return prefix + iconsSet[symbolName] + " "
}

export const toCamelCase = (text) => {
    const textArray = text.split(' ')
    const result = textArray.map((word, index) => {
        if (index === 0) return word.toLowerCase()
        return word.substring(0, 1) + word.substring(1, word.length)
    })
    return result.join('')
}

export const sortObject = (setData, keyName, direction) => {
    let sorted = {}
    sorted = setData && setData.sort((a, b) => {
        let order = (a[keyName] && b[keyName] && direction === true) ? a[keyName] < b[keyName] : a[keyName] > b[keyName]
        return (order) ? -1 : 1
    })
    return sorted
}

export const loadContent = async (api, url, params, dispatch, dispatchOption) => {
    const sets = await api.get(url+params)
    sets && dispatch({ type: dispatchOption, payload: sets })
}

export const isMobile = (breakPoint)=> {
    return window.innerWidth < breakPoint
}