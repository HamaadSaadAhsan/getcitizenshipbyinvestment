import React from "react";
import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Dropdown from "./Components/Dropdown";

const Home = ({ featuredNews, topStories, categories }) => {
    return (
        <Layout categories={categories}>
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <section className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Top Story</h1>
                    <div className="bg-gray-200 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-2">
                            {featuredNews.title}
                        </h2>
                        <p className="mb-4">{featuredNews.summary}</p>
                        <Link
                            href={`/news/${featuredNews.slug}`}
                            className="text-blue-600 hover:underline"
                        >
                            Read more
                        </Link>
                    </div>
                </section>

                {/* Top Stories */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Top Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topStories.map((story) => (
                            <div
                                key={story.id}
                                className="border p-4 rounded-lg"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {story.title}
                                </h3>
                                <p className="mb-2">{story.summary}</p>
                                <Link
                                    href={`/news/${story.slug}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    Read more
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* News Categories */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">News Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map((category) => (
                            <div key={category.id}>
                                {/* Render Dropdown for categories with children */}
                                {category.children &&
                                category.children.length > 0 ? (
                                    <Dropdown category={category} />
                                ) : (
                                    <Link
                                        href={`/category/${category.slug}`}
                                        className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition duration-300"
                                    >
                                        {category.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;
