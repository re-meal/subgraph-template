declare const resolvers: {
    Query: {
        article(_: any, { id }: {
            id: any;
        }, { prisma }: {
            prisma: any;
        }): Promise<any>;
        articles(_: any, { offset, limit, tagId }: {
            offset: any;
            limit: any;
            tagId: any;
        }, { prisma }: {
            prisma: any;
        }): Promise<any>;
    };
};
export default resolvers;
//# sourceMappingURL=resolvers.d.ts.map