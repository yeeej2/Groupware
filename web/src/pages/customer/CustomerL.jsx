import React from 'react';
import Card from '../../components/Card';
import '../../styles/CustomerL.css';

function CustomerL() {
  // 임시 샘플 데이터
  const sampleData = [
    {
      id: 1,
      title: '[샘플] 핑거포스트',
      count: 2,
      address: '서울특별시 구로구 디지털로26길 111 (구로동)',
      name: '이도현',
      price: 9600000,
      categories: ['영업기회(1)', '영업활동(1)', '견적(1)', '계약(1)', '고객지원(1)'],
    },
    {
      id: 2,
      title: '[샘플] 핑거포스트',
      count: 2,
      address: '서울특별시 구로구 디지털로26길 111 (구로동)',
      name: '이도현',
      price: 9600000,
      categories: ['영업기회(1)', '영업활동(1)', '견적(1)', '계약(1)', '고객지원(1)'],
    },
    {
      id: 3,
      title: '[샘플] 핑거포스트',
      count: 2,
      address: '서울특별시 구로구 디지털로26길 111 (구로동)',
      name: '이도현',
      price: 9600000,
      categories: ['영업기회(1)', '영업활동(1)', '견적(1)', '계약(1)', '고객지원(1)'],
    },
    {
      id: 4,
      title: '[샘플] 핑거포스트',
      count: 2,
      address: '서울특별시 구로구 디지털로26길 111 (구로동)',
      name: '이도현',
      price: 9600000,
      categories: ['영업기회(1)', '영업활동(1)', '견적(1)', '계약(1)', '고객지원(1)'],
    },
  ];

  // 실제 데이터는 Flask API 등을 통해 가져올 수도 있음
  // useEffect + fetch/axios => setState 구조로 구성

  return (
    <div className="customer-container">
      {/* 왼쪽 검색 영역 */}
      <div className="left-panel">
        <button className="menu-btn">1</button>
        <button className="menu-btn">2</button>
        <button className="search-btn">검색</button>
      </div>

      {/* 오른쪽 카드 리스트 */}
      <div className="right-panel">
        {sampleData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CustomerL;
