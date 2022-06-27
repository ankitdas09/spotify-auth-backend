const topArtistsDataCleanup = (full_data) => {
    const allowed_data = ['href', 'id', 'images', 'name',]
    const send_data = []
    for (let i = 0; i < full_data.length; i++) {
        const data_object = {}
        allowed_data.map(key => {

            data_object[key] = full_data[i][key]

        })
        send_data[i] = data_object
    }
    return send_data
}

const topTracksDataCleanup = (full_data) => {
    const allowed_data = ['external_urls', 'href', 'id', 'name',]
    const send_data = []
    for (let i = 0; i < full_data.length; i++) {
        const data_object = {}
        data_object['images'] = full_data[i]['album']['images']
        allowed_data.map(key => {
            data_object[key] = full_data[i][key]
        })
        send_data[i] = data_object
    }
    return send_data
}

module.exports = { topArtistsDataCleanup, topTracksDataCleanup }