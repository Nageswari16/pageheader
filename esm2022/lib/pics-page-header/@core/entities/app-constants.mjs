const CONFIGURATOR_TITLE = 'Low Code Configurator';
export class AppConstants {
    static categoryname = 'REFERRAL_ATTACHMENTS';
    static changePasswordText = 'text';
    static changePasswordPassword = 'password';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static regexPhone = '^[2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}$';
    static regexName = '^[a-zA-Z]{2,}$';
    static regexZipcode = '^[3][0-9]{4}$';
    static regexSsn = '^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$';
    static regexSsnDigits = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;
    static regexForPhone = '/^[()s-]*(d{8,12}|d{3}[)s-]*d{3}[s-]*d{4}|d{10})[()s-]*$/';
    static formatDate = 'MM/DD/YYYY';
    static camalize = '/[^a-zA-Z0-9]+(.)/g';
    static checSchemaExistQuery = '/(?<=(as|AS)s)("*[a-zA-Zs#~_]*"*)(?=,|(from|FROM))/g';
    static URLVALIDATE = '/(ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/';
    static EventURLValidate;
    static RegexUrlConstant = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    static statusComments = '/<[^>]*>/g';
    static regexEmailType2 = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$';
    static errorMessage = 'Something went wrong!';
    static accessDeniedMessage = 'Access Denied';
    static sessionExpired = 'Your session is expired.';
    static pages = [
        { page: 'admin', title: 'User Management' },
        { page: 'intake-worker', title: 'Dashboard' },
        { page: 'microstrategy', title: 'Analytics' },
        { page: 'form-builder', title: 'CONFIGURATOR_TITLE' },
        { page: 'tab-order', title: 'CONFIGURATOR_TITLE' },
        { page: 'workflow', title: 'CONFIGURATOR_TITLE' },
        { page: 'document-packetization', title: 'Document Packetization' },
        { page: 'email-template', title: 'Email Template' },
        { page: 'chat', title: 'Chat' },
        { page: 'help-desk', title: 'Help' },
        { page: 'ocr-validation', title: 'Referrals' },
        { page: 'event-scheduler', title: 'Event Scheduler' },
        { page: 'config-dashboard', title: 'Config Dashboard' },
        { page: 'config-dashboard-user', title: 'Config Dashboard User' },
        { page: 'forms', title: 'Forms ' },
        { page: 'page-design', title: 'Page Design' },
        { page: 'dashboard-design', title: 'Dashboard Design' },
        { page: 'main-notification', title: 'Notification' },
        { page: 'dynamicPages', title: '' },
        { page: 'profile', title: 'Profile' }
    ];
    static errorList = [
        'Have at least one (1) number',
        'Have at least one (1) special character',
        'Have at least one (1) upper case letter',
        'Have at least one (1) lower case letter',
        'Contain a minimum of eight (8) characters'
    ];
    static referralSource = [
        { value: 'law enforcement', label: 'Law Enforcement' },
        { value: 'citizen complaint', label: 'Citizen Complaint' }
    ];
    static generateNumber() {
        const crypto = window.crypto;
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    }
    static iconList = [
        { label: 'Apps', value: 'apps' },
        { label: 'Admin Settings', value: 'admin_panel_settings' },
        { label: 'Description', value: 'description' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Settings', value: 'settings' },
        { label: 'Library', value: 'library_books' },
        { label: 'Long Receipt', value: 'receipt_long' },
        { label: 'List', value: 'list' },
        { label: 'Layers', value: 'layers' },
        { label: 'Summarize', value: 'summarize' },
        { label: 'Featured List', value: 'featured_play_list' },
        { label: 'Contract', value: 'contract' },
        { label: 'List Add', value: 'list_alt_add' },
        { label: 'Inactive Order', value: 'inactive_order' },
        { label: 'Receipt', value: 'receipt' },
        { label: 'Dataset', value: 'dataset' },
        { label: 'Density', value: 'density_medium' },
        { label: 'Data Thresholding', value: 'data_thresholding' },
        { label: 'View Comfy', value: 'view_comfy_alt' },
        { label: 'View Compact', value: 'view_compact_alt' },
        { label: 'Rebase', value: 'rebase' },
        { label: 'Data Check', value: 'data_check' },
        { label: 'Check', value: 'check' },
        { label: 'Right Panel Close', value: 'right_panel_close' },
        { label: 'Toolbar', value: 'toolbar' },
        { label: 'User List', value: 'patient_list' },
        { label: 'Tabs', value: 'tabs' },
        { label: 'Single Tab', value: 'tab' },
        { label: 'Shelf Position', value: 'shelf_position' },
        { label: 'Call', value: 'call' },
        { label: 'Bookmark', value: 'bookmark' },
        { label: 'Map', value: 'map' },
        { label: 'Book', value: 'book' },
        { label: 'Box', value: 'box' },
        { label: 'Lock', value: 'lock' },
        { label: 'Star', value: 'star' },
        { label: 'Menu', value: 'menu' },
        { label: 'School', value: 'school' },
        { label: 'Calendar', value: 'calendar_month' },
        { label: 'Circle', value: 'circle' },
        { label: 'Home', value: 'home' },
        { label: 'Bulleted List', value: 'format_list_bulleted' },
        { label: 'Database', value: 'database' },
        { label: 'View Timeline', value: 'view_timeline' },
        { label: 'Settings Account Box', value: 'settings_account_box' },
        { label: 'Iframe', value: 'iframe' },
        { label: 'Bottom Panel Close', value: 'bottom_panel_close' },
        { label: 'Bubbles', value: 'bubbles' },
        { label: 'Task', value: 'task' },
        { label: 'Quiz', value: 'quiz' },
        { label: 'Contact Mail', value: 'contact_mail' },
        { label: 'File Copy', value: 'file_copy' },
        { label: 'Post Add', value: 'post_add' },
        { label: 'Import Contacts', value: 'import_contacts' },
        { label: 'Pending Actions', value: 'pending_actions' },
        { label: 'History Edu', value: 'history_edu' },
        { label: 'Space Dashboard', value: 'space_dashboard' },
        { label: 'Dashboard', value: 'dashboard' },
        { label: 'Table Chart', value: 'table_chart' },
        { label: 'Edit Document', value: 'edit_document' },
    ];
    static defaultVariables = [
        { name: 'User_Name' },
        { name: 'Email_Id' },
        { name: 'Referral_Id' },
        { name: 'Attachment_Details' },
    ];
    static onInput(event, fieldtype, label, required) {
        const validationConfig = [
            {
                type: 'username',
                pattern: {
                    regex: /^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ' -]*$/,
                    errormessage: 'Allowed input - Alphabetic, accented letters, apostrophe, and hyphens.',
                    errormessage2: 'First character should be Alphabetic or accented letters.'
                },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'description',
                length: { maxlength: '500', errormessage: 'Input limit - 500 characters.' }
            },
            {
                type: 'name',
                pattern: { regex: /^[a-zA-Z0-9-_ ]+$/, errormessage: 'Allowed input - Alpha numeric, hyphen, underscore and space.' },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'email',
                pattern: { regex: /^[a-zA-Z0-9_]+(?:[.+][a-zA-Z0-9_]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errormessage: 'Valid Email ID is Required' },
                length: { maxlength: '200', errormessage: 'Input limit - 200 characters.' }
            }
        ];
        const config = validationConfig.find(item => item.type === fieldtype);
        const value = event.target.value.trim();
        if (value) {
            if (config) {
                if (config.pattern) {
                    const pattern = new RegExp(config.pattern.regex);
                    if (fieldtype == 'username') {
                        const firstLetterValid = /^[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(value.charAt(0));
                        if (!firstLetterValid) {
                            return config.pattern.errormessage2;
                        }
                    }
                    const patternValid = pattern.test(value);
                    if (!patternValid) {
                        return config.pattern.errormessage;
                    }
                }
                const maxLength = parseInt(config.length.maxlength, 10);
                if (value.length > maxLength) {
                    return `${label} ${config.length.errormessage}`;
                }
            }
        }
        else {
            if (required) {
                return `${label} is Required`;
            }
        }
        /* No error */
        return null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9wYWdlLWhlYWRlci9zcmMvbGliL3BpY3MtcGFnZS1oZWFkZXIvQGNvcmUvZW50aXRpZXMvYXBwLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGtCQUFrQixHQUFHLHVCQUF1QixDQUFDO0FBQ25ELE1BQU0sT0FBTyxZQUFZO0lBQ2hCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsc0JBQXNCLENBQUM7SUFDN0MsTUFBTSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztJQUNuQyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscURBQXFELENBQUM7SUFDMUUsTUFBTSxDQUFDLFVBQVUsR0FBRyx3Q0FBd0MsQ0FBQztJQUM3RCxNQUFNLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcseURBQXlELENBQUM7SUFDNUUsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQ0FBcUMsQ0FBQztJQUM5RCxNQUFNLENBQUMsYUFBYSxHQUFHLDJEQUEyRCxDQUFDO0lBQ25GLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7SUFDeEMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLHNEQUFzRCxDQUFDO0lBQ3JGLE1BQU0sQ0FBQyxXQUFXLEdBQUcsMkVBQTJFLENBQUM7SUFDakcsTUFBTSxDQUFDLGdCQUFnQixDQUEwRDtJQUNqRixNQUFNLENBQUMsZ0JBQWdCLEdBQzVCLDZJQUE2SSxDQUFDO0lBQ3pJLE1BQU0sQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsbUNBQW1DLENBQUM7SUFDN0QsTUFBTSxDQUFDLFlBQVksR0FBRyx1QkFBdUIsQ0FBQztJQUM5QyxNQUFNLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsMEJBQTBCLENBQUM7SUFDbkQsTUFBTSxDQUFDLEtBQUssR0FBRztRQUNwQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO1FBQzdDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO1FBQzdDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUU7UUFDckQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRTtRQUNsRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFO1FBQ2pELEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRTtRQUNuRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7UUFDbkQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDL0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDcEMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtRQUM5QyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7UUFDckQsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFO1FBQ3ZELEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRTtRQUNqRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtRQUNsQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtRQUM3QyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7UUFDdkQsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtRQUNwRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNuQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtLQUN0QyxDQUFDO0lBRUssTUFBTSxDQUFDLFNBQVMsR0FBRztRQUN4Qiw4QkFBOEI7UUFDOUIseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6Qyx5Q0FBeUM7UUFDekMsMkNBQTJDO0tBQzVDLENBQUM7SUFFSyxNQUFNLENBQUMsY0FBYyxHQUFHO1FBQzdCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRTtRQUN0RCxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7S0FDM0QsQ0FBQztJQUVLLE1BQU0sQ0FBQyxjQUFjO1FBQzFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUU7UUFDMUQsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7UUFDOUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7UUFDeEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUU7UUFDNUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7UUFDaEQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDaEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDcEMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRTtRQUN2RCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtRQUN4QyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtRQUM1QyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7UUFDcEQsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDdEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDdEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtRQUM3QyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7UUFDMUQsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtRQUNoRCxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFO1FBQ3BELEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1FBQ3BDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO1FBQzVDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1FBQ2xDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtRQUMxRCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtRQUN0QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtRQUM3QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtRQUNyQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7UUFDcEQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDaEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7UUFDeEMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7UUFDOUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDaEMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7UUFDOUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDaEMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDaEMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDaEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDcEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtRQUM5QyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFO1FBQ3pELEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO1FBQ3hDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFO1FBQ2xELEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRTtRQUNoRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUU7UUFDNUQsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDdEMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDaEMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDaEMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7UUFDaEQsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7UUFDeEMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO1FBQ3RELEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRTtRQUN0RCxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtRQUM5QyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7UUFDdEQsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7UUFDMUMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7UUFDOUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUU7S0FDbkQsQ0FBQTtJQUNNLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRztRQUMvQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7UUFDckIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1FBQ3BCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtRQUN2QixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTtLQUMvQixDQUFBO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFVLEVBQUUsU0FBYyxFQUFFLEtBQVUsRUFBRSxRQUFpQjtRQUU3RSxNQUFNLGdCQUFnQixHQUFHO1lBQ3ZCO2dCQUNJLElBQUksRUFBRSxVQUFVO2dCQUNoQixPQUFPLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLDBDQUEwQztvQkFDakQsWUFBWSxFQUFFLHdFQUF3RTtvQkFDdEYsYUFBYSxFQUFFLDJEQUEyRDtpQkFDN0U7Z0JBQ0QsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7YUFDOUU7WUFDRDtnQkFDSSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7YUFDOUU7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLDhEQUE4RCxFQUFFO2dCQUNySCxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTthQUM5RTtZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxvRUFBb0UsRUFBRSxZQUFZLEVBQUUsNEJBQTRCLEVBQUU7Z0JBQ3BJLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO2FBQzlFO1NBQ0osQ0FBQztRQUVBLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUM7UUFFdEUsTUFBTSxLQUFLLEdBQUksS0FBSyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlELElBQUksS0FBSyxFQUFFO1lBRVQsSUFBSSxNQUFNLEVBQUU7Z0JBRVYsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO29CQUNsQixNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUVqRCxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7d0JBQzNCLE1BQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEUsSUFBSSxDQUFDLGdCQUFnQixFQUFFOzRCQUNyQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO3lCQUNyQztxQkFDRjtvQkFFRCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFO3dCQUNqQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO3FCQUNwQztpQkFDRjtnQkFFRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7b0JBQzVCLE9BQU8sR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDakQ7YUFDRjtTQUVGO2FBQU07WUFDTCxJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLEdBQUcsS0FBSyxjQUFjLENBQUM7YUFDL0I7U0FDRjtRQUNELGNBQWM7UUFDZCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05GSUdVUkFUT1JfVElUTEUgPSAnTG93IENvZGUgQ29uZmlndXJhdG9yJztcclxuZXhwb3J0IGNsYXNzIEFwcENvbnN0YW50cyB7XHJcbiAgcHVibGljIHN0YXRpYyBjYXRlZ29yeW5hbWUgPSAnUkVGRVJSQUxfQVRUQUNITUVOVFMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlUGFzc3dvcmRUZXh0ID0gJ3RleHQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlUGFzc3dvcmRQYXNzd29yZCA9ICdwYXNzd29yZCc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleEVtYWlsID0gJ15bMC05YS16QS1aLi1dK1tAXVswLTlhLXpBLVouLV0rWy5dWzAtOWEtekEtWl17Mix9JCc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleFBob25lID0gJ15bMi05XVswLTldezJ9LVsyLTldWzAtOV17Mn0tWzAtOV17NH0kJztcclxuICBwdWJsaWMgc3RhdGljIHJlZ2V4TmFtZSA9ICdeW2EtekEtWl17Mix9JCc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleFppcGNvZGUgPSAnXlszXVswLTldezR9JCc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleFNzbiA9ICdeKD8hNjY2fDAwMHw5XFxcXGR7Mn0pXFxcXGR7M30tKD8hMDApXFxcXGR7Mn0tKD8hMHs0fSlcXFxcZHs0fSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhTc25EaWdpdHMgPSAvXihcXGR7M30tP1xcZHsyfS0/XFxkezR9fFhYWC1YWC1YWFhYKSQvO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhGb3JQaG9uZSA9ICcvXlsoKXMtXSooZHs4LDEyfXxkezN9WylzLV0qZHszfVtzLV0qZHs0fXxkezEwfSlbKClzLV0qJC8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0RGF0ZSA9ICdNTS9ERC9ZWVlZJztcclxuICBwdWJsaWMgc3RhdGljIGNhbWFsaXplID0gJy9bXmEtekEtWjAtOV0rKC4pL2cnO1xyXG4gIHB1YmxpYyBzdGF0aWMgY2hlY1NjaGVtYUV4aXN0UXVlcnkgPSAnLyg/PD0oYXN8QVMpcykoXCIqW2EtekEtWnMjfl9dKlwiKikoPz0sfChmcm9tfEZST00pKS9nJztcclxuICBwdWJsaWMgc3RhdGljIFVSTFZBTElEQVRFID0gJy8oZnRwfGh0dHB8aHR0cHMpOi8vKHcrOnswLDF9dypAKT8oUyspKDpbMC05XSspPygvfC8oW3cjITouPys9JiVAIS0vXSkpPy8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgRXZlbnRVUkxWYWxpZGF0ZTogJyhodHRwcz86Ly8pPyhbXFxcXGRhLXouLV0rKVxcXFwuKFthLXouXXsyLDZ9KVsvXFxcXHcgLi1dKi8/JztcclxuICBwdWJsaWMgc3RhdGljIFJlZ2V4VXJsQ29uc3RhbnQgPVxyXG4gICAgJy9eKChbXjw+KClbXVxcXFwuLDs6c0BcIl0rKC5bXjw+KClbXVxcXFwuLDs6c0BcIl0rKSopfChcIi4rXCIpKUAoKFtbMC05XXsxLDN9LlswLTldezEsM30uWzAtOV17MSwzfS5bMC05XXsxLDN9XSl8KChbYS16QS1aLTAtOV0rLikrW2EtekEtWl17Mix9KSkkLyc7XHJcbiAgcHVibGljIHN0YXRpYyBzdGF0dXNDb21tZW50cyA9ICcvPFtePl0qPi9nJztcclxuICBwdWJsaWMgc3RhdGljIHJlZ2V4RW1haWxUeXBlMiA9ICdeW15cXFxcc0BdK0BbXlxcXFxzQF0rXFxcXC5bXlxcXFxzQF17Mix9JCc7XHJcbiAgcHVibGljIHN0YXRpYyBlcnJvck1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmchJztcclxuICBwdWJsaWMgc3RhdGljIGFjY2Vzc0RlbmllZE1lc3NhZ2UgPSAnQWNjZXNzIERlbmllZCc7XHJcbiAgcHVibGljIHN0YXRpYyBzZXNzaW9uRXhwaXJlZCA9ICdZb3VyIHNlc3Npb24gaXMgZXhwaXJlZC4nO1xyXG4gIHB1YmxpYyBzdGF0aWMgcGFnZXMgPSBbXHJcbiAgICB7IHBhZ2U6ICdhZG1pbicsIHRpdGxlOiAnVXNlciBNYW5hZ2VtZW50JyB9LFxyXG4gICAgeyBwYWdlOiAnaW50YWtlLXdvcmtlcicsIHRpdGxlOiAnRGFzaGJvYXJkJyB9LFxyXG4gICAgeyBwYWdlOiAnbWljcm9zdHJhdGVneScsIHRpdGxlOiAnQW5hbHl0aWNzJyB9LFxyXG4gICAgeyBwYWdlOiAnZm9ybS1idWlsZGVyJywgdGl0bGU6ICdDT05GSUdVUkFUT1JfVElUTEUnIH0sXHJcbiAgICB7IHBhZ2U6ICd0YWItb3JkZXInLCB0aXRsZTogJ0NPTkZJR1VSQVRPUl9USVRMRScgfSxcclxuICAgIHsgcGFnZTogJ3dvcmtmbG93JywgdGl0bGU6ICdDT05GSUdVUkFUT1JfVElUTEUnIH0sXHJcbiAgICB7IHBhZ2U6ICdkb2N1bWVudC1wYWNrZXRpemF0aW9uJywgdGl0bGU6ICdEb2N1bWVudCBQYWNrZXRpemF0aW9uJyB9LFxyXG4gICAgeyBwYWdlOiAnZW1haWwtdGVtcGxhdGUnLCB0aXRsZTogJ0VtYWlsIFRlbXBsYXRlJyB9LFxyXG4gICAgeyBwYWdlOiAnY2hhdCcsIHRpdGxlOiAnQ2hhdCcgfSxcclxuICAgIHsgcGFnZTogJ2hlbHAtZGVzaycsIHRpdGxlOiAnSGVscCcgfSxcclxuICAgIHsgcGFnZTogJ29jci12YWxpZGF0aW9uJywgdGl0bGU6ICdSZWZlcnJhbHMnIH0sXHJcbiAgICB7IHBhZ2U6ICdldmVudC1zY2hlZHVsZXInLCB0aXRsZTogJ0V2ZW50IFNjaGVkdWxlcicgfSxcclxuICAgIHsgcGFnZTogJ2NvbmZpZy1kYXNoYm9hcmQnLCB0aXRsZTogJ0NvbmZpZyBEYXNoYm9hcmQnIH0sXHJcbiAgICB7IHBhZ2U6ICdjb25maWctZGFzaGJvYXJkLXVzZXInLCB0aXRsZTogJ0NvbmZpZyBEYXNoYm9hcmQgVXNlcicgfSxcclxuICAgIHsgcGFnZTogJ2Zvcm1zJywgdGl0bGU6ICdGb3JtcyAnIH0sXHJcbiAgICB7IHBhZ2U6ICdwYWdlLWRlc2lnbicsIHRpdGxlOiAnUGFnZSBEZXNpZ24nIH0sXHJcbiAgICB7IHBhZ2U6ICdkYXNoYm9hcmQtZGVzaWduJywgdGl0bGU6ICdEYXNoYm9hcmQgRGVzaWduJyB9LFxyXG4gICAgeyBwYWdlOiAnbWFpbi1ub3RpZmljYXRpb24nLCB0aXRsZTogJ05vdGlmaWNhdGlvbicgfSxcclxuICAgIHsgcGFnZTogJ2R5bmFtaWNQYWdlcycsIHRpdGxlOiAnJyB9LFxyXG4gICAgeyBwYWdlOiAncHJvZmlsZScsIHRpdGxlOiAnUHJvZmlsZScgfVxyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXJyb3JMaXN0ID0gW1xyXG4gICAgJ0hhdmUgYXQgbGVhc3Qgb25lICgxKSBudW1iZXInLFxyXG4gICAgJ0hhdmUgYXQgbGVhc3Qgb25lICgxKSBzcGVjaWFsIGNoYXJhY3RlcicsXHJcbiAgICAnSGF2ZSBhdCBsZWFzdCBvbmUgKDEpIHVwcGVyIGNhc2UgbGV0dGVyJyxcclxuICAgICdIYXZlIGF0IGxlYXN0IG9uZSAoMSkgbG93ZXIgY2FzZSBsZXR0ZXInLFxyXG4gICAgJ0NvbnRhaW4gYSBtaW5pbXVtIG9mIGVpZ2h0ICg4KSBjaGFyYWN0ZXJzJ1xyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVmZXJyYWxTb3VyY2UgPSBbXHJcbiAgICB7IHZhbHVlOiAnbGF3IGVuZm9yY2VtZW50JywgbGFiZWw6ICdMYXcgRW5mb3JjZW1lbnQnIH0sXHJcbiAgICB7IHZhbHVlOiAnY2l0aXplbiBjb21wbGFpbnQnLCBsYWJlbDogJ0NpdGl6ZW4gQ29tcGxhaW50JyB9XHJcbiAgXTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZU51bWJlcigpOiBhbnkge1xyXG4gICAgY29uc3QgY3J5cHRvID0gd2luZG93LmNyeXB0bztcclxuICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQzMkFycmF5KDEpO1xyXG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnJheSk7XHJcbiAgICByZXR1cm4gYXJyYXlbMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGljb25MaXN0ID0gW1xyXG4gICAgeyBsYWJlbDogJ0FwcHMnLCB2YWx1ZTogJ2FwcHMnIH0sXHJcbiAgICB7IGxhYmVsOiAnQWRtaW4gU2V0dGluZ3MnLCB2YWx1ZTogJ2FkbWluX3BhbmVsX3NldHRpbmdzJyB9LFxyXG4gICAgeyBsYWJlbDogJ0Rlc2NyaXB0aW9uJywgdmFsdWU6ICdkZXNjcmlwdGlvbicgfSxcclxuICAgIHsgbGFiZWw6ICdBbmFseXRpY3MnLCB2YWx1ZTogJ2FuYWx5dGljcycgfSxcclxuICAgIHsgbGFiZWw6ICdTZXR0aW5ncycsIHZhbHVlOiAnc2V0dGluZ3MnIH0sXHJcbiAgICB7IGxhYmVsOiAnTGlicmFyeScsIHZhbHVlOiAnbGlicmFyeV9ib29rcycgfSxcclxuICAgIHsgbGFiZWw6ICdMb25nIFJlY2VpcHQnLCB2YWx1ZTogJ3JlY2VpcHRfbG9uZycgfSxcclxuICAgIHsgbGFiZWw6ICdMaXN0JywgdmFsdWU6ICdsaXN0JyB9LFxyXG4gICAgeyBsYWJlbDogJ0xheWVycycsIHZhbHVlOiAnbGF5ZXJzJyB9LFxyXG4gICAgeyBsYWJlbDogJ1N1bW1hcml6ZScsIHZhbHVlOiAnc3VtbWFyaXplJyB9LFxyXG4gICAgeyBsYWJlbDogJ0ZlYXR1cmVkIExpc3QnLCB2YWx1ZTogJ2ZlYXR1cmVkX3BsYXlfbGlzdCcgfSxcclxuICAgIHsgbGFiZWw6ICdDb250cmFjdCcsIHZhbHVlOiAnY29udHJhY3QnIH0sXHJcbiAgICB7IGxhYmVsOiAnTGlzdCBBZGQnLCB2YWx1ZTogJ2xpc3RfYWx0X2FkZCcgfSxcclxuICAgIHsgbGFiZWw6ICdJbmFjdGl2ZSBPcmRlcicsIHZhbHVlOiAnaW5hY3RpdmVfb3JkZXInIH0sXHJcbiAgICB7IGxhYmVsOiAnUmVjZWlwdCcsIHZhbHVlOiAncmVjZWlwdCcgfSxcclxuICAgIHsgbGFiZWw6ICdEYXRhc2V0JywgdmFsdWU6ICdkYXRhc2V0JyB9LFxyXG4gICAgeyBsYWJlbDogJ0RlbnNpdHknLCB2YWx1ZTogJ2RlbnNpdHlfbWVkaXVtJyB9LFxyXG4gICAgeyBsYWJlbDogJ0RhdGEgVGhyZXNob2xkaW5nJywgdmFsdWU6ICdkYXRhX3RocmVzaG9sZGluZycgfSxcclxuICAgIHsgbGFiZWw6ICdWaWV3IENvbWZ5JywgdmFsdWU6ICd2aWV3X2NvbWZ5X2FsdCcgfSxcclxuICAgIHsgbGFiZWw6ICdWaWV3IENvbXBhY3QnLCB2YWx1ZTogJ3ZpZXdfY29tcGFjdF9hbHQnIH0sXHJcbiAgICB7IGxhYmVsOiAnUmViYXNlJywgdmFsdWU6ICdyZWJhc2UnIH0sXHJcbiAgICB7IGxhYmVsOiAnRGF0YSBDaGVjaycsIHZhbHVlOiAnZGF0YV9jaGVjaycgfSxcclxuICAgIHsgbGFiZWw6ICdDaGVjaycsIHZhbHVlOiAnY2hlY2snIH0sXHJcbiAgICB7IGxhYmVsOiAnUmlnaHQgUGFuZWwgQ2xvc2UnLCB2YWx1ZTogJ3JpZ2h0X3BhbmVsX2Nsb3NlJyB9LFxyXG4gICAgeyBsYWJlbDogJ1Rvb2xiYXInLCB2YWx1ZTogJ3Rvb2xiYXInIH0sXHJcbiAgICB7IGxhYmVsOiAnVXNlciBMaXN0JywgdmFsdWU6ICdwYXRpZW50X2xpc3QnIH0sXHJcbiAgICB7IGxhYmVsOiAnVGFicycsIHZhbHVlOiAndGFicycgfSxcclxuICAgIHsgbGFiZWw6ICdTaW5nbGUgVGFiJywgdmFsdWU6ICd0YWInIH0sXHJcbiAgICB7IGxhYmVsOiAnU2hlbGYgUG9zaXRpb24nLCB2YWx1ZTogJ3NoZWxmX3Bvc2l0aW9uJyB9LFxyXG4gICAgeyBsYWJlbDogJ0NhbGwnLCB2YWx1ZTogJ2NhbGwnIH0sXHJcbiAgICB7IGxhYmVsOiAnQm9va21hcmsnLCB2YWx1ZTogJ2Jvb2ttYXJrJyB9LFxyXG4gICAgeyBsYWJlbDogJ01hcCcsIHZhbHVlOiAnbWFwJyB9LFxyXG4gICAgeyBsYWJlbDogJ0Jvb2snLCB2YWx1ZTogJ2Jvb2snIH0sXHJcbiAgICB7IGxhYmVsOiAnQm94JywgdmFsdWU6ICdib3gnIH0sXHJcbiAgICB7IGxhYmVsOiAnTG9jaycsIHZhbHVlOiAnbG9jaycgfSxcclxuICAgIHsgbGFiZWw6ICdTdGFyJywgdmFsdWU6ICdzdGFyJyB9LFxyXG4gICAgeyBsYWJlbDogJ01lbnUnLCB2YWx1ZTogJ21lbnUnIH0sXHJcbiAgICB7IGxhYmVsOiAnU2Nob29sJywgdmFsdWU6ICdzY2hvb2wnIH0sXHJcbiAgICB7IGxhYmVsOiAnQ2FsZW5kYXInLCB2YWx1ZTogJ2NhbGVuZGFyX21vbnRoJyB9LFxyXG4gICAgeyBsYWJlbDogJ0NpcmNsZScsIHZhbHVlOiAnY2lyY2xlJyB9LFxyXG4gICAgeyBsYWJlbDogJ0hvbWUnLCB2YWx1ZTogJ2hvbWUnIH0sXHJcbiAgICB7IGxhYmVsOiAnQnVsbGV0ZWQgTGlzdCcsIHZhbHVlOiAnZm9ybWF0X2xpc3RfYnVsbGV0ZWQnIH0sXHJcbiAgICB7IGxhYmVsOiAnRGF0YWJhc2UnLCB2YWx1ZTogJ2RhdGFiYXNlJyB9LFxyXG4gICAgeyBsYWJlbDogJ1ZpZXcgVGltZWxpbmUnLCB2YWx1ZTogJ3ZpZXdfdGltZWxpbmUnIH0sXHJcbiAgICB7IGxhYmVsOiAnU2V0dGluZ3MgQWNjb3VudCBCb3gnLCB2YWx1ZTogJ3NldHRpbmdzX2FjY291bnRfYm94JyB9LFxyXG4gICAgeyBsYWJlbDogJ0lmcmFtZScsIHZhbHVlOiAnaWZyYW1lJyB9LFxyXG4gICAgeyBsYWJlbDogJ0JvdHRvbSBQYW5lbCBDbG9zZScsIHZhbHVlOiAnYm90dG9tX3BhbmVsX2Nsb3NlJyB9LFxyXG4gICAgeyBsYWJlbDogJ0J1YmJsZXMnLCB2YWx1ZTogJ2J1YmJsZXMnIH0sXHJcbiAgICB7IGxhYmVsOiAnVGFzaycsIHZhbHVlOiAndGFzaycgfSxcclxuICAgIHsgbGFiZWw6ICdRdWl6JywgdmFsdWU6ICdxdWl6JyB9LFxyXG4gICAgeyBsYWJlbDogJ0NvbnRhY3QgTWFpbCcsIHZhbHVlOiAnY29udGFjdF9tYWlsJyB9LFxyXG4gICAgeyBsYWJlbDogJ0ZpbGUgQ29weScsIHZhbHVlOiAnZmlsZV9jb3B5JyB9LFxyXG4gICAgeyBsYWJlbDogJ1Bvc3QgQWRkJywgdmFsdWU6ICdwb3N0X2FkZCcgfSxcclxuICAgIHsgbGFiZWw6ICdJbXBvcnQgQ29udGFjdHMnLCB2YWx1ZTogJ2ltcG9ydF9jb250YWN0cycgfSxcclxuICAgIHsgbGFiZWw6ICdQZW5kaW5nIEFjdGlvbnMnLCB2YWx1ZTogJ3BlbmRpbmdfYWN0aW9ucycgfSxcclxuICAgIHsgbGFiZWw6ICdIaXN0b3J5IEVkdScsIHZhbHVlOiAnaGlzdG9yeV9lZHUnIH0sXHJcbiAgICB7IGxhYmVsOiAnU3BhY2UgRGFzaGJvYXJkJywgdmFsdWU6ICdzcGFjZV9kYXNoYm9hcmQnIH0sXHJcbiAgICB7IGxhYmVsOiAnRGFzaGJvYXJkJywgdmFsdWU6ICdkYXNoYm9hcmQnIH0sXHJcbiAgICB7IGxhYmVsOiAnVGFibGUgQ2hhcnQnLCB2YWx1ZTogJ3RhYmxlX2NoYXJ0JyB9LFxyXG4gICAgeyBsYWJlbDogJ0VkaXQgRG9jdW1lbnQnLCB2YWx1ZTogJ2VkaXRfZG9jdW1lbnQnIH0sXHJcbiAgXVxyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFZhcmlhYmxlcyA9IFtcclxuICAgIHsgbmFtZTogJ1VzZXJfTmFtZScgfSxcclxuICAgIHsgbmFtZTogJ0VtYWlsX0lkJyB9LFxyXG4gICAgeyBuYW1lOiAnUmVmZXJyYWxfSWQnIH0sXHJcbiAgICB7IG5hbWU6ICdBdHRhY2htZW50X0RldGFpbHMnIH0sXHJcbiAgXVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9uSW5wdXQoZXZlbnQ6IGFueSwgZmllbGR0eXBlOiBhbnksIGxhYmVsOiBhbnksIHJlcXVpcmVkOiBib29sZWFuKSB7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGlvbkNvbmZpZyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3VzZXJuYW1lJyxcclxuICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICByZWdleDogL15bYS16QS1aw4Atw5bDmC3DtsO4LcO/XVthLXpBLVrDgC3DlsOYLcO2w7gtw78nIC1dKiQvLFxyXG4gICAgICAgICAgICAgIGVycm9ybWVzc2FnZTogJ0FsbG93ZWQgaW5wdXQgLSBBbHBoYWJldGljLCBhY2NlbnRlZCBsZXR0ZXJzLCBhcG9zdHJvcGhlLCBhbmQgaHlwaGVucy4nLFxyXG4gICAgICAgICAgICAgIGVycm9ybWVzc2FnZTI6ICdGaXJzdCBjaGFyYWN0ZXIgc2hvdWxkIGJlIEFscGhhYmV0aWMgb3IgYWNjZW50ZWQgbGV0dGVycy4nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGVuZ3RoOiB7IG1heGxlbmd0aDogJzEwMCcsIGVycm9ybWVzc2FnZTogJ0lucHV0IGxpbWl0IC0gMTAwIGNoYXJhY3RlcnMuJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICBsZW5ndGg6IHsgbWF4bGVuZ3RoOiAnNTAwJywgZXJyb3JtZXNzYWdlOiAnSW5wdXQgbGltaXQgLSA1MDAgY2hhcmFjdGVycy4nIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ25hbWUnLFxyXG4gICAgICAgICAgcGF0dGVybjogeyByZWdleDogL15bYS16QS1aMC05LV8gXSskLywgZXJyb3JtZXNzYWdlOiAnQWxsb3dlZCBpbnB1dCAtIEFscGhhIG51bWVyaWMsIGh5cGhlbiwgdW5kZXJzY29yZSBhbmQgc3BhY2UuJyB9LFxyXG4gICAgICAgICAgbGVuZ3RoOiB7IG1heGxlbmd0aDogJzEwMCcsIGVycm9ybWVzc2FnZTogJ0lucHV0IGxpbWl0IC0gMTAwIGNoYXJhY3RlcnMuJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICAgICAgICBwYXR0ZXJuOiB7IHJlZ2V4OiAvXlthLXpBLVowLTlfXSsoPzpbLitdW2EtekEtWjAtOV9dKykqQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC8sIGVycm9ybWVzc2FnZTogJ1ZhbGlkIEVtYWlsIElEIGlzIFJlcXVpcmVkJyB9LFxyXG4gICAgICAgICAgbGVuZ3RoOiB7IG1heGxlbmd0aDogJzIwMCcsIGVycm9ybWVzc2FnZTogJ0lucHV0IGxpbWl0IC0gMjAwIGNoYXJhY3RlcnMuJyB9XHJcbiAgICAgIH1cclxuICBdO1xyXG5cclxuICAgIGNvbnN0IGNvbmZpZyA9IHZhbGlkYXRpb25Db25maWcuZmluZChpdGVtID0+IGl0ZW0udHlwZSA9PT0gZmllbGR0eXBlKTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUudHJpbSgpO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG5cclxuICAgICAgaWYgKGNvbmZpZykge1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLnBhdHRlcm4pIHtcclxuICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKGNvbmZpZy5wYXR0ZXJuLnJlZ2V4KTtcclxuXHJcbiAgICAgICAgICBpZiAoZmllbGR0eXBlID09ICd1c2VybmFtZScpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXJWYWxpZCA9IC9eW2EtekEtWsOALcOWw5gtw7bDuC3Dv10vLnRlc3QodmFsdWUuY2hhckF0KDApKTtcclxuICAgICAgICAgICAgaWYgKCFmaXJzdExldHRlclZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5wYXR0ZXJuLmVycm9ybWVzc2FnZTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBwYXR0ZXJuVmFsaWQgPSBwYXR0ZXJuLnRlc3QodmFsdWUpO1xyXG4gICAgICAgICAgaWYgKCFwYXR0ZXJuVmFsaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5wYXR0ZXJuLmVycm9ybWVzc2FnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1heExlbmd0aCA9IHBhcnNlSW50KGNvbmZpZy5sZW5ndGgubWF4bGVuZ3RoLDEwKTtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYCR7bGFiZWx9ICR7Y29uZmlnLmxlbmd0aC5lcnJvcm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICByZXR1cm4gYCR7bGFiZWx9IGlzIFJlcXVpcmVkYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogTm8gZXJyb3IgKi9cclxuICAgIHJldHVybiBudWxsOyBcclxuICB9XHJcbn1cclxuIl19