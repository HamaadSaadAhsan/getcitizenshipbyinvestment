import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSlider = () => {
    const sliderRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateScrollButtons = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    const updateItemClasses = () => {
        if (sliderRef.current) {
            const items = Array.from(sliderRef.current.querySelectorAll('.jupLmo')).filter(item => {
                const rect = item.getBoundingClientRect();
                const sliderRect = sliderRef.current.getBoundingClientRect();
                return (
                    rect.left < sliderRect.right && // Item is within the right boundary
                    rect.right > sliderRect.left // Item is within the left boundary
                );
            });

            const visibleItems = 5;
            const startIndex = currentIndex;
            const endIndex = Math.min(startIndex + visibleItems - 1, items.length - 1);


            items.forEach((item, index) => {
                const postImage = item.querySelector('.post-image');
                postImage.classList.remove('jEhueU', 'jGHyKs');
                if (index >= startIndex && index <= endIndex) {
                    if ((index === startIndex || index === endIndex) && canScrollLeft && canScrollRight) {
                        postImage.classList.add('jEhueU');
                    }

                    else if((index === endIndex) && !canScrollLeft && canScrollRight){
                        console.log('4th item',postImage)
                        postImage.classList.add('jEhueU');
                    }

                    else {
                        console.log(postImage)
                        postImage.classList.add('jGHyKs');
                    }
                }
            });
        }
    };

    useEffect(() => {
        updateScrollButtons();
        updateItemClasses();
        window.addEventListener('resize', updateScrollButtons);
        return () => window.removeEventListener('resize', updateScrollButtons);
    }, [currentIndex, canScrollLeft, canScrollRight]);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const items = Array.from(sliderRef.current.querySelectorAll('.jupLmo')).filter(item => {
                const rect = item.getBoundingClientRect();
                const sliderRect = sliderRef.current.getBoundingClientRect();
                return (
                    rect.left < sliderRect.right && // Item is within the right boundary
                    rect.right > sliderRect.left // Item is within the left boundary
                );
            });

            console.log(items)

            const itemWidth = items[0].offsetWidth;
            const scrollAmount = itemWidth * 5;
            const maxIndex = Math.max(0, items.length - 5);

            if (direction === 'left') {
                sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                setCurrentIndex(prevIndex =>
                    {
                        Math.max(0, prevIndex - 5)
                        if (prevIndex + 5 >= maxIndex) {
                            setCanScrollLeft(false);
                            setCanScrollRight(true);
                        } else if (prevIndex <= 0) {
                            setCanScrollLeft(true);
                            setCanScrollRight(false);
                        } else {
                            setCanScrollLeft(false);
                            setCanScrollRight(false);
                        }
                    }

                );
            } else {
                sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                setCurrentIndex(prevIndex => {
                    Math.min(maxIndex, prevIndex + 5)
                    if (prevIndex + 5 >= maxIndex) {
                        setCanScrollLeft(true);
                        setCanScrollRight(false);
                    } else if (prevIndex <= 0) {
                        setCanScrollLeft(false);
                        setCanScrollRight(true);
                    } else {
                        setCanScrollLeft(false);
                        setCanScrollRight(false);
                    }
                });
            }
        }
    };


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
                        <div className="sc-8fb73bb-0 fZGzuG">
                            <button
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                className="bmYCSL"
                                aria-label="Previous Page"
                            >
                                <ChevronLeft className="sc-2c06e71a-0 fsMljb" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                className="blulaQ"
                                aria-label="Next Page"
                                data-testid="right-arrow"
                            >
                                <ChevronRight className="sc-2c06e71a-0 fsMljb" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="iYKspt">
                    <div ref={sliderRef} className="gaQDrT">
                        {/* Repeat this block for each news item */}
                        <div className="jupLmo">
                            <div data-testid="edinburgh-card">
                                <div data-testid="anchor-inner-wrapper">
                                    <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
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
                                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 iscyVn">
                                                            Watch key moments from the US vice-presidential debate
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                    Vance and Walz tackled questions on immigration, abortion and democracy in the mostly civil event.
                                                </p>
                                                <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated" className="sc-4e537b1-1 iIHPGq">
                                                        6 hrs ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="jupLmo">
                            <div data-testid="edinburgh-card">
                                <div data-testid="anchor-inner-wrapper">
                                    <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
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
                                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 iscyVn">
                                                            Watch key moments from the US vice-presidential debate
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                    Vance and Walz tackled questions on immigration, abortion and democracy in the mostly civil event.
                                                </p>
                                                <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated" className="sc-4e537b1-1 iIHPGq">
                                                        6 hrs ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="jupLmo">
                            <div data-testid="edinburgh-card">
                                <div data-testid="anchor-inner-wrapper">
                                    <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
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
                                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 iscyVn">
                                                            Watch key moments from the US vice-presidential debate
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                    Vance and Walz tackled questions on immigration, abortion and democracy in the mostly civil event.
                                                </p>
                                                <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated" className="sc-4e537b1-1 iIHPGq">
                                                        6 hrs ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="jupLmo">
                            <div data-testid="edinburgh-card">
                                <div data-testid="anchor-inner-wrapper">
                                    <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
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
                                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 iscyVn">
                                                            Watch key moments from the US vice-presidential debate
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                    Vance and Walz tackled questions on immigration, abortion and democracy in the mostly civil event.
                                                </p>
                                                <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated" className="sc-4e537b1-1 iIHPGq">
                                                        6 hrs ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="jupLmo">
                            <div data-testid="edinburgh-card">
                                <div data-testid="anchor-inner-wrapper">
                                    <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
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
                                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 iscyVn">
                                                            Watch key moments from the US vice-presidential debate
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                    Vance and Walz tackled questions on immigration, abortion and democracy in the mostly civil event.
                                                </p>
                                                <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated" className="sc-4e537b1-1 iIHPGq">
                                                        6 hrs ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="jupLmo">
                            <div data-testid="edinburgh-card">
                                <div data-testid="anchor-inner-wrapper">
                                    <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
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
                                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 iscyVn">
                                                            Watch key moments from the US vice-presidential debate
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                    Vance and Walz tackled questions on immigration, abortion and democracy in the mostly civil event.
                                                </p>
                                                <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated" className="sc-4e537b1-1 iIHPGq">
                                                        6 hrs ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="jupLmo">
                            <div data-testid="edinburgh-card">
                                <div data-testid="anchor-inner-wrapper">
                                    <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
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
                                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 iscyVn">
                                                            Watch key moments from the US vice-presidential debate
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                    Vance and Walz tackled questions on immigration, abortion and democracy in the mostly civil event.
                                                </p>
                                                <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated" className="sc-4e537b1-1 iIHPGq">
                                                        6 hrs ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="jupLmo">
                            <div data-testid="edinburgh-card">
                                <div data-testid="anchor-inner-wrapper">
                                    <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
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
                                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 iscyVn">
                                                            Watch key moments from the US vice-presidential debate
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                    Vance and Walz tackled questions on immigration, abortion and democracy in the mostly civil event.
                                                </p>
                                                <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated" className="sc-4e537b1-1 iIHPGq">
                                                        6 hrs ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="jupLmo">
                            <div data-testid="edinburgh-card">
                                <div data-testid="anchor-inner-wrapper">
                                    <a href="/news/videos/cd7x20rr9deo" data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
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
                                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 iscyVn">
                                                            Watch key moments from the US vice-presidential debate
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p data-testid="card-description" className="sc-b8778340-4 fsrXqA">
                                                    Vance and Walz tackled questions on immigration, abortion and democracy in the mostly civil event.
                                                </p>
                                                <div className="sc-4e537b1-0 gtLVrL">
                                                    <span data-testid="card-metadata-lastupdated" className="sc-4e537b1-1 iIHPGq">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSlider;
