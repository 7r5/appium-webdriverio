describe('Sample', () =>{
    it('Sample Test', async () => {
        await driver.pause(5000);
        const appButton = await $('[content-desc=App]');
        await appButton.click();
        const activityButton = await $('[content-desc=Activity]');
        await activityButton.click();
        const HelloWorldButton = await $('[content-desc=Hello World]');
        await HelloWorldButton.click();
        const labelButton = await $('[resource-id=io.appium.android.apis:id/text]');
        await labelButton.click();
        await driver.pause(5000);

    });
    it('Excercise from Udemy course', async () => {

        // Views
        await $('~Views').click();

        // Auto Complete
        await $('~Auto Complete').click();

        // Screen Top
        await $('~1. Screen Top').click();

        const input = await $('//android.widget.EditText');
        await input.setValue('Mexico')
    
        const inputText = await input.getText()
        await expect(inputText).toEqual('Mexico')
        // best way:
        await expect(input).toHaveText('Mexico')
    });
})