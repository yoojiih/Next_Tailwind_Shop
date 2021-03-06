import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon, UserIcon, HeartIcon, LoginIcon } from '@heroicons/react/outline'

// a태그 or href(location)을 사용하는 대신 next의 Router사용 시 
// 페이지가 새로고침 되면서 이동하지 않고 페이지는 그대로 안의 내용물만 바뀜
// import { useRouter } from 'next/dist/client/router'
import Link from "next/link"; 
import ItemList from "./ItemList";
import { useRouter } from "next/router";

import Axios from "axios";
const navigation = {
    categories: [
        {
        id: 'women',
        name: 'Women',
        featured: [
            {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            },
            {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
            },
        ],
        sections: [
            {
            id: 'clothing',
            name: 'Clothing',
            items: [
                { name: 'Tops', href: '#' },
                { name: 'Dresses', href: '#' },
                { name: 'Pants', href: '#' },
                { name: 'Denim', href: '#' },
                { name: 'Sweaters', href: '#' },
                { name: 'T-Shirts', href: '#' },
                { name: 'Jackets', href: '#' },
                { name: 'Activewear', href: '#' },
                { name: 'Browse All', href: '#' },
            ],
            },
            {
            id: 'accessories',
            name: 'Accessories',
            items: [
                { name: 'Watches', href: '#' },
                { name: 'Wallets', href: '#' },
                { name: 'Bags', href: '#' },
                { name: 'Sunglasses', href: '#' },
                { name: 'Hats', href: '#' },
                { name: 'Belts', href: '#' },
            ],
            },
            {
            id: 'brands',
            name: 'Brands',
            items: [
                { name: 'Full Nelson', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Significant Other', href: '#' },
            ],
            },
        ],
        },
        {
        id: 'men',
        name: 'Men',
        featured: [
            {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
            },
            {
            name: 'Artwork Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
                'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
            },
        ],
        sections: [
            {
            id: 'clothing',
            name: 'Clothing',
            items: [
                { name: 'Tops', href: '#' },
                { name: 'Pants', href: '#' },
                { name: 'Sweaters', href: '#' },
                { name: 'T-Shirts', href: '#' },
                { name: 'Jackets', href: '#' },
                { name: 'Activewear', href: '#' },
                { name: 'Browse All', href: '#' },
            ],
            },
            {
            id: 'accessories',
            name: 'Accessories',
            items: [
                { name: 'Watches', href: '#' },
                { name: 'Wallets', href: '#' },
                { name: 'Bags', href: '#' },
                { name: 'Sunglasses', href: '#' },
                { name: 'Hats', href: '#' },
                { name: 'Belts', href: '#' },
            ],
            },
            {
            id: 'brands',
            name: 'Brands',
            items: [
                { name: 'Re-Arranged', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Full Nelson', href: '#' },
                { name: 'My Way', href: '#' },
            ],
            },
        ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav({ item }) {
    const [open, setOpen] = useState(false);

    const router = useRouter();
    console.log(router);

    // router객체 내 pathname을 이용해 메뉴 active 해주기
    // 1. activeItem 변수 생성
    // 2. router의 pathname 에 따라서 activeItem에 각 페이지 이름이 들어가도록 해놓고
    // 3. 각 Menu의 active가 활성화 되게
    // const activeItem = "home";  -> 임의지정
    // const activeItem;

    // if (router.pathname === "/") {
    //     activeItem = "home";
    // } else if (router.pathname === "/about") {
    //     activeItem = "about";
    // } else if (router.pathname === "/admin") {
    //     activeItem = "admin";
    // }

    const goLink = (e) => {
        console.log("data:ssss ");
    }
    const cate = (e) => {
        return <ItemList list={list.slice(1, 10)} /> ;
    }
    
    return (
        <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                    <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                    >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

{/* p: padding px : left right py: top dottom*/}
                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                        {navigation.categories.map((category) => (
                        <Tab
                            key={category.name}
                            className={({ selected }) =>
                            classNames(
                                selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                            )
                            }
                        >
                            {category.name}
                        </Tab>
                        ))}
                    </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                        <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                        <div className="grid grid-cols-2 gap-x-4">
                            {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                                </div>
                                <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute z-10 inset-0" aria-hidden="true" />
                                {item.name}
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                Shop now
                                </p>
                            </div>
                            ))}
                        </div>
                        {category.sections.map((section) => (
                            <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                {section.name}
                            </p>
                            <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                            >
                                {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                    <a href={item.href} className="-m-2 p-2 block text-gray-500">
                                    {item.name}
                                    </a>
                                </li>
                                ))}
                            </ul>
                            </div>
                        ))}
                        </Tab.Panel>
                    ))}
                    </Tab.Panels>
                </Tab.Group>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                    {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                        <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                        {page.name}
                        </a>
                    </div>
                    ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                    <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                        Sign in
                    </a>
                    </div>
                    <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                        Create account
                    </a>
                    </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                    <a href="#" className="-m-2 p-2 flex items-center">
                    <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                    </a>
                </div>
                </div>
            </Transition.Child>
            </Dialog>
        </Transition.Root>

        <header className="relative bg-white">
            <p className="bg-black h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                전 카테고리 10% 할인 쿠폰 받기
            </p>

                    {/* Search */}
                    <div className="flex justify-end lg:ml-6">
            
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="md:border-gray-200 md:focus:border-white block pl-7 pr-12 sm:text-sm font-medium tracking-widest"
                        placeholder="Search"
                    />
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500 flex justify-center">
                        <SearchIcon className="flex-shrink-0 h-6 w-6 text-gray-800 group-hover:text-gray-400" aria-hidden="true" />     
                    </a>
                    </div>
                <a href="/" className="text-5xl ... flex justify-center font-medium text-black pt-4 font-serif" >
                    Jardin
                </a>
            <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
                <div className="h-16 flex items-center">
                <button
                    type="button"
                    className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                    onClick={() => setOpen(true)}
                >
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                
                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                    <div className="h-full flex space-x-12">
                    {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                        {({ open }) => (
                            <>
                            <div className="relative flex">
                                <Popover.Button
                                className={classNames(
                                    open
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                )}
                                >
                                {category.name}
                                </Popover.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                <div className="relative bg-white">
                                    <div className="max-w-7xl mx-auto px-8">
                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                        {category.featured.map((item) => (
                                            <div key={item.name} className="group relative text-base sm:text-sm">
                                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-center object-cover"
                                                />
                                            </div>
                                            <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                            <p aria-hidden="true" className="mt-1">
                                                Shop now
                                            </p>
                                            </div>
                                        ))}
                                        </div>
                                        <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                            <p id={`${section.name}-heading`} className="font-medium text-gray-900" onClick={cate}>
                                                {section.name}
                                            </p>
                                            <ul
                                                role="list"
                                                aria-labelledby={`${section.name}-heading`}
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                                {section.items.map((item) => (
                                                <li key={item.name} className="flex">
                                                    <a href={item.href} className="hover:text-gray-800">
                                                    {item.name}
                                                    </a>
                                                </li>
                                                ))}
                                            </ul>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </Popover.Panel>
                            </Transition>
                            </>
                        )}
                        </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                        <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                        {page.name}
                        </a>
                    ))}
                    
                    </div>
                </Popover.Group>

{/* 오른쪽 로그인, 마이페이지. 좋아요, 쇼핑백 아이콘 */}

                <div className="ml-auto flex items-center">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        <span className="sr-only">LOGIN</span>
                        <LoginIcon className="w-6 h-6" aria-hidden="true" onClick={() => {router.push("/login");}}/>
                    </a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        <span className="sr-only">MY PAGE</span>
                        <UserIcon className="w-6 h-6" aria-hidden="true" onClick={() => {router.push("/login");}} />
                    </a>
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        <span className="sr-only">MY HEART</span>
                        <HeartIcon className="w-6 h-6" aria-hidden="true" onClick={() => {router.push("/login");}} />
                    </a>
                    {/* Cart */}
                    <a href="#" className="group -m-2 p-2 flex items-center text-sm font-medium">
                        <span className="sr-only">SHOPPING BAG</span>
                        <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-gray-800 group-hover:text-gray-400" aria-hidden="true" onClick={() => {router.push("/login");}}/>
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-400">0</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        </header>
        </div>
    )
}


export async function getStaticProps() {
    const apiUrl = process.env.apiUrl;
    const res = await Axios.get(apiUrl);
    const data = res.data;
    
    return {
    props: {
        list: data,
        name: process.env.name,
    },
};
} 