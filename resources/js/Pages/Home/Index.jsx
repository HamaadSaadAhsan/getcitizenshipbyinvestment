import React from "react";
import {Head} from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import "../../../css/article.css";
import NewsSlider from "./Components/NewsSlider";

const Home = ({featuredNews, topStories, categories, citizenshipPosts}) => {
    return (
        <Layout categories={categories}>
            <Head title="Home"/>

            <div className="">
                <article className="block">
                    <section className="sc-2448c165-1 gvnjGp">
                        <div
                            data-testid="vermont-section"
                            className="sc-2448c165-2 eMVRpx"
                        >
                            <div className="sc-6f766713-2 ctfMqF">
                                <div className="sc-6f766713-1 iGzJZA"></div>
                            </div>

                            <div
                                data-testid="Vermont-grid"
                                className="sc-e70150c3-0 fbvxoY"
                            >
                                <div className="sc-93223220-0 bOZIBp">
                                    <div
                                        data-testid="first-grid"
                                        className="sc-93223220-0 sc-e70150c3-1 gPmTJa fNRFwC"
                                    >
                                        {citizenshipPosts.map((post) => (<div
                                            key={post.id}
                                            data-testid="edinburgh-card"
                                        >
                                            <div data-testid="anchor-inner-wrapper">
                                                <a
                                                    href={route("posts.show", [post.category.name, post.slug,])}
                                                    data-testid="external-anchor"
                                                    target="_self"
                                                    className="sc-2e6baa30-0 gILusN"
                                                >
                                                    <div
                                                        data-testid="edinburgh-live"
                                                        className="sc-b8778340-0 kFuHJG"
                                                    >
                                                        <div
                                                            data-testid="card-media-wrapper"
                                                            className="sc-b8778340-1 jvzsLx"
                                                        >
                                                            <div
                                                                data-testid="card-media"
                                                                className="sc-b8778340-2 kUyIkJ"
                                                            >
                                                                <div className="sc-a34861b-1 jxzoZC">
                                                                    {
                                                                        post.image && (
                                                                            <img
                                                                                sizes="96vw"
                                                                                srcSet={route("storage.images", post.image) + " 240w," + route("storage.images", post.image) + " 320w," + route("storage.images", post.image) + " 480w," + route("storage.images", post.image) + " 640w," + route("storage.images", post.image) + " 800w," + route("storage.images", post.image) + " 1024w," + route("storage.images", post.image) + " 1536"}
                                                                                src={route("storage.images", post.image)}
                                                                                loading="lazy"
                                                                                alt={post.title}
                                                                                className="sc-a34861b-0 efFcac"
                                                                            />
                                                                        )
                                                                    }

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            data-testid="card-text-wrapper"
                                                            className="sc-b8778340-3 gxEarx"
                                                        >
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
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
                                                            >
                                                                {post.description}
                                                            </p>
                                                            <div className="sc-4e537b1-0 gtLVrL"></div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>))}
                                    </div>
                                    <div
                                        data-testid="first-grid-narrow"
                                        className="sc-93223220-0 sc-e70150c3-2 jrqxhV jzPkfJ"
                                    >
                                        <div data-testid="dundee-card">
                                            <div data-testid="anchor-inner-wrapper">
                                                <a
                                                    href="https://www.bbc.com/news/live/cwyl3prj39wt"
                                                    data-testid="external-anchor"
                                                    target="_self"
                                                    className="sc-2e6baa30-0 gILusN"
                                                >
                                                    <div
                                                        data-testid="dundee-live"
                                                        className="sc-1a9a6d5b-1 iYglrs"
                                                    >
                                                        <div
                                                            data-testid="card-image-wrapper"
                                                            className="sc-1a9a6d5b-3 jsqFvT"
                                                        >
                                                            <div
                                                                data-testid="card-media"
                                                                className="sc-1a9a6d5b-4 fGVWed"
                                                            >
                                                                <div className="sc-a34861b-1 jxzoZC">
                                                                    <img
                                                                        sizes="96vw"
                                                                        srcSet="https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1ea6/live/caf5b930-7c1a-11ef-b02d-c5f3b724a1ea.jpg.webp 240w,https://ichef.bbci.co.uk/ace/standard/320/cpsprodpb/1ea6/live/caf5b930-7c1a-11ef-b02d-c5f3b724a1ea.jpg.webp 320w,https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/1ea6/live/caf5b930-7c1a-11ef-b02d-c5f3b724a1ea.jpg.webp 480w,https://ichef.bbci.co.uk/ace/standard/640/cpsprodpb/1ea6/live/caf5b930-7c1a-11ef-b02d-c5f3b724a1ea.jpg.webp 640w,https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/1ea6/live/caf5b930-7c1a-11ef-b02d-c5f3b724a1ea.jpg.webp 800w,https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/1ea6/live/caf5b930-7c1a-11ef-b02d-c5f3b724a1ea.jpg.webp 1024w,https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/1ea6/live/caf5b930-7c1a-11ef-b02d-c5f3b724a1ea.jpg.webp 1536w"
                                                                        src="https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/1ea6/live/caf5b930-7c1a-11ef-b02d-c5f3b724a1ea.jpg.webp"
                                                                        loading="lazy"
                                                                        alt="New York City Mayor Eric Adams speaks to the press outside his official residence Gracie Mansion"
                                                                        className="sc-a34861b-0 efFcac"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            data-testid="card-text-wrapper"
                                                            className="sc-93223220-0 gcYoBW"
                                                        >
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                    <div
                                                                        className="sc-4d9540e7-1 sc-4fedabc7-2 cIYZQl cXvgVW">
                                                                        <svg
                                                                            width="32"
                                                                            height="32"
                                                                            viewBox="0 0 32 32"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-testid="live-icon-svg-styled"
                                                                            className="sc-d00e3bf7-0 exnLpe sc-1097f7fe-0 jmthjj"
                                                                        >
                                                                            <path
                                                                                id="outer"
                                                                                d="M13.3922 31.3913C6.25751 30.2611 0.846472 24.5392 0.0835577 17.3057C-0.410924 12.714 1.3127 7.95289 4.63278 4.61868C12.2761 -3.01046 25.1467 -0.891255 29.922 8.78645C32.6204 14.2257 31.9988 20.5268 28.2972 25.4293C24.8924 29.922 19.0151 32.2672 13.3922 31.3913ZM19.0858 28.6505C20.329 28.3255 22.2363 27.4778 23.2394 26.7856C24.2142 26.1215 25.8955 24.4686 26.616 23.4655C27.4213 22.3352 28.2972 20.4986 28.6787 19.0999C29.1167 17.4611 29.1167 14.0986 28.6787 12.4597C28.0288 10.0721 26.7573 7.96702 24.963 6.22927C23.6774 5.01426 22.9003 4.4774 21.3745 3.75687C19.3683 2.81029 18.3087 2.59837 15.7939 2.59837C13.2791 2.59837 12.2195 2.81029 10.2134 3.75687C8.68753 4.4774 7.91049 5.01426 6.62484 6.22927C4.83058 7.96702 3.57318 10.0721 2.90916 12.488C2.4712 14.0703 2.4712 17.4893 2.90916 19.0717C3.57318 21.4876 4.83058 23.5926 6.62484 25.3304C8.15067 26.7856 9.35155 27.5344 11.386 28.2973C13.5193 29.1026 16.7829 29.258 19.0858 28.6505Z"
                                                                            ></path>
                                                                            <path
                                                                                id="inner"
                                                                                d="M13.8318 24.0437C10.5541 23.2949 7.94042 20.6671 7.24815 17.3894C6.42872 13.5042 8.40665 9.57661 12.0658 7.83886C16.2901 5.84681 21.4327 7.72584 23.4389 12.0066C25.6287 16.683 23.1422 22.2918 18.1974 23.8459C16.9965 24.2274 15.0186 24.3122 13.8318 24.0437Z"
                                                                            ></path>
                                                                        </svg>
                                                                        <span className="sc-4fedabc7-4 hjkPtM">
                                                                            LIVE
                                                                        </span>
                                                                    </div>
                                                                    <h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri"
                                                                    >
                                                                        NYC
                                                                        Mayor
                                                                        Eric
                                                                        Adams
                                                                        charged
                                                                        with
                                                                        wire
                                                                        fraud
                                                                        and
                                                                        bribery
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <p
                                                                data-testid="card-description"
                                                                className="sc-1a9a6d5b-0 kGKNqV"
                                                            >
                                                                "I look forward
                                                                to defending
                                                                myself," Adams
                                                                says after he's
                                                                charged with
                                                                five counts,
                                                                including
                                                                soliciting
                                                                foreign campaign
                                                                donations.
                                                            </p>
                                                            <div className="sc-4e537b1-0 hJDQRX"></div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div data-testid="dundee-card">
                                            <div data-testid="anchor-inner-wrapper">
                                                <a
                                                    href="/news/articles/c80rkv0k4j8o"
                                                    data-testid="internal-link"
                                                    className="sc-2e6baa30-0 gILusN"
                                                >
                                                    <div
                                                        data-testid="dundee-article"
                                                        className="sc-1a9a6d5b-1 iYglrs"
                                                    >
                                                        <div
                                                            data-testid="card-image-wrapper"
                                                            className="sc-1a9a6d5b-3 jsqFvT"
                                                        >
                                                            <div
                                                                data-testid="card-media"
                                                                className="sc-1a9a6d5b-4 fGVWed"
                                                            >
                                                                <div className="sc-a34861b-1 jxzoZC">
                                                                    <img
                                                                        sizes="96vw"
                                                                        srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 1536w"
                                                                        src="https://ichef.bbci.co.uk/news/480/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp"
                                                                        loading="lazy"
                                                                        alt="President Volodymyr Zelensky signs ammunition while visiting the Scranton Army Ammunition Plant (SCAAP) in Scranton, Pennsylvania, USA, on 23 September 2024"
                                                                        className="sc-a34861b-0 efFcac"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            data-testid="card-text-wrapper"
                                                            className="sc-93223220-0 gcYoBW"
                                                        >
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                    <h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri"
                                                                    >
                                                                        Escalating
                                                                        Trump
                                                                        row
                                                                        looms
                                                                        over
                                                                        Zelensky's
                                                                        US visit
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <p
                                                                data-testid="card-description"
                                                                className="sc-1a9a6d5b-0 kGKNqV"
                                                            >
                                                                Republicans
                                                                accused Zelensky
                                                                of election
                                                                interference,
                                                                after he visited
                                                                an arms factory
                                                                with top
                                                                Democrats.
                                                            </p>
                                                            <div className="sc-4e537b1-0 hJDQRX">
                                                                <span
                                                                    data-testid="card-metadata-lastupdated"
                                                                    className="sc-4e537b1-1 dsUUMv"
                                                                >
                                                                    3 hrs ago
                                                                </span>
                                                                <div
                                                                    data-testid="card-metadata-separator"
                                                                    className="sc-4e537b1-3 lmDmEx"
                                                                ></div>
                                                                <span
                                                                    data-testid="card-metadata-tag"
                                                                    className="sc-4e537b1-2 eRsxHt"
                                                                >
                                                                    US &amp;
                                                                    Canada
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-93223220-0 jrqxhV">
                                        <div data-testid="westminster-card">
                                            <div
                                                data-testid="westminster-live"
                                                className="sc-6781995d-3 fGXoHh"
                                            >
                                                <div data-testid="anchor-inner-wrapper">
                                                    <a
                                                        href="https://www.bbc.com/news/live/c981g8mrl8lt"
                                                        data-testid="external-anchor"
                                                        target="_self"
                                                        className="sc-2e6baa30-0 gILusN"
                                                    >
                                                        <div
                                                            data-testid="westminster"
                                                            className="sc-6781995d-2 jOKQKE"
                                                        >
                                                            <div
                                                                data-testid="card-media-wrapper"
                                                                className="sc-6781995d-4 fTeUGL"
                                                            >
                                                                <div
                                                                    data-testid="card-media"
                                                                    className="sc-6781995d-1 iHDalG"
                                                                >
                                                                    <div className="sc-a34861b-1 jxzoZC">
                                                                        <img
                                                                            sizes="96vw"
                                                                            srcSet="https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b1a4/live/0bf24c70-7c19-11ef-b282-4535eb84fe4b.jpg.webp 240w,https://ichef.bbci.co.uk/ace/standard/320/cpsprodpb/b1a4/live/0bf24c70-7c19-11ef-b282-4535eb84fe4b.jpg.webp 320w,https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/b1a4/live/0bf24c70-7c19-11ef-b282-4535eb84fe4b.jpg.webp 480w,https://ichef.bbci.co.uk/ace/standard/640/cpsprodpb/b1a4/live/0bf24c70-7c19-11ef-b282-4535eb84fe4b.jpg.webp 640w,https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/b1a4/live/0bf24c70-7c19-11ef-b282-4535eb84fe4b.jpg.webp 800w,https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/b1a4/live/0bf24c70-7c19-11ef-b282-4535eb84fe4b.jpg.webp 1024w,https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/b1a4/live/0bf24c70-7c19-11ef-b282-4535eb84fe4b.jpg.webp 1536w"
                                                                            src="https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/b1a4/live/0bf24c70-7c19-11ef-b282-4535eb84fe4b.jpg.webp"
                                                                            loading="eager"
                                                                            alt="People crowd around outside the site of a strike in Beirut"
                                                                            className="sc-a34861b-0 efFcac"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                data-testid="card-text-wrapper"
                                                                className="sc-6781995d-5 dWflPh"
                                                            >
                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                    <div className="sc-4fedabc7-0 hJUdDc">
                                                                        <div
                                                                            className="sc-4d9540e7-1 sc-4fedabc7-2 gglKuy jOAobE">
                                                                            <svg
                                                                                width="32"
                                                                                height="32"
                                                                                viewBox="0 0 32 32"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                data-testid="live-icon-svg-styled"
                                                                                className="sc-d00e3bf7-0 exnLpe sc-1097f7fe-0 jmthjj"
                                                                            >
                                                                                <path
                                                                                    id="outer"
                                                                                    d="M13.3922 31.3913C6.25751 30.2611 0.846472 24.5392 0.0835577 17.3057C-0.410924 12.714 1.3127 7.95289 4.63278 4.61868C12.2761 -3.01046 25.1467 -0.891255 29.922 8.78645C32.6204 14.2257 31.9988 20.5268 28.2972 25.4293C24.8924 29.922 19.0151 32.2672 13.3922 31.3913ZM19.0858 28.6505C20.329 28.3255 22.2363 27.4778 23.2394 26.7856C24.2142 26.1215 25.8955 24.4686 26.616 23.4655C27.4213 22.3352 28.2972 20.4986 28.6787 19.0999C29.1167 17.4611 29.1167 14.0986 28.6787 12.4597C28.0288 10.0721 26.7573 7.96702 24.963 6.22927C23.6774 5.01426 22.9003 4.4774 21.3745 3.75687C19.3683 2.81029 18.3087 2.59837 15.7939 2.59837C13.2791 2.59837 12.2195 2.81029 10.2134 3.75687C8.68753 4.4774 7.91049 5.01426 6.62484 6.22927C4.83058 7.96702 3.57318 10.0721 2.90916 12.488C2.4712 14.0703 2.4712 17.4893 2.90916 19.0717C3.57318 21.4876 4.83058 23.5926 6.62484 25.3304C8.15067 26.7856 9.35155 27.5344 11.386 28.2973C13.5193 29.1026 16.7829 29.258 19.0858 28.6505Z"
                                                                                ></path>
                                                                                <path
                                                                                    id="inner"
                                                                                    d="M13.8318 24.0437C10.5541 23.2949 7.94042 20.6671 7.24815 17.3894C6.42872 13.5042 8.40665 9.57661 12.0658 7.83886C16.2901 5.84681 21.4327 7.72584 23.4389 12.0066C25.6287 16.683 23.1422 22.2918 18.1974 23.8459C16.9965 24.2274 15.0186 24.3122 13.8318 24.0437Z"
                                                                                ></path>
                                                                            </svg>
                                                                            <span className="sc-4fedabc7-4 dWoXdj">
                                                                                LIVE
                                                                            </span>
                                                                        </div>
                                                                        <h2
                                                                            data-testid="card-headline"
                                                                            className="sc-4fedabc7-3 eVkEgC"
                                                                        >
                                                                            Israel
                                                                            strikes
                                                                            Beirut
                                                                            after
                                                                            Netanyahu
                                                                            tells
                                                                            military
                                                                            to
                                                                            fight
                                                                            with
                                                                            'full
                                                                            force'
                                                                            in
                                                                            Lebanon
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <p
                                                                    data-testid="card-description"
                                                                    className="sc-6781995d-0 eZxCk"
                                                                >
                                                                    After
                                                                    Wednesday
                                                                    night's call
                                                                    for a
                                                                    ceasefire
                                                                    from the US
                                                                    and other
                                                                    allies, the
                                                                    Israeli PM
                                                                    said
                                                                    military
                                                                    action would
                                                                    continue.
                                                                </p>
                                                                <div className="sc-4e537b1-0 hJDQRX"></div>
                                                                <div
                                                                    data-testid="card-relatedUrls"
                                                                    className="sc-c01f71b3-0 ctIIxE"
                                                                >
                                                                    <div data-testid="anchor-inner-wrapper">
                                                                        <a
                                                                            href="/news/articles/cly3g1dplppo"
                                                                            data-testid="internal-link"
                                                                            className="sc-5e33cc43-0 jZSdZm"
                                                                        >
                                                                            <div className="sc-c01f71b3-2 fQxuYw">
                                                                                <div className="sc-c01f71b3-3 fMShTC">
                                                                                    <svg
                                                                                        width="3em"
                                                                                        height="3em"
                                                                                        viewBox="0 0 6 6"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        category="content-types"
                                                                                        icon="dot"
                                                                                        data-testid="inline-icon"
                                                                                        className="sc-2c06e71a-0 fsMljb"
                                                                                    >
                                                                                        <circle
                                                                                            cx="3"
                                                                                            cy="3"
                                                                                            r="3"
                                                                                        ></circle>
                                                                                    </svg>
                                                                                </div>
                                                                                <h4
                                                                                    data-testid="card-related-headline"
                                                                                    className="sc-c01f71b3-1 hKDzsS"
                                                                                >
                                                                                    'The
                                                                                    bombs
                                                                                    were
                                                                                    everywhere'
                                                                                    -
                                                                                    the
                                                                                    people
                                                                                    fleeing
                                                                                    Lebanon
                                                                                    air
                                                                                    strikes
                                                                                </h4>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div data-testid="anchor-inner-wrapper">
                                                                        <a
                                                                            href="/news/videos/cp8e5w1j13zo"
                                                                            data-testid="internal-link"
                                                                            className="sc-5e33cc43-0 jZSdZm"
                                                                        >
                                                                            <div className="sc-c01f71b3-2 fQxuYw">
                                                                                <div className="sc-c01f71b3-3 gZRMhK">
                                                                                    <svg
                                                                                        viewBox="0 0 32 32"
                                                                                        width="3em"
                                                                                        height="3em"
                                                                                        category="playback-avkx"
                                                                                        icon="play"
                                                                                        data-testid="inline-icon"
                                                                                        className="sc-2c06e71a-0 fsMljb"
                                                                                    >
                                                                                        <path
                                                                                            d="M29 16 5.8 1v30L29 16z"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <h4
                                                                                    data-testid="card-related-headline"
                                                                                    className="sc-c01f71b3-1 hKDzsS"
                                                                                >
                                                                                    Watch:
                                                                                    Deserted
                                                                                    streets
                                                                                    in
                                                                                    Israel's
                                                                                    border
                                                                                    towns
                                                                                </h4>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div data-testid="anchor-inner-wrapper">
                                                                        <a
                                                                            href="/news/articles/c5y8gv1d8j8o"
                                                                            data-testid="internal-link"
                                                                            className="sc-5e33cc43-0 jZSdZm"
                                                                        >
                                                                            <div className="sc-c01f71b3-2 fQxuYw">
                                                                                <div className="sc-c01f71b3-3 fMShTC">
                                                                                    <svg
                                                                                        width="3em"
                                                                                        height="3em"
                                                                                        viewBox="0 0 6 6"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        category="content-types"
                                                                                        icon="dot"
                                                                                        data-testid="inline-icon"
                                                                                        className="sc-2c06e71a-0 fsMljb"
                                                                                    >
                                                                                        <circle
                                                                                            cx="3"
                                                                                            cy="3"
                                                                                            r="3"
                                                                                        ></circle>
                                                                                    </svg>
                                                                                </div>
                                                                                <h4
                                                                                    data-testid="card-related-headline"
                                                                                    className="sc-c01f71b3-1 hKDzsS"
                                                                                >
                                                                                    How
                                                                                    the
                                                                                    Lebanon
                                                                                    attacks
                                                                                    have
                                                                                    changed
                                                                                    the
                                                                                    Middle
                                                                                    East
                                                                                </h4>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <hr className="sc-6781995d-6 bbWpTX"></hr>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-testid="second-grid"
                                    className="sc-93223220-0 sc-e70150c3-3 jPpGMu kdbokE"
                                >
                                    <div data-testid="manchester-card">
                                        <div data-testid="anchor-inner-wrapper">
                                            <a
                                                href="/news/articles/czd13mezz7mo"
                                                data-testid="internal-link"
                                                className="sc-2e6baa30-0 gILusN"
                                            >
                                                <div
                                                    data-testid="manchester-article"
                                                    className="sc-e5949eb5-1 cMUTXL"
                                                >
                                                    <div
                                                        data-testid="card-text-wrapper"
                                                        className="sc-e5949eb5-2 eOoDdE"
                                                    >
                                                        <div className="sc-4fedabc7-1 kbvCmj">
                                                            <div className="sc-4fedabc7-0 kZtaAl">
                                                                <h2
                                                                    data-testid="card-headline"
                                                                    className="sc-4fedabc7-3 zTZri"
                                                                >
                                                                    Florida
                                                                    braces for
                                                                    potentially
                                                                    'unsurvivable'
                                                                    Hurricane
                                                                    Helene
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <p
                                                            data-testid="card-description"
                                                            className="sc-e5949eb5-0 gpCoKv"
                                                        >
                                                            Officials have urged
                                                            residents to heed
                                                            evacuation orders as
                                                            Helene barrels
                                                            towards Florida's
                                                            Big Bend.
                                                        </p>
                                                        <div className="sc-4e537b1-0 hJDQRX">
                                                            <span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="sc-4e537b1-1 dsUUMv"
                                                            >
                                                                24 mins ago
                                                            </span>
                                                            <div
                                                                data-testid="card-metadata-separator"
                                                                className="sc-4e537b1-3 lmDmEx"
                                                            ></div>
                                                            <span
                                                                data-testid="card-metadata-tag"
                                                                className="sc-4e537b1-2 eRsxHt"
                                                            >
                                                                World
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-testid="manchester-card">
                                        <div data-testid="anchor-inner-wrapper">
                                            <a
                                                href="/news/articles/c5y9x6zrkrro"
                                                data-testid="internal-link"
                                                className="sc-2e6baa30-0 gILusN"
                                            >
                                                <div
                                                    data-testid="manchester-article"
                                                    className="sc-e5949eb5-1 cMUTXL"
                                                >
                                                    <div
                                                        data-testid="card-text-wrapper"
                                                        className="sc-e5949eb5-2 eOoDdE"
                                                    >
                                                        <div className="sc-4fedabc7-1 kbvCmj">
                                                            <div className="sc-4fedabc7-0 kZtaAl">
                                                                <h2
                                                                    data-testid="card-headline"
                                                                    className="sc-4fedabc7-3 zTZri"
                                                                >
                                                                    World's
                                                                    longest-serving
                                                                    death row
                                                                    inmate
                                                                    acquitted in
                                                                    Japan
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <p
                                                            data-testid="card-description"
                                                            className="sc-e5949eb5-0 gpCoKv"
                                                        >
                                                            After almost half a
                                                            century on death row
                                                            Iwao Hakamada, 88,
                                                            has been acquitted
                                                            of murder.
                                                        </p>
                                                        <div className="sc-4e537b1-0 hJDQRX">
                                                            <span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="sc-4e537b1-1 dsUUMv"
                                                            >
                                                                4 hrs ago
                                                            </span>
                                                            <div
                                                                data-testid="card-metadata-separator"
                                                                className="sc-4e537b1-3 lmDmEx"
                                                            ></div>
                                                            <span
                                                                data-testid="card-metadata-tag"
                                                                className="sc-4e537b1-2 eRsxHt"
                                                            >
                                                                Asia
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-testid="manchester-card">
                                        <div data-testid="anchor-inner-wrapper">
                                            <a
                                                href="/news/articles/cjwdq3ppw01o"
                                                data-testid="internal-link"
                                                className="sc-2e6baa30-0 gILusN"
                                            >
                                                <div
                                                    data-testid="manchester-article"
                                                    className="sc-e5949eb5-1 cMUTXL"
                                                >
                                                    <div
                                                        data-testid="card-text-wrapper"
                                                        className="sc-e5949eb5-2 eOoDdE"
                                                    >
                                                        <div className="sc-4fedabc7-1 kbvCmj">
                                                            <div className="sc-4fedabc7-0 kZtaAl">
                                                                <h2
                                                                    data-testid="card-headline"
                                                                    className="sc-4fedabc7-3 zTZri"
                                                                >
                                                                    'Chaos
                                                                    reigns' -
                                                                    the
                                                                    notorious
                                                                    jail holding
                                                                    Sean 'Diddy'
                                                                    Combs
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <p
                                                            data-testid="card-description"
                                                            className="sc-e5949eb5-0 gpCoKv"
                                                        >
                                                            An extensive list of
                                                            notable names have
                                                            passed through the
                                                            doors of the
                                                            troubled Brooklyn
                                                            facility
                                                        </p>
                                                        <div className="sc-4e537b1-0 hJDQRX">
                                                            <span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="sc-4e537b1-1 dsUUMv"
                                                            >
                                                                17 hrs ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-testid="manchester-card">
                                        <div data-testid="anchor-inner-wrapper">
                                            <a
                                                href="https://www.bbc.co.uk/sounds/play/m0023051"
                                                data-testid="external-anchor"
                                                target="_self"
                                                className="sc-2e6baa30-0 gILusN"
                                            >
                                                <div
                                                    data-testid="manchester-customCard"
                                                    className="sc-e5949eb5-1 cMUTXL"
                                                >
                                                    <div
                                                        data-testid="card-text-wrapper"
                                                        className="sc-e5949eb5-2 eOoDdE"
                                                    >
                                                        <div className="sc-4fedabc7-1 kbvCmj">
                                                            <div className="sc-4fedabc7-0 kZtaAl">
                                                                <h2
                                                                    data-testid="card-headline"
                                                                    className="sc-4fedabc7-3 zTZri"
                                                                >
                                                                    Listen: The
                                                                    Coming Storm
                                                                    series 2,
                                                                    episode 2-
                                                                    Flight 007
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <p
                                                            data-testid="card-description"
                                                            className="sc-e5949eb5-0 gpCoKv"
                                                        >
                                                            At the height of the
                                                            Cold War a
                                                            charismatic
                                                            Congressman meets a
                                                            strange death.{" "}
                                                        </p>
                                                        <div className="sc-4e537b1-0 hJDQRX"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="gvnjGp">
                        <div className="eMVRpx">
                            <div className="ctfMqF">
                                <div className="iGzJZA">
                                    <hr className="lgKNnV"/>
                                </div>
                                <div className="cYOBar">
                                    <div>
                                        <div className="dqKfa">
                                            <h2 className="elqzuS">
                                                From Residency
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="jKLwmR td-big-grid-flex  td-big-grid-flex-scroll td_block_wrap td_block_big_grid_flex_2 tdi_96 td-pb-border-top td_block_template_2 td-big-grid-flex-posts">
                                <div className="left-column td_block_inner">
                                    <div
                                        className="td_module_flex_6 td-animation-stack td-big-grid-flex-post td-big-grid-flex-post-0 td-cpt-post h-full">
                                        <div className="td-module-container td-category-pos-above h-full">
                                            <div className="td-image-container h-full">
                                                <div className="td-module-thumb h-full">
                                                    <a
                                                        href="https://startuppakistan.com.pk/ministry-of-it-announces-jobs-opportunities-in-pakistan/"
                                                        rel="bookmark"
                                                        className="td-image-wrap h-full"
                                                        title="Ministry Of IT Announces Jobs Opportunities in Pakistan"
                                                    >
                                                        <span
                                                            className="entry-thumb td-thumb-css td-animation-stack-type0-2"
                                                            data-type="css_image"
                                                            data-img-url="https://startuppakistan.com.pk/wp-content/uploads/2024/10/images-2024-10-02T093136.991.jpeg"
                                                            style={{
                                                                backgroundImage: `url('https://startuppakistan.com.pk/wp-content/uploads/2024/10/images-2024-10-02T093136.991.jpeg')`,
                                                            }}
                                                        ></span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="td-module-meta-info">
                                                <a
                                                    href="https://startuppakistan.com.pk/category/business/jobs-business/"
                                                    className="td-post-category"
                                                >
                                                    Jobs
                                                </a>
                                                <div className="tdb-module-title-wrap">
                                                    <h3 className="entry-title td-module-title">
                                                        <a
                                                            href="https://startuppakistan.com.pk/ministry-of-it-announces-jobs-opportunities-in-pakistan/"
                                                            rel="bookmark"
                                                            title="Ministry Of IT Announces Jobs Opportunities in Pakistan"
                                                        >
                                                            Ministry Of IT
                                                            Announces Jobs
                                                            Opportunities in
                                                            Pakistan
                                                        </a>
                                                    </h3>{" "}
                                                </div>

                                                <div className="td-editor-date">
                                                    <span className="td-post-author-name">
                                                        <a href="https://startuppakistan.com.pk/author/momina/">
                                                            Momina
                                                        </a>{" "}
                                                        <span>-</span>{" "}
                                                    </span>{" "}
                                                    <span className="td-post-date">
                                                        <time
                                                            className="entry-date updated td-module-date"
                                                            dateTime="2024-10-02T10:58:52+05:00"
                                                        >
                                                            October 2, 2024
                                                        </time>
                                                    </span>{" "}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-column td_block_inner tdi_96 td-big-grid-flex">
                                    <div
                                        className="td_module_flex_7 td-animation-stack td-big-grid-flex-post td-big-grid-flex-post-1 td-cpt-post">
                                        <div className="td-module-container td-category-pos-above">
                                            <div className="td-image-container">
                                                <div className="td-module-thumb">
                                                    <a
                                                        href="https://startuppakistan.com.pk/chief-commissioner-office-announces-job-vacancies-in-pakistan/"
                                                        rel="bookmark"
                                                        className="td-image-wrap "
                                                        title="Chief Commissioner Office Announces Job Vacancies in Pakistan"
                                                    >
                                                        <span
                                                            className="entry-thumb td-thumb-css td-animation-stack-type0-2"
                                                            data-type="css_image"
                                                            data-img-url="https://startuppakistan.com.pk/wp-content/uploads/2024/10/images-2024-10-02T115044.621.jpeg"
                                                            style={{
                                                                backgroundImage: 'url("https://startuppakistan.com.pk/wp-content/uploads/2024/10/images-2024-10-02T115044.621.jpeg")',
                                                            }}
                                                        ></span>
                                                    </a>
                                                </div>
                                                {" "}
                                            </div>

                                            <div className="td-module-meta-info">
                                                <a
                                                    href="https://startuppakistan.com.pk/category/business/jobs-business/"
                                                    className="td-post-category"
                                                >
                                                    Jobs
                                                </a>
                                                <div className="tdb-module-title-wrap">
                                                    <h3 className="entry-title td-module-title">
                                                        <a
                                                            href="https://startuppakistan.com.pk/chief-commissioner-office-announces-job-vacancies-in-pakistan/"
                                                            rel="bookmark"
                                                            title="Chief Commissioner Office Announces Job Vacancies in Pakistan"
                                                        >
                                                            Chief Commissioner
                                                            Office Announces Job
                                                            Vacancies in
                                                            Pakistan
                                                        </a>
                                                    </h3>{" "}
                                                </div>

                                                <div className="td-editor-date">
                                                    <span className="td-post-author-name">
                                                        <a href="https://startuppakistan.com.pk/author/momina/">
                                                            Momina
                                                        </a>
                                                        <span>-</span>
                                                    </span>
                                                    <span className="td-post-date">
                                                        <time
                                                            className="entry-date updated td-module-date"
                                                            dateTime="2024-10-02T11:51:42+05:00"
                                                        >
                                                            October 2, 2024
                                                        </time>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="td_module_flex_7 td-animation-stack td-big-grid-flex-post td-big-grid-flex-post-2 td-cpt-post">
                                        <div className="td-module-container td-category-pos-above">
                                            <div className="td-image-container">
                                                <div className="td-module-thumb">
                                                    <a
                                                        href="https://startuppakistan.com.pk/25-years-strong-ipl-and-diebold-nixdorf-celebrate-silver-jubilee/"
                                                        rel="bookmark"
                                                        className="td-image-wrap "
                                                        title="25 Years Strong: IPL and Diebold Nixdorf Celebrate Silver Jubilee"
                                                    >
                                                        <span
                                                            className="entry-thumb td-thumb-css td-animation-stack-type0-2"
                                                            data-type="css_image"
                                                            data-img-url="https://startuppakistan.com.pk/wp-content/uploads/2024/10/1-696x392.png"
                                                            style={{
                                                                backgroundImage: 'url("https://startuppakistan.com.pk/wp-content/uploads/2024/10/1-696x392.png")',
                                                            }}
                                                        ></span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="td-module-meta-info">
                                                <a
                                                    href="https://startuppakistan.com.pk/category/business/"
                                                    className="td-post-category"
                                                >
                                                    Business
                                                </a>
                                                <div className="tdb-module-title-wrap">
                                                    <h3 className="entry-title td-module-title">
                                                        <a
                                                            href="https://startuppakistan.com.pk/25-years-strong-ipl-and-diebold-nixdorf-celebrate-silver-jubilee/"
                                                            rel="bookmark"
                                                            title="25 Years Strong: IPL and Diebold Nixdorf Celebrate Silver Jubilee"
                                                        >
                                                            25 Years Strong: IPL
                                                            and Diebold Nixdorf
                                                            Celebrate Silver
                                                            Jubilee
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="td-editor-date">
                                                    <span className="td-post-author-name">
                                                        <a href="https://startuppakistan.com.pk/author/syedamaryem/">
                                                            Syeda Maryem
                                                        </a>
                                                        <span>-</span>
                                                    </span>
                                                    <span className="td-post-date">
                                                        <time
                                                            className="entry-date updated td-module-date"
                                                            dateTime="2024-10-02T11:22:09+05:00"
                                                        >
                                                            October 2, 2024
                                                        </time>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="td_module_flex_7 td-animation-stack td-big-grid-flex-post td-big-grid-flex-post-2 td-cpt-post">
                                        <div className="td-module-container td-category-pos-above">
                                            <div className="td-image-container">
                                                <div className="td-module-thumb">
                                                    <a
                                                        href="https://startuppakistan.com.pk/25-years-strong-ipl-and-diebold-nixdorf-celebrate-silver-jubilee/"
                                                        rel="bookmark"
                                                        className="td-image-wrap "
                                                        title="25 Years Strong: IPL and Diebold Nixdorf Celebrate Silver Jubilee"
                                                    >
                                                        <span
                                                            className="entry-thumb td-thumb-css td-animation-stack-type0-2"
                                                            data-type="css_image"
                                                            data-img-url="https://startuppakistan.com.pk/wp-content/uploads/2024/10/1-696x392.png"
                                                            style={{
                                                                backgroundImage: 'url("https://startuppakistan.com.pk/wp-content/uploads/2024/10/1-696x392.png")',
                                                            }}
                                                        ></span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="td-module-meta-info">
                                                <a
                                                    href="https://startuppakistan.com.pk/category/business/"
                                                    className="td-post-category"
                                                >
                                                    Business
                                                </a>
                                                <div className="tdb-module-title-wrap">
                                                    <h3 className="entry-title td-module-title">
                                                        <a
                                                            href="https://startuppakistan.com.pk/25-years-strong-ipl-and-diebold-nixdorf-celebrate-silver-jubilee/"
                                                            rel="bookmark"
                                                            title="25 Years Strong: IPL and Diebold Nixdorf Celebrate Silver Jubilee"
                                                        >
                                                            25 Years Strong: IPL
                                                            and Diebold Nixdorf
                                                            Celebrate Silver
                                                            Jubilee
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="td-editor-date">
                                                    <span className="td-post-author-name">
                                                        <a href="https://startuppakistan.com.pk/author/syedamaryem/">
                                                            Syeda Maryem
                                                        </a>
                                                        <span>-</span>
                                                    </span>
                                                    <span className="td-post-date">
                                                        <time
                                                            className="entry-date updated td-module-date"
                                                            dateTime="2024-10-02T11:22:09+05:00"
                                                        >
                                                            October 2, 2024
                                                        </time>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="td_module_flex_7 td-animation-stack td-big-grid-flex-post td-big-grid-flex-post-2 td-cpt-post">
                                        <div className="td-module-container td-category-pos-above">
                                            <div className="td-image-container">
                                                <div className="td-module-thumb">
                                                    <a
                                                        href="https://startuppakistan.com.pk/25-years-strong-ipl-and-diebold-nixdorf-celebrate-silver-jubilee/"
                                                        rel="bookmark"
                                                        className="td-image-wrap "
                                                        title="25 Years Strong: IPL and Diebold Nixdorf Celebrate Silver Jubilee"
                                                    >
                                                        <span
                                                            className="entry-thumb td-thumb-css td-animation-stack-type0-2"
                                                            data-type="css_image"
                                                            data-img-url="https://startuppakistan.com.pk/wp-content/uploads/2024/10/1-696x392.png"
                                                            style={{
                                                                backgroundImage: 'url("https://startuppakistan.com.pk/wp-content/uploads/2024/10/1-696x392.png")',
                                                            }}
                                                        ></span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="td-module-meta-info">
                                                <a
                                                    href="https://startuppakistan.com.pk/category/business/"
                                                    className="td-post-category"
                                                >
                                                    Business
                                                </a>
                                                <div className="tdb-module-title-wrap">
                                                    <h3 className="entry-title td-module-title">
                                                        <a
                                                            href="https://startuppakistan.com.pk/25-years-strong-ipl-and-diebold-nixdorf-celebrate-silver-jubilee/"
                                                            rel="bookmark"
                                                            title="25 Years Strong: IPL and Diebold Nixdorf Celebrate Silver Jubilee"
                                                        >
                                                            25 Years Strong: IPL
                                                            and Diebold Nixdorf
                                                            Celebrate Silver
                                                            Jubilee
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="td-editor-date">
                                                    <span className="td-post-author-name">
                                                        <a href="https://startuppakistan.com.pk/author/syedamaryem/">
                                                            Syeda Maryem
                                                        </a>
                                                        <span>-</span>
                                                    </span>
                                                    <span className="td-post-date">
                                                        <time
                                                            className="entry-date updated td-module-date"
                                                            dateTime="2024-10-02T11:22:09+05:00"
                                                        >
                                                            October 2, 2024
                                                        </time>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <NewsSlider/>

                    <section className="gvnjGp">
                        <div className="eMVRpx">
                            <div className="iGzJZA">
                                <hr className="lgKNnV"/>
                            </div>
                            <div className="cYOBar">
                                <div>
                                    <div className="dqKfa">
                                        <h2 className="elqzuS">
                                            Digital Nomad
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="dlepEy">
                                <div className="dyVGhC">
                                    <div data-testid="london-card">
                                        <div data-testid="london-article" className="sc-f98732b0-3 ephYtw">
                                            <div data-testid="anchor-inner-wrapper">
                                                <a href="/news/articles/cx25xjkpr8jo" data-testid="internal-link"
                                                   className="sc-2e6baa30-0 gILusN">
                                                    <div data-testid="london" className="sc-f98732b0-2 bNZLNs">
                                                        <div data-testid="card-media-wrapper"
                                                             className="sc-f98732b0-4 emSCvS">
                                                            <div data-testid="card-media"
                                                                 className="sc-f98732b0-1 jSgXDY">
                                                                <div className="sc-a34861b-1 jxzoZC">
                                                                    <img
                                                                        sizes="(min-width: 768px) 50vw, 100vw"
                                                                        srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/8cd3/live/03d14a50-8088-11ef-822c-a50726bfda2e.jpg.webp 240w,
                                                                https://ichef.bbci.co.uk/news/320/cpsprodpb/8cd3/live/03d14a50-8088-11ef-822c-a50726bfda2e.jpg.webp 320w,
                                                                https://ichef.bbci.co.uk/news/480/cpsprodpb/8cd3/live/03d14a50-8088-11ef-822c-a50726bfda2e.jpg.webp 480w,
                                                                https://ichef.bbci.co.uk/news/640/cpsprodpb/8cd3/live/03d14a50-8088-11ef-822c-a50726bfda2e.jpg.webp 640w,
                                                                https://ichef.bbci.co.uk/news/800/cpsprodpb/8cd3/live/03d14a50-8088-11ef-822c-a50726bfda2e.jpg.webp 800w,
                                                                https://ichef.bbci.co.uk/news/1024/cpsprodpb/8cd3/live/03d14a50-8088-11ef-822c-a50726bfda2e.jpg.webp 1024w,
                                                                https://ichef.bbci.co.uk/news/1536/cpsprodpb/8cd3/live/03d14a50-8088-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                        src="https://ichef.bbci.co.uk/news/480/cpsprodpb/8cd3/live/03d14a50-8088-11ef-822c-a50726bfda2e.jpg.webp"
                                                                        loading="lazy" alt="A young Daniel Ricciardo"
                                                                        className="sc-a34861b-0 efFcac"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-testid="card-text-wrapper"
                                                             className="sc-f98732b0-5 gGpWNz">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                    <h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 dsoipF">How shy Aussie
                                                                        kid
                                                                        Ricciardo became F1 golden boy
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <p data-testid="card-description"
                                                               className="sc-f98732b0-0 iQbkqW">
                                                                Ricciardo leaves F1 as one of
                                                                its most successful and popular drivers and a legend of
                                                                Australian sport.
                                                            </p>
                                                            <div className="sc-4e537b1-0 hJDQRX">
                                                        <span
                                                            data-testid="card-metadata-lastupdated"
                                                            className="sc-4e537b1-1 dsUUMv">
                                                            3 hrs ago
                                                        </span>
                                                                <div data-testid="card-metadata-separator"
                                                                     className="sc-4e537b1-3 lmDmEx"
                                                                >
                                                                </div>
                                                                <span data-testid="card-metadata-tag"
                                                                      className="sc-4e537b1-2 eRsxHt"
                                                                >
                                                            Australia
                                                        </span>
                                                            </div>
                                                            <div data-testid="card-relatedUrls"
                                                                 className="sc-c01f71b3-0 ghsqpk"
                                                            >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="sc-f98732b0-6 fbvHdc"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-93223220-0 sc-b38350e4-4 jqlqhc hprnWz">
                                    <div data-testid="edinburgh-card">
                                        <div data-testid="anchor-inner-wrapper">
                                            <a href="/news/articles/cx25nq12n10o"
                                               data-testid="internal-link"
                                               className="sc-2e6baa30-0 gILusN">
                                                <div data-testid="edinburgh-article" className="sc-b8778340-0 kFuHJG">
                                                    <div data-testid="card-media-wrapper"
                                                         className="sc-b8778340-1 jvzsLx">
                                                        <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                            <div className="sc-a34861b-1 jxzoZC"><img
                                                                sizes="(min-width: 768px) 33vw, 96vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp"
                                                                loading="lazy"
                                                                alt="Atul Kumar comes from India's one of the most margainlised groups"
                                                                className="sc-a34861b-0 efFcac"/></div>
                                                        </div>
                                                    </div>
                                                    <div data-testid="card-text-wrapper"
                                                         className="sc-b8778340-3 gxEarx">
                                                        <div className="sc-4fedabc7-1 kbvCmj">
                                                            <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                data-testid="card-headline"
                                                                className="sc-4fedabc7-3 zTZri">India's top court saves
                                                                a
                                                                poor student's college dream</h2></div>
                                                        </div>
                                                        <p data-testid="card-description"
                                                           className="sc-b8778340-4 kYtujW">Atul Kumar missed the
                                                            deadline
                                                            to pay his college fee by a few seconds - then a court
                                                            stepped
                                                            in to help him.</p>
                                                        <div className="sc-4e537b1-0 gtLVrL"><span
                                                            data-testid="card-metadata-lastupdated"
                                                            className="sc-4e537b1-1 dsUUMv">10 hrs ago</span>
                                                            <div data-testid="card-metadata-separator"
                                                                 className="sc-4e537b1-3 lmDmEx"></div>
                                                            <span data-testid="card-metadata-tag"
                                                                  className="sc-4e537b1-2 eRsxHt">Asia</span></div>
                                                    </div>
                                                </div>
                                            </a></div>
                                    </div>
                                </div>
                                <div className="sc-93223220-0 biogCF">
                                    <div data-testid="manchester-card">
                                        <div data-testid="anchor-inner-wrapper">
                                            <a
                                                href="/sport/cricket/articles/ckgnkyk20pgo" data-testid="internal-link"
                                                className="sc-2e6baa30-0 gILusN">
                                                <div data-testid="manchester-article" className="sc-e5949eb5-1 cMUTXL">
                                                    <div data-testid="card-text-wrapper"
                                                         className="sc-e5949eb5-2 eOoDdE">
                                                        <div className="sc-4fedabc7-1 kbvCmj">
                                                            <div className="sc-4fedabc7-0 kZtaAl">
                                                                <h2
                                                                    data-testid="card-headline"
                                                                    className="sc-4fedabc7-3 zTZri">Sri Lanka's
                                                                    Jayawickrama
                                                                    handed one-year ban
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <p data-testid="card-description"
                                                           className="sc-e5949eb5-0 gpCoKv">
                                                            Sri Lanka spinner Praveen
                                                            Jayawickrama handed a one-year ban from all forms of cricket
                                                            for
                                                            breaching the anti-corruption code, the International
                                                            Cricket
                                                            Council (ICC) said.
                                                        </p>
                                                        <div className="sc-4e537b1-0 hJDQRX">
                                                    <span
                                                        data-testid="card-metadata-lastupdated"
                                                        className="sc-4e537b1-1 dsUUMv">10 hrs ago</span>
                                                            <div data-testid="card-metadata-separator"
                                                                 className="sc-4e537b1-3 lmDmEx"></div>
                                                            <span data-testid="card-metadata-tag"
                                                                  className="sc-4e537b1-2 eRsxHt">
                                                        Sri Lanka
                                                    </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-testid="manchester-card">
                                        <div data-testid="anchor-inner-wrapper"><a href="/news/articles/cvglk3md4e3o"
                                                                                   data-testid="internal-link"
                                                                                   className="sc-2e6baa30-0 gILusN">
                                            <div data-testid="manchester-article" className="sc-e5949eb5-1 cMUTXL">
                                                <div data-testid="card-text-wrapper" className="sc-e5949eb5-2 eOoDdE">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                            data-testid="card-headline"
                                                            className="sc-4fedabc7-3 zTZri">Iran may be behind attacks
                                                            on Israeli embassies, Sweden says</h2></div>
                                                    </div>
                                                    <p data-testid="card-description"
                                                       className="sc-e5949eb5-0 gpCoKv">Blasts and gunfire were reported
                                                        near the Israeli embassies in Copenhagen and Stockholm earlier
                                                        this week.</p>
                                                    <div className="sc-4e537b1-0 hJDQRX"><span
                                                        data-testid="card-metadata-lastupdated"
                                                        className="sc-4e537b1-1 dsUUMv">1 hr ago</span>
                                                        <div data-testid="card-metadata-separator"
                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                        <span data-testid="card-metadata-tag"
                                                              className="sc-4e537b1-2 eRsxHt">World</span></div>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                </div>
                                <div className="sc-93223220-0 sc-b38350e4-2 cmkdDu QUMNJ">
                                    <div className="sc-b38350e4-3 gugNoq">
                                        <div data-testid="edinburgh-card">
                                            <div data-testid="anchor-inner-wrapper"><a
                                                href="/news/articles/cx25nq12n10o"
                                                data-testid="internal-link"
                                                className="sc-2e6baa30-0 gILusN">
                                                <div data-testid="edinburgh-article" className="sc-b8778340-0 kFuHJG">
                                                    <div data-testid="card-media-wrapper"
                                                         className="sc-b8778340-1 jvzsLx">
                                                        <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                            <div className="sc-a34861b-1 jxzoZC"><img
                                                                sizes="(min-width: 768px) 33vw, 96vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/3975/live/8dca78a0-8153-11ef-9775-fb5a546120c2.jpg.webp"
                                                                loading="lazy"
                                                                alt="Atul Kumar comes from India's one of the most margainlised groups"
                                                                className="sc-a34861b-0 efFcac"/></div>
                                                        </div>
                                                    </div>
                                                    <div data-testid="card-text-wrapper"
                                                         className="sc-b8778340-3 gxEarx">
                                                        <div className="sc-4fedabc7-1 kbvCmj">
                                                            <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                data-testid="card-headline"
                                                                className="sc-4fedabc7-3 zTZri">India's top court saves
                                                                a
                                                                poor student's college dream</h2></div>
                                                        </div>
                                                        <p data-testid="card-description"
                                                           className="sc-b8778340-4 kYtujW">Atul Kumar missed the
                                                            deadline
                                                            to pay his college fee by a few seconds - then a court
                                                            stepped
                                                            in to help him.</p>
                                                        <div className="sc-4e537b1-0 gtLVrL"><span
                                                            data-testid="card-metadata-lastupdated"
                                                            className="sc-4e537b1-1 dsUUMv">10 hrs ago</span>
                                                            <div data-testid="card-metadata-separator"
                                                                 className="sc-4e537b1-3 lmDmEx"></div>
                                                            <span data-testid="card-metadata-tag"
                                                                  className="sc-4e537b1-2 eRsxHt">Asia</span></div>
                                                    </div>
                                                </div>
                                            </a></div>
                                        </div>
                                    </div>
                                    <div data-testid="edinburgh-card">
                                        <div data-testid="anchor-inner-wrapper"><a href="/news/articles/ce3zxk9w955o"
                                                                                   data-testid="internal-link"
                                                                                   className="sc-2e6baa30-0 gILusN">
                                            <div data-testid="edinburgh-article" className="sc-b8778340-0 kFuHJG">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC"><img
                                                            sizes="(min-width: 768px) 33vw, 96vw"
                                                            srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/eaa1/live/cb053530-818e-11ef-98f4-8f408a3dba7c.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/eaa1/live/cb053530-818e-11ef-98f4-8f408a3dba7c.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/eaa1/live/cb053530-818e-11ef-98f4-8f408a3dba7c.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/eaa1/live/cb053530-818e-11ef-98f4-8f408a3dba7c.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/eaa1/live/cb053530-818e-11ef-98f4-8f408a3dba7c.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/eaa1/live/cb053530-818e-11ef-98f4-8f408a3dba7c.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/eaa1/live/cb053530-818e-11ef-98f4-8f408a3dba7c.jpg.webp 1536w"
                                                            src="https://ichef.bbci.co.uk/news/480/cpsprodpb/eaa1/live/cb053530-818e-11ef-98f4-8f408a3dba7c.jpg.webp"
                                                            loading="lazy"
                                                            alt="Melania Trump looks away from the camera, smiling. Video recording equipment is positioned in front of her. She is wearing a red jacket."
                                                            className="sc-a34861b-0 efFcac"/></div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 gxEarx">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                            data-testid="card-headline"
                                                            className="sc-4fedabc7-3 zTZri">Melania Trump signals
                                                            support
                                                            for abortion rights</h2></div>
                                                    </div>
                                                    <p data-testid="card-description"
                                                       className="sc-b8778340-4 kYtujW">Her
                                                        apparent support of abortion access puts her at odds with her
                                                        husband, who has taken credit for helping to overturn Roe v
                                                        Wade.</p>
                                                    <div className="sc-4e537b1-0 gtLVrL"><span
                                                        data-testid="card-metadata-lastupdated"
                                                        className="sc-4e537b1-1 dsUUMv">2 hrs ago</span>
                                                        <div data-testid="card-metadata-separator"
                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                        <span data-testid="card-metadata-tag"
                                                              className="sc-4e537b1-2 eRsxHt">US &amp; Canada</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div data-testid="edinburgh-card">
                                        <div data-testid="anchor-inner-wrapper"><a href="/news/articles/cq8xelg27lgo"
                                                                                   data-testid="internal-link"
                                                                                   className="sc-2e6baa30-0 gILusN">
                                            <div data-testid="edinburgh-article" className="sc-b8778340-0 kFuHJG">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC"><img
                                                            sizes="(min-width: 768px) 33vw, 96vw"
                                                            srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/0168/live/22bc8d80-80ab-11ef-ad45-893aa022fcbc.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/0168/live/22bc8d80-80ab-11ef-ad45-893aa022fcbc.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/0168/live/22bc8d80-80ab-11ef-ad45-893aa022fcbc.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/0168/live/22bc8d80-80ab-11ef-ad45-893aa022fcbc.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/0168/live/22bc8d80-80ab-11ef-ad45-893aa022fcbc.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/0168/live/22bc8d80-80ab-11ef-ad45-893aa022fcbc.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/0168/live/22bc8d80-80ab-11ef-ad45-893aa022fcbc.jpg.webp 1536w"
                                                            src="https://ichef.bbci.co.uk/news/480/cpsprodpb/0168/live/22bc8d80-80ab-11ef-ad45-893aa022fcbc.jpg.webp"
                                                            loading="lazy"
                                                            alt="Two-year-old boy, Sulaiman, who is severely malnourished. "
                                                            className="sc-a34861b-0 efFcac"/></div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 gxEarx">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                            data-testid="card-headline"
                                                            className="sc-4fedabc7-3 zTZri">Inside a hospital on the
                                                            front
                                                            line of Sudan’s hunger crisis</h2></div>
                                                    </div>
                                                    <p data-testid="card-description"
                                                       className="sc-b8778340-4 kYtujW">One
                                                        of the worst famines in decades could be underway in Sudan, aid
                                                        workers warn.</p>
                                                    <div className="sc-4e537b1-0 gtLVrL"><span
                                                        data-testid="card-metadata-lastupdated"
                                                        className="sc-4e537b1-1 dsUUMv">20 hrs ago</span>
                                                        <div data-testid="card-metadata-separator"
                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                        <span data-testid="card-metadata-tag"
                                                              className="sc-4e537b1-2 eRsxHt">Africa</span></div>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div data-testid="edinburgh-card">
                                        <div data-testid="anchor-inner-wrapper"><a href="/news/articles/c1jd8n8z9kpo"
                                                                                   data-testid="internal-link"
                                                                                   className="sc-2e6baa30-0 gILusN">
                                            <div data-testid="edinburgh-article" className="sc-b8778340-0 kFuHJG">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC"><img
                                                            sizes="(min-width: 768px) 33vw, 96vw"
                                                            srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/a347/live/4ef40cd0-816d-11ef-b80d-219ae862beec.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/a347/live/4ef40cd0-816d-11ef-b80d-219ae862beec.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/a347/live/4ef40cd0-816d-11ef-b80d-219ae862beec.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/a347/live/4ef40cd0-816d-11ef-b80d-219ae862beec.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/a347/live/4ef40cd0-816d-11ef-b80d-219ae862beec.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/a347/live/4ef40cd0-816d-11ef-b80d-219ae862beec.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/a347/live/4ef40cd0-816d-11ef-b80d-219ae862beec.jpg.webp 1536w"
                                                            src="https://ichef.bbci.co.uk/news/480/cpsprodpb/a347/live/4ef40cd0-816d-11ef-b80d-219ae862beec.jpg.webp"
                                                            loading="lazy"
                                                            alt="A mass funeral was held at the temple school which the victims attended"
                                                            className="sc-a34861b-0 efFcac"/></div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 gxEarx">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                            data-testid="card-headline"
                                                            className="sc-4fedabc7-3 zTZri">Weeping families mourn Thai
                                                            bus
                                                            fire victims at funeral</h2></div>
                                                    </div>
                                                    <p data-testid="card-description"
                                                       className="sc-b8778340-4 kYtujW">Hundreds of people attended the
                                                        service at the children's school in central Thailand.</p>
                                                    <div className="sc-4e537b1-0 gtLVrL"><span
                                                        data-testid="card-metadata-lastupdated"
                                                        className="sc-4e537b1-1 dsUUMv">9 hrs ago</span></div>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div data-testid="edinburgh-card">
                                        <div data-testid="anchor-inner-wrapper">
                                            <a href="/news/articles/cy4dpr9yzw3o"
                                               data-testid="internal-link"
                                               className="sc-2e6baa30-0 gILusN">
                                                <div data-testid="edinburgh-article" className="sc-b8778340-0 kFuHJG">
                                                    <div data-testid="card-media-wrapper"
                                                         className="sc-b8778340-1 jvzsLx">
                                                        <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                            <div className="sc-a34861b-1 jxzoZC"><img
                                                                sizes="(min-width: 768px) 33vw, 96vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/ecc3/live/7a4137c0-8161-11ef-a217-b780a227dde7.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/ecc3/live/7a4137c0-8161-11ef-a217-b780a227dde7.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/ecc3/live/7a4137c0-8161-11ef-a217-b780a227dde7.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/ecc3/live/7a4137c0-8161-11ef-a217-b780a227dde7.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/ecc3/live/7a4137c0-8161-11ef-a217-b780a227dde7.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/ecc3/live/7a4137c0-8161-11ef-a217-b780a227dde7.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/ecc3/live/7a4137c0-8161-11ef-a217-b780a227dde7.jpg.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/ecc3/live/7a4137c0-8161-11ef-a217-b780a227dde7.jpg.webp"
                                                                loading="lazy"
                                                                alt="Taiwan Pingtung County Hospital fire"
                                                                className="sc-a34861b-0 efFcac"/></div>
                                                        </div>
                                                    </div>
                                                    <div data-testid="card-text-wrapper"
                                                         className="sc-b8778340-3 gxEarx">
                                                        <div className="sc-4fedabc7-1 kbvCmj">
                                                            <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                data-testid="card-headline"
                                                                className="sc-4fedabc7-3 zTZri">Hospital fire in Taiwan
                                                                kills
                                                                nine people</h2></div>
                                                        </div>
                                                        <p data-testid="card-description"
                                                           className="sc-b8778340-4 kYtujW">The
                                                            cause of the fire - which began as Typhoon Krathon made
                                                            landfall
                                                            -
                                                            is still under investigation.</p>
                                                        <div className="sc-4e537b1-0 gtLVrL"><span
                                                            data-testid="card-metadata-lastupdated"
                                                            className="sc-4e537b1-1 dsUUMv">9 hrs ago</span>
                                                            <div data-testid="card-metadata-separator"
                                                                 className="sc-4e537b1-3 lmDmEx"></div>
                                                            <span data-testid="card-metadata-tag"
                                                                  className="sc-4e537b1-2 eRsxHt">Asia</span></div>
                                                    </div>
                                                </div>
                                            </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="gvnjGp">
                        <div className="eMVRpx">
                            <div className="jKLwmR">
                                <div data-testid="edinburgh-card">
                                    <div className="ctfMqF">
                                        <div className="iGzJZA">
                                            <hr className="ecPQgU"/>
                                        </div>
                                        <div data-testid="section-title-wrapper" className="druAcw">
                                            <div>
                                                <div className="dqKfa"><h2
                                                    className="elqzuS">Skilled Immigration</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/articles/c99v3397pdpo"
                                           data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN">
                                            <div data-testid="edinburgh-article"
                                                 className="sc-b8778340-0 kFuHJG">
                                                <div data-testid="card-media-wrapper"
                                                     className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media"
                                                         className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img sizes="96vw"
                                                                 srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/8665/live/d1d44e40-8185-11ef-822c-a50726bfda2e.jpg.webp 240w,
                                                             https://ichef.bbci.co.uk/news/320/cpsprodpb/8665/live/d1d44e40-8185-11ef-822c-a50726bfda2e.jpg.webp 320w,
                                                             https://ichef.bbci.co.uk/news/480/cpsprodpb/8665/live/d1d44e40-8185-11ef-822c-a50726bfda2e.jpg.webp 480w,
                                                             https://ichef.bbci.co.uk/news/640/cpsprodpb/8665/live/d1d44e40-8185-11ef-822c-a50726bfda2e.jpg.webp 640w,
                                                             https://ichef.bbci.co.uk/news/800/cpsprodpb/8665/live/d1d44e40-8185-11ef-822c-a50726bfda2e.jpg.webp 800w,
                                                             https://ichef.bbci.co.uk/news/1024/cpsprodpb/8665/live/d1d44e40-8185-11ef-822c-a50726bfda2e.jpg.webp 1024w,
                                                             https://ichef.bbci.co.uk/news/1536/cpsprodpb/8665/live/d1d44e40-8185-11ef-822c-a50726bfda2e.jpg.webp 1536w"
                                                                 src="https://ichef.bbci.co.uk/news/480/cpsprodpb/8665/live/d1d44e40-8185-11ef-822c-a50726bfda2e.jpg.webp"
                                                                 loading="lazy"
                                                                 alt="File image of Donald Trump addressing supporters in Washington on 6 January 2021"
                                                                 className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 gxEarx">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                            <h2
                                                                data-testid="card-headline"
                                                                className="sc-4fedabc7-3 zTZri"
                                                            >
                                                                Five takeaways from new filing in Trump election case
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <p data-testid="card-description"
                                                       className="sc-b8778340-4 kYtujW">Trump
                                                        allegedly said it didn't matter if he won or lost 2020 election,
                                                        he
                                                        would still "fight like hell".</p>
                                                    <div className="sc-4e537b1-0 gtLVrL"><span
                                                        data-testid="card-metadata-lastupdated"
                                                        className="sc-4e537b1-1 dsUUMv">8 hrs ago</span>
                                                        <div data-testid="card-metadata-separator"
                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                        <span
                                                            data-testid="card-metadata-tag"
                                                            className="sc-4e537b1-2 eRsxHt"
                                                        >
                                                        US &amp; Canada
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                </div>
                                <div data-testid="edinburgh-card">
                                    <div className="ctfMqF">
                                        <div className="iGzJZA">
                                            <hr className="ecPQgU"/>
                                        </div>
                                        <div className="druAcw">
                                            <div>
                                                <div className="dqKfa"><h2
                                                    className="elqzuS">Business Immigration</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-testid="anchor-inner-wrapper">
                                        <a href="/news/articles/cj4x71znwxdo"
                                           data-testid="internal-link"
                                           className="sc-2e6baa30-0 gILusN"
                                        >
                                            <div data-testid="edinburgh-article" className="sc-b8778340-0 kFuHJG">
                                                <div data-testid="card-media-wrapper" className="sc-b8778340-1 jvzsLx">
                                                    <div data-testid="card-media" className="sc-b8778340-2 kUyIkJ">
                                                        <div className="sc-a34861b-1 jxzoZC">
                                                            <img
                                                                sizes="96vw"
                                                                srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/bd1a/live/bbae7290-6f55-11ef-b02d-c5f3b724a1ea.png.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/bd1a/live/bbae7290-6f55-11ef-b02d-c5f3b724a1ea.png.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/bd1a/live/bbae7290-6f55-11ef-b02d-c5f3b724a1ea.png.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/bd1a/live/bbae7290-6f55-11ef-b02d-c5f3b724a1ea.png.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/bd1a/live/bbae7290-6f55-11ef-b02d-c5f3b724a1ea.png.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/bd1a/live/bbae7290-6f55-11ef-b02d-c5f3b724a1ea.png.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/bd1a/live/bbae7290-6f55-11ef-b02d-c5f3b724a1ea.png.webp 1536w"
                                                                src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/bd1a/live/bbae7290-6f55-11ef-b02d-c5f3b724a1ea.png.webp"
                                                                loading="lazy"
                                                                alt="A composite image of Harris and Trump"
                                                                className="sc-a34861b-0 efFcac"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-testid="card-text-wrapper" className="sc-b8778340-3 gxEarx">
                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                        <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                            data-testid="card-headline"
                                                            className="sc-4fedabc7-3 zTZri">US
                                                            election polls: Who is ahead - Harris or Trump?</h2></div>
                                                    </div>
                                                    <p data-testid="card-description"
                                                       className="sc-b8778340-4 kYtujW">An
                                                        in-depth look at the polls and what they can and can’t tell us
                                                        about
                                                        who
                                                        will win the White House.</p>
                                                    <div className="sc-4e537b1-0 gtLVrL"><span
                                                        data-testid="card-metadata-lastupdated"
                                                        className="sc-4e537b1-1 dsUUMv">21 hrs ago</span>
                                                        <div data-testid="card-metadata-separator"
                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                        <span data-testid="card-metadata-tag"
                                                              className="sc-4e537b1-2 eRsxHt">US &amp; Canada</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                </div>
                            </div>

                            <div className="eMVRpx">
                                <div className="ggGYNa">
                                    <div data-testid="wyoming-group-grid" className="jitrPO">
                                        <div>
                                            <div className="bBjmKu">
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper">
                                                        <a href="/news/articles/c1k70rnrp4xo"
                                                           data-testid="internal-link"
                                                           className="sc-2e6baa30-0 gILusN"
                                                        >
                                                            <div data-testid="chester-article"
                                                                 className="sc-417019fc-0 bnGVfD">
                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                    <div className="sc-4fedabc7-0 kZtaAl">
                                                                        <h2
                                                                            data-testid="card-headline"
                                                                            className="sc-4fedabc7-3 zTZri">Helene is
                                                                            deadliest
                                                                            mainland US
                                                                            hurricane since Katrina
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="sc-4e537b1-0 hJDQRX"><span
                                                                    data-testid="card-metadata-lastupdated"
                                                                    className="sc-4e537b1-1 dsUUMv">4 hrs ago</span>
                                                                    <div data-testid="card-metadata-separator"
                                                                         className="sc-4e537b1-3 lmDmEx"></div>
                                                                    <span data-testid="card-metadata-tag"
                                                                          className="sc-4e537b1-2 eRsxHt">US &amp; Canada</span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="/news/articles/cgq843dg4geo"
                                                        data-testid="internal-link"
                                                        className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="chester-article"
                                                             className="sc-417019fc-0 bnGVfD">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                    <h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri"
                                                                    >
                                                                        'We load guns with one hand and make a game with
                                                                        the
                                                                        other'
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div className="sc-4e537b1-0 hJDQRX">
                                                    <span
                                                        data-testid="card-metadata-lastupdated"
                                                        className="sc-4e537b1-1 dsUUMv">6 hrs ago
                                                    </span>
                                                                <div data-testid="card-metadata-separator"
                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                <span
                                                                    data-testid="card-metadata-tag"
                                                                    className="sc-4e537b1-2 eRsxHt"
                                                                >
                                                        Europe
                                                    </span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper">
                                                        <a href="/news/articles/c93pdlg4dlno"
                                                           data-testid="internal-link"
                                                           className="sc-2e6baa30-0 gILusN"
                                                        >
                                                            <div data-testid="chester-article"
                                                                 className="sc-417019fc-0 bnGVfD">
                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                    <div className="sc-4fedabc7-0 kZtaAl">
                                                                        <h2
                                                                            data-testid="card-headline"
                                                                            className="sc-4fedabc7-3 zTZri">Trump
                                                                            'resorted
                                                                            to
                                                                            crimes' to
                                                                            overturn 2020 election, prosecutors say
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="sc-4e537b1-0 hJDQRX"><span
                                                                    data-testid="card-metadata-lastupdated"
                                                                    className="sc-4e537b1-1 dsUUMv">7 hrs ago</span>
                                                                    <div data-testid="card-metadata-separator"
                                                                         className="sc-4e537b1-3 lmDmEx"></div>
                                                                    <span data-testid="card-metadata-tag"
                                                                          className="sc-4e537b1-2 eRsxHt">US &amp; Canada
                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                                <div data-testid="edinburgh-card">
                                                    <div data-testid="anchor-inner-wrapper">
                                                        <a href="/news/articles/c4glkedx1mxo"
                                                           data-testid="internal-link"
                                                           className="sc-2e6baa30-0 gILusN">
                                                            <div data-testid="edinburgh-article"
                                                                 className="sc-b8778340-0 kFuHJG">
                                                                <div data-testid="card-media-wrapper"
                                                                     className="sc-b8778340-1 jvzsLx">
                                                                    <div data-testid="card-media"
                                                                         className="sc-b8778340-2 kUyIkJ">
                                                                        <div className="sc-a34861b-1 jxzoZC"><img
                                                                            sizes="96vw"
                                                                            srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 1536w"
                                                                            src="https://ichef.bbci.co.uk/news/480/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp"
                                                                            loading="lazy"
                                                                            alt=" A photograph of Tyre Nichols is displayed at a memorial"
                                                                            className="sc-a34861b-0 efFcac"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-testid="card-text-wrapper"
                                                                     className="sc-b8778340-3 gxEarx">
                                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                                        <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                            data-testid="card-headline"
                                                                            className="sc-4fedabc7-3 zTZri">Three
                                                                            ex-Memphis
                                                                            officers
                                                                            guilty of witness tampering in fatal
                                                                            beating</h2>
                                                                        </div>
                                                                    </div>
                                                                    <p data-testid="card-description"
                                                                       className="sc-b8778340-4 kYtujW">But all three
                                                                        were
                                                                        cleared
                                                                        of
                                                                        the most serious counts that could have resulted
                                                                        in
                                                                        life
                                                                        in
                                                                        prison for the death of Tyre Nichols.</p>
                                                                    <div className="sc-4e537b1-0 gtLVrL"><span
                                                                        data-testid="card-metadata-lastupdated"
                                                                        className="sc-4e537b1-1 dsUUMv">8 hrs ago</span>
                                                                        <div data-testid="card-metadata-separator"
                                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                                        <span data-testid="card-metadata-tag"
                                                                              className="sc-4e537b1-2 eRsxHt">US &amp; Canada</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bBjmKu">
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="/sport/football/articles/ckgvy4jqnylo"
                                                        data-testid="internal-link"
                                                        className="gILusN">
                                                        <div data-testid="chester-article"
                                                             className="sc-417019fc-0 bnGVfD">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                    <h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri">'We
                                                                        will fight' - Ten Hag still defiant but is Man
                                                                        Utd
                                                                        boss
                                                                        on
                                                                        brink?
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div className="sc-4e537b1-0 hJDQRX"><span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="sc-4e537b1-1 dsUUMv">6 hrs ago</span>
                                                                <div data-testid="card-metadata-separator"
                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                <span data-testid="card-metadata-tag"
                                                                      className="sc-4e537b1-2 eRsxHt">Man Utd</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="/sport/football/articles/cgq8lj5n44po"
                                                        data-testid="internal-link"
                                                        className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="chester-article"
                                                             className="sc-417019fc-0 bnGVfD">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                    data-testid="card-headline"
                                                                    className="sc-4fedabc7-3 zTZri">Clement laments
                                                                    Rangers
                                                                    profligacy - but are there bigger issues?</h2></div>
                                                            </div>
                                                            <div className="sc-4e537b1-0 hJDQRX"><span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="sc-4e537b1-1 dsUUMv">7 hrs ago</span>
                                                                <div data-testid="card-metadata-separator"
                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                <span data-testid="card-metadata-tag"
                                                                      className="sc-4e537b1-2 eRsxHt">Scottish Prem</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="https://www.bbc.com/sport/football/live/cgk7regkdn6t"
                                                        data-testid="external-anchor" target="_self"
                                                        className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="chester-live"
                                                             className="sc-417019fc-0 bnGVfD">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                    data-testid="card-headline"
                                                                    className="sc-4fedabc7-3 zTZri">Late
                                                                    Maguire header gives 10-man Man Utd draw in six-goal
                                                                    thriller at
                                                                    Porto</h2></div>
                                                            </div>
                                                            <div className="sc-4e537b1-0 hJDQRX"></div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div data-testid="edinburgh-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="https://www.bbc.com/sport/football/live/cgmg2n8mwprt"
                                                        data-testid="external-anchor" target="_self"
                                                        className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="edinburgh-live"
                                                             className="sc-b8778340-0 kFuHJG">
                                                            <div data-testid="card-media-wrapper"
                                                                 className="sc-b8778340-1 jvzsLx">
                                                                <div data-testid="card-media"
                                                                     className="sc-b8778340-2 kUyIkJ">
                                                                    <div className="sc-a34861b-1 jxzoZC"><img
                                                                        sizes="96vw"
                                                                        srcSet="https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 240w,https://ichef.bbci.co.uk/ace/standard/320/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 320w,https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 480w,https://ichef.bbci.co.uk/ace/standard/640/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 640w,https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 800w,https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 1024w,https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 1536w"
                                                                        src="https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp"
                                                                        loading="lazy"
                                                                        alt="Rangers v Lyon"
                                                                        className="sc-a34861b-0 efFcac"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-testid="card-text-wrapper"
                                                                 className="sc-b8778340-3 gxEarx">
                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                    <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri">Rangers taught
                                                                        lesson by
                                                                        ruthless Lyon in Europa League</h2></div>
                                                                </div>
                                                                <p data-testid="card-description"
                                                                   className="sc-b8778340-4 kYtujW">Rangers fail to back
                                                                    up
                                                                    their
                                                                    impressive Europa League opening win against Malmo
                                                                    as
                                                                    they
                                                                    are
                                                                    undone by a lethal Lyon at Ibrox.</p>
                                                                <div className="sc-4e537b1-0 gtLVrL"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-testid="wyoming-group-grid" className="jitrPO">
                                        <div>
                                            <div className="bBjmKu">
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper">
                                                        <a href="/news/articles/c1k70rnrp4xo"
                                                           data-testid="internal-link"
                                                           className="sc-2e6baa30-0 gILusN"
                                                        >
                                                            <div data-testid="chester-article"
                                                                 className="sc-417019fc-0 bnGVfD">
                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                    <div className="sc-4fedabc7-0 kZtaAl">
                                                                        <h2
                                                                            data-testid="card-headline"
                                                                            className="sc-4fedabc7-3 zTZri">Helene is
                                                                            deadliest
                                                                            mainland US
                                                                            hurricane since Katrina
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="sc-4e537b1-0 hJDQRX"><span
                                                                    data-testid="card-metadata-lastupdated"
                                                                    className="sc-4e537b1-1 dsUUMv">4 hrs ago</span>
                                                                    <div data-testid="card-metadata-separator"
                                                                         className="sc-4e537b1-3 lmDmEx"></div>
                                                                    <span data-testid="card-metadata-tag"
                                                                          className="sc-4e537b1-2 eRsxHt">US &amp; Canada</span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="/news/articles/cgq843dg4geo"
                                                        data-testid="internal-link"
                                                        className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="chester-article"
                                                             className="sc-417019fc-0 bnGVfD">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                    <h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri"
                                                                    >
                                                                        'We load guns with one hand and make a game with
                                                                        the
                                                                        other'
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div className="sc-4e537b1-0 hJDQRX">
                                                    <span
                                                        data-testid="card-metadata-lastupdated"
                                                        className="sc-4e537b1-1 dsUUMv">6 hrs ago
                                                    </span>
                                                                <div data-testid="card-metadata-separator"
                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                <span
                                                                    data-testid="card-metadata-tag"
                                                                    className="sc-4e537b1-2 eRsxHt"
                                                                >
                                                        Europe
                                                    </span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper">
                                                        <a href="/news/articles/c93pdlg4dlno"
                                                           data-testid="internal-link"
                                                           className="sc-2e6baa30-0 gILusN"
                                                        >
                                                            <div data-testid="chester-article"
                                                                 className="sc-417019fc-0 bnGVfD">
                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                    <div className="sc-4fedabc7-0 kZtaAl">
                                                                        <h2
                                                                            data-testid="card-headline"
                                                                            className="sc-4fedabc7-3 zTZri">Trump
                                                                            'resorted
                                                                            to
                                                                            crimes' to
                                                                            overturn 2020 election, prosecutors say
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="sc-4e537b1-0 hJDQRX"><span
                                                                    data-testid="card-metadata-lastupdated"
                                                                    className="sc-4e537b1-1 dsUUMv">7 hrs ago</span>
                                                                    <div data-testid="card-metadata-separator"
                                                                         className="sc-4e537b1-3 lmDmEx"></div>
                                                                    <span data-testid="card-metadata-tag"
                                                                          className="sc-4e537b1-2 eRsxHt">US &amp; Canada
                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                                <div data-testid="edinburgh-card">
                                                    <div data-testid="anchor-inner-wrapper">
                                                        <a href="/news/articles/c4glkedx1mxo"
                                                           data-testid="internal-link"
                                                           className="sc-2e6baa30-0 gILusN">
                                                            <div data-testid="edinburgh-article"
                                                                 className="sc-b8778340-0 kFuHJG">
                                                                <div data-testid="card-media-wrapper"
                                                                     className="sc-b8778340-1 jvzsLx">
                                                                    <div data-testid="card-media"
                                                                         className="sc-b8778340-2 kUyIkJ">
                                                                        <div className="sc-a34861b-1 jxzoZC"><img
                                                                            sizes="96vw"
                                                                            srcSet="https://ichef.bbci.co.uk/news/240/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp 1536w"
                                                                            src="https://ichef.bbci.co.uk/news/480/cpsprodpb/b57c/live/7a38f8a0-80d8-11ef-875f-61935c981968.jpg.webp"
                                                                            loading="lazy"
                                                                            alt=" A photograph of Tyre Nichols is displayed at a memorial"
                                                                            className="sc-a34861b-0 efFcac"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-testid="card-text-wrapper"
                                                                     className="sc-b8778340-3 gxEarx">
                                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                                        <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                            data-testid="card-headline"
                                                                            className="sc-4fedabc7-3 zTZri">Three
                                                                            ex-Memphis
                                                                            officers
                                                                            guilty of witness tampering in fatal
                                                                            beating</h2>
                                                                        </div>
                                                                    </div>
                                                                    <p data-testid="card-description"
                                                                       className="sc-b8778340-4 kYtujW">But all three
                                                                        were
                                                                        cleared
                                                                        of
                                                                        the most serious counts that could have resulted
                                                                        in
                                                                        life
                                                                        in
                                                                        prison for the death of Tyre Nichols.</p>
                                                                    <div className="sc-4e537b1-0 gtLVrL"><span
                                                                        data-testid="card-metadata-lastupdated"
                                                                        className="sc-4e537b1-1 dsUUMv">8 hrs ago</span>
                                                                        <div data-testid="card-metadata-separator"
                                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                                        <span data-testid="card-metadata-tag"
                                                                              className="sc-4e537b1-2 eRsxHt">US &amp; Canada</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bBjmKu">
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="/sport/football/articles/ckgvy4jqnylo"
                                                        data-testid="internal-link"
                                                        className="gILusN">
                                                        <div data-testid="chester-article"
                                                             className="sc-417019fc-0 bnGVfD">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                    <h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri">'We
                                                                        will fight' - Ten Hag still defiant but is Man
                                                                        Utd
                                                                        boss
                                                                        on
                                                                        brink?
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div className="sc-4e537b1-0 hJDQRX"><span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="sc-4e537b1-1 dsUUMv">6 hrs ago</span>
                                                                <div data-testid="card-metadata-separator"
                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                <span data-testid="card-metadata-tag"
                                                                      className="sc-4e537b1-2 eRsxHt">Man Utd</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="/sport/football/articles/cgq8lj5n44po"
                                                        data-testid="internal-link"
                                                        className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="chester-article"
                                                             className="sc-417019fc-0 bnGVfD">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                    data-testid="card-headline"
                                                                    className="sc-4fedabc7-3 zTZri">Clement laments
                                                                    Rangers
                                                                    profligacy - but are there bigger issues?</h2></div>
                                                            </div>
                                                            <div className="sc-4e537b1-0 hJDQRX"><span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="sc-4e537b1-1 dsUUMv">7 hrs ago</span>
                                                                <div data-testid="card-metadata-separator"
                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                <span data-testid="card-metadata-tag"
                                                                      className="sc-4e537b1-2 eRsxHt">Scottish Prem</span>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div data-testid="chester-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="https://www.bbc.com/sport/football/live/cgk7regkdn6t"
                                                        data-testid="external-anchor" target="_self"
                                                        className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="chester-live"
                                                             className="sc-417019fc-0 bnGVfD">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                    data-testid="card-headline"
                                                                    className="sc-4fedabc7-3 zTZri">Late
                                                                    Maguire header gives 10-man Man Utd draw in six-goal
                                                                    thriller at
                                                                    Porto</h2></div>
                                                            </div>
                                                            <div className="sc-4e537b1-0 hJDQRX"></div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div data-testid="edinburgh-card">
                                                    <div data-testid="anchor-inner-wrapper"><a
                                                        href="https://www.bbc.com/sport/football/live/cgmg2n8mwprt"
                                                        data-testid="external-anchor" target="_self"
                                                        className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="edinburgh-live"
                                                             className="sc-b8778340-0 kFuHJG">
                                                            <div data-testid="card-media-wrapper"
                                                                 className="sc-b8778340-1 jvzsLx">
                                                                <div data-testid="card-media"
                                                                     className="sc-b8778340-2 kUyIkJ">
                                                                    <div className="sc-a34861b-1 jxzoZC"><img
                                                                        sizes="96vw"
                                                                        srcSet="https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 240w,https://ichef.bbci.co.uk/ace/standard/320/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 320w,https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 480w,https://ichef.bbci.co.uk/ace/standard/640/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 640w,https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 800w,https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 1024w,https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp 1536w"
                                                                        src="https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/8b15/live/da52bad0-81c5-11ef-ad45-893aa022fcbc.jpg.webp"
                                                                        loading="lazy"
                                                                        alt="Rangers v Lyon"
                                                                        className="sc-a34861b-0 efFcac"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-testid="card-text-wrapper"
                                                                 className="sc-b8778340-3 gxEarx">
                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                    <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri">Rangers taught
                                                                        lesson by
                                                                        ruthless Lyon in Europa League</h2></div>
                                                                </div>
                                                                <p data-testid="card-description"
                                                                   className="sc-b8778340-4 kYtujW">Rangers fail to back
                                                                    up
                                                                    their
                                                                    impressive Europa League opening win against Malmo
                                                                    as
                                                                    they
                                                                    are
                                                                    undone by a lethal Lyon at Ibrox.</p>
                                                                <div className="sc-4e537b1-0 gtLVrL"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </article>
            </div>
        </Layout>
    );
};

export default Home;
