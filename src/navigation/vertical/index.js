import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://i.ibb.co/k68ZjtC/logo.png',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://explorer.alfonova.app',
      icon: 'https://ibb.co/W0bzR3f/logo.png',
    })
  } else {
    chainMenus.push({
      title: 'Website',
      href: 'https://sychonix.me',
      icon: 'https://ibb.co/W0bzR3f/logo.png',
    })
  }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/sychonixx',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/sychonix',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
