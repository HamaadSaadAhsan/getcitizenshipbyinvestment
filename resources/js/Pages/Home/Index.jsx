import React from "react";
import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Dropdown from "./Components/Dropdown";

const Home = ({ featuredNews, topStories, categories }) => {
    return (
        <Layout categories={categories}>
            <div className="container mx-auto px-6">
                <article className="block">
                    <section className="grid w-full bg-white my-12">
                        <div className="citizenship max-w-screen-lg w-full overflow-hidden mx-auto">
                            <div className="mb-[24px]">
                                <div className="flex flex-row justify-between items-center"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-[3fr_1fr] mx-4 mb-12 gap-4 items-start">
                            <div className="grid grid-cols-[1fr_2fr] gap-4 items-start">
                                <div className="grid md:grid gap-4">
                                    <div data-testid="edinburgh-card">
                                        <div data-testid="anchor-inner-wrapper">
                                            <a
                                                href="/news/articles/c80rkv0k4j8o"
                                                data-testid="internal-link"
                                                className="no-underline cursor-pointer text-inherit"
                                            >
                                                <div
                                                    data-testid="edinburgh-article"
                                                    className="border-b-2 border-gray-300 transition-opacity grid grid-rows-auto-auto-1fr-auto relative opacity-100"
                                                >
                                                    <div
                                                        data-testid="card-media-wrapper"
                                                        className="relative"
                                                    >
                                                        <div
                                                            data-testid="card-media"
                                                            className="h-full w-full"
                                                        >
                                                            <div className="relative line-height-0">
                                                                <img
                                                                    sizes="96vw"
                                                                    srcset="https://ichef.bbci.co.uk/news/240/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 1536w"
                                                                    src="https://ichef.bbci.co.uk/news/480/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp"
                                                                    loading="lazy"
                                                                    alt="President Volodymyr Zelensky signs ammunition while visiting the Scranton Army Ammunition Plant (SCAAP) in Scranton, Pennsylvania, USA, on 23 September 2024"
                                                                    className="w-full object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-testid="card-text-wrapper"
                                                        className="bg-white text-white gap-3 grid pt-2"
                                                    >
                                                        <div className="sc-4fedabc7-1 kbvCmj w-full">
                                                            <div className="w-full mr-0">
                                                                <h2
                                                                    data-testid="card-headline"
                                                                    className="text-[rgb(32,34,36)] font-serif font-medium text-base leading-[22px] normal-case no-underline tracking-[-0.36px]"
                                                                >
                                                                    Escalating
                                                                    Trump row
                                                                    looms over
                                                                    Zelensky's
                                                                    US visit
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <p
                                                            data-testid="card-description"
                                                            className="text-[rgb(32,34,36)] font-serif font-normal text-base leading-[18px] normal-case no-underline tracking-[-0px]"
                                                        >
                                                            Republicans accused
                                                            Zelensky of election
                                                            interference, after
                                                            he visited an arms
                                                            factory with top
                                                            Democrats.
                                                        </p>
                                                        <div className="mt-1 h-8 flex items-center gap-2">
                                                            <span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="font-sans font-normal text-xs leading-[14px] normal-case no-underline tracking-[-0.12px] text-[rgb(84,86,88)]"
                                                            >
                                                                3 hrs ago
                                                            </span>
                                                            <div
                                                                data-testid="card-metadata-separator"
                                                                className="bg-[rgb(84,86,88)] mx-[2px] h-[16px] w-[1px]"
                                                            ></div>
                                                            <span
                                                                data-testid="card-metadata-tag"
                                                                className="text-[rgb(84,86,88)] font-sans font-normal text-xs leading-[14px] normal-case no-underline tracking-[-0.12px] pointer-events-none"
                                                            >
                                                                World
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div data-testid="edinburgh-card">
                                        <div data-testid="anchor-inner-wrapper">
                                            <a
                                                href="/news/articles/c80rkv0k4j8o"
                                                data-testid="internal-link"
                                                className="no-underline cursor-pointer text-inherit"
                                            >
                                                <div
                                                    data-testid="edinburgh-article"
                                                    className="border-b-2 border-gray-300 transition-opacity grid grid-rows-auto-auto-1fr-auto relative opacity-100"
                                                >
                                                    <div
                                                        data-testid="card-media-wrapper"
                                                        className="relative"
                                                    >
                                                        <div
                                                            data-testid="card-media"
                                                            className="h-full w-full"
                                                        >
                                                            <div className="relative line-height-0">
                                                                <img
                                                                    sizes="96vw"
                                                                    srcset="https://ichef.bbci.co.uk/news/240/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 240w,https://ichef.bbci.co.uk/news/320/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 320w,https://ichef.bbci.co.uk/news/480/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 480w,https://ichef.bbci.co.uk/news/640/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 640w,https://ichef.bbci.co.uk/news/800/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 800w,https://ichef.bbci.co.uk/news/1024/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 1024w,https://ichef.bbci.co.uk/news/1536/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp 1536w"
                                                                    src="https://ichef.bbci.co.uk/news/480/cpsprodpb/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg.webp"
                                                                    loading="lazy"
                                                                    alt="President Volodymyr Zelensky signs ammunition while visiting the Scranton Army Ammunition Plant (SCAAP) in Scranton, Pennsylvania, USA, on 23 September 2024"
                                                                    className="w-full object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-testid="card-text-wrapper"
                                                        className="bg-white text-white gap-3 grid pt-2"
                                                    >
                                                        <div className="sc-4fedabc7-1 kbvCmj w-full">
                                                            <div className="w-full mr-0">
                                                                <h2
                                                                    data-testid="card-headline"
                                                                    className="text-[rgb(32,34,36)] font-serif font-medium text-base leading-[22px] normal-case no-underline tracking-[-0.36px]"
                                                                >
                                                                    Escalating
                                                                    Trump row
                                                                    looms over
                                                                    Zelensky's
                                                                    US visit
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <p
                                                            data-testid="card-description"
                                                            className="text-[rgb(32,34,36)] font-serif font-normal text-base leading-[18px] normal-case no-underline tracking-[-0px]"
                                                        >
                                                            Republicans accused
                                                            Zelensky of election
                                                            interference, after
                                                            he visited an arms
                                                            factory with top
                                                            Democrats.
                                                        </p>
                                                        <div className="mt-1 h-8 flex items-center gap-2">
                                                            <span
                                                                data-testid="card-metadata-lastupdated"
                                                                className="font-sans font-normal text-xs leading-[14px] normal-case no-underline tracking-[-0.12px] text-[rgb(84,86,88)]"
                                                            >
                                                                3 hrs ago
                                                            </span>
                                                            <div
                                                                data-testid="card-metadata-separator"
                                                                className="bg-[rgb(84,86,88)] mx-[2px] h-[16px] w-[1px]"
                                                            ></div>
                                                            <span
                                                                data-testid="card-metadata-tag"
                                                                className="text-[rgb(84,86,88)] font-sans font-normal text-xs leading-[14px] normal-case no-underline tracking-[-0.12px] pointer-events-none"
                                                            >
                                                                World
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
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
