i = 0 
function discord() {
    navigator.clipboard.writeText(`Dropheart`)
    tooltip = document.getElementById("discord")
    switch (i) {
        case 0: tooltip.dataset.tip = "Copied!"; break;
        case 1: tooltip.dataset.tip = "You already copied..."; break;
        case 2: tooltip.dataset.tip = "Three times? Really?"; break;
        case 3: tooltip.dataset.tip = "It's 'Dropheart', not that hard."; break;
        case 4: tooltip.dataset.tip = "Please stop clicking me."; break;
        case 5: tooltip.dataset.tip = "Or don't. You seem to have a lot of free time."; break;
        case 6: tooltip.dataset.tip = "What do you want, my phone number?"; break;
        case 7: tooltip.dataset.tip = "You're not getting any more information."; break;
        case 8: tooltip.dataset.tip = "Okay, fine, you got me, click me one more time."; break;
        case 9: tooltip.dataset.tip = "I WAS KIDDING. :<"; break;
        case 10: tooltip.dataset.tip = ":<"; break;
    }
    i++
}