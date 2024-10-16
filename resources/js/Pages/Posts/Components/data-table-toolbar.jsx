import {XIcon} from "lucide-react"

import {Button} from "@/Components/ui/button"
import {Input} from "@/Components/ui/input"
import {DataTableViewOptions} from "./data-table-view-options"

import {getPriorities, statuses} from "../data/data"
import {DataTableFacetedFilter} from "./data-table-faceted-filter"
import {useEffect, useState} from "react";

export function DataTableToolbar({table})
{
    const isFiltered = table.getState().columnFilters.length > 0
    let [priorities, setPriorities] = useState([])

    useEffect(() => {

        getPriorities()
            .then(res => {
                setPriorities(res)
            })

        return () => {
           if (!priorities.length){
               setPriorities([])
           }
        };
    }, []);


    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter posts..."
                    value={(table.getColumn("title")?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={statuses}
                    />
                )}
                {table.getColumn("category") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("category")}
                        title="Category"
                        options={priorities}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <XIcon className="ml-2 h-4 w-4"/>
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table}/>
        </div>
    )
}
