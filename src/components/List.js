import { useGlobalContext } from '../context'

const ListCart = () => {
  const { products, moreAmount, lessAmount, removeItem } = useGlobalContext()

  let componetReturn = products.map((product) => {
    const { id, title, img, amount, price } = product
    return (
      <div className='row' key={id}>
        <img src={img} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>${price}</p>
          <button className='btn-remove' onClick={() => removeItem(id)}>
            remove
          </button>
        </div>
        <div className='btn-container'>
          <button className='btn' onClick={() => moreAmount(id)}>
            +
          </button>
          <span>{amount}</span>
          <button className='btn' onClick={() => lessAmount(id)}>
            -
          </button>
        </div>
      </div>
    )
  })
  return <>{componetReturn}</>
}

export default ListCart
