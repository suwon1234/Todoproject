import { faBell, faCreditCard, faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import S from './style'

const Layout = () => {
  return (
    <S.Background className='background'>
      <S.Wrapper className='wrapper'>
        <S.Header className='header'>
          <Link to={"/todo"}>Park Todo</Link>
        </S.Header>
        <S.Main className='main'>
          <Outlet/>
        </S.Main>
        <S.Nav className='nav'>
          <NavLink to={"/"}>
            <FontAwesomeIcon icon={faHouse}  className='icon'/>   
            <p>피드</p>       
          </NavLink>
          <NavLink to={"/search"}>
            <FontAwesomeIcon icon={faSearch} className='icon'/> 
            <p>검색</p>           
          </NavLink>
          <NavLink to={"/notice"}>
            <FontAwesomeIcon icon={faBell} className='icon'/>  
            <p>알림</p>          
          </NavLink>
          <NavLink to={"/payment"}>
            <FontAwesomeIcon icon={faCreditCard} className='icon'/> 
            <p>결제</p>           
          </NavLink>
          <NavLink to={"/my"}>
            <FontAwesomeIcon icon={faUser} className='icon'/> 
            <p>MY</p>           
          </NavLink>
        </S.Nav>
      </S.Wrapper>
    </S.Background>
  );
};

export default Layout;