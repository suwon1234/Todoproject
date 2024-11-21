import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import S from './style';
import useInput from './useinput';

const Todo = ({todo}) => {
  const onClickDelete=()=>{
    if(!window.confirm("삭제 하시겠습니까?")) return;
    fetch("http://localhost:4000/todo",{
      method : 'DELETE',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        title : value,
        isChecked : false
      })
    }).then((response)=>{
      console.log(response)

    }).catch(console.error)

    
  }

  const { id, title, content, userId, isChecked } = todo;
  const [value, onChange, setValue] = useInput(title);
  const [ isEdit, setIsEdit ] = useState(false);
  const handleIsEdit = () => {
    setIsEdit(!isEdit)
  }
  const [isDelete,setIsDelete]=useState(false);
  const handleIsDelete=()=>{
    setIsDelete(!isDelete)
  }

  return (
    <S.Li>
      <S.Wrapper>
        <input type="checkbox" />
          { isEdit ? (
            <input className='update-input' value={value} onChange={onChange} />
          ) : (
            <S.Title>
              {title}
            </S.Title>
          )}
      </S.Wrapper>
      <S.Wrapper>
        { isEdit ? (
          <>
            <S.Button><FontAwesomeIcon icon={faCheck} className='check' /></S.Button>
            <S.Button onClick={handleIsEdit}><FontAwesomeIcon icon={faX} className='exit' /></S.Button>
          </>
        ) : (
          <S.Button onClick={handleIsEdit}><FontAwesomeIcon icon={faPen} className='pen' /></S.Button>
        )}
        <S.Button><FontAwesomeIcon icon={faTrash} className='trash' onClick={onClickDelete}/></S.Button>
      </S.Wrapper>
    </S.Li>
  );
};

export default Todo;