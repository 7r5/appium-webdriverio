describe('Native features from android', () => {
    it('Access an activity directly', async () => {
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.app.AlertDialogSamples');
        await driver.pause(3000);
        await expect($("//*[@text='App/Alert Dialogs']")).toExist();

        // I got '500: socket hang up' multiple times, I just restart the AppiumInspector app and rerun: worked
    });
    it('Working with Dialog Boxes', async () => {
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.app.AlertDialogSamples');
        $('~OK Cancel dialog with a message').click();
        console.log('ALERT TEXT -->', await driver.getAlertText());
        driver.dismissAlert();
        // accept / ok
        //driver.acceptAlert();
        // click on OK
        //await $('//*[resource-id="android:id/button1"]').click();
        await driver.pause(3000);
        await expect($('//*[@resource-id="android:idid/alertTitle"]')).not.toExist();
        await driver.pause(3000);
        // Test passed
    });
    it('Vertical scrolling test', async () => {
        await $('~App').click();
        await $('~Activity').click();
        //scroll to the end (not stable)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        //scroll until text is displayed
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //await $('~Secure Surfaces').click();
        await expect($('~Secure Dialog')).toExist();
    });
    it('Horizontal scrolling test', async () => {
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.view.Gallery1');

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

        await driver.pause(3000);
        //await $('~Secure Surfaces').click();
        //await expect($('~Secure Dialog')).toExist();
    });
    it.only('DatePicker scrolling excercise', async () => {
        await driver.startActivity('io.appium.android.apis','io.appium.android.apis.view.DateWidgets1');

        await $('~change the date').click();
        await driver.pause(2000);

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await driver.pause(2000);

        await $('//android.view.View[@text="10"]').click();
        await driver.acceptAlert();
        await driver.pause(2000);
        // assert the date is the 10th day of the next month (forward swipe/scroll)
        await expect($('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')).toHaveTextContaining('2-10-2023');
    });
});