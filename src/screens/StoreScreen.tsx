import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import storeActions from '../actions/storeActions'
import BottonMenu from '../components/BottonMenu'
import { Header } from '../components/header/Header'
import { DivisaFormater } from '../utils/divisaFormater'
export const StoreScreen: React.FunctionComponent = (props: any) => {

    const storeOne = useSelector((state: any) => state.storeOne);
    const { loading, error, data: store } = storeOne;

    const { id } = useParams();

    const [openMenu, setOpenMenu] = useState(false);
    const [openFooter, setOpenFooter] = useState(false);
    const [openCover, setOpenCover] = useState(false);
    const [openBooking, setOpenBooking] = useState(false);
    const [menuCat, setMenuCat] = useState("");
    // const [open, setOpenBooking] = useState(false);

    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    
    const [qr, setqr] = useState(false);

    const [cartItem, setCartItem] = useState<any>([])
    const setCart = (product: any, operator:any) => {

        let totalPrice = 0
        if(operator == "add"){
            const index = cartItem.findIndex((cart:any) => cart._id == product._id);
            if(index >= 0){
                cartItem[index].qty++;   
                setCartItem(cartItem);
                totalPrice = cartItem.reduce((a:any, c:any) => Number(a) + Number(c.price) * Number(c.qty), 0)
                setPrice(totalPrice)
            }else{
                setCartItem([...cartItem, {...product, qty: 1}]);
            }
        }

        if(operator == "minus"){
            const index = cartItem.findIndex((cart:any) => cart._id == product._id);
            if(index >= 0){
                cartItem[index].qty--;  
                setCartItem(cartItem);
                totalPrice = cartItem.reduce((a:any, c:any) => Number(a) + Number(c.price) * Number(c.qty), 0)
                setPrice(totalPrice)
                if(cartItem[index].qty <= 0){
                    cartItem.splice(index, 1)
                }
            }
        }
    }

    let totalPrice = cartItem.length > 0 && cartItem.reduce((a:any, c:any) => Number(a) + Number(c.price) * Number(c.qty), 0)


    useEffect(() => {
        dispatch(storeActions.one(id) as any);
    }, [dispatch])

    if (!loading) {
        console.log(error)
        // console.log(store[0]?.chairs)
    }
    return (
        <div>
            <Header />

            {openMenu && (

                <button className='back-btn' onClick={() => setOpenMenu(false)}><i className='bx bx-left-arrow-alt' ></i> </button>
            )}
            {openCover && (

                <button className='back-btn' onClick={() => setOpenCover(false)}><i className='bx bx-left-arrow-alt' ></i> </button>
            )}
            {openBooking && (

                <button className='back-btn' onClick={() => setOpenBooking(false)}><i className='bx bx-left-arrow-alt' ></i> </button>
            )}

            <Link to="/" className='back-btn-link' ><i className='bx bx-left-arrow-alt' ></i> </Link>

            {!loading && (
                <>
                    <div className='store-container'>
                        <img className='store-image' src={store[0].images[0]} alt="" />
                        <div className="store-info">
                            <div className="store-info-header">
                                <h2>{store[0].name}</h2>
                                <div>
                                    <button><i className='bx bx-heart'></i></button>
                                </div>
                            </div>

                            {/* <details>
                                <summary><span><i className='bx bx-no-entry' ></i> ENTRADAS</span>  <i className='bx bx-plus' ></i> </summary>
                                {store[0].covers.map((chair: any) => (
                                    <div key={chair._id} className="menu-item cover" >
                                        <div className='cover-header'>
                                            <h3>{chair.type}</h3>
                                            <span>{DivisaFormater(chair.price)}</span>
                                        </div>
                                        <div className="cover-amount">
                                            <h3>Cantidad</h3>
                                            <div className="cover-buttons">
                                                <button>-</button>
                                                <input type="text" value={1} />
                                                <button>+</button>
                                            </div>
                                        </div>
                                        <div className="cover-total">
                                            <h3>Total</h3>
                                            <p>{DivisaFormater(chair.price)}</p>
                                        </div>
                                    </div>
                                ))}
                            </details> */}

                            {/* <details>
                                <summary><span><i className='bx bxs-bookmark' ></i> RESERVAS</span>  <i className='bx bx-plus' ></i> </summary>
                                <div>
                                    {store[0].chairs.map((chair: any) => (
                                        <div key={chair._id} className="menu-item" >
                                            <h3>{chair.type}</h3>
                                            <span>{chair.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </details> */}
                            <div className="buttons-item">
                                <button onClick={() => setOpenCover(true)}><i className='bx bx-no-entry' ></i> COVERS</button>
                                <button onClick={() => setOpenBooking(true)}><i className='bx bxs-bookmark' ></i> RESERVAS</button>
                                <button onClick={() => setOpenMenu(true)}><i className='bx bxs-food-menu' ></i> MENU</button>
                            </div>
                            {/* <details>
                                <button><span><i className='bx bxs-food-menu' ></i> MENU </span> <i className='bx bx-plus' ></i></button>
                                <div>
                                    {store[0].menus.map((menu: any) => (
                                        <div key={menu._id} className="menu-item" >
                                            <h3>{menu.title}</h3>
                                            {menu.items.map((item: any) => (
                                                <>
                                                    <img src={item.image} alt={item.name} />
                                                    <div>
                                                        <span>{item.name}</span>
                                                        <span>{DivisaFormater(item.price)}</span>
                                                    </div>
                                                </>

                                            ))}

                                        </div>
                                    ))}
                                </div>
                            </details> */}
                            <div className="contact-new">
                                <a href={`tel:${store[0].mobile}`}><span><i className='bx bxs-phone'></i> Llamada</span> </a>
                                <a href={`https://api.whatsapp.com/send?phone=57${store[0].mobile}`}><i className='bx bxl-whatsapp' ></i> Whatsapp</a>
                                <Link to="/"><i className='bx bxs-location-plus'></i> Ubicacion</Link>

                            </div>

                        </div>
                    </div>
                </>

            )}

            {openCover && (

                <div className="menu-screen" >
                    <button className='back-btn' onClick={() => setOpenCover(false)}>Atras </button>
                    {!loading && store[0].covers.map((cover: any) => (
                        <div key={cover._id} className="menu-screen-item" >
                            <h3>{cover.type}</h3>
                        </div>
                    ))}
                </div>
            )}
            {openBooking && (

                <div className="menu-screen" >
                        <h3>Reservas disponibles</h3>
                    {!loading && store[0].chairs.map((menu: any) => (
                        <div key={menu._id} className="menu-screen-item" >

                            <div className='screen-item-cog-chair'>
                                <div>
                                    <span className='item-name'>{menu.type}</span>
                                    <span className='limit'>Personas por mesa:{menu.limit}</span>

                                    <span className='limit'>{DivisaFormater(menu.price)}</span>
                                </div>
                            </div>
                            <div className="amount">
                                
                            </div>
                        </div>
                    ))}


                </div>
            )}
            {openMenu && (

                <div className="menu-screen" >
                    <div className='menu-cat'>

                    {!loading && store[0].menus.map((menu: any) => (
                        <div onClick={() => setMenuCat(menu.title)}>{menu.title}</div>
                    ))}
                    </div>

                    {!loading && store[0].menus.filter((menu: any) => menu.title.includes(menuCat))
                    .map((menu: any) => (
                        <div key={menu._id} className="menu-screen-item" >
                            <h3>{menu.title}</h3>
                            {menu.items.map((item: any) => (
                                <>
                                    <div className='screen-item-cog'>
                                        <img src={item.image} alt={item.name} />
                                        <div>
                                            <span className='item-name'>{item.name}</span>
                                            <p>Pollo a la plancha con queso mozzarella,falafel, tomate, apio sobre lechigas</p>
                                            <div className="price">
                                            <span>{DivisaFormater(item.price)}</span>

                                            <div className="amount">
                                                <button onClick={() => setCart(item, "minus")}>-</button>
                                                <p className="input">{cartItem.filter((c:any) => c._id == item._id)[0]?.qty? cartItem.filter((c:any) => c._id == item._id)[0]?.qty : 0 }</p>
                                                <button onClick={() => setCart(item, "add")}>+</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                </>

                            ))}
                        </div>
                    ))}


                </div>
            )}

            {(openMenu || openCover || openBooking) && (

                <div className="footer-price">
                    <button onClick={() => setOpenFooter(true)} className='order-btn'><i className='bx bxs-chevron-up'></i></button>
                    <h3>{DivisaFormater(totalPrice)}</h3>
                    <button className='pay-btn' onClick={() => setqr(true)}>Pagar</button>
                </div>
            )}


            <div className={openFooter ? `footer-container active` : `footer-container`}>
                <header><button onClick={() => setOpenFooter(false)}><i className='bx bx-x' ></i></button></header>

                <h2>Total: $145.000</h2>
            </div>
            
            {qr && (

            <div className="qr-screen">
                <h3>Este es tu QR para realizar el pago de forma fisica y adminsitrar tu pedido </h3>
                <QRCode value={`${price}`} />
                <form action="https://real-vision-api.herokuapp.com/mercadopago" method="POST" encType='multipart/form-data'>
                <input
                            type="hidden"
                            name="title"
                            value="Partiaf Products"
                        />
                        <input type="hidden" name="price" value={Number(totalPrice)} />
                        <input type='submit' className='placeholder-btn' value="ACEPTAR" />

                </form>
                {/* <button onClick={() => setqr(false)}>Aceptar</button> */}
            </div>
            )}

            <BottonMenu />
        </div>
    )
}

