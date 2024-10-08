import React, {useEffect, useMemo, useRef, useState} from "react";
import axios from "axios";
import {Link, router} from "@inertiajs/react";
import Logo from "./logo/CBILogoWhite.jsx";
import LogoBlack from "./logo/CBILogoBlack.jsx";
import Dropdown from "../Pages/Home/Components/Dropdown";
import {Footer} from "@/Components/Footer.jsx";
import {
    ChartPieIcon, ChevronRightIcon,
    FingerprintIcon,
    Grid2x2Icon,
    MenuIcon,
    PhoneIcon,
    PlusSquareIcon,
    RefreshCcwIcon, XIcon
} from "lucide-react";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton, DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel
} from "@headlessui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@radix-ui/react-icons";
import {Skeleton} from "@/Components/ui/skeleton.jsx";

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: Grid2x2Icon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerprintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: PlusSquareIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: RefreshCcwIcon},
]
const callsToAction = [
    { name: 'Explore', href: '#', icon: ChevronRightIcon },
]

const Layout = ({ children, categories }) => {
    const dropdownRef = useRef(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [posts, setPosts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(0)
    const [postsFetchErrors, setPostFetchErrors] = useState([])
    const [fetchingPosts, setFetchingPosts] = useState(false)
    const [panelOpen, setPanelOpen] = useState(false)
    const loadCategoryPosts = (categoryId) => {
        const category = categories.find(category => category.id === categoryId)
        if(category.children && category.children.length){
            setPanelOpen(true)
        }
        if(currentCategory !== categoryId){
            setFetchingPosts(true)
            axios.post(route('category.posts', categoryId))
                .then((response) => {
                    setCurrentCategory(categoryId)
                    setFetchingPosts(false)
                    setPosts(response.data.posts)
                })
                .catch(error => {
                    // setFetchingPosts(false)
                    console.log(error)
                })
        }
    }

    document.addEventListener('click', function(){
        if(panelOpen){
            setPanelOpen(!panelOpen)
        }
    })

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-black text-white sticky top-0 z-50">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <button
                            aria-label="Open Menu"
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="lg:hidden"
                        >
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                        <button aria-label="Search GCBI" className="lg:hidden">
                            <svg
                                viewBox="0 0 32 32"
                                width="20"
                                height="20"
                                className="fill-current"
                            >
                                <path
                                    d="m30.6 28.1-8.3-8.3c1.5-2 2.4-4.4 2.4-7.2C24.7 6 19.6 1 13 1S1.4 6.1 1.4 12.7 6.5 24.3 13 24.3c2.3 0 4.4-.6 6.2-1.8l8.5 8.5 2.9-2.9zM4 12.6c0-5.2 3.9-9.1 9-9.1s9 3.9 9 9.1c0 5.2-3.9 9.1-9 9.1s-9-3.9-9-9.1z"></path>
                            </svg>
                        </button>
                    </div>

                    <Link href="/" className="flex-shrink-0">
                        <Logo classNames="h-12 w-auto"/>
                    </Link>

                    <div className="hidden lg:flex space-x-4"></div>
                </div>
            </header>
            <header className="bg-white h-full border-b border-gray-200 sticky top-16 z-50">
                <nav aria-label="Global Navigation" className="mx-auto lg:flex hidden max-w-7xl justify-center items-center p-6 lg:py-4 lg:px-8">
                    <PopoverGroup className="hidden lg:flex lg:gap-x-8 nav-link">
                        {categories.map((category) => (
                            <Popover key={category.id} className="relative" >
                                <PopoverButton
                                    className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                                    onClick={category.children && category.children.length ? () => setPanelOpen(!panelOpen) : () => loadCategoryPosts(category.id)}
                                >
                                    {category.name}
                                    { category.children && category.children.length ? (
                                        panelOpen ? <ChevronUpIcon aria-hidden="true" className="h-5 w-5 flex-none text-black"/> : <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400"/>
                                    ) : "" }
                                </PopoverButton>

                                { category.children && category.children.length ? (
                                    <PopoverPanel
                                        transition
                                        className="fixed left-0 right-0 top-0 z-50 mt-[8rem] w-screen overflow-hidden bg-white shadow-lg transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-0 pb-0">
                                            <div className="grid-nav-links pb-5 px-5">
                                                {category.children.map((child) => (
                                                    <div
                                                        key={child.name}
                                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                    >
                                                        <div className="flex-auto">
                                                            <a
                                                                href={route('category.show', child.slug)}
                                                                className="block font-semibold text-gray-900"
                                                            >
                                                                {child.name}
                                                                <span className="absolute inset-0" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                                                {callsToAction.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                    >
                                                        {item.name} {category.name}
                                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-black" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </PopoverPanel>
                                    ) :
                                    <PopoverPanel
                                        transition
                                        className="fixed left-0 right-0 top-0 z-50 mt-[8rem] w-screen overflow-hidden bg-white shadow-lg transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                    <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-0 pb-0">
                                        {
                                            fetchingPosts ? (<div className="grid-nav-links pb-5 px-5">
                                                    <div className="flex flex-col space-y-3">
                                                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                                                        <div className="space-y-2">
                                                            <Skeleton className="h-4 w-[250px]"/>
                                                            <Skeleton className="h-4 w-[200px]"/>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col space-y-3">
                                                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                                                        <div className="space-y-2">
                                                            <Skeleton className="h-4 w-[250px]"/>
                                                            <Skeleton className="h-4 w-[200px]"/>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col space-y-3">
                                                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                                                        <div className="space-y-2">
                                                            <Skeleton className="h-4 w-[250px]"/>
                                                            <Skeleton className="h-4 w-[200px]"/>
                                                        </div>
                                                    </div>


                                                </div>
                                            ) : (
                                            <>
                                                <div className="grid-nav-links pb-5 px-5">
                                                    {
                                                        posts.map((post) => (
                                                            <div
                                                                key={post.id}
                                                                data-testid="edinburgh-card"
                                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                            >
                                                                <div data-testid="anchor-inner-wrapper">
                                                                    <a
                                                                        href={route("posts.show", [category.name, post.slug,])}
                                                                        data-testid="external-anchor"
                                                                        target="_self"
                                                                        className="sc-2e6baa30-0 gILusN"
                                                                    >
                                                                        <div
                                                                            data-testid="edinburgh-live"
                                                                            className="sc-b8778340-0 kFuHJG"
                                                                            style={{borderBottom: 'transparent'}}
                                                                        >
                                                                            <div
                                                                                data-testid="card-media-wrapper"
                                                                                className="sc-b8778340-1 jvzsLx"
                                                                            >
                                                                                <div
                                                                                    data-testid="card-media"
                                                                                    className="sc-b8778340-2 kUyIkJ"
                                                                                >
                                                                                    {
                                                                                        post.image && post.image !== '' ? (
                                                                                            <div
                                                                                                className="sc-a34861b-1 jxzoZC">

                                                                                                <img
                                                                                                    sizes="96vw"
                                                                                                    srcSet={post.image + " 240w," + post.image + " 320w," + post.image + " 480w," + post.image + " 640w," + post.image + " 800w," + post.image + " 1024w," + post.image + " 1536"}
                                                                                                    src={post.image}
                                                                                                    loading="lazy"
                                                                                                    alt={post.title}
                                                                                                    className="sc-a34861b-0 efFcac"
                                                                                                />


                                                                                            </div>
                                                                                        ) : ""
                                                                                    }</div>
                                                                            </div>
                                                                            <div
                                                                                data-testid="card-text-wrapper"
                                                                                className="sc-b8778340-3 gxEarx"
                                                                                style={{
                                                                                    backgroundColor: 'transparent',
                                                                                    borderBottom: 'transparent'
                                                                                }}
                                                                            >
                                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                                    <div
                                                                                        className="sc-4fedabc7-0 kZtaAl">
                                                                                        <h2
                                                                                            data-testid="card-headline"
                                                                                            className="sc-4fedabc7-3 zTZri"
                                                                                        >
                                                                                            {post.title}
                                                                                        </h2>
                                                                                    </div>
                                                                                </div>
                                                                                <p
                                                                                    data-testid="card-description"
                                                                                    className="sc-b8778340-4 kYtujW"
                                                                                    style={{backgroundColor: 'transparent'}}
                                                                                >
                                                                                    {post.description}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                        ))
                                                    }
                                                </div>
                                                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                                                    {callsToAction.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                        >
                                                            {item.name} {category.name}
                                                            <item.icon aria-hidden="true"
                                                                       className="h-5 w-5 flex-none text-black"/>
                                                        </a>
                                                    ))}
                                                </div>
                                            </>
                                            )
                                        }


                                    </div>
                                    </PopoverPanel>
                                }
                            </Popover>
                        ))}
                    </PopoverGroup>

                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10"/>
                    <DialogPanel
                        className="fixed inset-y-0 top-16 lg:top-0 md:top-16 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-end px-0">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XIcon aria-hidden="true" className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {categories.map((item) => (
                                        <Disclosure key={item.id} as="div" className="-mx-3">
                                            <DisclosureButton
                                                className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                {item.name}
                                                {item.children && item.children.length ?
                                                    <ChevronDownIcon aria-hidden="true"
                                                                     className="h-5 w-5 flex-none group-data-[open]:rotate-180"/> : ""}
                                            </DisclosureButton>
                                            {item.children && item.children.length ?
                                                <DisclosurePanel className="mt-2 space-y-2">
                                                    {[...products, ...callsToAction].map((item) => (
                                                        <DisclosureButton
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {item.name}
                                                        </DisclosureButton>
                                                    ))}
                                                </DisclosurePanel>
                                                : ""}
                                        </Disclosure>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            {/*<section className="bg-white h-full border-b border-gray-200">*/}
            {/*    <nav*/}
            {/*        className="hidden md:flex lg:flex h-full items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <ul className="flex items-center">*/}
            {/*            {categories.map((category) => (*/}
            {/*                <li key={category.id} className="link-hover relative">*/}
            {/*                    {category.children &&*/}
            {/*                    category.children.length > 0 ? (*/}
            {/*                        <Dropdown ref={dropdownRef} key={category.id} category={category}/>*/}
            {/*                    ) : (*/}
            {/*                        <div className={`p-3 ${*/}
            {/*                            route().current('category.show', category.slug)*/}
            {/*                                ? "active-link"*/}
            {/*                                : ""*/}
            {/*                        }`}>*/}
            {/*                            <Link*/}
            {/*                                href={`/category/${category.slug}`}*/}
            {/*                                className={`nav-link text-gray-900 h-full rounded-none text-center transition duration-300`}*/}
            {/*                            >*/}
            {/*                                {category.name}*/}
            {/*                            </Link>*/}
            {/*                        </div>*/}
            {/*                    )}*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*</section>*/}

            <main className="flex-grow">{children}</main>

            <Footer/>
        </div>
    );
};

export default Layout;
