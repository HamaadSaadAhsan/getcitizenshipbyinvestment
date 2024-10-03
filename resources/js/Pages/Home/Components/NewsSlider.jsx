import React, { useRef, useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const NewsSlider = () => {
    const sliderRef = useRef(null);
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    const responsiveConfig = {
        0:{
            items:1
        },
        600:{
            items:2
        },
        700:{
            items: 3,
            margin: 80,
        },
        768:{
            items: 3,
            margin: 120,
        },
        800:{
          items: 3,
        },
        900:{
            items:3,
            margin: 175,
        },
        1000:{
            items:3,
        },
        1024:{
            items: 3,
        },
        1140:{
            items: 4,
        }
    };

    useEffect(() => {
        let owl = $('.owl-carousel').owlCarousel();

        $(".next-btn").click(function () {
            owl.trigger("next.owl.carousel");
        });

        $(".prev-btn").click(function () {
            owl.trigger("prev.owl.carousel");
        });

        $(owl).on("translated.owl.carousel", function (event) {
            if ($(".owl-prev").hasClass("disabled")) {
                $(".prev-btn").addClass("disabled");
            } else {
                $(".prev-btn").removeClass("disabled");
            }
            if ($(".owl-next").hasClass("disabled")) {
                $(".next-btn").addClass("disabled");
            } else {
                $(".next-btn").removeClass("disabled");
            }
        });
    })


    // const updateScrollButtons = () => {
    //     if (sliderRef.current) {
    //         const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    //         setCanScrollLeft(scrollLeft > 0);
    //         setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    //     }
    // };

    // const updateItemClasses = () => {
    //     if (sliderRef.current) {
    //         const items = Array.from(sliderRef.current.querySelectorAll('.jupLmo item')).filter(item => {
    //             const rect = item.getBoundingClientRect();
    //             const sliderRect = sliderRef.current.getBoundingClientRect();
    //             return (
    //                 rect.left < sliderRect.right && // Item is within the right boundary
    //                 rect.right > sliderRect.left // Item is within the left boundary
    //             );
    //         });
    //
    //         const visibleItems = 5;
    //         const startIndex = currentIndex;
    //         const endIndex = Math.min(startIndex + visibleItems - 1, items.length - 1);
    //
    //
    //         items.forEach((item, index) => {
    //             const postImage = item.querySelector('.post-image');
    //             postImage.classList.remove('jEhueU', 'jGHyKs');
    //             if (index >= startIndex && index <= endIndex) {
    //                 if ((index === startIndex || index === endIndex) && canScrollLeft && canScrollRight) {
    //                     postImage.classList.add('jEhueU');
    //                 }
    //
    //                 else if((index === endIndex) && !canScrollLeft && canScrollRight){
    //                     postImage.classList.add('jEhueU');
    //                 }
    //
    //                 else {
    //                     console.log(postImage)
    //                     postImage.classList.add('jGHyKs');
    //                 }
    //             }
    //         });
    //     }
    // };
    //
    // useEffect(() => {
    //     updateScrollButtons();
    //     updateItemClasses();
    //     window.addEventListener('resize', updateScrollButtons);
    //     return () => window.removeEventListener('resize', updateScrollButtons);
    // }, [currentIndex, canScrollLeft, canScrollRight]);
    //
    // const scroll = (direction) => {
    //     if (sliderRef.current) {
    //         const items = Array.from(sliderRef.current.querySelectorAll('.jupLmo item')).filter(item => {
    //             const rect = item.getBoundingClientRect();
    //             const sliderRect = sliderRef.current.getBoundingClientRect();
    //             return (
    //                 rect.left < sliderRect.right && // Item is within the right boundary
    //                 rect.right > sliderRect.left // Item is within the left boundary
    //             );
    //         });
    //
    //         const itemWidth = items[0].offsetWidth;
    //         const scrollAmount = itemWidth * 5;
    //         const maxIndex = Math.max(0, items.length - 5);
    //
    //         if (direction === 'left') {
    //             sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    //             setCurrentIndex(prevIndex =>
    //                 {
    //                     Math.max(0, prevIndex - 5)
    //                     if (prevIndex + 5 >= maxIndex) {
    //                         setCanScrollLeft(false);
    //                         setCanScrollRight(true);
    //                     } else if (prevIndex <= 0) {
    //                         setCanScrollLeft(true);
    //                         setCanScrollRight(false);
    //                     } else {
    //                         setCanScrollLeft(false);
    //                         setCanScrollRight(false);
    //                     }
    //                 }
    //
    //             );
    //         } else {
    //             sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    //             setCurrentIndex(prevIndex => {
    //                 Math.min(maxIndex, prevIndex + 5)
    //                 if (prevIndex + 5 >= maxIndex) {
    //                     setCanScrollLeft(true);
    //                     setCanScrollRight(false);
    //                 } else if (prevIndex <= 0) {
    //                     setCanScrollLeft(false);
    //                     setCanScrollRight(true);
    //                 } else {
    //                     setCanScrollLeft(false);
    //                     setCanScrollRight(false);
    //                 }
    //             });
    //         }
    //     }
    // };


    return (
        <section className="fWdqDG">
            <div className="eMVRpx">
                <div className="ctfMqF">
                    <div className="iGzJZA">
                        <hr className="iPpURb" />
                    </div>
                    <div className="cYOBar-White">
                        <div>
                            <div className="dqKfa">
                                <h2 className="elqzuS-White">More news</h2>
                            </div>
                        </div>
                        <div className="fZGzuG">
                            <button
                                className="bmYCSL prev-btn"
                                aria-label="Previous Page"
                            >
                                <svg viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-left"
                                     className="sc-2c06e71a-0 fsMljb">
                                    <path d="M10.4 14.3 26.5 31h-6.4L5.5 16 20.1 1h6.4L10.4 17.7v-3.4z"></path>
                                </svg>
                            </button>
                            <button
                                className="blulaQ next-btn"
                                aria-label="Next Page"
                                data-testid="right-arrow"
                            >
                                <svg viewBox="0 0 32 32" width="1em" height="1em" category="arrows" icon="chevron-right"
                                     className="sc-2c06e71a-0 fsMljb">
                                    <path d="M21.6 14.3 5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="iYKspt">
                    <div className="gaQDrT">
                        <OwlCarousel
                            ref={sliderRef}
                            className='owl-carousel owl-theme'
                            margin={10}
                            dots={false}
                            nav={true}
                            responsive={responsiveConfig}
                        >
                            {/* Repeat this block for each news item */}
                            <div className="jupLmo item">
                                <div data-testid="edinburgh-card">
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div className="post-image">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp"
                                                                loading="lazy"
                                                                alt="Candidates shaking hands"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 eTiihu">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2 data-testid="card-headline"
                                                                className="sc-4fedabc7-3 iscyVn">
                                                                Watch key moments from the US vice-presidential debate
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                        Vance and Walz tackled questions on immigration, abortion and
                                                        democracy in the mostly civil event.
                                                    </p>
                                                    <div className="sc-4e537b1-0 gtLVrL">
                                                        <span data-testid="card-metadata-lastupdated"
                                                              className="sc-4e537b1-1 iIHPGq">
                                                            6 hrs ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="jupLmo item">
                                <div data-testid="edinburgh-card">
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div className="post-image">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp"
                                                                loading="lazy"
                                                                alt="Candidates shaking hands"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 eTiihu">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2 data-testid="card-headline"
                                                                className="sc-4fedabc7-3 iscyVn">
                                                                Watch key moments from the US vice-presidential debate
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                        Vance and Walz tackled questions on immigration, abortion and
                                                        democracy in the mostly civil event.
                                                    </p>
                                                    <div className="sc-4e537b1-0 gtLVrL">
                                                        <span data-testid="card-metadata-lastupdated"
                                                              className="sc-4e537b1-1 iIHPGq">
                                                            6 hrs ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="jupLmo item">
                                <div data-testid="edinburgh-card">
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div className="post-image">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp"
                                                                loading="lazy"
                                                                alt="Candidates shaking hands"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 eTiihu">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2 data-testid="card-headline"
                                                                className="sc-4fedabc7-3 iscyVn">
                                                                Watch key moments from the US vice-presidential debate
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                        Vance and Walz tackled questions on immigration, abortion and
                                                        democracy in the mostly civil event.
                                                    </p>
                                                    <div className="sc-4e537b1-0 gtLVrL">
                                                        <span data-testid="card-metadata-lastupdated"
                                                              className="sc-4e537b1-1 iIHPGq">
                                                            6 hrs ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="jupLmo item">
                                <div data-testid="edinburgh-card">
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div className="post-image">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp"
                                                                loading="lazy"
                                                                alt="Candidates shaking hands"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 eTiihu">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2 data-testid="card-headline"
                                                                className="sc-4fedabc7-3 iscyVn">
                                                                Watch key moments from the US vice-presidential debate
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                        Vance and Walz tackled questions on immigration, abortion and
                                                        democracy in the mostly civil event.
                                                    </p>
                                                    <div className="sc-4e537b1-0 gtLVrL">
                                                        <span data-testid="card-metadata-lastupdated"
                                                              className="sc-4e537b1-1 iIHPGq">
                                                            6 hrs ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="jupLmo item">
                                <div data-testid="edinburgh-card">
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div className="post-image">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp"
                                                                loading="lazy"
                                                                alt="Candidates shaking hands"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 eTiihu">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2 data-testid="card-headline"
                                                                className="sc-4fedabc7-3 iscyVn">
                                                                Watch key moments from the US vice-presidential debate
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                        Vance and Walz tackled questions on immigration, abortion and
                                                        democracy in the mostly civil event.
                                                    </p>
                                                    <div className="sc-4e537b1-0 gtLVrL">
                                                        <span data-testid="card-metadata-lastupdated"
                                                              className="sc-4e537b1-1 iIHPGq">
                                                            6 hrs ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="jupLmo item">
                                <div data-testid="edinburgh-card">
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div className="post-image">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp"
                                                                loading="lazy"
                                                                alt="Candidates shaking hands"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 eTiihu">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2 data-testid="card-headline"
                                                                className="sc-4fedabc7-3 iscyVn">
                                                                Watch key moments from the US vice-presidential debate
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                        Vance and Walz tackled questions on immigration, abortion and
                                                        democracy in the mostly civil event.
                                                    </p>
                                                    <div className="sc-4e537b1-0 gtLVrL">
                                                        <span data-testid="card-metadata-lastupdated"
                                                              className="sc-4e537b1-1 iIHPGq">
                                                            6 hrs ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="jupLmo item">
                                <div data-testid="edinburgh-card">
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div className="post-image">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp"
                                                                loading="lazy"
                                                                alt="Candidates shaking hands"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 eTiihu">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2 data-testid="card-headline"
                                                                className="sc-4fedabc7-3 iscyVn">
                                                                Watch key moments from the US vice-presidential debate
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                        Vance and Walz tackled questions on immigration, abortion and
                                                        democracy in the mostly civil event.
                                                    </p>
                                                    <div className="sc-4e537b1-0 gtLVrL">
                                                        <span data-testid="card-metadata-lastupdated"
                                                              className="sc-4e537b1-1 iIHPGq">
                                                            6 hrs ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="jupLmo item">
                                <div data-testid="edinburgh-card">
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div className="post-image">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp"
                                                                loading="lazy"
                                                                alt="Candidates shaking hands"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 eTiihu">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2 data-testid="card-headline"
                                                                className="sc-4fedabc7-3 iscyVn">
                                                                Watch key moments from the US vice-presidential debate
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                        Vance and Walz tackled questions on immigration, abortion and
                                                        democracy in the mostly civil event.
                                                    </p>
                                                    <div className="sc-4e537b1-0 gtLVrL">
                                                        <span data-testid="card-metadata-lastupdated"
                                                              className="sc-4e537b1-1 iIHPGq">
                                                            6 hrs ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="jupLmo item">
                                <div data-testid="edinburgh-card">
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div className="post-image">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/9e93/live/704ac7e0-8076-11ef-822c-a50726bfda2e.jpg.webp"
                                                                loading="lazy"
                                                                alt="Candidates shaking hands"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 eTiihu">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2 data-testid="card-headline"
                                                                className="sc-4fedabc7-3 iscyVn">
                                                                Watch key moments from the US vice-presidential debate
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                        Vance and Walz tackled questions on immigration, abortion and
                                                        democracy in the mostly civil event.
                                                    </p>
                                                    <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated"
                                                          className="sc-4e537b1-1 iIHPGq">
                                                        6 hrs ago
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Repeat the above block for each news item */}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSlider;
