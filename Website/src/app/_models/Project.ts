import { PTag } from "./PTag";

export interface Project {
    id: number;
    name: string;
    developers: string;
    year: number;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: PTag[];
}
