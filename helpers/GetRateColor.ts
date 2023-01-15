export const GetRateColor = (rate: number) => {
    switch (Math.floor(rate)) {
        case 4:
            return ['colorStar4', '#5ba839']
        case 3:
            return ['colorStar3', '#cdd614']
        case 2:
            return ['colorStar2', '#ff7800']
        default:
            return ''
    }
}