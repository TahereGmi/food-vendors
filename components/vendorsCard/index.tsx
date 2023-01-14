import { IVendorResult } from '../../types/vendors'
import styles from './VendorCard.module.scss'

const Vendors = (props: { item : IVendorResult }) => {
	const { item } = props
	const vendor = item?.data
	return (
		<section className={styles.vendorCard}>
			<div className={styles.banner}>
				<img src={vendor.backgroundImage} alt={vendor.title} />
			</div>
			<div className={styles.vendorCard__details}>
				<div className={styles.vendorCard__info}>
					<h3>{vendor.title}</h3>
					<div>{vendor.rate}</div>
					<img src={vendor.logo} alt={vendor.title} />
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
