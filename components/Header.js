import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const styles = {
    navBtns: 'hover:cursor-pointer hover:text-orange-500 transition duration-150 ease-linear',
}

const Header = () => {
    const [modal, setModal] = useState(false);

  return (
    <div className='w-[90%] md:w-[80%] mx-auto flex justify-between items-center py-4 '>
        <div>
          <img src="./images/logo.svg" alt="" />
        </div>

        <div className='hidden md:flex space-x-7 text-sm font-medium'>
          <div className={styles.navBtns}>
            Home
          </div>
          <div className={styles.navBtns}>
            New
          </div>
          <div className={styles.navBtns}>
            Popular
          </div>
          <div className={styles.navBtns}>
            Trending
          </div>
          <div className={styles.navBtns}>
            Categories
          </div>
        </div>

        <div className='flex md:hidden'>
          <div onClick={() => setModal(!modal)}>
            {
              modal ? <XMarkIcon className='h-6' /> : <Bars3Icon className='h-6' />
            }
          </div>
        </div>
    </div>
  )
}

export default Header