import { faker } from '@faker-js/faker';

export function generateFakeData(sum) {
    const fakeData = [];
    for (let i = 1; i <= sum; i++) {
        fakeData.push({
            id: i,
            title: faker.lorem.words(2), // 生成两个随机词作为标题
            imgUrl: faker.image.imageUrl(), // 生成随机图片URL
        });
    }
    return fakeData;
}
