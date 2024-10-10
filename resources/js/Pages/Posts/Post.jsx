import React, {useState, useEffect, useRef} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {router} from "@inertiajs/react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import "quill/dist/quill.snow.css";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import {Link, Head} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import {ChevronLeft, EyeIcon, Loader2, UploadIcon} from "lucide-react";
import {Badge} from "@/Components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {Input} from "@/Components/ui/input";
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
import {Textarea} from "@/Components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";

import QuillEditor from "@/Components/QuillEditor";
import {Switch} from "@/Components/ui/switch.jsx";
import { getBooleanValue } from "@/Helpers/helpers";
import Editor from "@/Components/Editor.jsx";

const Post = ({categories = [], post, image}) => {
    const [quillContent, setQuillContent] = useState(post.content ?? "");
    const [isLoading, setIsLoading] = useState(false);
    const [subCategories, setSubCategories] = useState(post.subcategories || []);
    const [selectedImage, setSelectedImage] = useState(image ?? null);

    // Use a ref to access the quill instance directly
    const quillRef = useRef();

    const FormSchema = z.object({
        title: z
            .string()
            .min(1, "Title is required")
            .max(100, "Title must be 100 characters or less"),
        content: z.string().min(1, "Content is required"),
        description: z.string().min(1, "Description is required").max(180, "Description should be maximum 180 characters"),
        slug: z.string().min(1, "Slug is required"),
        category: z.string({
            required_error: "Please select a Post Category",
        }),
        status: z.string().min(1, "Status is required"),
        featured: z.boolean().optional(),
        subcategory: z.string().optional(),
    });


    const form = useForm({
        mode: "onchange",
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: post.title ?? "",
            description: post.description ?? "",
            content: post.content ?? "",
            category: post.category.name ?? "",
            status: post.status ?? "draft",
            slug: post.slug ?? "draft",
            featured: getBooleanValue(post.featured) ?? false,
            subcategory: post.subcategory?.name ?? ""
        },
    });


    const handleCategoryChange = (value) => {
        const category = categories.find(category => category.name === value)
        if (category.children && category.children.length) {
            setSubCategories(category.children);
            form.setValue("category", category.name);
        } else {
            form.setValue("category", value);
            form.setValue("subcategory", "");
            setSubCategories([]);
        }
    }

    const imageForm = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            image: post.image ?? null,
        },
    });

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
        router.patch(route("admin.posts.update", post.id), values, {
            onStart: handleFormProcessing,
            onFinish: handleFormProcessed,
            onError: (errors) => {
                setFormErrors(errors);
            },
        });
    }

    const updateImage = () => {
        const imageFile = imageForm.getValues("image");
        if (!imageFile) {
            return; // Handle case where no image is selected
        }

        const formData = new FormData();
        formData.append("image", imageFile);

        router.post(route("admin.posts.image.update", post.id), formData, {
            onStart: handleFormProcessing,
            onFinish: handleFormProcessed,
            onError: (errors) => {
                if (errors.image) {
                    imageForm.setError("image", {
                        message: errors.image,
                    });
                }
            }
        });
    }

    const setFormErrors = (errors) => {
        Object.keys(errors).forEach((key) => {
            form.setError(key, {message: errors[key]});
        });
    };

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
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={route("admin.posts")}>Posts</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>


                    <BreadcrumbItem>
                        <BreadcrumbPage>Add Post</BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            }
        >
            <Head>
                <title>Create Post</title>
                <meta head-key="description" name="description" content={post.description ?? ''}/>
                <meta head-key="robots" name="robots"
                      content="max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
            </Head>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 flex-wrap md:flex-wrap lg:flex-nowrap">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                            >
                                <Link href={route('admin.posts')}><ChevronLeft className="h-4 w-4"/></Link>
                                <Link className="sr-only" href={route('admin.posts')}><span>Back</span></Link>
                            </Button>


                            <div className="hidden items-center gap-2 md:ml-auto md:flex">

                                {
                                    post.status === "draft" ? (<>
                                        <Button variant="secondary" className="space-x-1" size="sm">
                                            <Link
                                                href={route("posts.show", [post.subcategory ? post.subcategory.name : post.category.name, post.slug])}>Preview</Link>
                                            <EyeIcon size={15}/>
                                        </Button>
                                    </>) : (
                                        <>
                                            <Button variant="secondary" className="space-x-1" size="sm">
                                                <Link
                                                    href={route("posts.show", [post.subcategory ? post.subcategory.name : post.category.name, post.slug])}>View </Link>
                                                <EyeIcon size={15}/>
                                            </Button>
                                        </>
                                    )
                                }

                                <Button variant="outline" size="sm">
                                    Discard
                                </Button>
                                <Button
                                    size="sm"
                                    type="submit"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>{" "}
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
                                            Enter Details related to post
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <FormField
                                                    control={form.control}
                                                    name="title"
                                                    render={({field}) => (
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
                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>


                                            <div className="grid gap-3">
                                                <FormField
                                                    control={form.control}
                                                    name="slug"
                                                    render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Slug
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Slug"
                                                                    type="text"
                                                                    className="w-full"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid gap-3">
                                                <FormField
                                                    control={form.control}
                                                    name="description"
                                                    render={({field}) => (
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
                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1">
                                                <FormField
                                                    control={form.control}
                                                    name="content"
                                                    render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Content
                                                            </FormLabel>
                                                            <FormControl>
                                                                <div className="">
                                                                    <Editor data={post.content} onChange={(content) => handleEditorChange(content)}/>
                                                                </div>
                                                            </FormControl>
                                                            <FormDescription>
                                                                Write your post
                                                                content here.
                                                            </FormDescription>
                                                            <FormMessage/>
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
                                                    render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Category
                                                            </FormLabel>
                                                            <Select
                                                                onValueChange={(e) => {
                                                                    handleCategoryChange(e)
                                                                }}
                                                                defaultValue={
                                                                    field.value
                                                                }
                                                            >
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue
                                                                            placeholder="Select a Post Category"/>
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
                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />

                                                {
                                                    subCategories.length ? (
                                                        <FormField
                                                            control={form.control}
                                                            name="subcategory"
                                                            render={({field}) => (
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
                                                                    >
                                                                        <FormControl>
                                                                            <SelectTrigger>
                                                                                <SelectValue
                                                                                    placeholder="Select a Post Category"/>
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
                                                                    <FormMessage/>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    ) : null
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
                                                    render={({field}) => (
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
                                                                        <SelectValue placeholder="Select status"/>
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="draft">
                                                                        Draft
                                                                    </SelectItem>
                                                                    <SelectItem value="published">
                                                                        Published
                                                                    </SelectItem>
                                                                    <SelectItem value="archived">
                                                                        Archived
                                                                    </SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card x-chunk="dashboard-07-chunk-3">
                                    <div className="flex p-5 justify-between items-center">
                                        <div className="flex flex-col max-w-[380px] space-y-2">
                                            <CardTitle>Featured Post</CardTitle>
                                            <CardDescription>
                                                Marking this post as featured will reset other posts featured.
                                            </CardDescription>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="featured"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Switch
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

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
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file =
                                                        e.target.files[0];
                                                    if (file) {
                                                        const reader =
                                                            new FileReader();
                                                        reader.onloadend =
                                                            () => {
                                                                setSelectedImage(
                                                                    reader.result
                                                                ); // Set the selected image

                                                                imageForm.setValue("image", e.target.files[0]);
                                                            };
                                                        reader.readAsDataURL(
                                                            file
                                                        );
                                                    }
                                                }}
                                                className="hidden"
                                                id="file-upload"
                                            />
                                            {!selectedImage ? (
                                                <img
                                                    alt={post.title ?? ''}
                                                    className="aspect-square w-full rounded-md object-cover"
                                                    height="300"
                                                    src="/placeholder.svg"
                                                    width="300"
                                                />
                                            ) : (
                                                <img
                                                    onClick={!isLoading ? (e) =>
                                                            document
                                                                .getElementById(
                                                                    "file-upload"
                                                                )
                                                                .click()
                                                        : undefined}
                                                    alt={post.title ?? ''}
                                                    className={`aspect-square w-full rounded-md object-cover ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                                    height="300"
                                                    src={selectedImage}
                                                    width="300"
                                                />
                                            )}
                                            <div className="grid grid-cols-1">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            {!selectedImage ? (
                                                                <Button
                                                                    type="button"
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="w-full"
                                                                    htmlFor="file-upload"
                                                                    disabled={isLoading}
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        document
                                                                            .getElementById(
                                                                                "file-upload"
                                                                            )
                                                                            .click()
                                                                    }
                                                                >
                                                                    <UploadIcon className="h-4 w-4 mr-2"/>
                                                                    Upload Image
                                                                </Button>
                                                            ) : (
                                                                <>
                                                                    <Button
                                                                        type="button"
                                                                        variant="outline"
                                                                        size="sm"
                                                                        className="w-full"
                                                                        htmlFor="file-upload"
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            document
                                                                                .getElementById(
                                                                                    "file-upload"
                                                                                )
                                                                                .click()
                                                                        }
                                                                        disabled={isLoading}
                                                                    >
                                                                        <UploadIcon className="h-4 w-4 mr-2"/>
                                                                        Change
                                                                        Image
                                                                    </Button>

                                                                    <Button className="mt-2" type="button"
                                                                            onClick={updateImage} disabled={isLoading}>
                                                                        {isLoading ? (
                                                                            <>
                                                                                <Loader2
                                                                                    className="mr-2 h-4 w-4 animate-spin"/>{" "}
                                                                                Saving
                                                                            </>
                                                                        ) : (
                                                                            <>Save Image</>
                                                                        )}
                                                                    </Button>
                                                                </>
                                                            )}
                                                        </TooltipTrigger>
                                                        <TooltipContent side="bottom">
                                                            {!selectedImage
                                                                ? "Click to upload image"
                                                                : "Click to change image"}
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
                            <Button type="submit" size="sm">Save Post</Button>
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

export default Post;
