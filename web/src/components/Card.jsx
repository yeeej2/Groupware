// src/components/Card.jsx
import React from 'react';
import '../styles/Card.css'; // 필요하다면 별도 Card 전용 CSS 파일을 사용

function Card({ data }) {
  const {
    title,
    count,
    address,
    name,
    price,
    categories,
  } = data;

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">
          {title} ( 👥 {count}명 )
        </span>
        <button className="monitor-btn">모니터링</button>
      </div>
      <div className="card-address">{address}</div>
      <div className="card-user">{name}</div>
      <div className="card-price">₩ {price.toLocaleString()}</div>
      <div className="card-categories">
        {/* 카테고리 배열을 ' | '로 구분해서 표시 */}
        {categories.join(' | ')}
      </div>
    </div>
  );
}

export default Card;
