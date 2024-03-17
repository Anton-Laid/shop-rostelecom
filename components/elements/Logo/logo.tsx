import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../../public/img/logo.svg'

const Logo = () => (
  <Link className='' href='/'>
    <Image className='logo__img' src={logoImg} alt='Rostelecom logo' />
  </Link>
)

export default Logo
