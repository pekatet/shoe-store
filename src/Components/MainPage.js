import HitSales from './HitSales'
import Catalog from './Catalog'
import { Fragment } from 'react'

export default function MainPage(){
  return(
    <Fragment>
      <HitSales/>
      <Catalog/>
    </Fragment>
  )
}