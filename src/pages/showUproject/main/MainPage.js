import React from 'react';
import S from './style'

const MainPage=()=>{
  return (
    <S.slider className="slider">
          <div className="slide">
            <div className="live-badge">LIVE</div>
            <img
              src="https://via.placeholder.com/1240x508" // 임시 이미지 URL
              alt="slide-content"
              className="slide-image"
            />
          </div>
          <div className="slideindicator">
          <span class="swiper-pagination-current">3</span>
          /
          <span class="swiper-pagination-total">4</span>
          </div>
          <button className="arrowrightarrow">〉</button>
          <button className="arrowleftarrow">〈</button>
          <div className='swiper' ></div>

        </S.slider>

  )
}
export default MainPage;