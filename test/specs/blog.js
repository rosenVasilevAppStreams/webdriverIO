import BlogPage from '../pages/blog-page';

describe('Blog',  () => {
    it('Get the list of all recent posts', async () => {

        await BlogPage.open();

        //get the recent post list elements
        const recentPostLists = await BlogPage.listRecentPosts; //this returns 5 elements

        //loop thru the list and assert  the text lenght is greater than 10
        for(const item of recentPostLists){

            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
                }
        //assert the total list length is 5
        await expect(recentPostLists).toHaveLength(5);

    })
})