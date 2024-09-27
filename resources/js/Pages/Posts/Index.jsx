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
import { Head } from "@inertiajs/react";
import PostsDataTable from "./Components/PostsDataTable";
import { columns } from "./Components/Columns.jsx"
import tasks from './data/tasks.json'; // Adjust the path as necessary

const Index = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />

            <div className="grid auto-cols-max items-start">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card className="sm:col-span-2">
                    <CardHeader className="px-7">
                        <CardTitle>Posts</CardTitle>
                        <CardDescription>
                            Recent posts from all authors.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                       <PostsDataTable columns={columns} data={tasks}/>
                    </CardContent>
                </Card>
            </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
