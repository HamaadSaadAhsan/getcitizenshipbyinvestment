import React, {useState, useRef, useEffect} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {boolean, z} from "zod";
import "quill/dist/quill.snow.css";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Link, Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { ChevronLeft, CirclePlusIcon, Loader2, UploadIcon } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";
import Quill from "quill";

const Delta = Quill.import('delta');
import QuillEditor from "@/Components/QuillEditor";
import {Switch} from "@/Components/ui/switch.jsx";
import Editor from "@/Components/Editor.jsx";

const Create = ({ categories }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [subCategories, setSubCategories] = useState([])

    const FormSchema = z.object({
        title: z
            .string()
            .min(1, "Title is required")
            .max(100, "Title must be 100 characters or less"),
        content: z.string().min(1, "Content is required"),
        description: z.string().min(1, "Description is required").max(180, "Description must be 180 or less characters"),
        category: z.string({
            required_error: "Please select a Post Category",
        }),
        status: z.string().min(1, "Status is required"),
        featured: z.boolean().default(false).optional(),
        subcategory: subCategories.length ? z.string({
            required_error: "Please select any subcategory"
        }) : z.string().optional(),
    });

    const form = useForm({
        mode: "onChange",
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
            description: "",
            content: "",
            category: "",
            subcategory: "",
            status: "draft",
            featured: false,
        },
    });


    const handleCategoryChange = (value) => {
        const category = categories.find(category => category.name === value)
        if (category.children && category.children.length) {
            setSubCategories(category.children);
            form.setValue("category", category.name);
        } else {
            form.setValue("category", category.name);
            form.setValue("subcategory", "")
            setSubCategories([]);
        }
    }

    const handleFormProcessing = (response) => {
        setIsLoading(true);
    };

    const handleFormProcessed = (response) => {
        setIsLoading(false);
    };

    const handleEditorChange = (content) => {
        form.setValue("content", content)
    }

    function onSubmit(values) {
        router.post(route("admin.posts.store"), values, {
            onStart: handleFormProcessing,
            onFinish: handleFormProcessed,
            onError: (errors) => {
                if (errors.title) form.setError("title", {
                    message: errors.title
                });
                if (errors.description) form.setError("description", {
                    message: errors.description
                });
                if (errors.content) form.setError("content", {
                    message: errors.content
                });
                if (errors.category) form.setError("category", {
                    message: errors.category
                });
                if (errors.status) form.setError("status", {
                    message: errors.status
                });
                if (errors.featured) form.setError("featured", {
                    message: errors.featured
                });
                if (errors.subcategory) form.setError("subcategory", {
                    message: errors.subcategory
                });
            }
        });
    }

    return (
        <AuthenticatedLayout
            header={
                <>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={route("admin.dashboard")}>
                                Dashboard
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={route("admin.posts")}>Posts</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Add Post</BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            }
        >
            <Head title="Create Post" />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Button>
                            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                              <span className="text-gray-400">
                                        Draft Post
                                    </span>
                            </h1>

                            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                <Button variant="outline" size="sm">
                                    Discard
                                </Button>
                                <Button
                                    size="sm"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                                            Saving
                                        </>
                                    ) : (
                                        <>Save Post</>
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                <Card x-chunk="dashboard-07-chunk-0">
                                    <CardHeader>
                                        <CardTitle>Post Details</CardTitle>
                                        <CardDescription>
                                            <span className="text-gray-400">
                                                    Draft Post
                                            </span>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <FormField
                                                    control={form.control}
                                                    name="title"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Title
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Title"
                                                                    type="text"
                                                                    className="w-full"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <FormField
                                                    control={form.control}
                                                    name="description"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Description
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    id="description"
                                                                    placeholder="Description"
                                                                    className="min-h-32"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1">
                                                <FormField
                                                    control={form.control}
                                                    name="content"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Content
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Editor onChange={handleEditorChange}/>
                                                            </FormControl>
                                                            <FormDescription>
                                                                Write your post
                                                                content here.
                                                            </FormDescription>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                <Card x-chunk="dashboard-07-chunk-2">
                                    <CardHeader>
                                        <CardTitle>Post Category</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6 sm:grid-cols-3">
                                            <div className="grid gap-3">
                                                <FormField
                                                    control={form.control}
                                                    name="category"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Category
                                                            </FormLabel>
                                                            <Select
                                                                onValueChange={(value) => {
                                                                    field.onChange(value)
                                                                    handleCategoryChange(value)
                                                                }}
                                                                defaultValue={
                                                                    field.value
                                                                }
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select a Post Category" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    {categories.map(
                                                                        (
                                                                            category
                                                                        ) => (
                                                                            <SelectItem
                                                                                key={
                                                                                    category.id
                                                                                }
                                                                                value={
                                                                                    category.name
                                                                                }
                                                                            >
                                                                                {
                                                                                    category.name
                                                                                }
                                                                            </SelectItem>
                                                                        )
                                                                    )}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {
                                                    subCategories.length ? (
                                                        <FormField
                                                            control={form.control}
                                                            name="subcategory"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>
                                                                        Sub Category
                                                                    </FormLabel>
                                                                    <Select
                                                                        onValueChange={
                                                                            field.onChange
                                                                        }
                                                                        defaultValue={
                                                                            field.value
                                                                        }
                                                                        required={true}
                                                                    >
                                                                        <FormControl>
                                                                            <SelectTrigger>
                                                                                <SelectValue placeholder="Select a Post Category" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent>
                                                                            {subCategories.map(
                                                                                (
                                                                                    category
                                                                                ) => (
                                                                                    <SelectItem
                                                                                        key={
                                                                                            category.id
                                                                                        }
                                                                                        value={
                                                                                            category.name
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            category.name
                                                                                        }
                                                                                    </SelectItem>
                                                                                )
                                                                            )}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    ) : ""
                                                }

                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card x-chunk="dashboard-07-chunk-3">
                                    <CardHeader>
                                        <CardTitle>Post Status</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <FormField
                                                    control={form.control}
                                                    name="status"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Status
                                                            </FormLabel>
                                                            <Select
                                                                onValueChange={
                                                                    field.onChange
                                                                }
                                                                defaultValue={
                                                                    field.value
                                                                }
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger
                                                                        id="status"
                                                                        aria-label="Select status"
                                                                    >
                                                                        <SelectValue placeholder="Select status" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="draft">
                                                                        Draft
                                                                    </SelectItem>
                                                                    <SelectItem value="published">
                                                                        Active
                                                                    </SelectItem>
                                                                    <SelectItem value="archived">
                                                                        Archived
                                                                    </SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card
                                    className="overflow-hidden"
                                    x-chunk="dashboard-07-chunk-5"
                                >
                                    <CardHeader>
                                        <CardTitle>Mark Post as Featured</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <FormField
                                                    control={form.control}
                                                    name="featured"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-row items-center justify-between">
                                                            <FormDescription>
                                                                Marking this post will display it in top first section all other posts will be un marked as featured.
                                                            </FormDescription>
                                                            <FormControl>
                                                                <Switch
                                                                    checked={field.value}
                                                                    onCheckedChange={field.onChange}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card
                                    className="overflow-hidden"
                                    x-chunk="dashboard-07-chunk-4"
                                >
                                    <CardHeader>
                                        <CardTitle>Post Image</CardTitle>
                                        <CardDescription>
                                            Upload featured image for this post.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-2">
                                            <img
                                                alt="Post image"
                                                className="aspect-square w-full rounded-md object-cover"
                                                height="300"
                                                src="/placeholder.svg"
                                                width="300"
                                            />
                                            <div className="grid grid-cols-1">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <button className="flex aspect-square w-full h-10 items-center justify-center rounded-md border border-dashed">
                                                                <UploadIcon className="h-4 w-4 text-muted-foreground" />
                                                                <span className="sr-only">
                                                                    Upload
                                                                </span>
                                                            </button>
                                                        </TooltipTrigger>
                                                        <TooltipContent side="bottom">
                                                            Click to upload
                                                            image
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 md:hidden">
                            <Button variant="outline" size="sm">
                                Discard
                            </Button>
                            <Button size="sm">Save Product</Button>
                        </div>
                    </div>
                </form>
            </Form>
            <style jsx global>{`
                .quill-shadcn .ql-toolbar.ql-snow {
                    border: none;
                    border-bottom: 1px solid hsl(var(--border));
                    padding: 0.5rem;
                }
                .quill-shadcn .ql-container.ql-snow {
                    border: none;
                }
                .quill-shadcn .ql-editor {
                    min-height: 200px;
                    font-size: 1rem;
                    line-height: 1.5;
                    padding: 1rem;
                    color: hsl(var(--foreground));
                }
                .quill-shadcn .ql-editor.ql-blank::before {
                    color: hsl(var(--muted-foreground));
                    font-style: normal;
                }
                .quill-shadcn .ql-formats button {
                    height: 28px;
                    width: 28px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    color: hsl(var(--foreground));
                }
                .quill-shadcn .ql-formats button:hover {
                    background-color: hsl(var(--accent));
                    color: hsl(var(--accent-foreground));
                }
                .quill-shadcn .ql-formats button.ql-active {
                    background-color: hsl(var(--accent));
                    color: hsl(var(--accent-foreground));
                }
                .quill-shadcn .ql-formats .ql-picker {
                    color: hsl(var(--foreground));
                }
                .quill-shadcn .ql-formats .ql-picker:hover .ql-picker-label {
                    color: hsl(var(--accent-foreground));
                }
                .quill-shadcn .ql-formats .ql-picker-options {
                    background-color: hsl(var(--background));
                    border: 1px solid hsl(var(--border));
                    border-radius: 4px;
                    padding: 0.5rem;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .quill-shadcn .ql-formats .ql-picker-item {
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                }
                .quill-shadcn .ql-formats .ql-picker-item:hover {
                    background-color: hsl(var(--accent));
                    color: hsl(var(--accent-foreground));
                }
            `}</style>
        </AuthenticatedLayout>
    );
};

export default Create;
