const NavButton = ({ btnText, styles, bgColor, onCLick }: { btnText: string, styles: string, bgColor: string, onCLick?: () => void }) => {
  return (
    <button style={{ backgroundColor: `var(--${bgColor})`}} onClick={onCLick} className={`rounded-full px-6 pt-2 pb-1 font-bebasNeue font-bold text-xl active:scale-95 transition-all duration-500 ease-in-out text-nowrap tracking-wide ${styles}`}>{btnText}</button>
  )
}

export default NavButton