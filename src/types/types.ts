export type StyleType = {
    width: string
    backgroundColor?: string
    color?: string
    boxShadow?: string
}

type ExtendedArrayType = {
    value: string
    upperSortHandler: () => void
    lowerSortHandler: () => void
}

export type TableDataType = {
    title1: ExtendedArrayType
    title2: ExtendedArrayType
    title3: ExtendedArrayType
    title4: ExtendedArrayType
    title5: string
}
export type TableStyleType = {
    th1: {
        width: string
    },
    th2: {
        width: string
    },
    th3: {
        width: string
    },
    th4: {
        width: string
    },
    th5: {
        width: string
    }
}