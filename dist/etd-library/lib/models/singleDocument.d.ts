export interface SingleDocument {
    id?: number;
    title?: string;
    author?: string;
    url?: string;
    degreeId?: number;
    type?: number;
    views?: number;
    tags?: string[];
    abstract?: string;
    advisors?: string[];
    downloads?: number;
    subject?: string;
    matNumber?: string;
    departmentId?: number;
    graduationYear?: number;
    submissionYear?: number;
    createdAt?: string;
    updatedAt?: string;
    collegeId?: number;
}
