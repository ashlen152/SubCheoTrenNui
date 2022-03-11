
const NavItem = props => (
  <li className="px-2 py-4 hover:bg-slate-500 cursor-pointer">
    <a href={props.href}>
      {props.text}
    </a>
  </li>
)

export default function Home() {
  return (
    <div>
      <nav className='fixed w-full top-4 mx-auto flex flex-col text-center z-50'>
        <div className="bg-black bg-opacity-20 font-Qwitcher text-8xl p-2 ">
          Chèo Trên Núi
        </div>
        <ul className='bg-black bg-opacity-20 mt-2 flex flex-row items-center justify-center gap-2'>
          <NavItem href='#Product' text="Giới Thiệu"></NavItem>
          <NavItem href='#Product' text="Hình Ảnh"></NavItem>
          <NavItem href='#Product' text="Liên Lạc"></NavItem>
        </ul>
      </nav>
      <video className='object-cover w-full h-screen z-0' autoPlay playsInline muted loop>
        <source src="intro-short.mov" type="video/mp4" />
      </video>
    </div>
  )

}
