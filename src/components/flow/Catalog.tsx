import { catalogData } from '../../data/flowData'
import SeasonHeader from '../global/SeasonHeader'
import separator from '../../assets/flow/icons/separator.svg'
import SVGPageSeparator from '../global/SVGPageSeparator'
import CardContainerCarousal from '../global/CardContainerCarousal'

const Catalog = () => {

  return (
    <>
      <SVGPageSeparator separator={separator} />
      <div className='w-full md:px-20 xl:px-32 gap-10 z-10 mb-24 md:mb-40'>
        <div className='w-full flex justify-center items-center mb-8 md:mb-16'>
          <SeasonHeader text={`catalog`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#0A7453] to-[#02BD83]' />
        </div>
        <CardContainerCarousal data={catalogData} />
      </div>
    </>
  )
}

export default Catalog