"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateApplication = exports.validateJob = void 0;
const zod_1 = require("zod");
const validateJob = (job) => {
    const schema = zod_1.z.object({
        title: zod_1.z.string().nonempty(),
        description: zod_1.z.string().nonempty(),
        requirements: zod_1.z.array(zod_1.z.string()).nonempty(),
    });
    return schema.safeParse(job);
};
exports.validateJob = validateJob;
const validateApplication = (application) => {
    const schema = zod_1.z.object({
        job: zod_1.z.string().nonempty(),
        applicant: zod_1.z.string().nonempty(),
        portfolio: zod_1.z.array(zod_1.z.string()).optional(),
    });
    return schema.safeParse(application);
};
exports.validateApplication = validateApplication;
