
const NavItem = props => (
  <li className="px-4 py-6 hover:bg-slate-500">
    <a href={props.href}>
      {props.text}
    </a>
  </li>
)

export default function Home() {
  return (
    <div>
    <nav className='flex flex-col text-center'>
      <div>
        Chèo Trên Núi
        </div> 
        <ul className='flex flex-row items-center justify-center gap-4'>
          <NavItem href='#Product' text="Presentation"></NavItem>
          <NavItem href='#Product' text="Test"></NavItem>
          <NavItem href='#Product' text="test"></NavItem>
          <NavItem href='#Product' text="Test"></NavItem>
        </ul>
      </nav> 
    </div>
  )

}
