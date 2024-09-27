import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Link, Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { ChevronLeft, CirclePlusIcon, UploadIcon } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
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
import { ToggleGroup, ToggleGroupItem } from "@/Components/ui/toggle-group";

const Create = ({ categories }) => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [category, setCategory] = useState(0);

    const FormSchema = z.object({
        title: z.string({
            required_error: "Title is required.",
        }),
        description: z.string({
            required_error: "Description is required.",
        }),

        category: z.string({
            required_error: "Please select a Post Category.",
        }),
    });

    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data) {}

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
                                {title ?? (
                                    <span className="text-gray-400">
                                        Draft Post
                                    </span>
                                )}
                            </h1>
                            <Badge
                                variant="outline"
                                className="ml-auto sm:ml-0"
                            >
                                Draft
                            </Badge>
                            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                <Button variant="outline" size="sm">
                                    Discard
                                </Button>
                                <Button size="sm" type="submit">Save Post</Button>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                <Card x-chunk="dashboard-07-chunk-0">
                                    <CardHeader>
                                        <CardTitle>Post Details</CardTitle>
                                        <CardDescription>
                                            {description ?? (
                                                <span className="text-gray-400">
                                                    Draft Post
                                                </span>
                                            )}
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
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card x-chunk="dashboard-07-chunk-1">
                                    <CardHeader>
                                        <CardTitle>Stock</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur
                                            adipiscing elit
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[100px]">
                                                        SKU
                                                    </TableHead>
                                                    <TableHead>Stock</TableHead>
                                                    <TableHead>Price</TableHead>
                                                    <TableHead className="w-[100px]">
                                                        Size
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-semibold">
                                                        GGPC-001
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            htmlFor="stock-1"
                                                            className="sr-only"
                                                        >
                                                            Stock
                                                        </Label>
                                                        <Input
                                                            id="stock-1"
                                                            type="number"
                                                            defaultValue="100"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            htmlFor="price-1"
                                                            className="sr-only"
                                                        >
                                                            Price
                                                        </Label>
                                                        <Input
                                                            id="price-1"
                                                            type="number"
                                                            defaultValue="99.99"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <ToggleGroup
                                                            type="single"
                                                            defaultValue="s"
                                                            variant="outline"
                                                        >
                                                            <ToggleGroupItem value="s">
                                                                S
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="m">
                                                                M
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="l">
                                                                L
                                                            </ToggleGroupItem>
                                                        </ToggleGroup>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-semibold">
                                                        GGPC-002
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            htmlFor="stock-2"
                                                            className="sr-only"
                                                        >
                                                            Stock
                                                        </Label>
                                                        <Input
                                                            id="stock-2"
                                                            type="number"
                                                            defaultValue="143"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            htmlFor="price-2"
                                                            className="sr-only"
                                                        >
                                                            Price
                                                        </Label>
                                                        <Input
                                                            id="price-2"
                                                            type="number"
                                                            defaultValue="99.99"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <ToggleGroup
                                                            type="single"
                                                            defaultValue="m"
                                                            variant="outline"
                                                        >
                                                            <ToggleGroupItem value="s">
                                                                S
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="m">
                                                                M
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="l">
                                                                L
                                                            </ToggleGroupItem>
                                                        </ToggleGroup>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-semibold">
                                                        GGPC-003
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            htmlFor="stock-3"
                                                            className="sr-only"
                                                        >
                                                            Stock
                                                        </Label>
                                                        <Input
                                                            id="stock-3"
                                                            type="number"
                                                            defaultValue="32"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            htmlFor="price-3"
                                                            className="sr-only"
                                                        >
                                                            Stock
                                                        </Label>
                                                        <Input
                                                            id="price-3"
                                                            type="number"
                                                            defaultValue="99.99"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <ToggleGroup
                                                            type="single"
                                                            defaultValue="s"
                                                            variant="outline"
                                                        >
                                                            <ToggleGroupItem value="s">
                                                                S
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="m">
                                                                M
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="l">
                                                                L
                                                            </ToggleGroupItem>
                                                        </ToggleGroup>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                    <CardFooter className="justify-center border-t p-4">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="gap-1"
                                        >
                                            <CirclePlusIcon className="h-3.5 w-3.5" />
                                            Add Variant
                                        </Button>
                                    </CardFooter>
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
                                                                onValueChange={
                                                                    field.onChange
                                                                }
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
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card x-chunk="dashboard-07-chunk-3">
                                    <CardHeader>
                                        <CardTitle>Product Status</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <Label htmlFor="status">
                                                    Status
                                                </Label>
                                                <Select>
                                                    <SelectTrigger
                                                        id="status"
                                                        aria-label="Select status"
                                                    >
                                                        <SelectValue placeholder="Select status" />
                                                    </SelectTrigger>
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
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card
                                    className="overflow-hidden"
                                    x-chunk="dashboard-07-chunk-4"
                                >
                                    <CardHeader>
                                        <CardTitle>Product Images</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur
                                            adipiscing elit
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-2">
                                            <img
                                                alt="Product image"
                                                className="aspect-square w-full rounded-md object-cover"
                                                height="300"
                                                src="/placeholder.svg"
                                                width="300"
                                            />
                                            <div className="grid grid-cols-3 gap-2">
                                                <button>
                                                    <img
                                                        alt="Product image"
                                                        className="aspect-square w-full rounded-md object-cover"
                                                        height="84"
                                                        src="/placeholder.svg"
                                                        width="84"
                                                    />
                                                </button>
                                                <button>
                                                    <img
                                                        alt="Product image"
                                                        className="aspect-square w-full rounded-md object-cover"
                                                        height="84"
                                                        src="/placeholder.svg"
                                                        width="84"
                                                    />
                                                </button>
                                                <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                                    <UploadIcon className="h-4 w-4 text-muted-foreground" />
                                                    <span className="sr-only">
                                                        Upload
                                                    </span>
                                                </button>
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
        </AuthenticatedLayout>
    );
};

export default Create;
