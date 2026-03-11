import type { experience } from "../types";

export interface GroupedExperience {
  company: string;
  roles: experience[];
}

export function groupExperiencesByCompany(
  experiences: experience[]
): GroupedExperience[] {
  const grouped = new Map<string, experience[]>();

  experiences.forEach((exp) => {
    const company = exp.company || "Other";
    if (!grouped.has(company)) {
      grouped.set(company, []);
    }
    grouped.get(company)!.push(exp);
  });

  // Preserve insertion order and convert to array
  return Array.from(grouped, ([company, roles]) => ({
    company,
    roles,
  }));
}
