import{j as e}from"./app-BO8FhFoj.js";import{B as l}from"./index-B7etewmp.js";import{I as a}from"./input-DFEitU64.js";import{DataTableViewOptions as n}from"./data-table-view-options-CFHLcb0w.js";import{statuses as p,priorities as c}from"./data-Bi4-R4s4.js";import{D as r}from"./data-table-faceted-filter-BTxS2Xzz.js";import{c as u}from"./createLucideIcon-C4H86EFL.js";import"./dropdown-menu-D88uwVlT.js";import"./react-icons.esm-BKJgq7z7.js";import"./index-CxqJiEd9.js";import"./index-DeJwLPtz.js";import"./arrow-up-DD1dY3Cf.js";import"./badge-bxfsLjrW.js";import"./index-B-j9Ub4A.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=u("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function I({table:t}){var s;const i=t.getState().columnFilters.length>0;return e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex flex-1 items-center space-x-2",children:[e.jsx(a,{placeholder:"Filter posts...",value:((s=t.getColumn("title"))==null?void 0:s.getFilterValue())??"",onChange:m=>{var o;return(o=t.getColumn("title"))==null?void 0:o.setFilterValue(m.target.value)},className:"h-8 w-[150px] lg:w-[250px]"}),t.getColumn("status")&&e.jsx(r,{column:t.getColumn("status"),title:"Status",options:p}),t.getColumn("category")&&e.jsx(r,{column:t.getColumn("category"),title:"Category",options:c}),i&&e.jsxs(l,{variant:"ghost",onClick:()=>t.resetColumnFilters(),className:"h-8 px-2 lg:px-3",children:["Reset",e.jsx(x,{className:"ml-2 h-4 w-4"})]})]}),e.jsx(n,{table:t})]})}export{I as DataTableToolbar};
