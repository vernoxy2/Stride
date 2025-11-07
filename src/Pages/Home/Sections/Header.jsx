import React from 'react'
import PrimaryHeader from '../../../Components/PrimaryHeader';

const Header = () => {
  return (
    <section >
      <PrimaryHeader title="Welcome to Stride Realty" backgroundImage={""} />
      <div className=" px-0 rounded-[50px] md:rounded-[70px] py-10 bg-bg -my-14">
        {/* <ContactData /> */}
        {/* <Touch /> */}
      </div>
    </section>
  )
}

export default Header
