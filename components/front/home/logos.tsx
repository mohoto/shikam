import Image from 'next/image'

type Props = {}

function Logos({}: Props) {
  return (
    <section className="py-20 xl:px-72">
      <div className="flex justify-between">
        <Image
        src="/images/home/logo_facebook_business_suite-2.png"
        alt="Logo Google partners Shikam"
        className="rounded-md bg-shikam-light p-2"
        width={142}
        height={63}
        priority
        />
        <Image
        src="/images/home/logo_google_partners-2.png"
        alt="Logo Google partners Shikam"
        className="rounded-md bg-shikam-light p-2"
        width={142}
        height={63}
        priority
        />
        <Image
        src="/images/home/logo_shopify_partners-2.png"
        alt="Logo Google partners Shikam"
        className="rounded-md bg-shikam-light p-2"
        width={142}
        height={63}
        priority
        />
        <Image
        src="/images/home/logo_France_Num-2.png"
        alt="Logo Google partners Shikam"
        className="rounded-md bg-shikam-light p-2"
        width={142}
        height={63}
        priority
        />
      </div>
    </section>
  )
}

export default Logos