import { $menuIsOpen } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react'
import { useState } from 'react'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [swowBuyersList, setSwowBuyersList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  //const [lang, translations] = useLang()

  return (
    <nav className={`nev-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <h2>Menu</h2>
    </nav>
  )
}

export default Menu
