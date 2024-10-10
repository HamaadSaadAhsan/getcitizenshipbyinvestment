import React from "react";
import {Head} from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import "../../../css/article.css";
import NewsSlider from "./Components/NewsSlider";
import {formatDateHumanReadable, formatDateTime} from "@/Helpers/dateFormatHelper.js";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Home = ({
                  featuredNews,
                  topStories,
                  categories,
                  citizenshipPosts,
                  residencePosts,
                  digitalNomadPosts,
                  moreNews,
                  skilledImmigrationPosts,
                  businessImmigrationPosts
              }) => {
    return (
        <Layout categories={categories}>
            <Head>
                <title head-key="title">GCBI</title>
                <meta head-key="description" name="description"
                      content="Latest News and Informatic Blogs about residenct citizenship by investment. Get latest immigration relevant news."/>
                <link head-key="canonical" rel="canonical" href={route('home')}/>
                <meta head-key="og:site_name" property="og:site_name" content={route('home')}/>
            </Head>

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
                                        {citizenshipPosts.map((post) => (
                                            <div
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
                                                                                <LazyLoadImage
                                                                                    title={post.title}
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
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        data-testid="first-grid-narrow"
                                        className="sc-93223220-0 sc-e70150c3-2 jrqxhV jzPkfJ"
                                    >
                                        {citizenshipPosts.map((post) => (
                                            <div key={post.id} data-testid="dundee-card">
                                                <div data-testid="anchor-inner-wrapper">
                                                    <a
                                                        href={route('posts.show', [post.category.name, post.slug])}
                                                        data-testid="external-anchor"
                                                        target="_self"
                                                        className="sc-2e6baa30-0 gILusN"
                                                    >
                                                        <div
                                                            data-testid="dundee-live"
                                                            className="sc-1a9a6d5b-1 iYglrs"
                                                        >
                                                            {post.image && (
                                                                <div
                                                                    data-testid="card-image-wrapper"
                                                                    className="sc-1a9a6d5b-3 jsqFvT"
                                                                >
                                                                    <div
                                                                        data-testid="card-media"
                                                                        className="sc-1a9a6d5b-4 fGVWed"
                                                                    >
                                                                        <div className="sc-a34861b-1 jxzoZC">
                                                                            <LazyLoadImage
                                                                                title={post.title}
                                                                                sizes="96vw"
                                                                                srcSet={`${route('storage.images', post.image)} 240w,${route('storage.images', post.image)} 320w,${route('storage.images', post.image)} 480w,${route('storage.images', post.image)} 640w,${route('storage.images', post.image)} 800w,${route('storage.images', post.image)} 1024w,${route('storage.images', post.image)} 1536w`}
                                                                                src={`${route('storage.images', post.image)}`}
                                                                                loading="lazy"
                                                                                alt={post.title}
                                                                                className="sc-a34861b-0 efFcac"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}

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
                                                                            {post.title}
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <p
                                                                    data-testid="card-description"
                                                                    className="sc-1a9a6d5b-0 kGKNqV"
                                                                >
                                                                    {post.description}
                                                                </p>
                                                                <div className="sc-4e537b1-0 hJDQRX">
                                                                    <span
                                                                        data-testid="card-metadata-lastupdated"
                                                                        className="sc-4e537b1-1 dsUUMv"
                                                                    >
                                                                        {formatDateHumanReadable(post.created_at)}
                                                                    </span>
                                                                    <div
                                                                        data-testid="card-metadata-separator"
                                                                        className="sc-4e537b1-3 lmDmEx"
                                                                    ></div>
                                                                    <span
                                                                        data-testid="card-metadata-tag"
                                                                        className="sc-4e537b1-2 eRsxHt"
                                                                    >
                                                                        {post.user.name}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="sc-93223220-0 jrqxhV">
                                        {
                                            featuredNews ? (
                                                <div data-testid="westminster-card">
                                                    <div
                                                        data-testid="westminster-live"
                                                        className="sc-6781995d-3 fGXoHh"
                                                    >
                                                        <div data-testid="anchor-inner-wrapper">
                                                            <a
                                                                href={route('posts.show', [featuredNews.category.name, featuredNews.slug])}
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
                                                                                <LazyLoadImage
                                                                                    title={featuredNews.title}
                                                                                    sizes="96vw"
                                                                                    srcSet={`${route('storage.images', featuredNews.image)} 240w,${route('storage.images', featuredNews.image)} 320w,${route('storage.images', featuredNews.image)} 480w,${route('storage.images', featuredNews.image)} 640w,${route('storage.images', featuredNews.image)} 800w,${route('storage.images', featuredNews.image)} 1024w,${route('storage.images', featuredNews.image)} 1536w`}
                                                                                    src={route('storage.images', featuredNews.image)}
                                                                                    loading="eager"
                                                                                    alt={featuredNews.title}
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

                                                                                <h2
                                                                                    data-testid="card-headline"
                                                                                    className="sc-4fedabc7-3 eVkEgC"
                                                                                >
                                                                                    {featuredNews.title}
                                                                                </h2>
                                                                            </div>
                                                                        </div>
                                                                        <p
                                                                            data-testid="card-description"
                                                                            className="sc-6781995d-0 eZxCk"
                                                                        >
                                                                            {featuredNews.description}
                                                                        </p>
                                                                        <div className="sc-4e537b1-0 hJDQRX"></div>

                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <hr className="sc-6781995d-6 bbWpTX"></hr>
                                                    </div>
                                                </div>
                                            ) : ""
                                        }
                                    </div>
                                </div>
                                <div
                                    data-testid="second-grid"
                                    className="sc-93223220-0 sc-e70150c3-3 jPpGMu kdbokE"
                                >
                                    {
                                        topStories.map((story) => (
                                            <div key={story.id} data-testid="manchester-card">
                                                <div data-testid="anchor-inner-wrapper">
                                                    <a
                                                        href={route('posts.show', [story.category.name, story.slug])}
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
                                                                            {story.title}
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <p
                                                                    data-testid="card-description"
                                                                    className="sc-e5949eb5-0 gpCoKv"
                                                                >
                                                                    {story.description}
                                                                </p>
                                                                <div className="sc-4e537b1-0 hJDQRX">
                                                                    <span
                                                                        data-testid="card-metadata-lastupdated"
                                                                        className="sc-4e537b1-1 dsUUMv"
                                                                    >
                                                                        {formatDateHumanReadable(story.created_at)}
                                                                    </span>
                                                                    <div
                                                                        data-testid="card-metadata-separator"
                                                                        className="sc-4e537b1-3 lmDmEx"
                                                                    ></div>
                                                                    <span
                                                                        data-testid="card-metadata-tag"
                                                                        className="sc-4e537b1-2 eRsxHt"
                                                                    >
                                                                        {story.user.name}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        ))
                                    }
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
                                    {
                                        residencePosts.map((post, index) => (
                                            index === 0 ? (
                                                <div key={index}
                                                     className="td_module_flex_6 td-animation-stack td-big-grid-flex-post td-big-grid-flex-post-0 td-cpt-post h-full">
                                                    <div className="td-module-container td-category-pos-above h-full">
                                                        <div className="td-image-container h-full">
                                                            <div className="td-module-thumb h-full">
                                                                <a
                                                                    href={route('posts.show', [post.category.name, post.slug])}
                                                                    rel="bookmark"
                                                                    className="td-image-wrap h-full"
                                                                    title={post.title}
                                                                >
                                                        <span
                                                            className="entry-thumb td-thumb-css td-animation-stack-type0-2"
                                                            data-type="css_image"
                                                            data-img-url={post.image}
                                                            style={{
                                                                backgroundImage: `url(${route('storage.images', post.image)})`,
                                                            }}
                                                        ></span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="td-module-meta-info">
                                                            <a
                                                                href={route('posts.show', [post.category.name, post.slug])}
                                                                className="td-post-category"
                                                            >
                                                                {post.category.name}
                                                            </a>
                                                            <div className="tdb-module-title-wrap">
                                                                <h3 className="entry-title td-module-title">
                                                                    <a
                                                                        href={route('posts.show', [post.category.name, post.slug])}
                                                                        rel="bookmark"
                                                                        title={post.title}
                                                                    >
                                                                        {post.title}
                                                                    </a>
                                                                </h3>{" "}
                                                            </div>

                                                            <div className="td-editor-date">
                                                    <span className="td-post-author-name">
                                                        <a href={route('posts.author', post.user.name)}>
                                                            {post.user.name}
                                                        </a>{" "}
                                                        <span>-</span>{" "}
                                                    </span>{" "}
                                                                <span className="td-post-date">
                                                        <time
                                                            className="entry-date updated td-module-date"
                                                            dateTime={formatDateTime(post.created_at)}
                                                        >
                                                            {formatDateTime(post.created_at)}
                                                        </time>
                                                    </span>{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : ""
                                        ))
                                    }
                                </div>
                                <div className="right-column td_block_inner tdi_96 td-big-grid-flex">
                                    {
                                        residencePosts.map((post, index) => (
                                            index !== 0 ? (
                                                <div key={index}
                                                     className="td_module_flex_7 td-animation-stack td-big-grid-flex-post td-big-grid-flex-post-1 td-cpt-post">
                                                    <div className="td-module-container td-category-pos-above">
                                                        <div className="td-image-container">
                                                            <div className="td-module-thumb">
                                                                <a
                                                                    href={route('posts.show', [post.category.name, post.slug])}
                                                                    rel="bookmark"
                                                                    className="td-image-wrap "
                                                                    title={post.title}
                                                                >
                                                        <span
                                                            className="entry-thumb td-thumb-css td-animation-stack-type0-2"
                                                            data-type="css_image"
                                                            data-img-url={`${route('storage.images', post.image)}`}
                                                            style={{
                                                                backgroundImage: `url(${route('storage.images', post.image)})`,
                                                            }}
                                                        ></span>
                                                                </a>
                                                            </div>
                                                            {" "}
                                                        </div>

                                                        <div className="td-module-meta-info">
                                                            <a
                                                                href={route('posts.show', [post.category.name, post.slug])}
                                                                className="td-post-category"
                                                            >
                                                                {post.category.name}
                                                            </a>
                                                            <div className="tdb-module-title-wrap">
                                                                <h3 className="entry-title td-module-title">
                                                                    <a
                                                                        href={route('posts.show', [post.category.name, post.slug])}
                                                                        rel="bookmark"
                                                                        title={post.title}
                                                                    >
                                                                        {post.title}
                                                                    </a>
                                                                </h3>{" "}
                                                            </div>

                                                            <div className="td-editor-date">
                                                    <span className="td-post-author-name">
                                                        <a href={route('posts.author', post.user.name)}>
                                                            {post.user.name}
                                                        </a>
                                                        <span>-</span>
                                                    </span>
                                                                <span className="td-post-date">
                                                        <time
                                                            className="entry-date updated td-module-date"
                                                            dateTime={formatDateHumanReadable(post.created_at)}
                                                        >
                                                            {formatDateHumanReadable(post.created_at)}
                                                        </time>
                                                    </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            ) : ""
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>

                    <NewsSlider posts={moreNews}/>

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
                                    {
                                        digitalNomadPosts.map((post, index) => (
                                            index === 0 ? (
                                                <div key={index} data-testid="london-card">
                                                    <div data-testid="london-article" className="sc-f98732b0-3 ephYtw">
                                                        <div data-testid="anchor-inner-wrapper">
                                                            <a href={route('posts.show', [post.category.name, post.slug])}
                                                               data-testid="internal-link"
                                                               className="sc-2e6baa30-0 gILusN">
                                                                <div data-testid="london"
                                                                     className="sc-f98732b0-2 bNZLNs">
                                                                    <div data-testid="card-media-wrapper"
                                                                         className="sc-f98732b0-4 emSCvS">
                                                                        <div data-testid="card-media"
                                                                             className="sc-f98732b0-1 jSgXDY">
                                                                            <div className="sc-a34861b-1 jxzoZC">
                                                                                <LazyLoadImage
                                                                                    title={post.title}
                                                                                    sizes="(min-width: 768px) 50vw, 100vw"
                                                                                    srcSet={`${route('storage.images', post.image)} 240w,
                                                                                        ${route('storage.images', post.image)} 320w,
                                                                                        ${route('storage.images', post.image)} 480w,
                                                                                        ${route('storage.images', post.image)} 640w,
                                                                                        ${route('storage.images', post.image)} 800w,
                                                                                        ${route('storage.images', post.image)} 1024w,
                                                                                        ${route('storage.images', post.image)} 1536w`}
                                                                                    src={route('storage.images', post.image)}
                                                                                    loading="lazy"
                                                                                    alt={post.title}
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
                                                                                    className="sc-4fedabc7-3 dsoipF">{post.title}
                                                                                </h2>
                                                                            </div>
                                                                        </div>
                                                                        <p data-testid="card-description"
                                                                           className="sc-f98732b0-0 iQbkqW">
                                                                            {post.description}
                                                                        </p>
                                                                        <div className="sc-4e537b1-0 hJDQRX">
                                                                            <span
                                                                                data-testid="card-metadata-lastupdated"
                                                                                className="sc-4e537b1-1 dsUUMv">
                                                                                {formatDateHumanReadable(post.created_at)}
                                                                            </span>
                                                                            <div data-testid="card-metadata-separator"
                                                                                 className="sc-4e537b1-3 lmDmEx"
                                                                            >
                                                                            </div>
                                                                            <span data-testid="card-metadata-tag"
                                                                                  className="sc-4e537b1-2 eRsxHt"
                                                                            >
                                                                                {post.user.name}
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
                                            ) : ""
                                        ))
                                    }
                                </div>
                                <div className="sc-93223220-0 sc-b38350e4-4 jqlqhc hprnWz">
                                    {
                                        digitalNomadPosts[1] ? (
                                            <div key={digitalNomadPosts[1].id} data-testid="edinburgh-card">
                                                <div data-testid="anchor-inner-wrapper">
                                                    <a href={route('posts.show', [digitalNomadPosts[1].category.name, digitalNomadPosts[1].slug])}
                                                       data-testid="internal-link"
                                                       className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="edinburgh-article"
                                                             className="sc-b8778340-0 kFuHJG">
                                                            <div data-testid="card-media-wrapper"
                                                                 className="sc-b8778340-1 jvzsLx">
                                                                <div data-testid="card-media"
                                                                     className="sc-b8778340-2 kUyIkJ">
                                                                    <div className="sc-a34861b-1 jxzoZC">
                                                                        <LazyLoadImage
                                                                            title={digitalNomadPosts[1].title}
                                                                            sizes="(min-width: 768px) 33vw, 96vw"
                                                                            srcSet={`${route('storage.images', digitalNomadPosts[1].image)} 240w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 320w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 480w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 640w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 800w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 1024w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 1536w`}
                                                                            src={`${route('storage.images', digitalNomadPosts[1].image)}`}
                                                                            loading="lazy"
                                                                            alt={digitalNomadPosts[1].title}
                                                                            className="sc-a34861b-0 efFcac"/></div>
                                                                </div>
                                                            </div>
                                                            <div data-testid="card-text-wrapper"
                                                                 className="sc-b8778340-3 gxEarx">
                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                    <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri">{digitalNomadPosts[1].title}</h2>
                                                                    </div>
                                                                </div>
                                                                <p data-testid="card-description"
                                                                   className="sc-b8778340-4 kYtujW">{digitalNomadPosts[1].description}</p>
                                                                <div className="sc-4e537b1-0 gtLVrL"><span
                                                                    data-testid="card-metadata-lastupdated"
                                                                    className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(digitalNomadPosts[1].created_at)}</span>
                                                                    <div data-testid="card-metadata-separator"
                                                                         className="sc-4e537b1-3 lmDmEx"></div>
                                                                    <span data-testid="card-metadata-tag"
                                                                          className="sc-4e537b1-2 eRsxHt">{digitalNomadPosts[1].user.name}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                        ) : ""
                                    }
                                </div>
                                <div className="sc-93223220-0 biogCF">
                                    {
                                        digitalNomadPosts.map((post, index) => (
                                            index > 1 && index < 4 ? (
                                                <div key={index} data-testid="manchester-card">
                                                    <div data-testid="anchor-inner-wrapper">
                                                        <a
                                                            href={route('posts.show', [post.category.name, post.slug])}
                                                            data-testid="internal-link"
                                                            className="sc-2e6baa30-0 gILusN">
                                                            <div data-testid="manchester-article"
                                                                 className="sc-e5949eb5-1 cMUTXL">
                                                                <div data-testid="card-text-wrapper"
                                                                     className="sc-e5949eb5-2 eOoDdE">
                                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                                        <div className="sc-4fedabc7-0 kZtaAl">
                                                                            <h2
                                                                                data-testid="card-headline"
                                                                                className="sc-4fedabc7-3 zTZri">
                                                                                {post.title}
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                    <p data-testid="card-description"
                                                                       className="sc-e5949eb5-0 gpCoKv">
                                                                        {post.description}
                                                                    </p>
                                                                    <div className="sc-4e537b1-0 hJDQRX">
                                                                        <span
                                                                            data-testid="card-metadata-lastupdated"
                                                                            className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                        <div data-testid="card-metadata-separator"
                                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                                        <span data-testid="card-metadata-tag"
                                                                              className="sc-4e537b1-2 eRsxHt">
                                                                            {post.user.name}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ) : ""
                                        ))
                                    }
                                </div>
                                <div className="sc-93223220-0 sc-b38350e4-2 cmkdDu QUMNJ">
                                    <div className="sc-b38350e4-3 gugNoq">
                                        {
                                            digitalNomadPosts[1] ? (
                                                <div key={digitalNomadPosts[1].id} data-testid="edinburgh-card">
                                                    <div data-testid="anchor-inner-wrapper">
                                                        <a href={route('posts.show', [digitalNomadPosts[1].category.name, digitalNomadPosts[1].slug])}
                                                           data-testid="internal-link"
                                                           className="sc-2e6baa30-0 gILusN">
                                                            <div data-testid="edinburgh-article"
                                                                 className="sc-b8778340-0 kFuHJG">
                                                                <div data-testid="card-media-wrapper"
                                                                     className="sc-b8778340-1 jvzsLx">
                                                                    <div data-testid="card-media"
                                                                         className="sc-b8778340-2 kUyIkJ">
                                                                        <div className="sc-a34861b-1 jxzoZC">
                                                                            <LazyLoadImage
                                                                                title={digitalNomadPosts[1].title}
                                                                                sizes="(min-width: 768px) 33vw, 96vw"
                                                                                srcSet={`${route('storage.images', digitalNomadPosts[1].image)} 240w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 320w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 480w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 640w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 800w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 1024w,
                                                                        ${route('storage.images', digitalNomadPosts[1].image)} 1536w`}
                                                                                src={`${route('storage.images', digitalNomadPosts[1].image)}`}
                                                                                loading="lazy"
                                                                                alt={digitalNomadPosts[1].title}
                                                                                className="sc-a34861b-0 efFcac"/></div>
                                                                    </div>
                                                                </div>
                                                                <div data-testid="card-text-wrapper"
                                                                     className="sc-b8778340-3 gxEarx">
                                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                                        <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                            data-testid="card-headline"
                                                                            className="sc-4fedabc7-3 zTZri">{digitalNomadPosts[1].title}</h2>
                                                                        </div>
                                                                    </div>
                                                                    <p data-testid="card-description"
                                                                       className="sc-b8778340-4 kYtujW">{digitalNomadPosts[1].description}</p>
                                                                    <div className="sc-4e537b1-0 gtLVrL"><span
                                                                        data-testid="card-metadata-lastupdated"
                                                                        className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(digitalNomadPosts[1].created_at)}</span>
                                                                        <div data-testid="card-metadata-separator"
                                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                                        <span data-testid="card-metadata-tag"
                                                                              className="sc-4e537b1-2 eRsxHt">{digitalNomadPosts[1].user.name}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                            ) : ""
                                        }
                                    </div>
                                    {
                                        digitalNomadPosts.map((post, index) => (
                                            index > 3 ? (
                                                <div key={index} data-testid="edinburgh-card">
                                                    <div data-testid="anchor-inner-wrapper">
                                                        <a href={route('posts.show', [post.category.name, post.slug])}
                                                           data-testid="internal-link"
                                                           className="sc-2e6baa30-0 gILusN">
                                                            <div data-testid="edinburgh-article"
                                                                 className="sc-b8778340-0 kFuHJG">
                                                                <div data-testid="card-media-wrapper"
                                                                     className="sc-b8778340-1 jvzsLx">
                                                                    <div data-testid="card-media"
                                                                         className="sc-b8778340-2 kUyIkJ">
                                                                        <div className="sc-a34861b-1 jxzoZC">
                                                                            <LazyLoadImage
                                                                                title={post.title}
                                                                                sizes="(min-width: 768px) 33vw, 96vw"
                                                                                srcSet={`${route('storage.images', post.image)} 240w,
                                                                                ${route('storage.images', post.image)} 320w,
                                                                                ${route('storage.images', post.image)} 480w,
                                                                                ${route('storage.images', post.image)} 640w,
                                                                                ${route('storage.images', post.image)} 800w,
                                                                                ${route('storage.images', post.image)} 1024w,
                                                                                ${route('storage.images', post.image)} 1536w`}
                                                                                src={`${route('storage.images', post.image)}`}
                                                                                loading="lazy"
                                                                                alt={post.title}
                                                                                className="sc-a34861b-0 efFcac"/></div>
                                                                    </div>
                                                                </div>
                                                                <div data-testid="card-text-wrapper"
                                                                     className="sc-b8778340-3 gxEarx">
                                                                    <div className="sc-4fedabc7-1 kbvCmj">
                                                                        <div className="sc-4fedabc7-0 kZtaAl"><h2
                                                                            data-testid="card-headline"
                                                                            className="sc-4fedabc7-3 zTZri">{post.title}</h2>
                                                                        </div>
                                                                    </div>
                                                                    <p data-testid="card-description"
                                                                       className="sc-b8778340-4 kYtujW">{post.description}</p>
                                                                    <div className="sc-4e537b1-0 gtLVrL"><span
                                                                        data-testid="card-metadata-lastupdated"
                                                                        className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                        <div data-testid="card-metadata-separator"
                                                                             className="sc-4e537b1-3 lmDmEx"></div>
                                                                        <span data-testid="card-metadata-tag"
                                                                              className="sc-4e537b1-2 eRsxHt">{post.user.name}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                            ) : ""
                                        ))
                                    }
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
                                        {
                                            skilledImmigrationPosts && skilledImmigrationPosts[0] ? (
                                                <a key={skilledImmigrationPosts[0].id}
                                                   href={route('posts.show', [skilledImmigrationPosts[0].category.name, skilledImmigrationPosts[0].slug])}
                                                   data-testid="internal-link"
                                                   className="sc-2e6baa30-0 gILusN">
                                                    <div data-testid="edinburgh-article"
                                                         className="sc-b8778340-0 kFuHJG">
                                                        <div data-testid="card-media-wrapper"
                                                             className="sc-b8778340-1 jvzsLx">
                                                            <div data-testid="card-media"
                                                                 className="sc-b8778340-2 kUyIkJ">
                                                                {
                                                                    skilledImmigrationPosts[0].image ?
                                                                        <div className="sc-a34861b-1 jxzoZC">
                                                                            <LazyLoadImage
                                                                            title={skilledImmigrationPosts[0].title}
                                                                                sizes="96vw"
                                                                                srcSet={`${route('storage.images', skilledImmigrationPosts[0].image)} 240w,
                                                                             ${route('storage.images', skilledImmigrationPosts[0].image)} 320w,
                                                                             ${route('storage.images', skilledImmigrationPosts[0].image)} 480w,
                                                                             ${route('storage.images', skilledImmigrationPosts[0].image)} 640w,
                                                                             ${route('storage.images', skilledImmigrationPosts[0].image)} 800w,
                                                                             ${route('storage.images', skilledImmigrationPosts[0].image)} 1024w,
                                                                             ${route('storage.images', skilledImmigrationPosts[0].image)} 1536w`}
                                                                                           src={`${route('storage.images', skilledImmigrationPosts[0].image)}`}
                                                                                           loading="lazy"
                                                                                           alt={skilledImmigrationPosts[0].title}
                                                                                           className="sc-a34861b-0 efFcac"
                                                                            />
                                                                        </div> : ""
                                                                }
                                                            </div>
                                                        </div>
                                                        <div data-testid="card-text-wrapper"
                                                             className="sc-b8778340-3 gxEarx">
                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                    <h2
                                                                        data-testid="card-headline"
                                                                        className="sc-4fedabc7-3 zTZri"
                                                                    >
                                                                        {skilledImmigrationPosts[0].title}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <p data-testid="card-description"
                                                               className="sc-b8778340-4 kYtujW">{skilledImmigrationPosts[0].description}</p>
                                                            <div className="sc-4e537b1-0 gtLVrL"><span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(skilledImmigrationPosts[0].created_at)}</span>
                                                                <div data-testid="card-metadata-separator"
                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                <span
                                                                    data-testid="card-metadata-tag"
                                                                    className="sc-4e537b1-2 eRsxHt"
                                                                >
                                                        {skilledImmigrationPosts[0].user.name}
                                                    </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            ) : ""
                                        }
                                    </div>
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
                                        {
                                            businessImmigrationPosts && businessImmigrationPosts.length ? (
                                                businessImmigrationPosts.map((post, index) => (
                                                    index === 0 &&
                                                    <a key={post.id}
                                                       href={route('posts.show', [post.category.name, post.slug])}
                                                       data-testid="internal-link" className="sc-2e6baa30-0 gILusN">
                                                        <div data-testid="edinburgh-article"
                                                             className="sc-b8778340-0 kFuHJG">
                                                            <div data-testid="card-media-wrapper"
                                                                 className="sc-b8778340-1 jvzsLx">
                                                                <div data-testid="card-media"
                                                                     className="sc-b8778340-2 kUyIkJ">
                                                                    <div className="sc-a34861b-1 jxzoZC">
                                                                        <LazyLoadImage title={post.title} sizes="96vw"
                                                                                       srcSet={`${route('storage.images', post.image)} 240w,
                                                                             ${route('storage.images', post.image)} 320w,
                                                                             ${route('storage.images', post.image)} 480w,
                                                                             ${route('storage.images', post.image)} 640w,
                                                                             ${route('storage.images', post.image)} 800w,
                                                                             ${route('storage.images', post.image)} 1024w,
                                                                             ${route('storage.images', post.image)} 1536w`}
                                                                                       src={`${route('storage.images', post.image)}`}
                                                                                       loading="lazy"
                                                                                       alt={post.title}
                                                                                       className="sc-a34861b-0 efFcac"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-testid="card-text-wrapper"
                                                                 className="sc-b8778340-3 gxEarx">
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
                                                                <p data-testid="card-description"
                                                                   className="sc-b8778340-4 kYtujW">{post.description}</p>
                                                                <div className="sc-4e537b1-0 gtLVrL">
                                                                    <span
                                                                        data-testid="card-metadata-lastupdated"
                                                                        className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}
                                                                    </span>
                                                                    <div data-testid="card-metadata-separator"
                                                                         className="sc-4e537b1-3 lmDmEx"></div>
                                                                    <span
                                                                        data-testid="card-metadata-tag"
                                                                        className="sc-4e537b1-2 eRsxHt"
                                                                    >
                                                                        {post.user.name}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))
                                            ) : ""
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="eMVRpx">
                                <div className="ggGYNa">
                                    <div data-testid="wyoming-group-grid" className="jitrPO">
                                        <div>
                                            <div className="bBjmKu">
                                                {
                                                    skilledImmigrationPosts && skilledImmigrationPosts.map((post, index) => (
                                                        index > 0 && index < 4 ?
                                                            <div key={index} data-testid="chester-card">
                                                                <div data-testid="anchor-inner-wrapper">
                                                                    <a href={route('posts.show', [post.category.name, post.slug])}
                                                                       data-testid="internal-link"
                                                                       className="sc-2e6baa30-0 gILusN">
                                                                        <div data-testid="chester-article"
                                                                             className="sc-417019fc-0 bnGVfD">
                                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                                    <h2
                                                                                        data-testid="card-headline"
                                                                                        className="sc-4fedabc7-3 zTZri">{post.title}
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                            <div className="sc-4e537b1-0 hJDQRX"><span
                                                                                data-testid="card-metadata-lastupdated"
                                                                                className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                                <div data-testid="card-metadata-separator"
                                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                                <span data-testid="card-metadata-tag"
                                                                                      className="sc-4e537b1-2 eRsxHt">{post.user.name}</span>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div> : ""
                                                    ))
                                                }

                                                {
                                                    skilledImmigrationPosts && skilledImmigrationPosts.map((post, index) => (
                                                        index === 4 ?
                                                            <div key={index} data-testid="edinburgh-card">
                                                                <div data-testid="anchor-inner-wrapper">
                                                                    <a href={route('posts.show', [post.category.name, post.slug])}
                                                                       data-testid="internal-link"
                                                                       className="sc-2e6baa30-0 gILusN">
                                                                        <div data-testid="edinburgh-article"
                                                                             className="sc-b8778340-0 kFuHJG">
                                                                            <div data-testid="card-media-wrapper"
                                                                                 className="sc-b8778340-1 jvzsLx">
                                                                                <div data-testid="card-media"
                                                                                     className="sc-b8778340-2 kUyIkJ">
                                                                                    {
                                                                                        post.image ? <div
                                                                                            className="sc-a34861b-1 jxzoZC">
                                                                                            <LazyLoadImage
                                                                                                title={post.title}
                                                                                                sizes="96vw"
                                                                                                srcSet={`${route('storage.images', post.image)} 240w,
                                                                                            ${route('storage.images', post.image)} 320w,
                                                                                            ${route('storage.images', post.image)} 480w,
                                                                                            ${route('storage.images', post.image)} 640w,
                                                                                            ${route('storage.images', post.image)} 800w,
                                                                                            ${route('storage.images', post.image)} 1024w,
                                                                                            ${route('storage.images', post.image)} 1536w`}
                                                                                                src={`${route('storage.images', post.image)}`}
                                                                                                loading="lazy"
                                                                                                alt={post.title}
                                                                                                className="sc-a34861b-0 efFcac"/>
                                                                                        </div> : ""
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                            <div data-testid="card-text-wrapper"
                                                                                 className="sc-b8778340-3 gxEarx">
                                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                                    <div
                                                                                        className="sc-4fedabc7-0 kZtaAl">
                                                                                        <h2
                                                                                            data-testid="card-headline"
                                                                                            className="sc-4fedabc7-3 zTZri">{post.title}</h2>
                                                                                    </div>
                                                                                </div>
                                                                                <p data-testid="card-description"
                                                                                   className="sc-b8778340-4 kYtujW">{post.description}</p>
                                                                                <div
                                                                                    className="sc-4e537b1-0 gtLVrL"><span
                                                                                    data-testid="card-metadata-lastupdated"
                                                                                    className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                                    <div
                                                                                        data-testid="card-metadata-separator"
                                                                                        className="sc-4e537b1-3 lmDmEx"></div>
                                                                                    <span data-testid="card-metadata-tag"
                                                                                          className="sc-4e537b1-2 eRsxHt">{post.user.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                            </div> : ""
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bBjmKu">
                                                {
                                                    skilledImmigrationPosts && skilledImmigrationPosts.map((post, index) => (
                                                        index > 4 && index < 8 ?
                                                            <div key={index} data-testid="chester-card">
                                                                <div data-testid="anchor-inner-wrapper">
                                                                    <a href={route('posts.show', [post.category.name, post.slug])}
                                                                       data-testid="internal-link"
                                                                       className="sc-2e6baa30-0 gILusN"
                                                                    >
                                                                        <div data-testid="chester-article"
                                                                             className="sc-417019fc-0 bnGVfD">
                                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                                    <h2
                                                                                        data-testid="card-headline"
                                                                                        className="sc-4fedabc7-3 zTZri">{post.title}
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                            <div className="sc-4e537b1-0 hJDQRX"><span
                                                                                data-testid="card-metadata-lastupdated"
                                                                                className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                                <div data-testid="card-metadata-separator"
                                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                                <span data-testid="card-metadata-tag"
                                                                                      className="sc-4e537b1-2 eRsxHt">{post.user.name}</span>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                            </div> : ""
                                                    ))
                                                }

                                                {
                                                    skilledImmigrationPosts && skilledImmigrationPosts.map((post, index) => (
                                                        index === 8 ?
                                                            <div key={index} data-testid="edinburgh-card">
                                                                <div data-testid="anchor-inner-wrapper">
                                                                    <a href={route('posts.show', [post.category.name, post.slug])}
                                                                       data-testid="internal-link"
                                                                       className="sc-2e6baa30-0 gILusN">
                                                                        <div data-testid="edinburgh-article"
                                                                             className="sc-b8778340-0 kFuHJG">
                                                                            <div data-testid="card-media-wrapper"
                                                                                 className="sc-b8778340-1 jvzsLx">
                                                                                <div data-testid="card-media"
                                                                                     className="sc-b8778340-2 kUyIkJ">
                                                                                    {
                                                                                        post.image ? <div
                                                                                            className="sc-a34861b-1 jxzoZC">
                                                                                            <LazyLoadImage
                                                                                                title={post.title}
                                                                                                sizes="96vw"
                                                                                                srcSet={`${route('storage.images', post.image)} 240w,
                                                                                                ${route('storage.images', post.image)} 320w,
                                                                                                ${route('storage.images', post.image)} 480w,
                                                                                                ${route('storage.images', post.image)} 640w,
                                                                                                ${route('storage.images', post.image)} 800w,
                                                                                                ${route('storage.images', post.image)} 1024w,
                                                                                                ${route('storage.images', post.image)} 1536w`}
                                                                                                src={`${route('storage.images', post.image)}`}
                                                                                                loading="lazy"
                                                                                                alt={post.title}
                                                                                                className="sc-a34861b-0 efFcac"/>
                                                                                        </div> : ""
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                            <div data-testid="card-text-wrapper"
                                                                                 className="sc-b8778340-3 gxEarx">
                                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                                    <div
                                                                                        className="sc-4fedabc7-0 kZtaAl">
                                                                                        <h2
                                                                                            data-testid="card-headline"
                                                                                            className="sc-4fedabc7-3 zTZri">{post.title}</h2>
                                                                                    </div>
                                                                                </div>
                                                                                <p data-testid="card-description"
                                                                                   className="sc-b8778340-4 kYtujW">{post.description}</p>
                                                                                <div
                                                                                    className="sc-4e537b1-0 gtLVrL"><span
                                                                                    data-testid="card-metadata-lastupdated"
                                                                                    className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                                    <div
                                                                                        data-testid="card-metadata-separator"
                                                                                        className="sc-4e537b1-3 lmDmEx"></div>
                                                                                    <span data-testid="card-metadata-tag"
                                                                                          className="sc-4e537b1-2 eRsxHt">{post.user.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                            </div> : ""
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div data-testid="wyoming-group-grid" className="jitrPO">
                                        <div>
                                            <div className="bBjmKu">
                                                {
                                                    businessImmigrationPosts ?
                                                        businessImmigrationPosts.map((post, index) => (
                                                            index > 0 && index < 4 ?
                                                                <div key={index} data-testid="chester-card">
                                                                    <div data-testid="anchor-inner-wrapper">
                                                                        <a href={route('posts.show', [post.category.name, post.slug])}
                                                                           data-testid="internal-link"
                                                                           className="sc-2e6baa30-0 gILusN"
                                                                        >
                                                                            <div data-testid="chester-article"
                                                                                 className="sc-417019fc-0 bnGVfD">
                                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                                    <div
                                                                                        className="sc-4fedabc7-0 kZtaAl">
                                                                                        <h2
                                                                                            data-testid="card-headline"
                                                                                            className="sc-4fedabc7-3 zTZri">{post.title}
                                                                                        </h2>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="sc-4e537b1-0 hJDQRX"><span
                                                                                    data-testid="card-metadata-lastupdated"
                                                                                    className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                                    <div
                                                                                        data-testid="card-metadata-separator"
                                                                                        className="sc-4e537b1-3 lmDmEx"></div>
                                                                                    <span
                                                                                        data-testid="card-metadata-tag"
                                                                                        className="sc-4e537b1-2 eRsxHt">{post.user.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </a></div>
                                                                </div> : ""
                                                        )) : ""
                                                }

                                                {
                                                    businessImmigrationPosts && businessImmigrationPosts.map((post, index) => (
                                                        index === 4 ?
                                                            <div key={index} data-testid="edinburgh-card">
                                                                <div data-testid="anchor-inner-wrapper">
                                                                    <a href={route('posts.show', [post.category.name, post.slug])}
                                                                       data-testid="internal-link"
                                                                       className="sc-2e6baa30-0 gILusN">
                                                                        <div data-testid="edinburgh-article"
                                                                             className="sc-b8778340-0 kFuHJG">
                                                                            <div data-testid="card-media-wrapper"
                                                                                 className="sc-b8778340-1 jvzsLx">
                                                                                <div data-testid="card-media"
                                                                                     className="sc-b8778340-2 kUyIkJ">
                                                                                    <div className="sc-a34861b-1 jxzoZC">
                                                                                        <LazyLoadImage
                                                                                            title={post.title}
                                                                                            sizes="96vw"
                                                                                            srcSet={`${route('storage.images', post.image)} 240w,
                                                                                    ${route('storage.images', post.image)} 320w,
                                                                                    ${route('storage.images', post.image)} 480w,
                                                                                    ${route('storage.images', post.image)} 640w,
                                                                                    ${route('storage.images', post.image)} 800w,
                                                                                    ${route('storage.images', post.image)} 1024w,
                                                                                    ${route('storage.images', post.image)} 1536w`}
                                                                                            src={`${route('storage.images', post.image)}`}
                                                                                            loading="lazy"
                                                                                            alt={post.title}
                                                                                            className="sc-a34861b-0 efFcac"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div data-testid="card-text-wrapper"
                                                                                 className="sc-b8778340-3 gxEarx">
                                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                                    <div className="sc-4fedabc7-0 kZtaAl">
                                                                                        <h2
                                                                                            data-testid="card-headline"
                                                                                            className="sc-4fedabc7-3 zTZri">{post.title}</h2>
                                                                                    </div>
                                                                                </div>
                                                                                <p data-testid="card-description"
                                                                                   className="sc-b8778340-4 kYtujW">{post.description}</p>
                                                                                <div className="sc-4e537b1-0 gtLVrL"><span
                                                                                    data-testid="card-metadata-lastupdated"
                                                                                    className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                                    <div
                                                                                        data-testid="card-metadata-separator"
                                                                                        className="sc-4e537b1-3 lmDmEx"></div>
                                                                                    <span data-testid="card-metadata-tag"
                                                                                          className="sc-4e537b1-2 eRsxHt">{post.user.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                            </div> : ""
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bBjmKu">
                                                {
                                                    businessImmigrationPosts && businessImmigrationPosts.map((post, index) => (
                                                        index > 4 && index < 8 ?
                                                            <div key={index} data-testid="chester-card">
                                                                <div data-testid="anchor-inner-wrapper">
                                                                    <a href={route('posts.show', [post.category.name, post.slug])}
                                                                       data-testid="internal-link"
                                                                       className="sc-2e6baa30-0 gILusN"
                                                                    >
                                                                        <div data-testid="chester-article"
                                                                             className="sc-417019fc-0 bnGVfD">
                                                                            <div className="sc-4fedabc7-1 kbvCmj">
                                                                                <div className="sc-4fedabc7-0 kZtaAl">
                                                                                    <h2
                                                                                        data-testid="card-headline"
                                                                                        className="sc-4fedabc7-3 zTZri">{post.title}
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                            <div className="sc-4e537b1-0 hJDQRX"><span
                                                                                data-testid="card-metadata-lastupdated"
                                                                                className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                                <div data-testid="card-metadata-separator"
                                                                                     className="sc-4e537b1-3 lmDmEx"></div>
                                                                                <span data-testid="card-metadata-tag"
                                                                                      className="sc-4e537b1-2 eRsxHt">{post.user.name}</span>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                            </div> : ""
                                                    ))
                                                }

                                                {
                                                    businessImmigrationPosts && businessImmigrationPosts.map((post, index) => (
                                                        index === 8 ?
                                                            <div key={index} data-testid="edinburgh-card">
                                                                <div data-testid="anchor-inner-wrapper">
                                                                    <a href={route('posts.show', [post.category.name, post.slug])}
                                                                       data-testid="internal-link"
                                                                       className="sc-2e6baa30-0 gILusN">
                                                                        <div data-testid="edinburgh-article"
                                                                             className="sc-b8778340-0 kFuHJG">
                                                                            <div data-testid="card-media-wrapper"
                                                                                 className="sc-b8778340-1 jvzsLx">
                                                                                <div data-testid="card-media"
                                                                                     className="sc-b8778340-2 kUyIkJ">
                                                                                    {
                                                                                        post.image ? <div
                                                                                            className="sc-a34861b-1 jxzoZC">
                                                                                            <LazyLoadImage
                                                                                                title={post.title}
                                                                                                sizes="96vw"
                                                                                                srcSet={`${route('storage.images', post.image)} 240w,
                                                                                    ${route('storage.images', post.image)} 320w,
                                                                                    ${route('storage.images', post.image)} 480w,
                                                                                    ${route('storage.images', post.image)} 640w,
                                                                                    ${route('storage.images', post.image)} 800w,
                                                                                    ${route('storage.images', post.image)} 1024w,
                                                                                    ${route('storage.images', post.image)} 1536w`}
                                                                                                src={`${route('storage.images', post.image)}`}
                                                                                                loading="lazy"
                                                                                                alt={post.title}
                                                                                                className="sc-a34861b-0 efFcac"/>
                                                                                        </div> : ""
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                            <div data-testid="card-text-wrapper"
                                                                                 className="sc-b8778340-3 gxEarx">
                                                                                <div className="sc-4fedabc7-1 kbvCmj">
                                                                                    <div
                                                                                        className="sc-4fedabc7-0 kZtaAl">
                                                                                        <h2
                                                                                            data-testid="card-headline"
                                                                                            className="sc-4fedabc7-3 zTZri">{post.title}</h2>
                                                                                    </div>
                                                                                </div>
                                                                                <p data-testid="card-description"
                                                                                   className="sc-b8778340-4 kYtujW">{post.description}</p>
                                                                                <div
                                                                                    className="sc-4e537b1-0 gtLVrL"><span
                                                                                    data-testid="card-metadata-lastupdated"
                                                                                    className="sc-4e537b1-1 dsUUMv">{formatDateHumanReadable(post.created_at)}</span>
                                                                                    <div
                                                                                        data-testid="card-metadata-separator"
                                                                                        className="sc-4e537b1-3 lmDmEx"></div>
                                                                                    <span data-testid="card-metadata-tag"
                                                                                          className="sc-4e537b1-2 eRsxHt">{post.user.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                            </div> : ""
                                                    ))
                                                }
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
