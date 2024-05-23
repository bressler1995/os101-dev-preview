import { BiMenuAltLeft } from "react-icons/bi";
import './TopBar.css';

function TopBar() {
  return (
    <div className="os101TopBar">
      <div className='os101Toggle_container'><button className='btn btn-primary os101Toggle'><BiMenuAltLeft /></button></div>
    </div>
  )
}

export default TopBar