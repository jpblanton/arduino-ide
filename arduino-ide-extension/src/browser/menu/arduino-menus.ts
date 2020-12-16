import { isOSX } from '@theia/core/lib/common/os';
import { CommonMenus } from '@theia/core/lib/browser/common-frontend-contribution';
import { MAIN_MENU_BAR } from '@theia/core/lib/common/menu';

export namespace ArduinoMenus {

    // Main menu
    // -- File
    export const FILE__SKETCH_GROUP = [...CommonMenus.FILE, '0_sketch'];
    export const FILE__PRINT_GROUP = [...CommonMenus.FILE, '1_print'];
    // XXX: on macOS, the settings group is not under `File`
    export const FILE__SETTINGS_GROUP = [...(isOSX ? MAIN_MENU_BAR : CommonMenus.FILE), '2_settings'];
    export const FILE__QUIT_GROUP = [...CommonMenus.FILE, '3_quit'];

    // -- File / Sketchbook
    export const FILE__SKETCHBOOK_SUBMENU = [...FILE__SKETCH_GROUP, '0_sketchbook'];

    // -- File / Examples
    export const FILE__EXAMPLES_SUBMENU = [...FILE__SKETCH_GROUP, '1_examples'];
    export const EXAMPLES__BUILT_IN_GROUP = [...FILE__EXAMPLES_SUBMENU, '0_built_ins'];
    export const EXAMPLES__ANY_BOARD_GROUP = [...FILE__EXAMPLES_SUBMENU, '1_any_board'];
    export const EXAMPLES__CURRENT_BOARD_GROUP = [...FILE__EXAMPLES_SUBMENU, '2_current_board'];
    export const EXAMPLES__USER_LIBS_GROUP = [...FILE__EXAMPLES_SUBMENU, '3_user_libs'];

    // -- Edit
    // `Copy`, `Copy to Forum`, `Paste`, etc.
    // Note: `1_undo` is the first group from Theia, we start with `2`
    export const EDIT__TEXT_CONTROL_GROUP = [...CommonMenus.EDIT, '2_text_control'];
    // `Comment/Uncomment`, etc.
    export const EDIT__CODE_CONTROL_GROUP = [...CommonMenus.EDIT, '3_code_control'];
    export const EDIT__FONT_CONTROL_GROUP = [...CommonMenus.EDIT, '4_font_control'];
    export const EDIT__FIND_GROUP = [...CommonMenus.EDIT, '5_find'];

    // -- Sketch
    export const SKETCH = [...MAIN_MENU_BAR, '3_sketch'];
    export const SKETCH__MAIN_GROUP = [...SKETCH, '0_main'];
    export const SKETCH__UTILS_GROUP = [...SKETCH, '1_utils'];

    // -- Tools
    export const TOOLS = [...MAIN_MENU_BAR, '4_tools'];
    // `Auto Format`, `Library Manager...`, `Boards Manager...`
    export const TOOLS__MAIN_GROUP = [...TOOLS, '0_main'];
    // Core settings, such as `Processor` and `Programmers` for the board and `Burn Bootloader`
    export const TOOLS__BOARD_SETTINGS_GROUP = [...TOOLS, '1_board_settings'];

    // -- Help
    // `About` group
    // XXX: on macOS, the about group is not under `Help`
    export const HELP__ABOUT_GROUP = [...(isOSX ? MAIN_MENU_BAR : CommonMenus.HELP), '999_about'];

    // ------------

    // Context menus
    // -- Open
    export const OPEN_SKETCH__CONTEXT = ['arduino-open-sketch--context'];
    export const OPEN_SKETCH__CONTEXT__OPEN_GROUP = [...OPEN_SKETCH__CONTEXT, '0_open'];
    export const OPEN_SKETCH__CONTEXT__RECENT_GROUP = [...OPEN_SKETCH__CONTEXT, '1_recent'];
    export const OPEN_SKETCH__CONTEXT__EXAMPLES_GROUP = [...OPEN_SKETCH__CONTEXT, '2_examples'];

    // -- Sketch control
    export const SKETCH_CONTROL__CONTEXT = ['arduino-sketch-control--context'];
    // `New Tab`, `Rename`, `Delete`
    export const SKETCH_CONTROL__CONTEXT__MAIN_GROUP = [...SKETCH_CONTROL__CONTEXT, '0_main'];
    // `Previous Tab`, `Next Tab`
    export const SKETCH_CONTROL__CONTEXT__NAVIGATION_GROUP = [...SKETCH_CONTROL__CONTEXT, '1_navigation'];
    // Sketch files opened in editors
    export const SKETCH_CONTROL__CONTEXT__RESOURCES_GROUP = [...SKETCH_CONTROL__CONTEXT, '2_resources'];

}
