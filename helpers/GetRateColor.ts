export const GetRateColor = (rate: number) => {
    switch (Math.floor(rate)) {
        case 4:
            return 'colorStar4'
        case 3:
            return 'colorStar3'
        case 2:
            return 'colorStar2'
        default:
            return ''
    }
}