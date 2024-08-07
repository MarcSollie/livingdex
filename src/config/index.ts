import { getCacheHost, isDevelopmentEnv } from '@/lib/utils/env'
import { getBaseUrl } from '@/lib/utils/urls'

const ASSETS_CACHE_VERSION = '20230809-01'
const ASSETS_CACHE_VERSION_INCREMENTAL = '20230924-01'
// const dataCdn = isLocalAssetsEnabled() ? 'http://localhost:4455/data' : 'https://cdn.supeffective.com/dataset'
// const assetsCdn = isLocalAssetsEnabled() ? 'http://localhost:4455/assets' : 'https://cdn.supeffective.com/assets'
const assetsCdn = getCacheHost() + '/assets'

const appConfig = {
  dev: isDevelopmentEnv(),
  baseUrl: getBaseUrl(),
  version: {
    num: '3.10.0',
  },
  themeColor: '#1a1d1f',
  texts: {
    siteName: 'SuperEffective',
    standaloneTitle: 'SuperEffective',
    defaultMetaTitle: 'SuperEffective - Your Pokémon Gaming Companion',
    defaultMetaDescription:
      'Supereffective is a new Pokémon website with news and various tools to assist you ' +
      'in your journey as a trainer. Follow us to stay up-to-date.',
  },
  links: {
  },
  patreon: {
    oauthRedirectUrl: `${getBaseUrl()}/api/callbacks/patreon`,
    webhookCallbackUrl: `${getBaseUrl()}/api/webhooks/patreon`,
  },
  cannyAppId: '66058d26d14939da879a83e8',
  cannyUrl: 'https://supereffective.canny.io',
  assets: {
    // version: ASSETS_CACHE_VERSION,
    getPokeImgVersion(nid: string): string {
      if (nid.includes('paldea') || nid.includes('bloodmoon')) {
        return ASSETS_CACHE_VERSION_INCREMENTAL
      }

      const dexNum = Number.parseInt(nid.split('-')[0].replace(/^0+/, ''))

      if (dexNum > 1010) {
        return ASSETS_CACHE_VERSION_INCREMENTAL
      }

      return ASSETS_CACHE_VERSION
    },
    imagesUrl: `${assetsCdn}/images`,
  },
  limits: {
    saveBtnDelay: 4000,
    maxDexes: isDevelopmentEnv() ? 4 : 20,
    maxPokemonPerBox: 30,
    maxBoxTitleSize: 15,
    maxDexTitleSize: 32,
  },
}

export default appConfig
