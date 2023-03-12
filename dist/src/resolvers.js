"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../prisma/api");
const html_to_text_1 = require("html-to-text");
const resolvers = {
    Query: {
        article(_, { id }) {
            return (0, api_1.getArticle)(id);
        },
        articles(_, { offset, limit, tagId }) {
            return (0, api_1.getArticles)(offset, limit, tagId);
        },
    },
    Mutation: {
        async writeArticle(_, { article }) {
            try {
                let preview = (0, html_to_text_1.convert)(article.contents, {});
                if (preview && preview.length > 200) {
                    preview = preview.slice(0, 200);
                }
                const newArticle = { ...article };
                newArticle.preview = preview;
                newArticle.tags = {
                    connectOrCreate: article.tags.map((t) => {
                        return {
                            where: { name: t },
                            create: { name: t },
                        };
                    }),
                };
                const createdArticle = await (0, api_1.createArticle)(newArticle);
                return {
                    code: 200,
                    message: {
                        title: "아티클 작성 완료!",
                        message: "아티클이 성공적으로 작성되었습니다. 이제 모든 사람들이 읽을 수 있어요.",
                    },
                    success: true,
                    article: createdArticle,
                };
            }
            catch (err) {
                return {
                    code: 400,
                    message: {
                        title: "아티클 작성 실패...",
                        message: "아티클을 작성하는 도중에 문제가 생겼습니다.",
                        error: err,
                    },
                    success: false,
                };
            }
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map