const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <h3>Mi Cart</h3>
        <div className='cart'>
          Cart
          <span className='number'>{props.amount()}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
