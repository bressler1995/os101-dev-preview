import './Sidebar.css';

function Sidebar({children, show}) {
  return (
    <div className={show == true ? 'os101Sidebar' : 'os101Sidebar hide'}>
      <div className='os101Logo p-2 px-4'>
        <img src='./images/logo.png'/>
        <div className='os101Logo_courseInfo'>
          <span>Open Science 101</span>
          <span>Development Version</span>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Sidebar