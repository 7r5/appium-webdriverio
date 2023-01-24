class AddNoteScreen {
    get skipButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
        
    }
    get addButton(){
        return $('//*[@text="Add note"]');
    }
    get textOptionButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]');
    }
    get editTitleText(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }
    get editingText(){
        return $('//*[@text="Editing"]');
    }
    get editBodyText(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
    get noteViewText(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
    get editButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
}
module.exports = new AddNoteScreen();