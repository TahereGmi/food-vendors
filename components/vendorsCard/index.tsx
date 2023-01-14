import { IVendorResult } from '../../types/vendors'
import styles from './VendorCard.module.scss'
import { GetRateColor } from '../../helpers/GetRateColor'

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
					<div className={`${styles.vendorCard__info__rate} ${styles[GetRateColor(vendor.rate)]}`}>{vendor.rate}</div>
					<figure className={styles.vendorCard__info__logo}><img src={vendor.logo} alt={vendor.title} /></figure>
				</div>
				<div className={styles.vendorCard__desc}>
					<p>{vendor.description}</p>
					<p>{vendor.isZFExpress ? 'ارسال اکسپرس' : 'پیک فروشنده'} <b>{vendor.deliveryFee} تومان</b></p>
				</div>
			</div>
		</section>      
	)
}

export default Vendors
