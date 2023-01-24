const NoteScreen = require("../../screenobjects/android/add-note.screen");

class DeleteNoteScreen {

    async SkipTutorial() {
        await NoteScreen.skipButton.click();
        await expect(NoteScreen.addButton).toBeDisplayed();
        await expect(NoteScreen.skipButton).not.toBeDisplayed();
    }
    async CreateNote(noteTitle, noteBody){
        await NoteScreen.addButton.click();
        await NoteScreen.textOptionButton.click();
        await expect(NoteScreen.editTitleText).toBeDisplayed();
        await expect(NoteScreen.editingText).toBeDisplayed();

        await NoteScreen.editTitleText.addValue(noteTitle);
        await NoteScreen.editBodyText.addValue(noteBody);

        await driver.back();
        await driver.back();
        await expect(NoteScreen.editButton).toBeDisplayed();
        await expect(NoteScreen.noteViewText).toHaveText(noteBody);
    }
}
module.exports = new DeleteNoteScreen();