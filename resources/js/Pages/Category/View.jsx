import {Head} from "@inertiajs/react";
import React from "react";

import Layout from "@/Layouts/Layout.jsx"

const View = ({categories, category}) => {
    return (
        <Layout categories={categories}>
            <Head title={category.title}/>

        </Layout>
    )
}

export default View;
