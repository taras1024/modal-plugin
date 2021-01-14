$.confirm = function (options) {
    return new Promise((resolve,reject) => {
        const modal = $.modal({
            title: options.title,
            content: options.content,
            width: '400px',
            closable: true,
            onClose() {
                modal.destroy()
            },
            footerButtons: [
                {text: 'Cancel', type: 'primary', handler() {
                    modal.close()
                    reject()
                }},
                {text: 'Delete', type: 'danger', handler() {
                    modal.close()
                    resolve()
                }}
            ]
        })
        setTimeout( () => modal.open(), 100)

    })
}