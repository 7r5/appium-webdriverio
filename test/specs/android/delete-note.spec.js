const DeleteNoteScreen = require("../../screenobjects/android/delete-note.screen");

describe('Delete note', () => {
    it('Excercise delete note', async () => {
        await DeleteNoteScreen.SkipTutorial();
        const noteTitleText = 'Note title test'
        await DeleteNoteScreen.CreateNote(noteTitleText, 'Body of note title test');
        
        await driver.back();
        const createdNote = await $('//android.widget.TextView[@text="'+noteTitleText+'"]');
        createdNote.click();
        await driver.pause(1000);

        const moreButton = await $('~More');
        moreButton.click();
        await driver.pause(1000);

        const deleteButton = await $('//*[@text="Delete"]');
        deleteButton.click();
        await driver.pause(1000);

        await driver.acceptAlert();
        await driver.pause(1000);

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/logo_image"]')).toBeDisplayed();
        await expect($('//android.widget.TextView[@text="'+noteTitleText+'"]')).not.toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();
        await expect($('//android.widget.TextView[@text="'+noteTitleText+'"]')).toBeDisplayed();

    });
});