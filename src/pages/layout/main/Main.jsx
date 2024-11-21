import React from 'react';
import { Link } from 'react-router-dom';
import S from '../main/style';
import BasicButton from '../../../components/button/BasicButton';

const Main = () => {
  return (
    <S.wrapper className='wrapper'>
      <S.imageWrapper className='imageWrapper'>
        <img src={process.env.PUBLIC_URL + "/images/main/animal.png"}/>
      </S.imageWrapper>
      <S.buttonWrapper className='buttonWrapper'>
        <Link to={"/signIn"}>
        <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>로그인</BasicButton>
          </Link>
        <Link to={"/signUp"}>
        <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>회원가입</BasicButton>
          </Link>
      </S.buttonWrapper>
    </S.wrapper>
  );
};

export default Main;