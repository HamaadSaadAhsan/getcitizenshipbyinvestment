import{j as e}from"./app-BO8FhFoj.js";import{c as o,B as c}from"./index-B7etewmp.js";import{D as m,a as l,b as h,d as r,e as p}from"./dropdown-menu-D88uwVlT.js";import{A as n,a as i}from"./arrow-up-DD1dY3Cf.js";import{c as d}from"./createLucideIcon-C4H86EFL.js";import"./react-icons.esm-BKJgq7z7.js";import"./index-CxqJiEd9.js";import"./index-DeJwLPtz.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=d("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=d("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);function M({column:s,title:t,className:a}){return s.getCanSort()?e.jsx("div",{className:o("flex items-center space-x-2",a),children:e.jsxs(m,{children:[e.jsx(l,{asChild:!0,children:e.jsxs(c,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[e.jsx("span",{children:t}),s.getIsSorted()==="desc"?e.jsx(n,{className:"ml-2 h-4 w-4"}):s.getIsSorted()==="asc"?e.jsx(i,{className:"ml-2 h-4 w-4"}):e.jsx(x,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{align:"start",children:[e.jsxs(r,{onClick:()=>s.toggleSorting(!1),children:[e.jsx(i,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),e.jsxs(r,{onClick:()=>s.toggleSorting(!0),children:[e.jsx(n,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),e.jsx(p,{}),e.jsxs(r,{onClick:()=>s.toggleVisibility(!1),children:[e.jsx(g,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Hide"]})]})]})}):e.jsx("div",{className:o(a),children:t})}export{M as DataTableColumnHeader};
