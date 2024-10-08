import React, { useRef, useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {formatDateHumanReadable} from "@/Helpers/dateFormatHelper.js";

const NewsSlider = ({posts}) => {
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
                            {
                                posts.map((post, index) => (
                                    <div className="jupLmo item" key={post.id}>
                                        <div data-testid="edinburgh-card">
                                            <div data-testid="anchor-inner-wrapper">
                                                <a href={route('posts.show', [post.category.name, post.slug])} data-testid="internal-link"
                                                   className="sc-2e6baa30-0 gILusN">
                                                    <div className="post-image">
                                                        <div data-testid="card-media-wrapper"
                                                             className="sc-b8778340-1 jvzsLx">
                                                            <div data-testid="card-media"
                                                                 className="sc-b8778340-2 kUyIkJ">
                                                                <div className="sc-a34861b-1 jxzoZC">
                                                                    <img
                                                                        sizes="(min-width: 1280px) 20vw, (min-width: 1008px) 25vw, (min-width: 800px) 33vw, 50vw"
                                                                        srcSet={`${route('storage.images', post.image)} 240w,
                                                                            ${route('storage.images', post.image)} 320w,
                                                                            ${route('storage.images', post.image)} 480w,
                                                                            ${route('storage.images', post.image)} 640w,
                                                                            ${route('storage.images', post.image)} 800w,
                                                                            ${route('storage.images', post.image)} 1024w,
                                                                            ${route('storage.images', post.image)} 1536w`}
                                                                        src={route('storage.images', post.image)}
                                                                        loading="lazy"
                                                                        alt={post.image}
                                                                        className="sc-a34861b-0 efFcac"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-testid="card-text-wrapper"
                                                             className="sc-b8778340-3 eTiihu">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                    <h2 data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 iscyVn">
                                                                        {post.title}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <p data-testid="card-description"
                                                               className="sc-b8778340-4 fsrXqA">
                                                                {post.description}
                                                            </p>
                                                            <div className="sc-4e537b1-0 gtLVrL">
                                                        <span data-testid="card-metadata-lastupdated"
                                                              className="sc-4e537b1-1 iIHPGq">
                                                            {formatDateHumanReadable(post.created_at)}
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* Repeat the above block for each news item */}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSlider;
