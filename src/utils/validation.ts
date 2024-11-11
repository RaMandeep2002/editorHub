import { z } from "zod"

export const validateJob = (job: any) => {
    const schema = z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        requirements: z.array(z.string()).nonempty(),
    })
    return schema.safeParse(job);
}

export const validateApplication = (application: any) => {
    const schema = z.object({
        job: z.string().nonempty(),
        applicant: z.string().nonempty(),
        portfolio: z.array(z.string()).optional(),
    });

    return schema.safeParse(application);
}