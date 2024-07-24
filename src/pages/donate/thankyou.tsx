import Image from 'next/image'

import PageMeta from '@/features/pages/components/PageMeta'
import { abs_url } from '@/lib/components/Links'
import { getHostname } from '@/lib/utils/env'

const Page = () => {
  return (
    <div className={'page-container'} style={{ maxWidth: 'none' }}>
      <PageMeta
        metaTitle={'Thank you! - ' + getHostname()}
        metaDescription={''}
        robots={'noindex,nofollow'}
        canonicalUrl={abs_url('/donate')}
        lang={'en'}
      />
      <div className="page-container">
        <div className="bordered-container inner-container inner-blueberry text-center">
          <p>
            <Image src={'/images/shaymin.png'} width={195} height={166} alt="shaymin" />
          </p>
          <h1>Thank You!</h1>
          <p className="text-justify">
            Dear trainer,
            <br />
            Thank you for your donation ❤️ ! I really appreciate it and it keeps this site and my motivation running.
            <br /> <br />I am currently working on ideas about how donors can get extra bonuses in the future, so stay
            tuned!
            <br /> <br />
            <cite>Javier Aguilar - webmaster and developer.</cite>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
