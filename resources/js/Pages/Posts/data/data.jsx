import {
    CircleCheckIcon,
    CircleIcon,
    CircleXIcon,
    NewspaperIcon,
    IdCardIcon,
    HousePlusIcon,
    CaravanIcon,
    EarthIcon
} from "lucide-react"

import axios from "axios"

const iconMap = {
    news: NewspaperIcon,
    citizenship: IdCardIcon,
    residency: HousePlusIcon,
    "digital-nomad": CaravanIcon,
    immigration: EarthIcon
};

const getIcon = (value) => iconMap[value] || CircleIcon; // Default to CircleIcon if not found

export const getPriorities = async () => {
    try {
        const res = await axios.post(route('category.list'));
        return res.data.categories.map((category) => ({
            label: category.name,
            value: category.value,
            icon: getIcon(category.value)
        }));
    } catch (error) {
        console.error('Error fetching priorities:', error);
        return [];
    }
}

export const labels = [
    { value: "news", label: "News" },
    { value: "bug", label: "Bug" },
    { value: "feature", label: "Feature" },
    { value: "documentation", label: "Documentation" },
]

export const statuses = [
    { value: "draft", label: "Draft", icon: CircleIcon },
    { value: "published", label: "Published", icon: CircleCheckIcon },
    { value: "archived", label: "Archived", icon: CircleXIcon },
]
