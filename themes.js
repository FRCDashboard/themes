// Put in major object at top

    ,
    theme: {
        select: document.getElementById('theme-select'),
        link: document.getElementById('theme-link')
    }



// Put in onValueChanged switch statement

        case '/SmartDashboard/theme':
            ui.theme.select.value = value;
            ui.theme.link.href = 'css/' + value + '.css';
            break;



// Put at bottom with other listeners

// When theme selection is made, turn on that theme
ui.theme.select.onchange = function() {
    NetworkTables.setValue('/SmartDashboard/theme', this.value);
};
