import{j as e}from"./app-BO8FhFoj.js";import{B as t}from"./index-B7etewmp.js";import{S as i,a as o,b as r,c as l,d as c,C as d}from"./select-BzmhNWOq.js";import{c as n}from"./createLucideIcon-C4H86EFL.js";import"./react-icons.esm-BKJgq7z7.js";import"./index-CxqJiEd9.js";import"./index-DDfrx0O-.js";import"./index-CTbn6QwJ.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=n("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=n("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);function w({table:s}){return e.jsxs("div",{className:"flex items-center justify-between px-2",children:[e.jsxs("div",{className:"flex-1 text-sm text-muted-foreground",children:[s.getFilteredSelectedRowModel().rows.length," of"," ",s.getFilteredRowModel().rows.length," row(s) selected."]}),e.jsxs("div",{className:"flex items-center space-x-6 lg:space-x-8",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Rows per page"}),e.jsxs(i,{value:`${s.getState().pagination.pageSize}`,onValueChange:a=>{s.setPageSize(Number(a))},children:[e.jsx(o,{className:"h-8 w-[70px]",children:e.jsx(r,{placeholder:s.getState().pagination.pageSize})}),e.jsx(l,{side:"top",children:[10,20,30,40,50].map(a=>e.jsx(c,{value:`${a}`,children:a},a))})]})]}),e.jsxs("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",s.getState().pagination.pageIndex+1," of"," ",s.getPageCount()]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs(t,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>s.setPageIndex(0),disabled:!s.getCanPreviousPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to first page"}),e.jsx(x,{className:"h-4 w-4"})]}),e.jsxs(t,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>s.previousPage(),disabled:!s.getCanPreviousPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to previous page"}),e.jsx(d,{className:"h-4 w-4"})]}),e.jsxs(t,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>s.nextPage(),disabled:!s.getCanNextPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to next page"}),e.jsx(m,{className:"h-4 w-4"})]}),e.jsxs(t,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>s.setPageIndex(s.getPageCount()-1),disabled:!s.getCanNextPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to last page"}),e.jsx(h,{className:"h-4 w-4"})]})]})]})]})}export{w as DataTablePagination};
