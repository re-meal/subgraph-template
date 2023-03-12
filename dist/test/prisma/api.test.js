"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("../../prisma/singleton");
const api_1 = require("../../prisma/api");
describe("Article", () => {
    const date = new Date();
    const articleInput = {
        preview: "탄수화물이 적고 단백질이 풍부한 음식들키토제닉 식단은 혈당이 잘 조절되지 않는 사람에게 좋지 않다./사진=게티이미지뱅크 적지 않은 유명인들이 키토제닉 식단으로 다이어트 효과를 봤다고 소개하면서, 키토제닉 식단에 관심을 가지기 시작한 사람이 많다. 키토제닉 식단이란 지방 섭취를 늘리고 탄수화물 섭취는 줄여 '케토시스(ketosis)'를 유도하는 식단으로, '저탄고지 식단'이라고도 불린다. 케토시스는 포도당 대신 지방산 대사의 부산물인 '케톤체'를 주 에너지원으로 사용하는 상태를 말한다. 키토제닉 다이어트는 오래 전 소아 간질 환자의 발작을 감소시킬 목적으로 선택된 식이 방법이다. 시간이 지나면서 체중 감량에 효과가 있다는 보고가 나와 주목을 받았으나, 상황에 따라 오히려 해로울 수 있다. 키토제닉 식단은 혈당 조절이 안 되는 사람에게 효과적이지 않다. 키토제닉 식단이 당뇨를 장기적으로 예방할 수 있다는 효과성이 입증된 연구는 없다. 오히려 갑자기 탄수화물 섭취를 줄이면 저혈당이 초래돼 문제가 될 수 있다. 또한, 영양 불균형으로 호르몬 불균형까지 심화시킬 수 있다. 심혈관질환이 있는 사람도 주의해야 한다. 탄수화물을 대체해서 지방을 과도하게 섭취하면 인체는 '호르몬 민감성 지방세포 분해효소가 활성화된다. 이 효소는 몸에 지방이 많이 들어오게 되면 이를 중재하기 위해 지방을 혈액으로 유입하는 역할을 한다. 혈액에 지방이 유입되면 혈액의 중성지방과 콜레스테롤 수치가 높아진다. 그뿐 아니라 콜레스테롤 흡수를 막는 역할을 하는 식이섬유는 대체로 탄수화물에 많이 포함되어 있는데, 탄수화물 섭취량이 줄면 콜레스테롤 수치가 감소하기 어렵다.\n" +
            '한편, 대한내분비학회, 대한당뇨병학회, 대한비만학회, 한국영양학회, 한국지질동맥경화학회 5개 학회는 지난 2016년 ‘저탄수화물 고지방 식사 열풍에 대한 공동 입장’을 통해 "탄수화물, 지방, 단백질의 균형이 잘 잡힌 식단으로 적정 칼로리를 유지하는 것이 비만, 당뇨병 및 심혈관질환의 예방과 관리에 필수적이며, 열량 섭취를 줄이고 활동량 늘리기를 꾸준하게 실천해야 비만과 다양한 질환을 예방할 수 있다"고 발표한 바 있다.',
        author: 1,
        contents: "탄수화물이 적고 단백질이 풍부한 음식들키토제닉 식단은 혈당이 잘 조절되지 않는 사람에게 좋지 않다./사진=게티이미지뱅크 적지 않은 유명인들이 키토제닉 식단으로 다이어트 효과를 봤다고 소개하면서, 키토제닉 식단에 관심을 가지기 시작한 사람이 많다. 키토제닉 식단이란 지방 섭취를 늘리고 탄수화물 섭취는 줄여 '케토시스(ketosis)'를 유도하는 식단으로, '저탄고지 식단'이라고도 불린다. 케토시스는 포도당 대신 지방산 대사의 부산물인 '케톤체'를 주 에너지원으로 사용하는 상태를 말한다. 키토제닉 다이어트는 오래 전 소아 간질 환자의 발작을 감소시킬 목적으로 선택된 식이 방법이다. 시간이 지나면서 체중 감량에 효과가 있다는 보고가 나와 주목을 받았으나, 상황에 따라 오히려 해로울 수 있다. 키토제닉 식단은 혈당 조절이 안 되는 사람에게 효과적이지 않다. 키토제닉 식단이 당뇨를 장기적으로 예방할 수 있다는 효과성이 입증된 연구는 없다. 오히려 갑자기 탄수화물 섭취를 줄이면 저혈당이 초래돼 문제가 될 수 있다. 또한, 영양 불균형으로 호르몬 불균형까지 심화시킬 수 있다. 심혈관질환이 있는 사람도 주의해야 한다. 탄수화물을 대체해서 지방을 과도하게 섭취하면 인체는 '호르몬 민감성 지방세포 분해효소가 활성화된다. 이 효소는 몸에 지방이 많이 들어오게 되면 이를 중재하기 위해 지방을 혈액으로 유입하는 역할을 한다. 혈액에 지방이 유입되면 혈액의 중성지방과 콜레스테롤 수치가 높아진다. 그뿐 아니라 콜레스테롤 흡수를 막는 역할을 하는 식이섬유는 대체로 탄수화물에 많이 포함되어 있는데, 탄수화물 섭취량이 줄면 콜레스테롤 수치가 감소하기 어렵다.\n" +
            '한편, 대한내분비학회, 대한당뇨병학회, 대한비만학회, 한국영양학회, 한국지질동맥경화학회 5개 학회는 지난 2016년 ‘저탄수화물 고지방 식사 열풍에 대한 공동 입장’을 통해 "탄수화물, 지방, 단백질의 균형이 잘 잡힌 식단으로 적정 칼로리를 유지하는 것이 비만, 당뇨병 및 심혈관질환의 예방과 관리에 필수적이며, 열량 섭취를 줄이고 활동량 늘리기를 꾸준하게 실천해야 비만과 다양한 질환을 예방할 수 있다"고 발표한 바 있다.',
        tags: {
            create: [
                {
                    name: "키토제닉 다이어트",
                    id: 1,
                },
            ],
        },
        thumbnail: "https://images.unsplash.com/photo-1604480132738-bc508cb80a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        title: "키토제닉 다이어트란?",
        writtenAt: date,
    };
    const newArticle = {
        ...articleInput,
        id: 1,
        tags: [
            {
                name: "키토제닉 다이어트",
                id: 1,
            },
        ],
        writtenAt: date,
    };
    it("새로운 Article 생성", async () => {
        singleton_1.prismaMock.article.create
            .mockResolvedValueOnce(newArticle)
            .mockResolvedValueOnce({ ...newArticle, title: "none" });
        await expect((0, api_1.createArticle)(articleInput)).resolves.toEqual(newArticle);
        await expect((0, api_1.createArticle)(articleInput)).resolves.not.toEqual(newArticle);
    });
    it("Article id로 가져오기", async () => {
        singleton_1.prismaMock.article.findUnique
            .mockResolvedValueOnce(newArticle)
            .mockResolvedValueOnce({ ...newArticle, title: "test" });
        await expect((0, api_1.getArticle)(1)).resolves.toEqual(newArticle);
        await expect((0, api_1.getArticle)(1)).resolves.not.toEqual(newArticle);
    });
    it("Article 여러개 가져오기", async () => {
        const articles = [
            newArticle,
            {
                ...newArticle,
                tags: [
                    {
                        id: 2,
                        name: "tag2",
                    },
                ],
            },
        ];
        singleton_1.prismaMock.article.findMany.mockResolvedValueOnce(articles);
        singleton_1.prismaMock.article.findMany.mockResolvedValueOnce(articles);
        singleton_1.prismaMock.article.findMany.mockResolvedValueOnce([articles[1]]);
        await expect((0, api_1.getArticles)()).resolves.toHaveLength(2);
        await expect((0, api_1.getArticles)()).resolves.not.toHaveLength(1);
        await expect((0, api_1.getArticles)(0, 10, [2])).resolves.toHaveLength(1);
    });
});
//# sourceMappingURL=api.test.js.map