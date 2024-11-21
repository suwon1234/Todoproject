import styled from 'styled-components';



const S={}

S.wrapper=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width :300px){
    .tag{
      color: red;
    }
  }

`

S.imageWrapper=styled.div`
  flex: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;

`
S.buttonWrapper =styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 100px 0;

`

export default S;


