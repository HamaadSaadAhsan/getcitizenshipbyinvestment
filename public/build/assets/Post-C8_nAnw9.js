import{r as x,j as e,a as P,Y as J,y as D}from"./app-BO8FhFoj.js";import{A as K,B as C,a as I,b as T,c as O,T as X,d as Z,e as ee,f as se}from"./AuthenticatedLayout-1Da5z-Kp.js";import{u as E,t as V,a as re,F as ae,L as B,b as d,c,d as m,e as h,f as g,T as te,g as le,U as z}from"./textarea-DdlqU38z.js";import{z as n}from"./index-DXqQCM1T.js";import{B as i}from"./index-B7etewmp.js";import{B as ie}from"./badge-bxfsLjrW.js";import{C as j,a as p,b as f,c as L,d as b}from"./card-DRY9MYxI.js";import{I as ne}from"./input-DFEitU64.js";import{C as oe,S as A,a as U,b as R,c as H,d as v}from"./select-BzmhNWOq.js";import"./react-icons.esm-BKJgq7z7.js";import"./index-DeJwLPtz.js";import"./index-CTbn6QwJ.js";import"./createLucideIcon-C4H86EFL.js";import"./dropdown-menu-D88uwVlT.js";import"./index-CxqJiEd9.js";import"./index-B-j9Ub4A.js";import"./label-DJD5oZtq.js";import"./index-DDfrx0O-.js";const Fe=({categories:M,post:t,image:Q})=>{const[de,k]=x.useState(t.content??""),[l,y]=x.useState(!1),[u,_]=x.useState(Q??null),w=n.object({title:n.string().min(1,"Title is required").max(100,"Title must be 100 characters or less"),content:n.string().min(1,"Content is required"),description:n.string().min(1,"Description is required"),category:n.string({required_error:"Please select a Post Category"}),status:n.string().min(1,"Status is required")}),W={toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image","video"],["clean"]]},a=E({resolver:V(w),defaultValues:{title:t.title??"",description:t.description??"",content:t.content??"",category:t.category.name??"",status:t.status??"draft"}}),q=E({resolver:V(w),defaultValues:{image:t.image??null}}),{quill:o,quillRef:Y}=re({modules:W});x.useEffect(()=>{o&&(o.root.innerHTML=t.content??"",k(t.content??""),o.on("text-change",()=>{const s=o.root.innerHTML;k(s),a.setValue("content",s,{shouldValidate:!0})}))},[o]);const S=s=>{y(!0)},F=s=>{y(!1)};function $(s){D.patch(route("admin.posts.update",t.id),s,{onStart:S,onFinish:F,onError:r=>{r.title&&a.setError("title",{message:r.title}),r.description&&a.setError("description",{message:r.description}),r.content&&a.setError("content",{message:r.content}),r.category&&a.setError("category",{message:r.category}),r.status&&a.setError("status",{message:r.status})}})}const G=()=>{const s=new FormData;s.append("image",q.getValues("image")),console.log([...s.entries()].forEach(r=>console.log(r))),D.post(route("admin.posts.image.update",t.id),s,{onStart:S,onFinish:F,onError:r=>{r.image&&q.setError("image",{message:r.image})}})};return e.jsxs(K,{header:e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx(I,{asChild:!0,children:e.jsx(P,{href:route("admin.dashboard"),children:"Dashboard"})})}),e.jsx(T,{}),e.jsx(C,{children:e.jsx(I,{asChild:!0,children:e.jsx(P,{href:route("admin.posts"),children:"Posts"})})}),e.jsx(T,{}),e.jsx(C,{children:e.jsx(O,{children:"Add Post"})})]}),children:[e.jsx(J,{title:"Create Post"}),e.jsx(ae,{...a,children:e.jsx("form",{onSubmit:a.handleSubmit($),children:e.jsxs("div",{className:"mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(i,{variant:"outline",size:"icon",className:"h-7 w-7",children:[e.jsx(oe,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Back"})]}),e.jsx("h1",{className:"flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0",children:a.getValues("title")!==""?a.getValues("title"):e.jsx("span",{className:"text-gray-400",children:"Draft Post"})}),e.jsx(ie,{variant:"outline",className:"ml-auto sm:ml-0 capitalize",children:t.status??"Draft"}),e.jsxs("div",{className:"hidden items-center gap-2 md:ml-auto md:flex",children:[e.jsx(i,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(i,{size:"sm",type:"submit",disabled:l,children:l?e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"mr-2 h-4 w-4 animate-spin"})," ","Saving"]}):e.jsx(e.Fragment,{children:"Save Post"})})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8",children:[e.jsx("div",{className:"grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8",children:e.jsxs(j,{"x-chunk":"dashboard-07-chunk-0",children:[e.jsxs(p,{children:[e.jsx(f,{children:"Post Details"}),e.jsx(L,{children:a.getValues("description")??e.jsx("span",{className:"text-gray-400",children:"Draft Post"})})]}),e.jsx(b,{children:e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{className:"grid gap-3",children:e.jsx(d,{control:a.control,name:"title",render:({field:s})=>e.jsxs(c,{children:[e.jsx(m,{children:"Title"}),e.jsx(h,{children:e.jsx(ne,{placeholder:"Title",type:"text",className:"w-full",...s})}),e.jsx(g,{})]})})}),e.jsx("div",{className:"grid gap-3",children:e.jsx(d,{control:a.control,name:"description",render:({field:s})=>e.jsxs(c,{children:[e.jsx(m,{children:"Description"}),e.jsx(h,{children:e.jsx(te,{id:"description",placeholder:"Description",className:"min-h-32",...s})}),e.jsx(g,{})]})})}),e.jsx("div",{className:"grid gap-3",children:e.jsx(d,{control:a.control,name:"content",render:({field:s})=>e.jsxs(c,{children:[e.jsx(m,{children:"Content"}),e.jsx(h,{children:e.jsx("div",{className:"border rounded-md quill-shadcn",children:e.jsx("div",{ref:Y,className:"min-h-[200px]"})})}),e.jsx(le,{children:"Write your post content here."}),e.jsx(g,{})]})})})]})})]})}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 lg:gap-8",children:[e.jsxs(j,{"x-chunk":"dashboard-07-chunk-2",children:[e.jsx(p,{children:e.jsx(f,{children:"Post Category"})}),e.jsx(b,{children:e.jsx("div",{className:"grid gap-6 sm:grid-cols-3",children:e.jsx("div",{className:"grid gap-3",children:e.jsx(d,{control:a.control,name:"category",render:({field:s})=>e.jsxs(c,{children:[e.jsx(m,{children:"Category"}),e.jsxs(A,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(h,{children:e.jsx(U,{children:e.jsx(R,{placeholder:"Select a Post Category"})})}),e.jsx(H,{children:M.map(r=>e.jsx(v,{value:r.name,children:r.name},r.id))})]}),e.jsx(g,{})]})})})})})]}),e.jsxs(j,{"x-chunk":"dashboard-07-chunk-3",children:[e.jsx(p,{children:e.jsx(f,{children:"Product Status"})}),e.jsx(b,{children:e.jsx("div",{className:"grid gap-6",children:e.jsx("div",{className:"grid gap-3",children:e.jsx(d,{control:a.control,name:"status",render:({field:s})=>e.jsxs(c,{children:[e.jsx(m,{children:"Status"}),e.jsxs(A,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(h,{children:e.jsx(U,{id:"status","aria-label":"Select status",children:e.jsx(R,{placeholder:"Select status"})})}),e.jsxs(H,{children:[e.jsx(v,{value:"draft",children:"Draft"}),e.jsx(v,{value:"published",children:"Published"}),e.jsx(v,{value:"archived",children:"Archived"})]})]})]})})})})})]}),e.jsxs(j,{className:"overflow-hidden","x-chunk":"dashboard-07-chunk-4",children:[e.jsxs(p,{children:[e.jsx(f,{children:"Post Image"}),e.jsx(L,{children:"Upload featured image for this post."})]}),e.jsx(b,{children:e.jsxs("div",{className:"grid gap-2",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:s=>{const r=s.target.files[0];if(r){const N=new FileReader;N.onloadend=()=>{_(N.result),q.setValue("image",s.target.files[0])},N.readAsDataURL(r)}},className:"hidden",id:"file-upload"}),u?e.jsx("img",{onClick:l?void 0:s=>document.getElementById("file-upload").click(),alt:"Post image",className:`aspect-square w-full rounded-md object-cover ${l?"cursor-not-allowed":"cursor-pointer"}`,height:"300",src:u,width:"300"}):e.jsx("img",{alt:"Post image",className:"aspect-square w-full rounded-md object-cover",height:"300",src:"/placeholder.svg",width:"300"}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(X,{children:e.jsxs(Z,{children:[e.jsx(ee,{asChild:!0,children:u?e.jsxs(e.Fragment,{children:[e.jsxs(i,{type:"button",variant:"outline",size:"sm",className:"w-full",htmlFor:"file-upload",onClick:s=>document.getElementById("file-upload").click(),disabled:l,children:[e.jsx(z,{className:"h-4 w-4 mr-2"}),"Change Image"]}),e.jsx(i,{className:"mt-2",type:"button",onClick:G,disabled:l,children:l?e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"mr-2 h-4 w-4 animate-spin"})," ","Saving"]}):e.jsx(e.Fragment,{children:"Save Image"})})]}):e.jsxs(i,{type:"button",variant:"outline",size:"sm",className:"w-full",htmlFor:"file-upload",disabled:l,onClick:s=>document.getElementById("file-upload").click(),children:[e.jsx(z,{className:"h-4 w-4 mr-2"}),"Upload Image"]})}),e.jsx(se,{side:"bottom",children:u?"Click to change image":"Click to upload image"})]})})})]})})]})]})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 md:hidden",children:[e.jsx(i,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(i,{size:"sm",children:"Save Product"})]})]})})}),e.jsx("style",{jsx:!0,global:!0,children:`
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
            `})]})};export{Fe as default};
