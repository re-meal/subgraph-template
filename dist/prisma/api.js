"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticles = exports.getArticle = exports.createArticle = void 0;
const client_1 = __importDefault(require("./client"));
async function createArticle(article) {
    return client_1.default.article.create({
        data: article,
        include: {
            tags: true,
        },
    });
}
exports.createArticle = createArticle;
function getArticle(id) {
    return client_1.default.article.findUnique({
        where: {
            id,
        },
    });
}
exports.getArticle = getArticle;
function getArticles(offset = 0, limit = 10, tagIds = []) {
    return client_1.default.article.findMany({
        skip: offset,
        take: limit,
        include: {
            tags: true,
        },
        where: {
            tags: {
                some: {
                    id: {
                        in: tagIds,
                    },
                },
            },
        },
    });
}
exports.getArticles = getArticles;
//# sourceMappingURL=api.js.map