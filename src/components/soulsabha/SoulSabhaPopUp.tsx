interface SoulSabhaPopUpData {
  id: number;
  image?: string;
  logo?: string;
  title: string;
  content?: any;
  links?: string;
}

const SoulSabhaPopUp = ({ viewPopUp, setViewPopUp, data }: { viewPopUp: boolean, setViewPopUp: (viewPopUp: boolean) => void, data: SoulSabhaPopUpData }) => {
  return (
    <>
      {/* desktop pop up */}
      <div className={`${viewPopUp ? 'hidden md:flex' : 'hidden'} w-full fixed h-screen inset-0 z-30 px-5`}>
        <div className=' bg-black bg-opacity-60 fixed h-sceen z-50 w-full inset-0' onClick={() => setViewPopUp(false)}></div>
        <div className='w-full max-w-[1000px] rounded-3xl bg-white overflow-hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50'>
          <div className='p-3 max-h-[70vh] overflow-y-scroll'>
            <div className=''>
              {
                data?.content?.length > 2 ? (
                  <div className='w-full grid grid-cols-3 gap-2 rounded-2xl overflow-hidden'>
                    {
                      data?.content?.map((sub_data: string) => (
                        <div key={sub_data} className='w-full transition-all duration-200 ease-in-out'>
                          <img src={sub_data} className='w-full' />
                        </div>
                      ))
                    }
                  </div>
                ) : (
                  <div className='w-full grid grid-cols-3 gap-2 rounded-3xl'>
                    <div className='w-full aspect-square bg-gray-500' />
                    <div className='w-full aspect-square bg-gray-500' />
                    <div className='w-full aspect-square bg-gray-500' />
                    <div className='w-full aspect-square bg-gray-500' />
                    <div className='w-full aspect-square bg-gray-500' />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div >

      {/* mobile popup */}
      <div className={`${viewPopUp ? 'flex md:hidden' : 'hidden'} w-full fixed justify-center items-center h-screen inset-0 z-20 px-5 bg-black bg-opacity-60`} onClick={() => setViewPopUp(false)}>
        <div className='w-full max-w-[1000px] rounded-2xl bg-white relative overflow-hidden z-50'>
          <div className='p-3'>
            {
              data?.content?.length > 2 ? (
                <div className='w-full grid grid-cols-2 gap-2 rounded-lg'>
                  {
                    data?.content?.map((sub_data: string) => (
                      <img key={sub_data} src={sub_data} className='w-full rounded-lg' />
                    ))
                  }
                </div>
              ) : (
                <div className='w-full grid grid-cols-2 gap-2 rounded-lg'>
                  <div className='w-full aspect-square bg-stone-400' />
                  <div className='w-full aspect-square bg-stone-400' />
                  <div className='w-full aspect-square bg-stone-400' />
                  <div className='w-full aspect-square bg-stone-400' />
                  <div className='w-full aspect-square bg-stone-400' />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SoulSabhaPopUp