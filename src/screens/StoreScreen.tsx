import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import storeActions from '../actions/storeActions'
import { Header } from '../components/header/Header'
export const StoreScreen: React.FunctionComponent = (props: any) => {

    const storeOne = useSelector((state: any) => state.storeOne);
    const { loading, error, data: store } = storeOne;

    const {id} = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeActions.one(id) as any);
    }, [dispatch])

    if(!loading){
        console.log(error)
        // console.log(store[0]?.chairs)
    }
    return (
        <div>
            <Header />
            {!loading && (
                <>

                    <div className='store-container'>
                    <img className='store-image' src={store[0].images[0]} alt="" />
                    <div className="store-info">
                        <div className="store-info-header">
                        <h2>{store[0].name}</h2>
                        <div>
                            <button><i className='bx bx-heart'></i></button>
                            <button><i className='bx bx-arrow-back' ></i></button>
                        </div>
                        </div>

                        <details>
                            <summary>ENTRADAS</summary>
                            {store[0].covers.map((chair: any) => (
                                    <div key={chair._id} className="menu-item" >
                                        <h3>{chair.type}</h3>
                                        <span>{chair.price}</span>
                                    </div>
                                ))}
                        </details>

                        <details>
                            <summary>RESERVAS</summary>
                            <div>
                                {store[0].chairs.map((chair: any) => (
                                    <div key={chair._id} className="menu-item" >
                                        <h3>{chair.type}</h3>
                                        <span>{chair.price}</span>
                                    </div>
                                ))}
                            </div>
                        </details>

                        <details>
                            <summary>MENU</summary>
                            <div>
                                {store[0].menus.map((menu: any) => (
                                    <div key={menu._id} className="menu-item" >
                                        <h3>{menu.title}</h3>
                                        {menu.items.map((item:any) => (
                                            <>
                                            <img src={item.image} alt={item.name} />
                                            <div>
                                            <span>{item.name}</span>
                                            <span>{item.price}</span>                                            
                                            </div>
                                        </>

                                        ))}

                                    </div>
                                ))}
                            </div>
                        </details>

                    </div>
                    </div>
                </>

            )}
        </div>
    )
}

