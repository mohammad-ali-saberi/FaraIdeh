'use server';

import { prisma } from '@/lib/prisma';
import { TeamMemberType } from '@/types/TeamMemberType';
import type { TeamMember } from '@prisma/client';

export async function getTeamMembers(): Promise<TeamMemberType[]> {
  const rows: TeamMember[] = await prisma.teamMember.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return rows.map((m) => ({
    id: m.id,
    fullName: `${m.firstName} ${m.lastName}`,
    photo: m.photo,
    jobTitles: Array.isArray(m.jobTitles) ? (m.jobTitles as string[]) : [],
    githubLink: m.githubLink ?? null,
    linkedinLink: m.linkedinLink ?? null,
    instagramLink: m.instagramLink ?? null,
    resumeFile: m.resumeFile,
  }));
}
