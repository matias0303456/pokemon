export const open = id => {
    const dialog = document.getElementById(id)
    dialog.showModal()
}

export const close = id => {
    const dialog = document.getElementById(id)
    dialog.close()
}