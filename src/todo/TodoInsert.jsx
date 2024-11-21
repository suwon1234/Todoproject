import React from 'react';
import S from './style';
import useInput from './useinput';

const TodoInsert = ({isTodoUpdate,handleIsTodoUpdate}) => {
  const [value,onChange,setValue]=useInput("");
  const onKeyPressAddTodo=(e)=>{

    if(e.key==='Enter'){
      if(!window.confirm("이대로 추가 하시겠습니까?")) return;
      //데이터 전송 (Create)
      fetch("http://localhost:4000/todo",{
        method : 'POST', //대문자를 원칙으로 한다
        headers : {
          'Content-Type' : 'application/json' //대소문자 구분 떄문에 잘 보고 쳐야 한다 json를 보내기로 했으면 body도 json으로 맞춰야한다
        },
        body : JSON.stringify({
          title : value,
          isChecked : false
        })
      }).then((response)=>{
        console.log(response)
        handleIsTodoUpdate(!isTodoUpdate)
        setValue("")
      })
      .catch(console.error)
    }
  }

  return (
    <div>
      <S.Input value={value} onChange={onChange} placeholder='할 일을 추가해볼까요?' onKeyUp={onKeyPressAddTodo}/>
    </div>
  );
};

export default TodoInsert;