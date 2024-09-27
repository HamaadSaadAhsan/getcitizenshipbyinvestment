import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CircleCheckIcon,
    CircleIcon,
    CircleXIcon
  } from "lucide-react"

  export const labels = [
    {
      value: "news",
      label: "News",
    },
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "documentation",
      label: "Documentation",
    },
  ]

  export const statuses = [
    {
      value: "draft",
      label: "Draft",
      icon: CircleIcon,
    },

    {
      value: "active",
      label: "Published",
      icon: CircleCheckIcon,
    },
    {
      value: "archived",
      label: "Archived",
      icon: CircleXIcon,
    },
  ]

  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
    },
  ]
