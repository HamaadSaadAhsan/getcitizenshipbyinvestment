import React from "react";
import { z } from "zod";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Head, Link } from "@inertiajs/react";
import PostsDataTable from "./Components/PostsDataTable";
import { columns } from "./Components/Columns.jsx";
import { Button } from "@/Components/ui/button";
import { PlusCircleIcon } from "lucide-react";

const Index = ({posts}) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />

            <div className="grid auto-rows-max items-start lg:col-span-12">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                    <Card className="sm:col-span-2">
                        <CardHeader className="px-7">
                            <CardTitle>
                                <div className="flex items-center">
                                    <div>Posts</div>
                                    <div className="ml-auto flex items-center gap-2">
                                        <Link href={route('admin.posts.create')}>
                                            <Button
                                                size="sm"
                                                className="h-8 gap-1"
                                            >
                                                <PlusCircleIcon className="h-3.5 w-3.5" />
                                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                    Add Post
                                                </span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardTitle>
                            <CardDescription>
                                Recent posts from all authors.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <PostsDataTable columns={columns} data={posts} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
