import styled from 'styled-components';

const S ={}

S.slider=styled.div`
    width: 100%;
    overflow: hidden;
    margin: 0 auto 80px;
    position: relative;
    min-width: 1240px;
    max-width: 3840px;
    min-height: 508px;
    & .slideindicator{
    position: absolute;
    bottom: 16px;
    left: auto;
    right: calc(50% - 620px);
    transform: translate(-50%);
    width: auto;
    min-width: 45px;
    padding: 3px 10px;
    background-color: rgba(0, 0, 0, .4);
    border-radius: 20px;
    color: transparent;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
    }

`

export default S;