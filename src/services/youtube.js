
const APIKEY = "AIzaSyAesOg12ezdYdHRlHLm0b1c9lwOR8RjzNI"
const chanelId = "UC9WH00GC7oZ9cM5i28Xk39Q"
const apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&channelId=${chanelId}&key=${APIKEY}&order=date`


const fromApiResponseToVideo = apiResponse => {
        try{
                const {items = []} = apiResponse.items
                if(Array.isArray(items)){
                    const video = items[0].id.videoId
                    return video
                }
            return []
        }catch( error ){
            return("A95lxItEi_8")
        }
        
}


export default function getVideos(){

    return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToVideo)
    .catch(
        console.log("error")
    )
}