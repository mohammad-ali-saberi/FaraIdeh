'use server';

import { prisma } from '@/lib/prisma';
import { AdminTeamMember, TeamMemberType } from '@/types/TeamMemberType';
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
    resumeFile: m.resumeFile ?? null,
  }));
}

export async function getTeamMemberById(id: number): Promise<AdminTeamMember | null> {
  try {
    const member = await prisma.teamMember.findUnique({
      where: { id },
    });

    if (!member) {
      return null;
    }

    return {
      id: member.id,
      photo: member.photo,
      firstName: member.firstName,
      lastName: member.lastName,
      jobTitles: Array.isArray(member.jobTitles) ? (member.jobTitles as string[]) : [],
      githubLink: member.githubLink,
      linkedinLink: member.linkedinLink,
      instagramLink: member.instagramLink,
      resumeFile: member.resumeFile,
      createdAt: member.createdAt,
      updatedAt: member.updatedAt,
    };
  } catch (error) {
    console.error('Error fetching team member:', error);
    return null;
  }
}
