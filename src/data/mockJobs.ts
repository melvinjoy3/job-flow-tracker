export type JobStatus = "Applied" | "Interview" | "Offer" | "Rejected";

export type JobApplication = {
  id: number;
  company: string;
  role: string;
  location: string;
  status: JobStatus;
  salary?: string;
  date: string;
  priority: "High" | "Medium" | "Low";
  notes: string;
};

const mockJobs: JobApplication[] = [
  {
    id: 1,
    company: "Stripe",
    role: "Frontend Engineer",
    location: "Remote",
    status: "Interview",
    salary: "$170k",
    date: "2026-11-12",
    priority: "High",
    notes: "Final round with engineering manager next Tuesday.",
  },
  {
    id: 2,
    company: "Notion",
    role: "Product Designer",
    location: "New York, NY",
    status: "Applied",
    salary: "$150k",
    date: "2026-11-07",
    priority: "Medium",
    notes: "Applied through referral. Need to send portfolio links.",
  },
  {
    id: 3,
    company: "Linear",
    role: "Full Stack Engineer",
    location: "San Francisco, CA",
    status: "Offer",
    salary: "$195k",
    date: "2026-11-15",
    priority: "High",
    notes: "Negotiating start date and equity package.",
  },
  {
    id: 4,
    company: "Dropbox",
    role: "Software Engineer",
    location: "Remote",
    status: "Rejected",
    salary: "$180k",
    date: "2026-11-04",
    priority: "Low",
    notes: "No feedback provided. Keep practicing system design.",
  },
  {
    id: 5,
    company: "Figma",
    role: "Product Engineer",
    location: "Remote",
    status: "Interview",
    salary: "$185k",
    date: "2026-11-10",
    priority: "High",
    notes: "Recruiter screen passed. Prepare for product architecture case.",
  },
  {
    id: 6,
    company: "Vercel",
    role: "Senior Frontend Engineer",
    location: "Remote",
    status: "Applied",
    salary: "$200k",
    date: "2026-11-16",
    priority: "High",
    notes: "Need to tailor resume to developer experience and edge platform work.",
  },
];

export default mockJobs;
