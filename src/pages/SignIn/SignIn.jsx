import React from 'react';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
import { useForm } from 'react-hook-form';

const SignIn = () => {

  // 이메일 양식 @, . 이메일 주소를 포함한 패턴을 지켜야 합니다.
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // 소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const { register, handleSubmit, getValues, 
          formState: { isSubmitting, isSubmitted, errors } 
        } = useForm({ mode : "onChange" });

  return (
    <S.Form onSubmit={handleSubmit( async (data) => {
      console.log(data)

      const { email , password } = data;
      // 회원가입 데이터 요청하기
      // fetch() 이용, localhost:8000
      await fetch("http://localhost:8000/user/signIn", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email : email,
          password : password
        })
      })

    })}>

      <S.Label>
        <S.Title>이메일</S.Title>
        <S.Input 
          id="email" type="text" placeholder="이메일을 입력하세요" autoComplete='off'
          {...register("email", {
            required : true,
            pattern : {
              value : emailRegex
            }
          })}
        />
        {errors?.email?.type === 'required' && (
          <S.ConfirmMessage>이메일을 입력해주세요.</S.ConfirmMessage>
        )}
        {errors?.email?.type === 'pattern' && (
          <S.ConfirmMessage>이메일 양식에 맞게 입력해주세요.</S.ConfirmMessage>
        )}
      </S.Label>

      <S.Label>
        <S.Title>비밀번호</S.Title>
        <S.Input
          id="password" type="password" placeholder="비밀번호를 입력하세요" autoComplete='off'
          {...register("password", {
            required: true,
            pattern : {
              value : passwordRegex,
            }
          })}
        />
        { errors?.password?.type === 'required' && (
          <S.ConfirmMessage>비밀번호를 입력하세요.</S.ConfirmMessage>
        )}
        { errors?.password?.type === 'pattern' && (
          <S.ConfirmMessage>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다.</S.ConfirmMessage>
        )}
      </S.Label>
      
      <BasicButton size={"full"} shape={"small"}  variant={"black"} color={"white"} 
        disabled={isSubmitting}
      >
        로그인
      </BasicButton>
    </S.Form>
  );
};

export default SignIn;