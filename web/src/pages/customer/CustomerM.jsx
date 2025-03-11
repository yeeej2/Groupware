import React from "react";

const CustomerForm = () => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="font-bold text-red-600">고객사 *</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="font-bold text-red-600">팩스번호</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="font-bold text-red-600">사업자번호</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="font-bold text-red-600">담당자</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="font-bold text-red-600">연락처</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="font-bold text-red-600">주소</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="font-bold text-red-600">비고</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="font-bold text-red-600">담당영업</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        <hr className="my-4 border-orange-500" />

        <div className="mb-4">
          <label className="font-bold text-red-600">장비리스트</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
