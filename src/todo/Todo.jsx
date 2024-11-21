import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import S from './style';
import useInput from './useinput';

const Todo = ({todo, isTodoUpdate, handleIsTodoUpdate}) => {

  const { id, title, content, userId, isChecked } = todo;
  const [ value, onChange, setValue ] = useInput(title);
  const [ isEdit, setIsEdit ] = useState(false);
  const handleIsEdit = () => {
    setIsEdit(!isEdit)
  }

  // 체크 상태 변경
  // 15분
  const handleChecked = async () => { 
    // setIsTodoChecked(!isTodoChecked)
    await fetch(`http://localhost:4000/todo/${id}`, {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        ...todo,
        isChecked : !isChecked,
      })
    })
    .then((res) => {
      console.log(res)
      if(!res.ok) return console.err(`${res}`)
      handleIsTodoUpdate(!isTodoUpdate)
    })
  }

  // 투두 삭제
  const deleteTodo = async () => {
    if(window.confirm('투두를 삭제하시겠습니까?')){
      await fetch(`http://localhost:4000/todo/${id}`, {
        method : 'DELETE'
      })
      .then((res) => {
        console.log(res);
        if(!res.ok) return console.log(`Error ${res}`);
        handleIsTodoUpdate(!isTodoUpdate)
      })
      .catch(console.err)
      return;
    }
    return;
  }



  //타이틀 변경 실습
  const checkTodo =async()=>{
    if(window.confirm("수정하시겠습니까?")){
      await fetch(`http://localhost:4000/todo/${id}`,{
        method : 'PUT',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          ...todo,
          title : value
        })
      }).then((res)=>{
        console.log(res)
        if(!res.ok)return console.error(`Error ${res}`)
        handleIsTodoUpdate(!isTodoUpdate)
        setIsEdit(!isEdit)
      })
      .catch(console.err)
    }
  }
  console.log(isChecked)

  return (
    <S.Li>
      <S.Wrapper>
        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
          { isEdit ? (
            <input className='update-input' value={value} onChange={onChange} />
          ) : (
            <S.Title className={isChecked ? "complete" : ""}>
              {title}
            </S.Title>
          )}
      </S.Wrapper>
      <S.Wrapper>
        { isEdit ? (
          <>
            <S.Button onClick={checkTodo}><FontAwesomeIcon icon={faCheck} className='check'/></S.Button>
            <S.Button onClick={handleIsEdit}><FontAwesomeIcon icon={faX} className='exit' /></S.Button>
          </>
        ) : (
          <S.Button onClick={handleIsEdit}><FontAwesomeIcon icon={faPen} className='pen' /></S.Button>
        )}
        <S.Button onClick={deleteTodo}><FontAwesomeIcon icon={faTrash} className='trash' /></S.Button>
      </S.Wrapper>
    </S.Li>
  );
};

export default Todo;