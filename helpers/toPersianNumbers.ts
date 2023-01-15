export function toFarsiNumber(n: number) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const faNumber = n.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
    return faNumber
}