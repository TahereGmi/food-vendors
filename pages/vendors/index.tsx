import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import styles from './Vendors.module.scss'
import { VendorCard } from '../../components'
import { getVendors, selectedValue } from '../../store/reducers/vendorsReducer'
import {  IVendorResult, IVendors } from '../../types/vendors'

const Vendors = () => {
	const dispatch = useDispatch()
	const vendors = useSelector(selectedValue) as IVendors

	useEffect(() => {
		dispatch(getVendors({ page: 0, page_size:10, lat: 35.754, long: 51.328 }))
	}, [])

	return (
		<div className="container">
		<Head>
			<title>Create Next App</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>
			<>
			{vendors.loading && <div>loading</div>}
			{vendors.loaded && <>
				{vendors.result.map((vendor: IVendorResult) => {
					return vendor.type === 'VENDOR' ? <VendorCard item={vendor}/> : null
				})}
			</>}
			{vendors.error && <div>error</div>}
			</>
		</main>      
		</div>
	)
}

export default Vendors
