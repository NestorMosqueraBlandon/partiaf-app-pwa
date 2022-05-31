import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import bookingActions from '../actions/bookingActions'
import buyActions from '../actions/buyActions'
import { addToCart, removeFromCart } from '../actions/cartActions'
import storeActions from '../actions/storeActions'
import BottonMenu from '../components/BottonMenu'
import { Header } from '../components/header/Header'
import { DivisaFormater } from '../utils/divisaFormater'
import TimeAgo from 'react-timeago'
import swal from 'sweetalert'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

export const StoreScreen: React.FunctionComponent = (props: any) => {

    const storeOne = useSelector((state: any) => state.storeOne);
    const { loading, error, data: store } = storeOne;

    const createBooking = useSelector((state: any) => state.createBooking);
    const { loading: loadingCreate, error: errorCreate, success } = createBooking;

    const userSignin = useSelector((state: any) => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector((state: any) => state.cart);
    const { cartItems: itemsCart } = cart;

    const { id } = useParams();

    const [openMenu, setOpenMenu] = useState(false);
    const [openFooter, setOpenFooter] = useState(false);
    const [openCover, setOpenCover] = useState(false);
    const [openBooking, setOpenBooking] = useState(false);
    const [menuCat, setMenuCat] = useState("");
    // const [open, setOpenBooking] = useState(false);

    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    const [people, setPeople] = useState(0)
    const [day, setDay] = useState("")
    const [hour, setHour] = useState("")
    const [booking, setBooking] = useState("")

    const [amountCover, setAmountCover] = useState("")

    const [openCommnet, setOpenCommentModal] = useState(true)

    console.log(openCommnet)
    const [qr, setqr] = useState(false);

    const [cartItem, setCartItem] = useState<any>([])
    const setCart = async (product: any, operator: any) => {
        let totalPrice = 0
        if (operator == "add") {
            setqr(false);
            console.log(itemsCart)
            const index = itemsCart.findIndex((cart: any) => cart.product == product._id);
            if (index >= 0) {
                console.log(itemsCart[index].qty++)
                const newQty = itemsCart[index].qty++;
                // setCartItem(cartItem);
                dispatch(addToCart(product, newQty) as any);

                totalPrice = itemsCart.reduce((a: any, c: any) => Number(a) + Number(c.price) * Number(c.qty), 0)
                setPrice(totalPrice)
            } else {
                dispatch(addToCart(product, 1) as any);
                // setCartItem([...cartItem, {...product, qty: 1}]);
            }
        }

        if (operator == "minus") {
            const index = itemsCart.findIndex((cart: any) => cart.product == product._id);
            if (index >= 0 && itemsCart[index].qty > 0) {
                // console.log("current Minus QTY", itemsCart[index].qty--)
                const newQty = itemsCart[index].qty -= 1;
                // cartItem[index].qty--;  
                // console.log(cartItem[index].qty)
                // setCartItem(cartItem);
                dispatch(addToCart(product, newQty) as any);

                totalPrice = itemsCart.reduce((a: any, c: any) => Number(a) + Number(c.price) * Number(c.qty), 0)
                setPrice(totalPrice)
                if (itemsCart[index].qty === 0) {
                    dispatch(removeFromCart(itemsCart[index].product) as any)
                }
            }

            // dispatch(addToCart(product, 1) as any);

            // setCartItem([...cartItem])

            console.log([...cartItem])
        }
    }

    let totalPrice = itemsCart.length > 0 ? itemsCart.reduce((a: any, c: any) => Number(a) + Number(c.price) * Number(c.qty), 0) : 0

    const buyHandler = () => {
        dispatch(buyActions.create({ name: userInfo.name, items: itemsCart, total: totalPrice, email: store[0].email, storeId: store[0]._id }) as any)

        setqr(true);
        setOpenFooter(false);
    }

    const bookingHandler = () => {

        if (day == "" || hour == "") {
            if (!success) {
                swal(
                    "Opps!",
                    "Ha habido un error con tu reserva, revisa los campos!",
                    "warning"
                );
            }
            return;
        }
        dispatch(bookingActions.create({ day: day, hour: hour, peoples: people, total: 30000, type: booking, email: store[0].email, storeId: store[0]._id }) as any)

        if (success) {
            swal(
                "Excelente!",
                "Tu reserva ha sido aceptada!",
                "success"
            );
        }
    }




    const [comments, setCommnets] = useState<any[]>([]);

    const [commentText, setCommentText] = useState('');

    const addCommnet = () => {
        setCommnets([...comments, {text: commentText, photo: userInfo.image, date: Date.now()}])
        setOpenCommentModal(false)
        setCommentText('')
    }

    console.log(comments)


    useEffect(() => {
        dispatch(storeActions.one(id) as any);
    }, [dispatch])

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

            {qr && (

                <button className='back-btn' onClick={() => setqr(false)}><i className='bx bx-left-arrow-alt' ></i> </button>
            )}

            <Link to="/" className='back-btn-link' ><i className='bx bx-left-arrow-alt' ></i> </Link>

            {!loading && (
                <>
                    <div className='store-container'>
                        <Swiper
                              spaceBetween={50}
                              slidesPerView={1}
                              onSlideChange={() => console.log('slide change')}
                              onSwiper={(swiper) => console.log(swiper)}
                              >
                            {store[0].images.map((image:any) => (
                                
                                <SwiperSlide>
                            <img className='store-image' src={image} alt="iamgen" />
                            </SwiperSlide>
                            ))}
                            
                        </Swiper>
                        <div className="store-info">
                            <div className="store-info-header">
                                <h2>{store[0].name}</h2>
                                <div>
                                <a href={`tel:${store[0].mobile}`}><span><i className='bx bxs-phone'></i></span> </a>
                                <a href={`https://api.whatsapp.com/send?phone=57${store[0].mobile}`}><i className='bx bxl-whatsapp' ></i></a>
                                <a href="https://www.google.com/maps/place/Jumbo+Calle+80/@4.6909253,-74.0839133,19.62z/data=!4m5!3m4!1s0x8e3f9b2177059375:0x34d1a90a38fbc99!8m2!3d4.6909593!4d-74.0841774"><i className='bx bxs-location-plus'></i> </a>
                                
                                    <button><i className='bx bx-heart'></i></button>
                                </div>
                            </div>

                            <div className="buttons-item">
                                <button onClick={() => setOpenCover(true)}><i className='bx bx-no-entry' ></i> COVERS</button>
                                <button onClick={() => setOpenBooking(true)}><i className='bx bxs-bookmark' ></i> RESERVAS</button>
                                <button onClick={() => setOpenMenu(true)}><i className='bx bxs-food-menu' ></i> MENU</button>
                            </div>

                            <div className="comments">
                                <div className="comments-header">
                                <h3>Comentarios <span>{comments.length}</span> </h3> 
                                <button onClick={() => setOpenCommentModal(true)}><i className='bx bx-comment-detail'></i></button>
                                </div>

                                <div className="comments-list">
                                    {comments.map(comment => (
                                        <div className="comment-card">
                                            <div>
                                                <img src={comment.photo} alt="" />
                                                </div>
                                                <span>
                                                    <p>{comment.text}</p>
                                                    <p><TimeAgo date={comment.date}/></p>
                                                </span>

                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </>

            )}

            {openCover && (

                <div className="menu-screen min-he" >
                    <button className='back-btn' onClick={() => setOpenCover(false)}>Atras </button>
                    <div className="cover-container">
                        {!loading && store[0].covers.map((cover: any) => (
                            <button key={cover._id} className="menu-screen-item" >
                                <h3>{cover.type}</h3>
                                <p>{cover.description}</p>
                                <p>{cover.price}</p>
                                <p>{cover.hour}</p>
                                <p>{cover.date}</p>

                            </button>
                        ))}
                    </div>

                    <div className="section-booking section-cover">
                        <h2><i className='bx bx-user-plus'></i> Cuantas entradas deseas?</h2>

                        <div className="people-container">
                            <button className={people == 1 ? "active" : ""} onClick={() => setPeople(1)} >1</button>
                            <button className={people == 2 ? "active" : ""} onClick={() => setPeople(2)} >2</button>
                            <button className={people == 3 ? "active" : ""} onClick={() => setPeople(3)} >3</button>
                            <button className={people == 4 ? "active" : ""} onClick={() => setPeople(4)} >4</button>
                            <button className={people == 5 ? "active" : ""} onClick={() => setPeople(5)} >5</button>
                            <button className={people == 6 ? "active" : ""} onClick={() => setPeople(6)} >6</button>
                            <button className={people == 7 ? "active" : ""} onClick={() => setPeople(7)} >7</button>
                            <button className={people == 8 ? "active" : ""} onClick={() => setPeople(8)} >8</button>                        <button className={people == 9 ? "active" : ""} onClick={() => setPeople(9)} >9</button>

                        </div>
                    </div>
                    <button className='btn-primary'>Pagar</button>

                    <div className="cover-container-wrap">
                        <h2>Eventos similares</h2>
                        <div>

                        {!loading && store[0].covers.map((cover: any) => (
                            <button key={cover._id} className="menu-screen-item" >
                                <h3>{cover.type}</h3>
                                <p>{cover.description}</p>
                                <p>{cover.price}</p>
                                <p>{cover.hour}</p>
                                <p>{cover.date}</p>

                            </button>
                        ))}
                        </div>

                    </div>
                </div>
            )}
            {openBooking && (

                <div className="menu-screen min-he" >
                    <h3>Reservas disponibles</h3>

                    <div className="booking-container">

                        {!loading && store[0].chairs.filter((chair: any) => chair.amount > 0)
                            .map((menu: any) => (
                                <button key={menu._id} className={booking == menu.type ? "active" : ""} onClick={() => setBooking(menu.type)} >

                                    <div className='screen-item-cog-chair'>
                                        <div>
                                            <span className='item-name'>{menu.type}</span>
                                            <span className='limit'>Personas por mesa:{menu.limit}</span>

                                            <span className='limit'>{DivisaFormater(menu.price)}</span>
                                        </div>


                                    </div>

                                </button>
                            ))}

                    </div>

                    <div className='booking-screen '>
                        <div className="section-booking">
                            <h2><i className='bx bx-user-plus'></i> Cuantas personas?</h2>

                            <div className="people-container">
                                <button className={people == 1 ? "active" : ""} onClick={() => setPeople(1)} >1</button>
                                <button className={people == 2 ? "active" : ""} onClick={() => setPeople(2)} >2</button>
                                <button className={people == 3 ? "active" : ""} onClick={() => setPeople(3)} >3</button>
                                <button className={people == 4 ? "active" : ""} onClick={() => setPeople(4)} >4</button>
                                <button className={people == 5 ? "active" : ""} onClick={() => setPeople(5)} >5</button>
                                <button className={people == 6 ? "active" : ""} onClick={() => setPeople(6)} >6</button>
                                <button className={people == 7 ? "active" : ""} onClick={() => setPeople(7)} >7</button>
                                <button className={people == 8 ? "active" : ""} onClick={() => setPeople(8)} >8</button>                        <button className={people == 9 ? "active" : ""} onClick={() => setPeople(9)} >9</button>

                            </div>
                        </div>

                        <div className="section-booking">
                            <h2><i className='bx bx-calendar'></i> Que dia?</h2>
                            <div className="day-container">
                                <button className={day == "24 Mayo" ? "active" : ""} onClick={() => setDay("24 Mayo")} >
                                    <span>Hoy</span>
                                    <span>24 Mayo</span>
                                </button>
                                <button className={day == "25 Mayo" ? "active" : ""} onClick={() => setDay("25 Mayo")} >
                                    <span>Miercoles</span>
                                    <span>25 Mayo</span>
                                </button>
                                <button className={day == "26 Mayo" ? "active" : ""} onClick={() => setDay("26 Mayo")} >
                                    <span>Jueves</span>
                                    <span>26 Mayo</span>
                                </button>
                                <button className={day == "27 Mayo" ? "active" : ""} onClick={() => setDay("27 Mayo")} >
                                    <span>Viernes</span>
                                    <span>27 Mayo</span>
                                </button>
                                <button className={day == "28 Mayo" ? "active" : ""} onClick={() => setDay("28 Mayo")} >
                                    <span>Sabado</span>
                                    <span>28 Mayo</span>
                                </button>
                                <button className={day == "29 Mayo" ? "active" : ""} onClick={() => setDay("29 Mayo")} >
                                    <span>Domingo</span>
                                    <span>29 Mayo</span>
                                </button>
                                <button className={day == "30 Mayo" ? "active" : ""} onClick={() => setDay("30 Mayo")} >
                                    <span>Lunes</span>
                                    <span>30 Mayo</span>
                                </button>


                            </div>
                        </div>

                        <div className="section-booking">
                            <h2><i className='bx bx-time-five' ></i> Que hora?</h2>
                            <div className="day-container">
                                <button className={hour == "12:00 pm" ? "active" : ""} onClick={() => setHour("12:00 pm")} >
                                    <span>12:00 pm</span>
                                </button>
                                <button className={hour == "12:30 pm" ? "active" : ""} onClick={() => setHour("12:30 pm")} >
                                    <span>12:30 pm</span>
                                </button>
                                <button className={hour == "1:00 pm" ? "active" : ""} onClick={() => setHour("1:00 pm")} >
                                    <span>1:00 pm</span>
                                </button>
                                <button className={hour == "1:30 pm" ? "active" : ""} onClick={() => setHour("1:30 pm")} >
                                    <span>1:30 pm</span>
                                </button>
                                <button className={hour == "2:00 pm" ? "active" : ""} onClick={() => setHour("2:00 pm")} >
                                    <span>2:00 pm</span>
                                </button>
                                <button className={hour == "2:30 pm" ? "active" : ""} onClick={() => setHour("2:30 pm")} >
                                    <span>2:30 pm</span>
                                </button>
                                <button className={hour == "3:00 pm" ? "active" : ""} onClick={() => setHour("3:00 pm")} >
                                    <span>3:00 pm</span>
                                </button>


                            </div>
                        </div>
                        <button onClick={() => bookingHandler()} className='btn-primary'>Reservar</button>

                    </div>

                </div>
            )}
            {openMenu && (

                <div className="menu-screen" >
                    <div className='menu-cat'>
                        <div onClick={() => setMenuCat("")}>Todos</div>

                        {!loading && store[0].menus.filter((menu: any) => menu.items.length > 0)
                            .map((menu: any) => (
                                <div key={menu._id} onClick={() => setMenuCat(menu.title)}>{menu.title}</div>
                            ))}
                    </div>

                    {!loading && store[0].menus.filter((menu: any) => menu.items.length > 0)
                        .filter((menu: any) => menu.title.includes(menuCat))
                        .map((menu: any) => (
                            <div key={menu._id} className="menu-screen-item" >
                                <h3>{menu.title}</h3>
                                {menu.items.map((item: any) => (

                                    <div key={item._id} className='screen-item-cog'>
                                        <div className="img-container">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div>
                                            <span className='item-name'>{item.name}</span>
                                            <p>{item.description}</p>
                                            <div className="price">
                                                <span>{DivisaFormater(item.price)}</span>

                                                <div className="amount">

                                                    <button onClick={() => setCart(item, "minus")}>-</button>
                                                    <p className="input">{itemsCart.filter((c: any) => c.product == item._id)[0]?.qty ? itemsCart.filter((c: any) => c.product == item._id)[0]?.qty : 0}</p>
                                                    <button onClick={() => setCart(item, "add")}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        ))}


                </div>
            )}

            {(openMenu || openCover || openBooking) && (

                <div className="footer-price">
                    <button onClick={() => setOpenFooter(true)} className='order-btn'><i className='bx bxs-chevron-up'></i></button>
                    <h3>{DivisaFormater(totalPrice)}</h3>

                    {totalPrice > 0 && qr == false && (
                        <button className='pay-btn' onClick={() => buyHandler()}>Pagar</button>
                    )}

                    {qr == true && totalPrice > 0 && (
                        <button className='pay-btn-none'>Pagar</button>
                    )}

                    {(totalPrice <= 0) && (
                        <button className='pay-btn-none'>Pagar</button>
                    )}
                </div>
            )}


            <div className={openFooter ? `footer-container active` : `footer-container`}>
                <header><button onClick={() => setOpenFooter(false)}><i className='bx bx-x' ></i></button></header>
                <h2>Total: {DivisaFormater(totalPrice)}</h2>
                <div className="cart-content">

                    {itemsCart.map((item: any) => (
                        <div className="cart-item">
                            <div className="cart-header">
                                <h4>{item.name} <span>{item.qty}</span></h4>
                                <p>{DivisaFormater(item.price)}</p>
                            </div>
                            <p>{item.description}</p>
                            <div className="amount">

                                <button onClick={() => setCart({ _id: item.product, ...item }, "minus")}>-</button>
                                <p className="input">{itemsCart.filter((c: any) => c.product == item.product)[0]?.qty ? itemsCart.filter((c: any) => c.product == item.product)[0]?.qty : 0}</p>
                                <button onClick={() => setCart({ _id: item.product, ...item }, "add")}>+</button>
                            </div>

                        </div>

                    ))}
                </div>

                {totalPrice > 0 && (
                    <button className='pay-btn wt-90' onClick={() => buyHandler()}>Pagar</button>

                )}

                {(totalPrice <= 0 && qr == true) && (
                    <button className='pay-btn-none wt-90' >Pagar</button>
                )}


            </div>

            {totalPrice > 0 && qr == true && (

                <div className="qr-screen">
                    <h3>Metodos de pago </h3>
                    {/* <QRCode value={`${price}`} /> */}
                    <button className="btn-pay">Particoins</button>
                    <Link to="/qr" className="btn-pay-link">Efectivo</Link>
                    <form action="https://real-vision-api.herokuapp.com/mercadopago" method="POST" encType='multipart/form-data'>
                        <input
                            type="hidden"
                            name="title"
                            value="Partiaf Products"
                        />
                        <input type="hidden" name="price" value={Number(totalPrice)} />
                        <input type='submit' className='placeholder-btn' value="MercadoPago" />

                    </form>

                    {/* <button onClick={() => setqr(false)}>Aceptar</button> */}
                </div>
            )}

                {openCommnet &&(

                <div className="comment-modal">
                    <div className='modal'>
                        <div className="modal-header">
                        <h3>Comentario</h3>
                        <button onClick={() => setOpenCommentModal(false)}><i className='bx bx-x'></i></button>

                        </div>

                    <input type="text" placeholder='Escribe un comentario' value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                    <button className='btn btn-primary' onClick={() => addCommnet()}>Comentar</button>
                    </div>

                </div>
                ) }


            <BottonMenu />
        </div>
    )
}

