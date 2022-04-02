import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchItems } from '../Slices/listSlice'

export default function Catalog(){
  const dispatch = useDispatch();

  const items = useSelector(store => store.listSlice.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [])

  return(
    <div className="row">
    <div className="col-4">
      {items
        .map(item => <div className="card catalog-item-card">
          <img src={item.images[0]} className="card-img-top img-fluid" alt={item.title}/>
            <div className="card-body">
              <p className="card-text">{item.title}</p>
              <p className="card-text">{item.price}</p>
              <a href="/products/1.html"
                 className="btn btn-outline-primary">Заказать</a>
            </div>
        </div>)}
    </div>
    </div>
  )
}