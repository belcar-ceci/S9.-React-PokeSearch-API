import React from 'react'
import Card from '../components/Card'
import '../assets/style/comparisonPoke.css'

const ComparisonPoke = () => {
  return (
    <div className='mainComparison'>
      <div className='comparisonSection'>
        <Card id='2' />
      </div>
      <div className=''>
        <Card id='3' />
      </div>
    </div>
  )
}

export default ComparisonPoke