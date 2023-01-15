import { IVendorResult } from '../../types/vendors'
import styles from './VendorCard.module.scss'
import { GetRateColor } from '../../helpers/GetRateColor'
import RateStar from '../../public/svg/star.svg'
import { toFarsiNumber } from '../../helpers/toPersianNumbers'

const Vendors = (props: { item : IVendorResult }) => {
	const { item } = props
	const vendor = item?.data
	return (
		<section className={styles.vendorCard}>
			<div 
				className={styles.vendorCard__banner} 
				style={{ backgroundImage: `url(${vendor.backgroundImage})` }}
			></div>
			<div className={styles.vendorCard__details}>
				<div className={styles.vendorCard__info}>
					<h3 className={styles.vendorCard__info__title}>{vendor.title}</h3>
					<div className={`${styles.vendorCard__info__rate} ${styles[GetRateColor(vendor.rate)[0]]}`}>
						<span className={styles.vendorCard__info__rate_num}>{toFarsiNumber(vendor.rate)}</span>
						<RateStar className={styles.vendorCard__info__rate_icon} fill={GetRateColor(vendor.rate)[1]}/>
					</div>
					<figure className={styles.vendorCard__info__logo}><img src={vendor.logo} alt={vendor.title} /></figure>
				</div>
				<p className={styles.vendorCard__desc}>{vendor.description}</p>
				<p className={styles.vendorCard__delivery}>{vendor.isZFExpress ? 'ارسال اکسپرس' : 'پیک فروشنده'} <b>{toFarsiNumber(vendor.deliveryFee)} تومان</b></p>
			</div>
		</section>      
	)
}

export default Vendors
