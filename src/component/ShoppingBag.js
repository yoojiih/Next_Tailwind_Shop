// pages/view/[id].js
// 특정 제품 누르면 상품보내줘야하니까 nextlink 씀
// 1. next/link import
// 2. href는 각 아이템의 id로 가야하니까 <Link href="/view/${item.id}`}> 

import Link from "next/link"; 
// add cart redux
import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/modules/cart';

export default function ShoppingBag({list}) {

 //1.redux에서 id 리스트 받아와서
    //2. map함수로 list갯수만큼 반복 렌더링
    //3. 추가, 삭제 기능 + 카운터
 
    const dispatch = useDispatch();
    const value = useSelector(({ cart }) => cart.value);
    const valuelist = useSelector(({ cart }) => cart.valuelist);
    const re = useSelector(({ cart }) => cart.re);
    const plus = useCallback(({ value }) => {
        dispatch(cartActions.increment({ value }));
    }, [dispatch]);

    const minus = useCallback(({ value }) => {
        dispatch(cartActions.decrement({ value }));
    }, [dispatch]);
    
    const add = useCallback(({ valuelist }) => {
        dispatch(cartActions.setcart({valuelist: valuelist}));
    }, [dispatch]);
    const del = useCallback(({ re }) => {
        dispatch(cartActions.remove({re: "re"}));
    }, [dispatch]);
    // const {
    //     id,
    //     name,
    //     image_link,
    //     price,
    //     description,
    //     updated_at,
    //     category,
    //     product_type,
    //     product_link,
    // } = item;

return (
    <div className="bg-white">
           <h1>re</h1>

            <span>{del}</span>
            {/* <span>{valuelist}</span> */}
            <button onClick={() => minus({ value })}>-</button>
            <span>{value}</span>
            <button onClick={() => plus({ value })}>+</button>
            <button onClick={() => add({ valuelist })}>add</button>
            <button onClick={() => del({ del })}>remove</button>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
        
        {/*  리스트 반복문 : map 안의 코드는 list array내 자료 개수만큼 실행됨 (3열짜리)
                        콜백함수 소괄호 내 파라미터로 product입력 시 array내 모든 data를 순서대로 하나씩 꺼냄
                        map을 돌 때는 항상 key가 있어야함 
        */}
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {list.map((item) => (    
                    <div key={item.id} className="group relative"> 
                        {/* 누르면 보내줘야하니까 next/link 사용해 href를 각 아이템의 id로 가게 작성 */}
                        <Link href={`/detail/${item.id}`}>
                            <a>
                            <div className="w-full min-h-50 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                src={item.image_link}
                                alt={item.name}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={item.product_link}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {item.name}
                                    </a>
                                </h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{item.price}</p>
                        </div>
                        </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

