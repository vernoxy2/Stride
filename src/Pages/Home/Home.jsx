import React from 'react'
import Header from './Sections/Header'
import WhoWeAre from './Sections/WhoWeAre'
import SelectProject from './Sections/SelectProject'
import Commitment from './Sections/Commitment'
import PeopalSay from './Sections/PeopalSay'
import Enquiry from './Sections/Enquiry'

const Home = () => {
  return (
    <div className='text-center'>
      Home Page
      <Header/>
      <WhoWeAre/>
      <SelectProject/>
      <Commitment/>
      <PeopalSay/>
      <Enquiry/>

    </div>
  )
}

export default Home
