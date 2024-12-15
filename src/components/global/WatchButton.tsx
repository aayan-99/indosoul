import btnIcon from '../../assets/icons/playIconBlack.svg'
import btnIconWhite from '../../assets/icons/playIconWhite.svg'

const WatchButton = ({ btnText, onClick, styles, bgColor, btnColor }: { btnText: string, onClick?: () => void, bgColor?: string, styles?: string, btnColor?: string | null }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: bgColor }} className={`font-bebasNeue relative flex justify-center items-center gap-1 md:gap-3 font-semibold uppercase text-xl py-1.5 w-40 2xl:w-48 rounded-full tracking-wide transition-all duration-500 ease-in-out active:scale-95 ${styles}`}>
      <p className='mt-1 leading-none'>{btnText}</p>
      <span className={`absolute top-1/2 -translate-y-1/2 ${btnColor === 'white' ? 'right-1.5' : 'right-2'}`}>
        <img src={ btnColor === 'white' ? btnIconWhite : btnIcon} className={`${btnColor === 'white' ? 'w-7 mt-1' : 'w-5'}`} alt="" />
      </span>
    </button>
  )
}

export default WatchButton