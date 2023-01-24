const DeleteNoteScreen = require("../../screenobjects/android/delete-note.screen");

describe('Add notes', () => {
    it('Skip tutorial', async () => {
        await DeleteNoteScreen.SkipTutorial();
    });
    it('Add a text note using + button', async () => {
        await DeleteNoteScreen.CreateNote('Note title test', 'Body of note title test');
    });
});