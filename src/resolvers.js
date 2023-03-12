const resolvers = {
    Query: {
        async article(_, { id }, { prisma }) {
            return prisma.getArticle(id);
        },
        async articles(_, { offset, limit, tagId }, { prisma }) {
            return prisma.getArticles(offset, limit, tagId);
        },
    },
};
export default resolvers;
