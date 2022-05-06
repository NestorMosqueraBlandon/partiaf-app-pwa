import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import BottonMenu from '../components/BottonMenu';
import { Header } from '../components/header/Header';

const ProfileScreen = () => {

  const userSignin = useSelector((state: any) => state.userSignin);
  const {userInfo} = userSignin;

  console.log(userInfo)

  return (
    <div >
        <Header />
        <div className='profile-info'>
        <img src={userInfo.image} alt="" />
        <p>@{userInfo.username}</p>
        </div>

        <div className="profile-status">
            <div>
                <p>0</p>
                <span>Eventos</span>
            </div>
            <div>
                <p>0</p>
                <span>Seguidores</span>
            </div>
            <div>
                <p>0</p>
                <span>Matchs</span>
            </div>
        </div>

        <div className="profile-buttons">
            <button>Editar perfil</button>
            <button><i className='bx bx-heart'></i></button>
        </div>

        <p className='profile-bio'>Click para anadir una biografia</p>

        <div className="profile-shared">
            <h3>Comparte tu primer evento</h3>
            <p>Graba o sube un video con efectos, sonidos y mas. Tus videos apareceran en tu perfil.</p>
            <Link to='/'>Crear video</Link>
        </div>

        <div className="profile-complete">
            <h3>Completa tu perfil</h3>
            <p><span>1/3</span>completado</p>
            <div className="complete-content">
                <div className="complete-box">
                <i className='bx bx-user'></i>
                    <h4>Incluye tu nombre</h4>
                    <p>Como quieres que te llamen?</p>
                    <button>Anadir</button>
                </div>
                <div className="complete-box">
                <i className='bx bx-edit' ></i>
                    <h4>Anade tu biografia</h4>
                    <p>Que quieres que la gente sepa?</p>
                    <button>Anadir</button>
                </div>
            
            </div>
        </div>

        <BottonMenu />
    </div>
  )
}

export default ProfileScreen
